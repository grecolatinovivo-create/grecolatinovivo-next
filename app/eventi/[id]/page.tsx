import type { Metadata } from 'next'
import Link from 'next/link'

type Params = { id: string }

// Generazione statica: nessun evento ancora noto, build senza pre-render
export async function generateStaticParams(): Promise<Params[]> {
  return []
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { id } = await params
  return {
    title: `Evento — GrecoLatinoVivo`,
    description: `Dettagli sull'evento ${id}. GrecoLatinoVivo organizza seminari, convegni e Bidua Latinitatis dedicati alle lingue classiche.`,
    alternates: { canonical: `https://grecolatinovivo.it/eventi/${id}` },
  }
}

export default async function EventoDetailPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { id } = await params

  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: '#002147',
          padding: '80px 24px 64px',
          textAlign: 'center',
        }}
      >
        <div className="container-narrow">
          <p
            style={{
              color: '#C9A84C',
              fontFamily: 'Georgia, serif',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              marginBottom: '14px',
            }}
          >
            Dettaglio evento
          </p>
          <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '18px',
              lineHeight: 1.2,
            }}
          >
            Dati in caricamento
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontFamily: 'Georgia, serif',
              fontSize: '0.85rem',
              letterSpacing: '0.06em',
            }}
          >
            ID: {id}
          </p>
        </div>
      </section>

      {/* PLACEHOLDER ELEGANTE */}
      <section
        style={{
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div
          className="container-narrow"
          style={{
            background: '#fff',
            border: '1px solid #DDE3ED',
            borderTop: '4px solid #C9A84C',
            borderRadius: '4px',
            padding: '56px 40px',
            maxWidth: '640px',
            margin: '0 auto',
          }}
        >
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.13em',
              color: '#C9A84C',
              marginBottom: '16px',
            }}
          >
            Contenuto in preparazione
          </p>
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#002147',
              marginBottom: '20px',
            }}
          >
            Dettaglio evento — dati in caricamento
          </h2>
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '0.95rem',
              color: '#555',
              lineHeight: 1.75,
              marginBottom: '32px',
              maxWidth: '480px',
              margin: '0 auto 32px',
            }}
          >
            Le informazioni complete su questo evento saranno disponibili a breve.
            Nel frattempo puoi consultare tutti gli eventi in programma o contattarci
            direttamente per ulteriori dettagli.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '14px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/eventi"
              style={{
                display: 'inline-block',
                background: '#002147',
                color: '#fff',
                fontFamily: 'Georgia, serif',
                fontSize: '0.9rem',
                fontWeight: 700,
                padding: '11px 24px',
                borderRadius: '3px',
                textDecoration: 'none',
              }}
            >
              Tutti gli eventi
            </Link>
            <Link
              href="/marketing/contatti"
              style={{
                display: 'inline-block',
                border: '2px solid #002147',
                color: '#002147',
                fontFamily: 'Georgia, serif',
                fontSize: '0.9rem',
                fontWeight: 600,
                padding: '9px 22px',
                borderRadius: '3px',
                textDecoration: 'none',
              }}
            >
              Contattaci
            </Link>
          </div>
        </div>
      </section>

      {/* BANDA FOUNDATION */}
      <section
        style={{
          background: '#F5F0E8',
          padding: '40px 24px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '0.82rem',
            color: '#002147',
            fontWeight: 600,
            letterSpacing: '0.04em',
          }}
        >
          GrecoLatinoVivo · Fondato nel 2015 · Accreditato MIM
        </p>
      </section>
    </>
  )
}
