// Stub dinamico corso asincrono — /corsi/corsi-asincroni/[slug]
import type { Metadata } from 'next'
import Link from 'next/link'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `${slug.replace(/-/g, ' ')} | Greco Latino Vivo`,
    description:
      'Dettaglio corso asincrono. I contenuti del corso saranno disponibili a breve sul portale.',
  }
}

export default async function CorsoAsincroniPage({ params }: Props) {
  const { slug } = await params

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
            className="eyebrow"
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
            Corsi asincroni
          </p>
          <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '20px',
              lineHeight: 1.25,
            }}
          >
            Contenuto in caricamento
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '0.95rem',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
            }}
          >
            Riferimento: {slug}
          </p>
        </div>
      </section>

      {/* CONTENUTO PLACEHOLDER */}
      <section className="section" style={{ background: '#f8f7f4' }}>
        <div
          className="container-narrow"
          style={{ textAlign: 'center', padding: '80px 24px' }}
        >
          <div
            style={{
              background: '#fff',
              border: '1px solid #e8e8e8',
              borderRadius: '8px',
              padding: '48px 36px',
              borderTop: '3px solid #C9A84C',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            <p
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1.1rem',
                color: '#002147',
                fontWeight: 700,
                marginBottom: '12px',
              }}
            >
              I contenuti di questo corso saranno disponibili a breve.
            </p>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#555',
                lineHeight: 1.65,
                marginBottom: '24px',
              }}
            >
              Il catalogo dei corsi asincroni e in aggiornamento continuo. I
              contenuti completi — lezioni video, esercizi e materiali — sono
              accessibili dal portale dopo l'iscrizione.
            </p>
            <div
              style={{
                background: '#f8f7f4',
                border: '1px solid #e8e8e8',
                borderRadius: '6px',
                padding: '16px 20px',
                marginBottom: '28px',
                textAlign: 'left',
              }}
            >
              <p
                style={{
                  fontSize: '0.85rem',
                  color: '#555',
                  lineHeight: 1.6,
                }}
              >
                Per accedere ai contenuti del corso, visita il portale
                GrecoLatinoVivo e cerca il titolo nella sezione corsi asincroni.
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link
                href="/corsi/corsi-asincroni"
                className="btn btn-primary"
                style={{
                  background: '#002147',
                  color: '#fff',
                  fontFamily: 'Georgia, serif',
                  fontWeight: 700,
                  padding: '12px 28px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                }}
              >
                Torna al catalogo
              </Link>
              <a
                href="https://www.portale.grecolatinovivo.it"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  background: 'transparent',
                  color: '#002147',
                  fontFamily: 'Georgia, serif',
                  fontWeight: 700,
                  padding: '12px 28px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  border: '1px solid #002147',
                }}
              >
                Vai al portale
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
