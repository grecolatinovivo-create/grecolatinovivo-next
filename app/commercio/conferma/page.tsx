'use client'
// Pagina conferma post-pagamento — /commercio/conferma
// Peak-end rule NEURO_SPEC §8.5: questa pagina è il "last impression"
// Gestisce tutti i tipi: corso_live, corso_asincrono, biglietto_evento, tutoraggio, abbonamento
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'

const PORTALE_URL = process.env.NEXT_PUBLIC_PORTALE_URL ?? 'https://portale.grecolatinovivo.it'

const MESSAGES: Record<string, { title: string; body: string; cta: string; ctaHref: string }> = {
  corso_live: {
    title: 'Iscrizione confermata!',
    body: 'Sei iscritto al corso. Trovi i dettagli e il link Zoom nella tua email (controlla anche lo spam).',
    cta: 'Vai alla dashboard',
    ctaHref: `${PORTALE_URL}/dashboard`,
  },
  corso_asincrono: {
    title: 'Accesso al corso attivato!',
    body: 'Il corso è ora accessibile nella tua dashboard. Puoi iniziare subito.',
    cta: 'Inizia il corso',
    ctaHref: `${PORTALE_URL}/dashboard`,
  },
  biglietto_evento: {
    title: 'Biglietto confermato!',
    body: 'Il tuo biglietto PDF è stato inviato via email (controlla anche lo spam). Mostralo all\'ingresso dell\'evento.',
    cta: 'Torna agli eventi',
    ctaHref: '/eventi',
  },
  tutoraggio: {
    title: 'Appuntamento confermato!',
    body: 'Il docente ti contatterà al tuo indirizzo email con il link per il collegamento.',
    cta: 'Torna alla home',
    ctaHref: '/',
  },
  abbonamento: {
    title: 'Benvenuto nel portale!',
    body: 'Il tuo abbonamento è attivo. Accedi al portale per iniziare il tuo percorso.',
    cta: 'Accedi al portale',
    ctaHref: `${PORTALE_URL}/dashboard`,
  },
}

function ConfermaContent() {
  const params = useSearchParams()
  const type = params.get('type') ?? 'abbonamento'
  const msg = MESSAGES[type] ?? MESSAGES.abbonamento

  return (
    <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: '520px' }}>
        {/* Check mark */}
        <div style={{
          width: '72px', height: '72px', borderRadius: '50%',
          background: 'rgba(30,126,52,0.1)', border: '2px solid #1e7e34',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px', fontSize: '2rem'
        }} aria-hidden="true">
          ✓
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '16px' }}>
          {msg.title}
        </h1>
        <p style={{ color: '#6B6B6B', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '36px' }}>
          {msg.body}
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={msg.ctaHref} className="btn btn-primary">
            {msg.cta}
          </a>
          <Link href="/" className="btn btn-secondary">
            Torna alla home
          </Link>
        </div>

        <p style={{ fontSize: '0.825rem', color: '#aaa', marginTop: '32px' }}>
          Per qualsiasi necessità: <a href="mailto:info@grecolatinovivo.it" style={{ color: '#8B1A1A' }}>info@grecolatinovivo.it</a>
        </p>
      </div>
    </section>
  )
}

export default function ConfermaPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
      <ConfermaContent />
    </Suspense>
  )
}
