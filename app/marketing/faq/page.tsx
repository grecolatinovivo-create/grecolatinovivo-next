// FAQ — /marketing/faq
// Design Oxford/Cambridge: navy #002147, gold #C9A84C
// 12 FAQ in 3 categorie: Iscrizione, Corsi, Portale e pagamenti
// Usa <details>/<summary> HTML nativo — nessun JS client
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Domande frequenti — FAQ | GrecoLatinoVivo',
  description: 'Risposte alle domande più frequenti sui corsi di Latino, Greco e lingue classiche di GrecoLatinoVivo: iscrizioni, livelli, prezzi, portale studenti e pagamenti.',
  alternates: { canonical: 'https://grecolatinovivo.it/faq' },
}

type FaqItem = { domanda: string; risposta: ReactNode }
type Categoria = { titolo: string; id: string; faq: FaqItem[] }

const categorie: Categoria[] = [
  {
    titolo: 'Iscrizione',
    id: 'iscrizione',
    faq: [
      {
        domanda: 'Come mi iscrivo a un corso?',
        risposta:
          'Puoi iscriverti direttamente dal sito, selezionando il corso e il livello che ti interessa. Dopo la registrazione sul portale studenti riceverai un link di conferma con tutti i dettagli. Per assistenza puoi scrivere a info@grecolatinovivo.it o chiamare il +39 345 245 6696.',
      },
      {
        domanda: 'Come faccio a sapere qual è il mio livello?',
        risposta:
          'Se hai già studiato Latino o Greco in precedenza, puoi compilare il test di ingresso disponibile sul portale studenti. Se sei al primo approccio, parti dal livello A1: il Metodo Natura non richiede conoscenze pregresse. In caso di dubbio, contattaci: i nostri docenti ti aiutano a scegliere il punto di partenza giusto.',
      },
      {
        domanda: 'Posso iscrivermi a metà corso?',
        risposta:
          'Di norma le iscrizioni sono aperte fino alla seconda lezione. Oltre quel termine il gruppo è già avanzato e l\'inserimento risulterebbe difficoltoso. In alcuni casi, a discrezione del docente, è possibile valutare un ingresso tardivo previo colloquio. Contattaci per sapere lo stato delle iscrizioni per un corso specifico.',
      },
      {
        domanda: 'I corsi sono adatti anche agli adulti senza studi classici?',
        risposta:
          'Assolutamente sì. La maggior parte dei nostri studenti sono adulti che si avvicinano al Latino o al Greco per la prima volta, o che hanno ricordi lontani del liceo. Il Metodo Natura è progettato per funzionare con chiunque sappia leggere e abbia voglia di incontrare la lingua. Non è richiesto nessun prerequisito.',
      },
    ],
  },
  {
    titolo: 'Corsi',
    id: 'corsi',
    faq: [
      {
        domanda: 'Quante lingue classiche insegnate?',
        risposta:
          'GrecoLatinoVivo offre corsi di Latino, Greco Antico, Egiziano Antico, Ebraico Biblico e Sanscrito. Ogni lingua ha un programma specifico, con materiali originali sviluppati dal Centro. I corsi coprono tutti i livelli dal QCER A1 al C2.',
      },
      {
        domanda: 'Quanti studenti ci sono in classe?',
        risposta:
          'Le classi hanno un massimo di 15 studenti. Questa scelta non è casuale: con il Metodo Natura la partecipazione attiva di ogni studente è fondamentale. Classi piccole permettono al docente di seguire i progressi individuali e adattare il ritmo del gruppo.',
      },
      {
        domanda: 'Quante ore dura un corso e con che frequenza si svolgono le lezioni?',
        risposta:
          'Un corso base è di 72 ore totali, suddivise in moduli semestrali. La frequenza tipica è di una o due lezioni a settimana, della durata di 2 ore ciascuna. Il calendario dettagliato è pubblicato sul sito prima dell\'inizio di ogni ciclo. Sono disponibili anche corsi intensivi estivi.',
      },
      {
        domanda: 'Il Biduum Latinitatis è aperto a tutti?',
        risposta:
          'Il Biduum Latinitatis è l\'evento annuale di GrecoLatinoVivo: due giorni interamente in Latino, con lezioni, letture ad alta voce, conversazione e attività culturali. È aperto a studenti di livello B2 in su. Le date vengono annunciate sul sito e nella newsletter. L\'iscrizione è separata da quella ai corsi regolari.',
      },
    ],
  },
  {
    titolo: 'Portale e pagamenti',
    id: 'portale-pagamenti',
    faq: [
      {
        domanda: 'Come accedo al portale studenti?',
        risposta: (
          <>
            Il portale studenti &egrave; raggiungibile all&apos;indirizzo{' '}
            <a
              href="https://www.portale.grecolatinovivo.it"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#002147', borderBottom: '1px solid #C9A84C', paddingBottom: '1px' }}
            >
              portale.grecolatinovivo.it
            </a>
            . Dopo la prima iscrizione riceverai le credenziali via email. Sul portale
            trovi i materiali del corso, il calendario delle lezioni, i link per
            accedere alle lezioni online e la sezione pagamenti.
          </>
        ),
      },
      {
        domanda: 'Quali metodi di pagamento accettate?',
        risposta:
          'I pagamenti avvengono tramite il portale studenti, con carta di credito/debito o bonifico bancario. È possibile richiedere una rateizzazione in due o tre rate per i corsi annuali. Per informazioni su borse di studio o agevolazioni economiche, contattaci direttamente.',
      },
      {
        domanda: 'I corsi sono detraibili fiscalmente?',
        risposta:
          'GrecoLatinoVivo è accreditato dal Ministero dell\'Istruzione e del Merito (MIM). I corsi di Formazione Docenti sono detraibili come spese di aggiornamento professionale per gli insegnanti. Per i corsi standard, consigliamo di verificare la propria situazione fiscale con un commercialista. Emettiamo regolare fattura per tutti i pagamenti.',
      },
      {
        domanda: 'Cosa succede se non riesco a seguire una lezione?',
        risposta:
          'Le lezioni online sono registrate e disponibili sul portale per i 7 giorni successivi. Per i corsi in presenza la registrazione non è sempre disponibile; in quel caso il docente fornisce un riassunto scritto e i materiali della lezione. Consigliamo di non saltare più di due lezioni consecutive per non perdere il filo del corso.',
      },
    ],
  },
]

export default function FaqPage() {
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
            Hai una domanda?
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
            Domande frequenti
          </h1>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.8,
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            Le risposte alle domande pi&ugrave; comuni su iscrizioni, corsi,
            portale studenti e pagamenti.
          </p>
        </div>
      </section>

      {/* NAVIGAZIONE CATEGORIE */}
      <div
        style={{
          background: '#f8f7f4',
          borderTop: '1px solid #e8e8e8',
          borderBottom: '1px solid #e8e8e8',
          padding: '16px 24px',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#777777',
            }}
          >
            Categorie
          </span>
          {categorie.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#002147',
                textDecoration: 'none',
                borderBottom: '1px solid #C9A84C',
                paddingBottom: '1px',
              }}
            >
              {c.titolo}
            </a>
          ))}
        </div>
      </div>

      {/* FAQ CONTENT */}
      <section className="section">
        <div className="container" style={{ maxWidth: '860px' }}>
          {categorie.map((cat, ci) => (
            <div
              key={cat.id}
              id={cat.id}
              style={{ marginBottom: ci < categorie.length - 1 ? '64px' : '0' }}
            >
              {/* Intestazione categoria */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '24px',
                }}
              >
                <div
                  style={{
                    background: '#002147',
                    color: '#C9A84C',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    padding: '3px 10px',
                    flexShrink: 0,
                  }}
                >
                  {cat.faq.length} domande
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: '#002147',
                    margin: 0,
                  }}
                >
                  {cat.titolo}
                </h2>
              </div>

              {/* Items FAQ */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0',
                  borderTop: '1px solid #e8e8e8',
                }}
              >
                {cat.faq.map((item) => (
                  <details
                    key={item.domanda}
                    style={{
                      borderBottom: '1px solid #e8e8e8',
                    }}
                  >
                    <summary
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px 0',
                        cursor: 'pointer',
                        listStyle: 'none',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1rem',
                        fontWeight: 400,
                        color: '#002147',
                        lineHeight: 1.4,
                        gap: '16px',
                      }}
                    >
                      <span>{item.domanda}</span>
                      {/* Indicatore apri/chiudi */}
                      <span
                        aria-hidden="true"
                        style={{
                          flexShrink: 0,
                          width: '20px',
                          height: '20px',
                          border: '1px solid #002147',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'var(--font-body)',
                          fontSize: '1rem',
                          fontWeight: 400,
                          color: '#002147',
                          lineHeight: 1,
                        }}
                        className="faq-icon"
                      >
                        +
                      </span>
                    </summary>
                    <div
                      style={{
                        paddingBottom: '20px',
                        paddingRight: '36px',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '0.92rem',
                          color: '#555555',
                          lineHeight: 1.85,
                          margin: 0,
                        }}
                      >
                        {item.risposta}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stile per nascondere il marker nativo di <summary> cross-browser */}
      <style>{`
        details > summary::-webkit-details-marker { display: none; }
        details > summary::marker { display: none; }
        details[open] .faq-icon { content: '−'; }
        details[open] summary .faq-icon::before { content: '−'; }
        details:not([open]) summary .faq-icon::before { content: '+'; }
        details[open] summary .faq-icon { font-size: 0; }
        details[open] summary .faq-icon::after { content: '−'; font-size: 1rem; }
        details:not([open]) summary .faq-icon::after { content: '+'; font-size: 1rem; }
        details summary .faq-icon { font-size: 0; }
      `}</style>

      <hr className="section-divider" />

      {/* CTA FINALE */}
      <section className="section section--alt" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
              fontWeight: 400,
              color: '#002147',
              marginBottom: '12px',
            }}
          >
            Non hai trovato risposta?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#555555',
              lineHeight: 1.75,
              maxWidth: '480px',
              margin: '0 auto 28px',
            }}
          >
            Scrivici o chiamaci. Il nostro staff risponde entro 24 ore
            a qualsiasi domanda su corsi, iscrizioni e metodologia.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/marketing/contatti" className="btn btn-primary">
              Scrivici
            </Link>
            <a
              href="tel:+393452456696"
              className="btn btn-secondary"
            >
              +39 345 245 6696
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
