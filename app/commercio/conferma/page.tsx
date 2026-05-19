'use client'
// Pagina conferma post-pagamento — /commercio/conferma
// Gestisce il caso abbonamento come primario; altri tipi come fallback
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense as ReactSuspense } from 'react'

const PORTALE_URL = 'https://portale.grecolatinovivo.it'

const MESSAGES: Record<string, { title: string; body: string; cta: string; ctaHref: string; ctaExternal: boolean }> = {
  abbonamento: {
    title: 'Abbonamento attivato con successo',
    body: 'Il tuo abbonamento è ora attivo. Puoi accedere al tuo Portale studenti e iniziare il percorso con le lingue classiche.',
    cta: 'Accedi al Portale studenti',
    ctaHref: `${PORTALE_URL}/dashboard`,
    ctaExternal: true,
  },
  corso_live: {
    title: 'Iscrizione confermata',
    body: 'Sei iscritto al corso. Trovi i dettagli e il link Zoom nella tua email (controlla anche lo spam).',
    cta: 'Vai alla dashboard',
    ctaHref: `${PORTALE_URL}/dashboard`,
    ctaExternal: true,
  },
  corso_asincrono: {
    title: 'Acquisto completato',
    body: 'Riceverai una email con le istruzioni per accedere al corso. Controlla anche la cartella spam.',
    cta: 'Torna ai corsi',
    ctaHref: '/corsi/corsi-asincroni',
    ctaExternal: false,
  },
  corso_asincrono_guest: {
    title: 'Acquisto completato',
    body: 'Riceverai a breve una email con le istruzioni per accedere al corso. Controlla anche la cartella spam se non arriva entro pochi minuti.',
    cta: 'Torna ai corsi',
    ctaHref: '/corsi/corsi-asincroni',
    ctaExternal: false,
  },
  biglietto_evento: {
    title: 'Biglietto confermato',
    body: 'Il tuo biglietto PDF è stato inviato via email (controlla anche lo spam). Mostralo all\'ingresso dell\'evento.',
    cta: 'Torna agli eventi',
    ctaHref: '/eventi',
    ctaExternal: false,
  },
  tutoraggio: {
    title: 'Appuntamento confermato',
    body: 'Il docente ti contatterà al tuo indirizzo email con il link per il collegamento.',
    cta: 'Torna alla home',
    ctaHref: '/',
    ctaExternal: false,
  },
}

function ConfermaContent() {
  const params = useSearchParams()
  const type = params.get('type') ?? 'abbonamento'
  const msg = MESSAGES[type] ?? MESSAGES.abbonamento
  const isAbbonamento = type === 'abbonamento' || !(type in MESSAGES)

  return (
    <section
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        background: '#fff',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          maxWidth: '560px',
          width: '100%',
        }}
      >
        {/* Segno di spunta Oxford */}
        <div
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            background: '#F5F0E8',
            border: '2px solid #C9A84C',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 28px',
            fontSize: '1.8rem',
            color: '#002147',
            fontWeight: 700,
            fontFamily: 'Georgia, serif',
          }}
          aria-hidden="true"
        >
          &#10003;
        </div>

        {/* Eyebrow */}
        <p
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: '#C9A84C',
            marginBottom: '12px',
          }}
        >
          {isAbbonamento ? 'Abbonamento attivato' : 'Pagamento confermato'}
        </p>

        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 700,
            color: '#002147',
            marginBottom: '20px',
            lineHeight: 1.2,
          }}
        >
          {msg.title}
        </h1>

        <p
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1rem',
            color: '#555',
            lineHeight: 1.75,
            marginBottom: '16px',
          }}
        >
          {msg.body}
        </p>

        {isAbbonamento && (
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '0.95rem',
              color: '#002147',
              fontWeight: 600,
              marginBottom: '36px',
            }}
          >
            Puoi ora accedere al tuo Portale studenti.
          </p>
        )}

        {/* Pulsanti */}
        <div
          style={{
            display: 'flex',
            gap: '14px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '36px',
          }}
        >
          {msg.ctaExternal ? (
            <a
              href={msg.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#002147',
                color: '#fff',
                fontFamily: 'Georgia, serif',
                fontSize: '0.95rem',
                fontWeight: 700,
                padding: '13px 28px',
                borderRadius: '3px',
                textDecoration: 'none',
              }}
            >
              {msg.cta}
            </a>
          ) : (
            <Link
              href={msg.ctaHref}
              style={{
                display: 'inline-block',
                background: '#002147',
                color: '#fff',
                fontFamily: 'Georgia, serif',
                fontSize: '0.95rem',
                fontWeight: 700,
                padding: '13px 28px',
                borderRadius: '3px',
                textDecoration: 'none',
              }}
            >
              {msg.cta}
            </Link>
          )}

          <Link
            href="/"
            style={{
              display: 'inline-block',
              border: '2px solid #002147',
              color: '#002147',
              fontFamily: 'Georgia, serif',
              fontSize: '0.9rem',
              fontWeight: 600,
              padding: '11px 24px',
              borderRadius: '3px',
              textDecoration: 'none',
            }}
          >
            Torna alla home
          </Link>
        </div>

        {/* Link portale secondario per abbonamento */}
        {isAbbonamento && (
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '0.875rem',
              color: '#777',
              marginBottom: '12px',
            }}
          >
            Portale:{' '}
            <a
              href={PORTALE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#002147',
                fontWeight: 600,
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              portale.grecolatinovivo.it
            </a>
          </p>
        )}

        <p
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '0.82rem',
            color: '#aaa',
          }}
        >
          Per assistenza:{' '}
          <a
            href="mailto:info@grecolatinovivo.it"
            style={{ color: '#002147', textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            info@grecolatinovivo.it
          </a>
        </p>
      </div>
    </section>
  )
}

export default function ConfermaPage() {
  return (
    <ReactSuspense fallback={<div style={{ minHeight: '70vh' }} />}>
      <ConfermaContent />
    </ReactSuspense>
  )
}
