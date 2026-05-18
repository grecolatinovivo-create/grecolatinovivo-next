import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Eventi e Convegni — GrecoLatinoVivo',
  description: 'Seminari, Bidua Latinitatis, convegni accademici e giornate di studio organizzati da GrecoLatinoVivo. Partecipa alla vita del Centro.',
  alternates: { canonical: 'https://grecolatinovivo.it/eventi' },
}

// Placeholder eventi prossimi — dati da inserire
const prossimiEventi = [
  {
    id: 'biduum-latinitatis-2025',
    titolo: 'Biduum Latinitatis 2025',
    tipo: 'BIDUUM LATINITATIS',
    data: '[DA INSERIRE]',
    luogo: 'Firenze',
    descrizione:
      'Due giornate di immersione totale nella lingua latina: lettura, conversazione, teatro e poesia. Un appuntamento imprescindibile per chi studia il Latino con il metodo natura.',
  },
  {
    id: 'seminario-papirologia',
    titolo: 'Seminario di Papirologia',
    tipo: 'SEMINARIO',
    data: '[DA INSERIRE]',
    luogo: '[DA INSERIRE]',
    descrizione:
      'Introduzione alla lettura dei papiri greci: dalla conservazione alla decifrazione. Riservato agli iscritti al piano Accademia.',
  },
  {
    id: 'convegno-metodo-natura',
    titolo: 'Convegno sul Metodo Natura',
    tipo: 'CONVEGNO',
    data: '[DA INSERIRE]',
    luogo: '[DA INSERIRE]',
    descrizione:
      'Giornata di studio e confronto accademico sul metodo Natura applicato all\'insegnamento del Latino e del Greco. Interventi di docenti e ricercatori universitari.',
  },
]

export default function EventiPage() {
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
            Incontri e approfondimenti
          </p>
          <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '18px',
              lineHeight: 1.2,
            }}
          >
            Eventi e Convegni
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.72)',
              fontSize: '1.05rem',
              maxWidth: '540px',
              margin: '0 auto',
              lineHeight: 1.7,
              fontFamily: 'Georgia, serif',
            }}
          >
            Seminari, Bidua Latinitatis, convegni accademici e giornate di studio.
            Partecipa alla vita del Centro.
          </p>
        </div>
      </section>

      {/* STRIP ACCREDITAMENTO */}
      <section
        style={{
          background: '#C9A84C',
          padding: '14px 24px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '0.85rem',
            color: '#002147',
            fontWeight: 700,
            letterSpacing: '0.04em',
          }}
        >
          Fondato nel 2015 · Accreditato MIM · Sedi a Firenze, Milano, Torino, Parma, Pordenone
        </p>
      </section>

      {/* PROSSIMI EVENTI */}
      <section style={{ padding: '72px 24px' }}>
        <div className="container">
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              color: '#002147',
              marginBottom: '8px',
              textAlign: 'center',
            }}
          >
            Prossimi eventi
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: '#555',
              fontFamily: 'Georgia, serif',
              fontSize: '0.95rem',
              marginBottom: '48px',
            }}
          >
            Date e dettagli in aggiornamento. Iscriviti alla newsletter per ricevere le comunicazioni.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
              maxWidth: '860px',
              margin: '0 auto',
            }}
          >
            {prossimiEventi.map((evento) => (
              <div
                key={evento.id}
                style={{
                  background: '#fff',
                  border: '1px solid #DDE3ED',
                  borderLeft: '4px solid #002147',
                  borderRadius: '4px',
                  padding: '28px 32px',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '24px',
                  alignItems: 'start',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: '#C9A84C',
                      marginBottom: '6px',
                    }}
                  >
                    {evento.tipo}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#002147',
                      marginBottom: '8px',
                    }}
                  >
                    {evento.titolo}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '0.875rem',
                      color: '#555',
                      marginBottom: '12px',
                    }}
                  >
                    Data: {evento.data} &nbsp;&middot;&nbsp; Luogo: {evento.luogo}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '0.9rem',
                      color: '#3A4A5A',
                      lineHeight: 1.65,
                    }}
                  >
                    {evento.descrizione}
                  </p>
                </div>
                <div style={{ flexShrink: 0, paddingTop: '4px' }}>
                  <Link
                    href={`/eventi/${evento.id}`}
                    style={{
                      display: 'inline-block',
                      background: '#002147',
                      color: '#fff',
                      fontFamily: 'Georgia, serif',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      padding: '10px 20px',
                      borderRadius: '3px',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Dettagli
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHIVIO EVENTI PASSATI */}
      <section
        style={{
          background: '#F5F0E8',
          padding: '64px 24px',
          textAlign: 'center',
        }}
      >
        <div className="container-narrow">
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)',
              fontWeight: 700,
              color: '#002147',
              marginBottom: '16px',
            }}
          >
            Archivio eventi passati
          </h2>
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '0.95rem',
              color: '#555',
              lineHeight: 1.7,
              marginBottom: '28px',
              maxWidth: '560px',
              margin: '0 auto 28px',
            }}
          >
            Rivivi convegni, seminari e Bidua Latinitatis delle edizioni precedenti.
            Un patrimonio di incontri dedicati alle lingue classiche.
          </p>
          <Link
            href="/eventi"
            style={{
              display: 'inline-block',
              border: '2px solid #002147',
              color: '#002147',
              fontFamily: 'Georgia, serif',
              fontSize: '0.9rem',
              fontWeight: 600,
              padding: '10px 24px',
              borderRadius: '3px',
              textDecoration: 'none',
            }}
          >
            Consulta l&apos;archivio
          </Link>
        </div>
      </section>

      {/* ORGANIZZA UN EVENTO */}
      <section style={{ padding: '72px 24px' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.13em',
              color: '#C9A84C',
              marginBottom: '12px',
            }}
          >
            Collaborazioni
          </p>
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)',
              fontWeight: 700,
              color: '#002147',
              marginBottom: '16px',
            }}
          >
            Organizza un evento con noi
          </h2>
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '0.95rem',
              color: '#555',
              lineHeight: 1.75,
              maxWidth: '560px',
              margin: '0 auto 32px',
            }}
          >
            Sei un&apos;istituzione scolastica, un ateneo o un ente culturale?
            Possiamo organizzare seminari, giornate di studio e convegni in collaborazione,
            nelle nostre sedi o presso la vostra struttura.
          </p>
          <Link
            href="/marketing/contatti"
            style={{
              display: 'inline-block',
              background: '#C9A84C',
              color: '#002147',
              fontFamily: 'Georgia, serif',
              fontSize: '0.9rem',
              fontWeight: 700,
              padding: '12px 28px',
              borderRadius: '3px',
              textDecoration: 'none',
            }}
          >
            Contattaci per una proposta
          </Link>
        </div>
      </section>

      {/* BANDA FINALE CTA */}
      <section
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
              fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '16px',
            }}
          >
            Non perderti nessun evento
          </h2>
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.7,
              maxWidth: '480px',
              margin: '0 auto 32px',
            }}
          >
            Resta aggiornato su seminari, convegni e Bidua Latinitatis.
            Scrivici o consulta la pagina contatti.
          </p>
          <Link
            href="/marketing/contatti"
            style={{
              display: 'inline-block',
              background: '#C9A84C',
              color: '#002147',
              fontFamily: 'Georgia, serif',
              fontSize: '0.9rem',
              fontWeight: 700,
              padding: '12px 28px',
              borderRadius: '3px',
              textDecoration: 'none',
            }}
          >
            Vai ai contatti
          </Link>
        </div>
      </section>
    </>
  )
}
