// Lezioni individuali — /corsi/lezioni-individuali
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tutoraggio Individuale | Greco Latino Vivo',
  description:
    'Sessioni di tutoraggio 1:1 con docenti universitari specializzati in Latino, Greco antico e lingue classiche. Flessibilità oraria totale, obiettivi personalizzati.',
}

const TIPOLOGIE = [
  {
    titolo: 'Supporto alla tesi',
    destinatari: 'Laureandi e dottorandi',
    descrizione:
      'Per chi deve affrontare testi in lingua originale per la tesi di laurea o di dottorato. Il docente ti guida nella lettura, nella traduzione e nell\'analisi filologica delle fonti classiche.',
    punti: [
      'Lettura e traduzione di fonti primarie',
      'Analisi filologica e stilistica',
      'Supporto per apparato critico',
      'Flessibilità sul testo da trattare',
    ],
  },
  {
    titolo: 'Recupero e consolidamento',
    destinatari: 'Studenti liceali e universitari',
    descrizione:
      'Per studenti in difficoltà con la grammatica o con specifici autori. Il tutor individua i nodi critici e costruisce un percorso di recupero su misura, con esercizi mirati e feedback immediato.',
    punti: [
      'Diagnosi delle lacune grammaticali',
      'Esercitazioni mirate e graduali',
      'Simulazioni di verifica e interrogazione',
      'Feedback continuo e personalizzato',
    ],
  },
  {
    titolo: 'Avanzamento rapido',
    destinatari: 'Chi vuole accelerare',
    descrizione:
      'Per chi ha già una base solida e vuole progredire velocemente verso livelli superiori. Il percorso è intensivo, con lettura di testi autentici e approfondimento grammaticale avanzato.',
    punti: [
      'Percorso intensivo personalizzato',
      'Lettura di testi autentici complessi',
      'Grammatica avanzata e stilistica',
      'Preparazione a esami e certificazioni',
    ],
  },
]

export default function LezioniIndividualiPage() {
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
            Un docente, un obiettivo
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
            Tutoraggio Individuale
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
            Sessioni 1:1 con un docente universitario specializzato. Orari
            flessibili, programma su misura, attenzione esclusiva ai tuoi
            obiettivi.
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
            'Sessioni 1:1',
            'Orari flessibili',
            'Docenti universitari',
            'Latino, Greco, Ebraico, Sanscrito',
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
            Il tutoraggio individuale offre la massima flessibilità: scegli il
            docente, l'orario e l'obiettivo. Ogni sessione è costruita intorno
            alle tue esigenze specifiche, che tu debba prepararti a un esame,
            affrontare una tesi o semplicemente appassionarti a un testo
            antico.
          </p>
        </div>
      </section>

      {/* SEZIONE DIVIDER */}
      <div
        className="section-divider"
        style={{
          height: '1px',
          background: '#e8e8e8',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      />

      {/* TIPOLOGIE */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)',
              fontWeight: 700,
              color: '#002147',
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            Per ogni esigenza, un percorso dedicato
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '28px',
            }}
          >
            {TIPOLOGIE.map((tipo) => (
              <div
                key={tipo.titolo}
                className="card"
                style={{
                  background: '#fff',
                  border: '1px solid #e8e8e8',
                  borderRadius: '8px',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: '3px solid #002147',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#C9A84C',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '8px',
                  }}
                >
                  {tipo.destinatari}
                </p>
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#002147',
                    marginBottom: '14px',
                  }}
                >
                  {tipo.titolo}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#555',
                    lineHeight: 1.65,
                    marginBottom: '20px',
                    flex: 1,
                  }}
                >
                  {tipo.descrizione}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {tipo.punti.map((punto) => (
                    <li
                      key={punto}
                      style={{
                        fontSize: '0.85rem',
                        color: '#555',
                        padding: '5px 0',
                        paddingLeft: '16px',
                        position: 'relative',
                        borderBottom: '1px solid #f8f7f4',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: '#C9A84C',
                          fontWeight: 700,
                        }}
                      >
                        +
                      </span>
                      {punto}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE PREZZI */}
      <section className="section" style={{ background: '#f8f7f4' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#002147',
              marginBottom: '16px',
            }}
          >
            Tariffe e preventivo
          </h2>
          <blockquote
            className="blockquote-gold"
            style={{
              borderLeft: '4px solid #C9A84C',
              paddingLeft: '24px',
              margin: '0 auto 28px',
              maxWidth: '580px',
              textAlign: 'left',
            }}
          >
            <p
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1.05rem',
                fontStyle: 'italic',
                color: '#002147',
                lineHeight: 1.7,
              }}
            >
              Contattaci per un preventivo personalizzato. Le tariffe variano
              in base alla lingua, al livello di specializzazione richiesto e
              alla frequenza delle sessioni.
            </p>
          </blockquote>
          <p
            style={{
              fontSize: '0.9rem',
              color: '#555',
              marginBottom: '32px',
            }}
          >
            Risponderemo entro 24 ore con una proposta su misura per il tuo
            percorso.
          </p>
          <Link
            href="/marketing/contatti"
            className="btn btn-primary"
            style={{
              background: '#002147',
              color: '#fff',
              fontFamily: 'Georgia, serif',
              fontWeight: 700,
              padding: '14px 36px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '0.95rem',
            }}
          >
            Richiedi un preventivo
          </Link>
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
            Pronto a iniziare?
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '32px',
              fontSize: '1rem',
            }}
          >
            Scrivici e ti metteremo in contatto con il docente piu adatto al
            tuo obiettivo.
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
              href="/marketing/contatti"
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
              Contattaci
            </Link>
            <a
              href="https://www.portale.grecolatinovivo.it"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
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
