export const dynamic = 'force-dynamic'

// POST /api/contatti
// Form di contatto → invio email via Resend a info@grecolatinovivo.it
// Sostituisce contatti.php del vecchio sito (PHP non supportato su Vercel)
import { NextRequest, NextResponse } from 'next/server'
import { sendContactFormEmail } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Nome, email e messaggio sono obbligatori.' }, { status: 400 })
    }

    // Validazione email basilare
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Inserisci un indirizzo email valido.' }, { status: 400 })
    }

    await sendContactFormEmail({
      senderName: name.trim(),
      senderEmail: email.trim(),
      subject: (subject ?? 'Contatto dal sito').trim(),
      message: message.trim(),
    })

    return NextResponse.json({ ok: true, message: 'Messaggio inviato. Ti risponderemo entro 24 ore.' })
  } catch (err) {
    console.error('[/api/contatti]', err)
    return NextResponse.json({ error: 'Errore invio messaggio. Riprova o scrivi direttamente a info@grecolatinovivo.it.' }, { status: 500 })
  }
}
