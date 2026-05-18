// Formazione Docenti — /corsi/formazione-docenti
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Formazione Docenti MIM | Greco Latino Vivo',
  description:
    'Programma di aggiornamento professionale accreditato MIM dal 2023. Crediti formativi riconosciuti per docenti di liceo classico, scientifico e linguistico.',
}

const MODULI = [
  {
    titolo: 'Didattica del Latino con metodo Natura',
    durata: '20h',
    descrizione:
      'Il modulo introduce il metodo comunicativo applicato all\'insegnamento del Latino: input comprensibile, approccio indiretto e lettura estensiva. Basato sui principi di Krashen e sull\'esperienza di LLPSI e Ørberg.',
    argomenti: [
      'Fondamenti teorici del metodo Natura',
      'Progettazione di unita didattiche',
      'Strumenti digitali per il Latino comunicativo',
      'Analisi critica dei manuali tradizionali',
      'Laboratorio di pratica didattica',
    ],
  },
  {
    titolo: 'Didattica del Greco con testi autentici',
    durata: '20h',
    descrizione:
      'Metodologie per introdurre il Greco antico attraverso testi autentici fin dalle prime lezioni. Il modulo affronta la progressione grammaticale, la selezione dei testi e la gestione della classe eterogenea.',
    argomenti: [
      'Selezione e gradazione dei testi autentici',
      'Strategie di comprensione del testo',
      'Grammatica in contesto vs grammatica deduttiva',
      'Risorse digitali per il Greco antico',
      'Valutazione delle competenze di lettura',
    ],
  },
  {
    titolo: 'BES/DSA nelle lingue classiche',
    durata: '15h',
    descrizione:
      'Strategie didattiche inclusive per studenti con Bisogni Educativi Speciali e Disturbi Specifici dell\'Apprendimento nell\'insegnamento del Latino e del Greco. Strumenti compensativi e misure dispensative.',
    argomenti: [
      'Quadro normativo BES/DSA nel contesto classico',
      'Adattamento dei materiali didattici',
      'Strumenti compensativi per il Latino',
      'Valutazione inclusiva nelle lingue classiche',
      'Collaborazione con famiglie e specialisti',
    ],
  },
]

export default function FormazioneDocentiPage() {
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
            Aggiornamento professionale accreditato
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
            Formazione Docenti MIM
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
            Programma accreditato dal Ministero dell'Istruzione e del Merito
            dal 2023. Crediti formativi riconosciuti per docenti di scuola
            secondaria di secondo grado.
          </p>
        </div>
      </section>

      {/* STRIP ACCREDITAMENTO */}
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
            'Accreditato MIM dal 2023',
            'Crediti formativi riconosciuti',
            'Attestato di partecipazione',
            'Formatori universitari',
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
            Greco Latino Vivo partecipa al sistema di formazione continua dei
            docenti con un programma accreditato MIM che integra linguistica,
            filologia e didattica innovativa. I moduli sono progettati da
            specialisti universitari e formativi pratici, con attenzione
            costante all'applicabilita in aula.
          </p>
        </div>
      </section>

      {/* A CHI E' RIVOLTO */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)',
              fontWeight: 700,
              color: '#002147',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            A chi e rivolto
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '20px',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {[
              {
                tipo: 'Liceo Classico',
                desc: 'Docenti di Latino, Greco, Letteratura latina e greca',
              },
              {
                tipo: 'Liceo Scientifico',
                desc: 'Docenti di Latino e culture classiche',
              },
              {
                tipo: 'Liceo Linguistico',
                desc: 'Docenti con interesse per le radici classiche delle lingue moderne',
              },
              {
                tipo: 'Istruzione Superiore',
                desc: 'Docenti di Storia e Filosofia con formazione classica',
              },
            ].map((item) => (
              <div
                key={item.tipo}
                style={{
                  background: '#f8f7f4',
                  border: '1px solid #e8e8e8',
                  borderRadius: '8px',
                  padding: '24px 20px',
                  borderLeft: '3px solid #C9A84C',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#002147',
                    marginBottom: '8px',
                  }}
                >
                  {item.tipo}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#555',
                    lineHeight: 1.55,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULI */}
      <section className="section" style={{ background: '#f8f7f4' }}>
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
            I moduli formativi
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {MODULI.map((modulo, idx) => (
              <div
                key={modulo.titolo}
                className="card"
                style={{
                  background: '#fff',
                  border: '1px solid #e8e8e8',
                  borderRadius: '8px',
                  padding: '36px',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '24px',
                  alignItems: 'start',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '12px',
                    }}
                  >
                    <span
                      style={{
                        background: '#002147',
                        color: '#C9A84C',
                        fontFamily: 'Georgia, serif',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        padding: '3px 12px',
                        borderRadius: '4px',
                      }}
                    >
                      Modulo {idx + 1}
                    </span>
                    <span
                      style={{
                        background: '#f8f7f4',
                        color: '#555',
                        fontFamily: 'Georgia, serif',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        padding: '3px 12px',
                        borderRadius: '4px',
                      }}
                    >
                      {modulo.durata}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#002147',
                      marginBottom: '12px',
                    }}
                  >
                    {modulo.titolo}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#555',
                      lineHeight: 1.65,
                      marginBottom: '20px',
                    }}
                  >
                    {modulo.descrizione}
                  </p>

                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}
                  >
                    {modulo.argomenti.map((arg) => (
                      <li
                        key={arg}
                        style={{
                          background: '#f8f7f4',
                          border: '1px solid #e8e8e8',
                          borderRadius: '4px',
                          padding: '4px 12px',
                          fontSize: '0.8rem',
                          color: '#555',
                        }}
                      >
                        {arg}
                      </li>
                    ))}
                  </ul>
                </div>
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
            Richiedi informazioni sul programma
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '32px',
              fontSize: '1rem',
            }}
          >
            Scrivi per informazioni su date, sedi e modalita di iscrizione.
            Il portale MIM per la validazione dei crediti formativi e indicato
            in fase di iscrizione.
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
              Richiedi informazioni
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
          <p
            style={{
              marginTop: '20px',
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            Il link al portale MIM per la validazione dei crediti sara
            comunicato in fase di iscrizione.
          </p>
        </div>
      </section>
    </>
  )
}
