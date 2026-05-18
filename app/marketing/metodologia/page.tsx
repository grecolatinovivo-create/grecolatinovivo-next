// Metodologia — /marketing/metodologia
// Design Oxford/Cambridge: navy #002147, gold #C9A84C
// Metodo Natura: induttivo-contestuale, ispirato a Ørberg
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Il Metodo Natura — Didattica delle lingue classiche | GrecoLatinoVivo',
  description: 'Il Metodo Natura di GrecoLatinoVivo: approccio induttivo-contestuale ispirato a Hans Henning Ørberg. Impara Latino, Greco e lingue classiche come lingue vive, non come materie scolastiche.',
  alternates: { canonical: 'https://grecolatinovivo.it/metodologia' },
}

const fasi = [
  {
    livello: 'A1–A2',
    titolo: 'Primo contatto',
    descrizione:
      'Immersione nella lingua attraverso testi brevi, illustrati e graduati. La comprensione emerge dal contesto: nessuna traduzione, nessuna memorizzazione di paradigmi fuori contesto. La lingua si impara usandola.',
  },
  {
    livello: 'B1–B2',
    titolo: 'Lettura estensiva',
    descrizione:
      'Il corpus si amplia: testi narrativi, lettere, dialoghi. Lo studente legge per capire, non per analizzare. La grammatica viene indotta dai pattern ricorrenti, non dedotta da regole astratte.',
  },
  {
    livello: 'C1',
    titolo: 'Testi autentici',
    descrizione:
      'Accesso diretto agli autori classici: Cicerone, Cesare, Omero, Sofocle. I testi vengono affrontati nella loro interezza, con il supporto lessicale essenziale. Analisi stilistica e contestualizzazione storica.',
  },
  {
    livello: 'C2',
    titolo: 'Produzione',
    descrizione:
      'Lo studente produce nella lingua: composizione, versione dal vivo, discussione orale su testi autentici. Il livello C2 non è solo comprensione: è padronanza attiva dello strumento linguistico.',
  },
]

const confronto = [
  {
    voce: 'Punto di partenza',
    tradizionale: 'Regola grammaticale astratta',
    natura: 'Testo comprensibile in contesto',
  },
  {
    voce: 'Ruolo della traduzione',
    tradizionale: 'Centrale, esercizio quotidiano',
    natura: 'Marginale, sostituita dalla comprensione diretta',
  },
  {
    voce: 'Memorizzazione',
    tradizionale: 'Paradigmi, eccezioni, liste',
    natura: 'Acquisizione implicita per esposizione ripetuta',
  },
  {
    voce: 'Tempo per leggere un autore',
    tradizionale: '3–5 anni',
    natura: 'Da 72 ore (corso base completo)',
  },
  {
    voce: 'Ruolo dello studente',
    tradizionale: 'Passivo: riceve regole, esegue esercizi',
    natura: 'Attivo: osserva, ipotizza, produce',
  },
  {
    voce: 'Risultato principale',
    tradizionale: 'Conoscenza della grammatica',
    natura: 'Competenza comunicativa e lettura fluente',
  },
]

export default function MetodologiaPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: 'linear-gradient(160deg, #002147 0%, #003070 100%)',
          padding: '80px 24px 64px',
        }}
      >
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <p
            className="eyebrow"
            style={{ color: '#C9A84C', marginBottom: '16px' }}
          >
            La nostra didattica
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '24px',
            }}
          >
            Il Metodo Natura
          </h1>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.8,
              maxWidth: '600px',
              margin: '0 auto 32px',
            }}
          >
            Non spieghiamo la lingua: la usiamo. L&apos;approccio induttivo-contestuale
            di GrecoLatinoVivo permette di acquisire il Latino o il Greco come si
            acquisisce qualsiasi lingua — attraverso l&apos;esposizione a testi vivi,
            graduati, significativi.
          </p>
          <Link href="/corsi/corsi-live" className="btn btn-ghost">
            Scopri i corsi
          </Link>
        </div>
      </section>

      {/* APPROCCIO RADICALMENTE DIVERSO */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'start',
            }}
          >
            <div>
              <h2
                className="section-title"
                style={{ color: '#002147' }}
              >
                <span className="section-title__underline">
                  Un approccio radicalmente diverso
                </span>
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#1a1a1a',
                  lineHeight: 1.85,
                  marginTop: '24px',
                  marginBottom: '20px',
                }}
              >
                Il metodo tradizionale di insegnamento delle lingue classiche pone
                la grammatica al centro: prima le regole, poi gli esempi, infine
                i testi — come esercizi di verifica. Il risultato è che molti
                studenti, dopo anni di studio, non riescono a leggere un paragrafo
                di Cesare senza dizionario e grammatica accanto.
              </p>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#1a1a1a',
                  lineHeight: 1.85,
                  marginBottom: '20px',
                }}
              >
                Il Metodo Natura ribalta questa logica: il testo è il punto di
                partenza, non l&apos;arrivo. Lo studente incontra la lingua nel
                suo contesto naturale d&apos;uso, ne assorbe le strutture in modo
                implicito, costruisce progressivamente una competenza autentica
                — non una raccolta di regole.
              </p>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#1a1a1a',
                  lineHeight: 1.85,
                }}
              >
                L&apos;approccio si ispira direttamente al lavoro di Hans Henning
                Ørberg e alla tradizione della{' '}
                <em>Lingua Latina per se Illustrata</em>: un corpus graduato in
                cui ogni parola nuova è comprensibile dal contesto, ogni struttura
                grammaticale emerge dall&apos;uso ripetuto, ogni testo è
                autentico o quasi-autentico.
              </p>
            </div>

            <div>
              <blockquote
                className="blockquote-gold"
                style={{ marginBottom: '32px' }}
              >
                &laquo;Il modo migliore per imparare il Latino è lo stesso modo
                in cui i Romani lo impararono: leggendo molto, ascoltando molto,
                usando la lingua ogni giorno.&raquo;
                <footer
                  style={{
                    marginTop: '12px',
                    fontSize: '0.82rem',
                    fontStyle: 'normal',
                    color: '#555555',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Hans Henning &Oslash;rberg, ispiratore del Metodo Natura
                </footer>
              </blockquote>

              <div
                style={{
                  background: '#f8f7f4',
                  borderTop: '3px solid #002147',
                  borderLeft: '1px solid #e8e8e8',
                  borderRight: '1px solid #e8e8e8',
                  borderBottom: '1px solid #e8e8e8',
                  padding: '24px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#002147',
                    marginBottom: '12px',
                  }}
                >
                  I principi fondanti
                </p>
                {[
                  'Comprensione prima di produzione',
                  'Contesto prima di regola',
                  'Esposizione massiva a testi graduati',
                  'Assenza di traduzione come obiettivo primario',
                  'Grammatica come osservazione, non come precetto',
                ].map((p) => (
                  <div
                    key={p}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      marginBottom: '10px',
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        background: '#C9A84C',
                        borderRadius: '50%',
                        flexShrink: 0,
                        marginTop: '8px',
                      }}
                      aria-hidden="true"
                    />
                    <span style={{ fontSize: '0.9rem', color: '#1a1a1a', lineHeight: 1.6 }}>
                      {p}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* LE 4 FASI */}
      <section className="section section--alt">
        <div className="container">
          <h2
            className="section-title text-center"
            style={{ marginBottom: '8px' }}
          >
            <span className="section-title__underline">Le 4 fasi del percorso</span>
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: '#555555',
              fontSize: '0.95rem',
              marginBottom: '48px',
            }}
          >
            Dalla prima parola alla lettura fluente degli autori classici.
          </p>
          <div className="grid-4">
            {fasi.map((fase, i) => (
              <div key={fase.livello} className="card reveal">
                <div
                  style={{
                    display: 'inline-block',
                    background: '#002147',
                    color: '#C9A84C',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    padding: '3px 10px',
                    marginBottom: '14px',
                  }}
                >
                  {fase.livello}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#777777',
                    marginBottom: '6px',
                  }}
                >
                  Fase {i + 1}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    fontWeight: 400,
                    color: '#002147',
                    marginBottom: '12px',
                  }}
                >
                  {fase.titolo}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: 1.75 }}>
                  {fase.descrizione}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* 72 ORE — CONFRONTO */}
      <section className="section">
        <div className="container">
          <div
            style={{
              maxWidth: '860px',
              margin: '0 auto',
            }}
          >
            <h2
              className="section-title"
              style={{ marginBottom: '8px' }}
            >
              <span className="section-title__underline">
                72 ore che valgono il biennio
              </span>
            </h2>
            <p
              style={{
                color: '#555555',
                fontSize: '0.95rem',
                marginBottom: '40px',
                lineHeight: 1.7,
              }}
            >
              Un corso base GrecoLatinoVivo di 72 ore porta lo studente a leggere
              autonomamente testi d&apos;autore. Ecco la differenza strutturale
              rispetto all&apos;insegnamento tradizionale.
            </p>

            {/* Tabella confronto */}
            <div style={{ overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        padding: '12px 16px',
                        textAlign: 'left',
                        background: '#f8f7f4',
                        borderBottom: '2px solid #002147',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: '#002147',
                        width: '30%',
                      }}
                    >
                      Aspetto
                    </th>
                    <th
                      style={{
                        padding: '12px 16px',
                        textAlign: 'left',
                        background: '#f8f7f4',
                        borderBottom: '2px solid #002147',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: '#555555',
                        width: '35%',
                      }}
                    >
                      Metodo tradizionale
                    </th>
                    <th
                      style={{
                        padding: '12px 16px',
                        textAlign: 'left',
                        background: '#f8f7f4',
                        borderBottom: '2px solid #002147',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: '#002147',
                        width: '35%',
                      }}
                    >
                      Metodo Natura
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {confronto.map((riga, i) => (
                    <tr
                      key={riga.voce}
                      style={{
                        background: i % 2 === 0 ? '#ffffff' : '#fafaf8',
                      }}
                    >
                      <td
                        style={{
                          padding: '14px 16px',
                          borderBottom: '1px solid #e8e8e8',
                          fontWeight: 600,
                          color: '#1a1a1a',
                          verticalAlign: 'top',
                        }}
                      >
                        {riga.voce}
                      </td>
                      <td
                        style={{
                          padding: '14px 16px',
                          borderBottom: '1px solid #e8e8e8',
                          color: '#555555',
                          verticalAlign: 'top',
                          lineHeight: 1.6,
                        }}
                      >
                        {riga.tradizionale}
                      </td>
                      <td
                        style={{
                          padding: '14px 16px',
                          borderBottom: '1px solid #e8e8e8',
                          color: '#002147',
                          fontWeight: 500,
                          verticalAlign: 'top',
                          lineHeight: 1.6,
                        }}
                      >
                        {riga.natura}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Nota accreditamento */}
            <p
              style={{
                marginTop: '24px',
                fontSize: '0.82rem',
                color: '#777777',
                lineHeight: 1.6,
              }}
            >
              Il programma di Formazione Docenti GrecoLatinoVivo, accreditato MIM
              dal 2023, forma gli insegnanti all&apos;uso del Metodo Natura nelle
              classi di Latino e Greco dei licei italiani.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <div className="container-narrow">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
            Pronto a incontrare la lingua?
          </h2>
          <p>
            Scegli il corso adatto al tuo livello. Classi di massimo 15 studenti,
            docenti specializzati, metodo che funziona.
          </p>
          <Link href="/corsi/corsi-live" className="btn btn-ghost">
            Scopri i corsi
          </Link>
        </div>
      </div>
    </>
  )
}
