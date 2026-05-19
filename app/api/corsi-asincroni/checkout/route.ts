// POST /api/corsi-asincroni/checkout
// Guest checkout per corsi asincroni acquistabili singolarmente.
// NON richiede login — Stripe Checkout raccoglie l'email del compratore.
// Il prezzo viene verificato server-side dal catalogo (lib/corsi-asincroni-catalog).
// Il client manda SOLO lo slug — nessuna manipolazione di prezzo possibile.
//
// Env richieste:
//   STRIPE_SECRET_KEY          — chiave segreta Stripe (live o test)
//   NEXT_PUBLIC_SITE_URL       — es. https://grecolatinovivo.it

import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getCorsoByCatalogSlug } from '@/lib/corsi-asincroni-catalog'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
})

export async function POST(req: NextRequest) {
  try {
    const { slug } = (await req.json()) as { slug?: string }

    if (!slug || typeof slug !== 'string') {
      return NextResponse.json({ error: 'Parametro slug mancante.' }, { status: 400 })
    }

    // Verifica server-side: il corso esiste e il prezzo è quello ufficiale
    const corso = getCorsoByCatalogSlug(slug)
    if (!corso) {
      return NextResponse.json({ error: 'Corso non trovato.' }, { status: 404 })
    }

    const origin =
      req.headers.get('origin') ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://grecolatinovivo.it'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: corso.title,
              description: `${corso.lang} · Livello ${corso.level} · Accesso permanente · GrecoLatinoVivo`,
              metadata: { slug: corso.slug, idc: String(corso.idc) },
            },
            // Prezzo certificato lato server — non manipolabile dal client
            unit_amount: corso.priceEur,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      locale: 'it',
      // Raccoglie l'email anche per acquisti senza account
      billing_address_collection: 'auto',
      success_url: `${origin}/commercio/conferma?type=corso_asincrono_guest&session_id={CHECKOUT_SESSION_ID}&slug=${encodeURIComponent(corso.slug)}`,
      cancel_url: `${origin}/corsi/corsi-asincroni/${encodeURIComponent(corso.slug)}?cancelled=true`,
      metadata: {
        type: 'corso_asincrono_guest',
        slug: corso.slug,
        idc: String(corso.idc),
        lang: corso.lang,
        level: corso.level,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (err: unknown) {
    console.error('[corsi-asincroni/checkout] Errore:', err)
    const message = err instanceof Error ? err.message : 'Errore interno del server'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
