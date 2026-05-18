// Minicorsi — /corsi/minicorsi
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corsi Brevi Tematici | Greco Latino Vivo',
  description:
    'Moduli tematici brevi da 6 a 12 ore su argomenti specifici: grammatica, lettura metrica, testi scelti. Approfondisci una competenza in poco tempo.',
}

const MINICORSI = [
  {
    title: 'Introduzione alla metrica latina',
    durata: '6h',
    livello: 'B1',
    descrizione:
      'Esametro, distico elegiaco e principi di prosodia latina attraverso testi di Virgilio e Ovidio.',
  },
  {
    title: 'Lettura dei dialoghi platonici',
    durata: '8h',
    livello: 'B2',
    descrizione:
      'Analisi linguistica e filosofica di passi scelti da Fedone, Simposio e Repubblica in lingua originale.',
  },
  {
    title: 'Il lessico medico greco',
    durata: '6h',
    livello: 'A2',
    descrizione:
      'Radici greche nella terminologia medica moderna. Lettura di passi ippocratici e galenici.',
  },
  {
    title: 'Papiri e papirologia',
    durata: '8h',
    livello: 'B1',
    descrizione:
      'Introduzione alla lettura dei papiri greci: paleografia, contesto storico e testi letterari e documentari.',
  },
  {
    title: 'Epigrafia latina',
    durata: '6h',
    livello: 'A2',
    descrizione:
      'Lettura e interpretazione di iscrizioni latine: abbreviazioni, formule epigrafiche, contesti monumentali.',
  },
  {
    title: 'Testi scelti da Virgilio',
    durata: '8h',
    livello: 'B1',
    descrizione:
      'Lettura guidata di passi dalle Bucoliche, Georgiche ed Eneide con attenzione stilistica e metrica.',
  },
]

export default function MinicorsiPage() {
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
            6–12 ore di approfondimento
          </p>
          <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '20px',
              lineHeight: 1.2,
            }}
          >
            Corsi Brevi Tematici
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.72)',
              fontSize: '1.05rem',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Moduli di approfondimento su un singolo argomento: grammatica,
            lettura metrica, autori o testi specifici. Durata contenuta,
            obiettivo preciso, docente universitario.
          </p>
        </div>
      </section>

      {/* STRIP CARATTERISTICHE */}
      <section style={{ background: '#C9A84C', padding: '14px 24px' }}>
        <div
          className="container"
          style={{
            display: 'flex',
            gap: '32px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {[
            'Durata 6–12 ore',
            'Massimo 15 studenti',
            'Docenti universitari',
            'Accreditato MIM',
          ].map((f) => (
            <span
              key={f}
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '0.875rem',
                color: '#002147',
                fontWeight: 700,
              }}
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* DESCRIZIONE */}
      <section className="section" style={{ background: '#f8f7f4' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '1.1rem',
              color: '#002147',
              lineHeight: 1.8,
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            I minicorsi nascono per chi vuole approfondire un aspetto
            specifico delle lingue classiche senza impegnarsi in un percorso
            completo. Ogni modulo — da 6 a 12 ore — affronta un tema preciso
            con un docente specializzato, in un gruppo di massimo 15 studenti.
            I prerequisiti indicati garantiscono omogeneità al gruppo e
            massima efficacia didattica.
          </p>
        </div>
      </section>

      {/* GRIGLIA MINICORSI */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '28px',
            }}
          >
            {MINICORSI.map((corso) => (
              <div
                key={corso.title}
                className="card"
                style={{
                  background: '#fff',
                  border: '1px solid #e8e8e8',
                  borderRadius: '8px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: '3px solid #C9A84C',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    marginBottom: '14px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      background: '#002147',
                      color: '#fff',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: '4px',
                      fontFamily: 'Georgia, serif',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {corso.durata}
                  </span>
                  <span
                    style={{
                      background: '#f8f7f4',
                      color: '#555',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      padding: '3px 10px',
                      borderRadius: '4px',
                      fontFamily: 'Georgia, serif',
                    }}
                  >
                    Livello {corso.livello}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#002147',
                    marginBottom: '10px',
                    lineHeight: 1.35,
                  }}
                >
                  {corso.title}
                </h2>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#555',
                    lineHeight: 1.65,
                    flex: 1,
                    marginBottom: '20px',
                  }}
                >
                  {corso.descrizione}
                </p>

                <a
                  href="https://www.portale.grecolatinovivo.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                  style={{
                    display: 'inline-block',
                    color: '#C9A84C',
                    fontFamily: 'Georgia, serif',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    borderBottom: '1px solid #C9A84C',
                    paddingBottom: '1px',
                  }}
                >
                  Iscriviti sul portale
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section
        className="cta-band"
        style={{
          background: '#002147',
          padding: '64px 24px',
          textAlign: 'center',
        }}
      >
        <div className="container-narrow">
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '14px',
            }}
          >
            Vuoi esplorare tutti i corsi disponibili?
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '32px',
              fontSize: '1rem',
            }}
          >
            Dai minicorsi ai percorsi completi A1–C2: trova il corso adatto
            al tuo livello.
          </p>
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
                background: '#C9A84C',
                color: '#002147',
                fontFamily: 'Georgia, serif',
                fontWeight: 700,
                padding: '14px 32px',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '0.95rem',
              }}
            >
              Scopri tutti i minicorsi
            </Link>
            <a
              href="https://www.portale.grecolatinovivo.it"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{
                background: 'transparent',
                color: '#fff',
                fontFamily: 'Georgia, serif',
                fontWeight: 700,
                padding: '14px 32px',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '0.95rem',
                border: '1px solid rgba(255,255,255,0.4)',
              }}
            >
              Accedi al portale
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
