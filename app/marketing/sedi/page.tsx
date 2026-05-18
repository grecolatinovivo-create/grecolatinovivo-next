// Sedi — /marketing/sedi
// Design Oxford/Cambridge: navy #002147, gold #C9A84C
// 5 sedi: Firenze (principale), Milano, Torino, Parma, Pordenone
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Le nostre sedi — GrecoLatinoVivo | Firenze, Milano, Torino, Parma, Pordenone',
  description: 'Il Centro Nazionale di Studi Classici GrecoLatinoVivo è presente con sedi fisiche a Firenze, Milano, Torino, Parma e Pordenone. Corsi online disponibili da tutto il mondo.',
  alternates: { canonical: 'https://grecolatinovivo.it/sedi' },
}

const sedi = [
  {
    citta: 'Firenze',
    tag: 'Sede principale',
    dal: '2015',
    indirizzo: '[DA INSERIRE]',
    orari: '[DA INSERIRE]',
    principale: true,
  },
  {
    citta: 'Milano',
    tag: null,
    dal: '2019',
    indirizzo: '[DA INSERIRE]',
    orari: '[DA INSERIRE]',
    principale: false,
  },
  {
    citta: 'Torino',
    tag: null,
    dal: '2019',
    indirizzo: '[DA INSERIRE]',
    orari: '[DA INSERIRE]',
    principale: false,
  },
  {
    citta: 'Parma',
    tag: 'Nuova apertura',
    dal: '2025',
    indirizzo: '[DA INSERIRE]',
    orari: '[DA INSERIRE]',
    principale: false,
  },
  {
    citta: 'Pordenone',
    tag: 'Nuova apertura',
    dal: '2025',
    indirizzo: '[DA INSERIRE]',
    orari: '[DA INSERIRE]',
    principale: false,
  },
]

export default function SediPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: 'linear-gradient(160deg, #002147 0%, #003070 100%)',
          padding: '80px 24px 64px',
          textAlign: 'center',
        }}
      >
        <div className="container-narrow">
          <p
            className="eyebrow"
            style={{ color: '#C9A84C', marginBottom: '16px' }}
          >
            Presente in Italia dal 2015
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '20px',
            }}
          >
            Le nostre sedi
          </h1>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.8,
              maxWidth: '540px',
              margin: '0 auto',
            }}
          >
            Cinque sedi fisiche in Italia per i corsi in presenza.
            Tutti i corsi sono disponibili anche online, per studenti
            da qualsiasi parte del mondo.
          </p>
        </div>
      </section>

      {/* STRIP NUMERI */}
      <div
        style={{
          background: '#f8f7f4',
          borderTop: '1px solid #e8e8e8',
          borderBottom: '1px solid #e8e8e8',
        }}
      >
        <div className="numeri-grid">
          <div className="numero-item">
            <span className="stat-value">5</span>
            <span className="stat-label">sedi in Italia</span>
          </div>
          <div className="numero-item">
            <span className="stat-value">2015</span>
            <span className="stat-label">anno di fondazione</span>
          </div>
          <div className="numero-item">
            <span className="stat-value">Online</span>
            <span className="stat-label">corsi da tutto il mondo</span>
          </div>
          <div className="numero-item">
            <span className="stat-value">15</span>
            <span className="stat-label">studenti max per classe</span>
          </div>
        </div>
      </div>

      {/* CARD SEDI */}
      <section className="section">
        <div className="container">
          <h2
            className="section-title"
            style={{ marginBottom: '40px', textAlign: 'center' }}
          >
            <span className="section-title__underline">Sedi in presenza</span>
          </h2>

          {/* Riga 1: Firenze da sola — evidenziata come sede principale */}
          <div
            style={{ marginBottom: '28px' }}
          >
            {sedi.filter((s) => s.principale).map((s) => (
              <div
                key={s.citta}
                className="card reveal"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '32px',
                  alignItems: 'start',
                  background: '#002147',
                  borderTop: '3px solid #C9A84C',
                  borderLeft: '1px solid #001535',
                  borderRight: '1px solid #001535',
                  borderBottom: '1px solid #001535',
                  padding: '32px',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: '#C9A84C',
                      marginBottom: '8px',
                    }}
                  >
                    {s.tag}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.8rem',
                      fontWeight: 400,
                      color: '#ffffff',
                      lineHeight: 1.1,
                      marginBottom: '8px',
                    }}
                  >
                    {s.citta}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.78rem',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    Dal {s.dal}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'rgba(255,255,255,0.4)',
                      marginBottom: '6px',
                    }}
                  >
                    Indirizzo
                  </p>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,0.75)',
                      lineHeight: 1.6,
                    }}
                  >
                    {s.indirizzo}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'rgba(255,255,255,0.4)',
                      marginBottom: '6px',
                    }}
                  >
                    Orari di segreteria
                  </p>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,0.75)',
                      lineHeight: 1.6,
                    }}
                  >
                    {s.orari}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Riga 2: le altre 4 sedi */}
          <div className="grid-4">
            {sedi.filter((s) => !s.principale).map((s) => (
              <div key={s.citta} className="card reveal">
                {s.tag && (
                  <div
                    style={{
                      display: 'inline-block',
                      background: '#002147',
                      color: '#C9A84C',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      padding: '2px 9px',
                      marginBottom: '12px',
                    }}
                  >
                    {s.tag}
                  </div>
                )}
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.4rem',
                    fontWeight: 400,
                    color: '#002147',
                    marginBottom: '4px',
                  }}
                >
                  {s.citta}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    color: '#777777',
                    marginBottom: '16px',
                  }}
                >
                  Dal {s.dal}
                </p>
                <div style={{ borderTop: '1px solid #e8e8e8', paddingTop: '16px' }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: '#002147',
                      marginBottom: '4px',
                    }}
                  >
                    Indirizzo
                  </p>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: '#555555',
                      lineHeight: 1.6,
                      marginBottom: '12px',
                    }}
                  >
                    {s.indirizzo}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: '#002147',
                      marginBottom: '4px',
                    }}
                  >
                    Orari di segreteria
                  </p>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: '#555555',
                      lineHeight: 1.6,
                    }}
                  >
                    {s.orari}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* CORSI ONLINE */}
      <section className="section section--alt">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'center',
            }}
          >
            <div>
              <p
                className="eyebrow"
                style={{ color: '#777777', marginBottom: '12px' }}
              >
                Da qualsiasi parte del mondo
              </p>
              <h2
                className="section-title"
                style={{ color: '#002147', marginBottom: '20px' }}
              >
                <span className="section-title__underline">Corsi online</span>
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#1a1a1a',
                  lineHeight: 1.85,
                  marginBottom: '20px',
                }}
              >
                Tutti i corsi GrecoLatinoVivo sono disponibili in modalit&agrave; online
                sincrona. Le lezioni si tengono in videoconferenza con gli stessi
                docenti delle sedi fisiche, lo stesso metodo, le stesse dimensioni
                delle classi.
              </p>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#1a1a1a',
                  lineHeight: 1.85,
                  marginBottom: '28px',
                }}
              >
                Studenti dall&apos;Italia, dall&apos;Europa e da altri continenti
                seguono i corsi online con risultati equivalenti a quelli in presenza.
                La piattaforma dedicata &egrave; accessibile all&apos;indirizzo{' '}
                <a
                  href="https://www.portale.grecolatinovivo.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#002147', borderBottom: '1px solid #C9A84C', paddingBottom: '1px' }}
                >
                  portale.grecolatinovivo.it
                </a>
                .
              </p>
              <Link href="/corsi/corsi-live" className="btn btn-secondary">
                Vedi i corsi online
              </Link>
            </div>

            {/* Placeholder mappa testuale */}
            <div
              style={{
                background: '#f8f7f4',
                borderTop: '3px solid #002147',
                borderLeft: '1px solid #e8e8e8',
                borderRight: '1px solid #e8e8e8',
                borderBottom: '1px solid #e8e8e8',
                padding: '32px',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#777777',
                  marginBottom: '20px',
                }}
              >
                Presenza territoriale
              </p>
              {[
                { citta: 'Firenze', nota: 'sede principale — dal 2015' },
                { citta: 'Milano', nota: 'dal 2019' },
                { citta: 'Torino', nota: 'dal 2019' },
                { citta: 'Parma', nota: 'dal 2025' },
                { citta: 'Pordenone', nota: 'dal 2025' },
              ].map((item) => (
                <div
                  key={item.citta}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 0',
                    borderBottom: '1px solid #e8e8e8',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1rem',
                      color: '#002147',
                      fontWeight: 400,
                    }}
                  >
                    {item.citta}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.78rem',
                      color: '#777777',
                    }}
                  >
                    {item.nota}
                  </span>
                </div>
              ))}
              <p
                style={{
                  marginTop: '16px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  color: '#777777',
                  fontStyle: 'italic',
                }}
              >
                + corsi online accessibili a livello internazionale
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <div className="container-narrow">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
            Trova la sede pi&ugrave; vicina a te
          </h2>
          <p>
            Contattaci per informazioni sui corsi in presenza
            nella tua citt&agrave; o per iniziare online.
          </p>
          <Link href="/marketing/contatti" className="btn btn-ghost">
            Contattaci
          </Link>
        </div>
      </div>
    </>
  )
}
