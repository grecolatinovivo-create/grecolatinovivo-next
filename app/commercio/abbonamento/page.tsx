import type { Metadata } from 'next'
import Link from 'next/link'
import PricingToggle from '@/components/sections/PricingToggle'

export const metadata: Metadata = {
  title: 'Piani abbonamento — GrecoLatinoVivo',
  description:
    'Abbonati al Portale Didattico GLV: Cultura €5,90/mese, Linguae €12,90/mese, Accademia €19,90/mese. Accedi a tutti i corsi di Latino, Greco, Egiziano, Ebraico e Sanscrito.',
  alternates: { canonical: 'https://grecolatinovivo.it/commercio/abbonamento' },
}

const portalUrl = 'https://portale.grecolatinovivo.it'

const faq = [
  {
    domanda: 'Come funziona il pagamento?',
    risposta:
      'Il pagamento avviene in modo sicuro tramite Stripe. Puoi utilizzare carta di credito, debito o altri metodi supportati. Riceverai una ricevuta via email dopo ogni addebito.',
  },
  {
    domanda: 'Posso disdire quando voglio?',
    risposta:
      'Sì. Non ci sono vincoli minimi. Puoi disdire l\'abbonamento in qualsiasi momento dalla tua area personale sul portale. La disdetta avrà effetto al termine del periodo già pagato.',
  },
  {
    domanda: 'Qual è la differenza tra mensile e annuale?',
    risposta:
      'Il piano annuale ti permette di risparmiare rispetto a 12 mesi separati. Il costo viene addebitato in un\'unica soluzione all\'inizio dell\'anno. Puoi comunque disdire anticipatamente.',
  },
  {
    domanda: 'Cosa succede se cambio piano?',
    risposta:
      'Puoi passare a un piano superiore o inferiore in qualsiasi momento. In caso di upgrade, la differenza viene calcolata in modo proporzionale. Il cambio è immediato e gestito direttamente dal portale.',
  },
]

export default function AbbonamentoPage() {
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
            Accesso al Portale Didattico
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
            Scegli il tuo piano
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
            Latino, Greco, Egiziano, Ebraico e Sanscrito. 56 corsi e contando.
            Disdici quando vuoi.
          </p>
        </div>
      </section>

      {/* PRICING CON TOGGLE */}
      <section
        style={{
          background: '#F5F0E8',
          padding: '72px 24px',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <PricingToggle />
        </div>
      </section>

      {/* COSA INCLUDE IL PORTALE */}
      <section style={{ padding: '72px 24px' }}>
        <div className="container-narrow">
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.13em',
              color: '#C9A84C',
              marginBottom: '12px',
              textAlign: 'center',
            }}
          >
            Il portale in dettaglio
          </p>
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)',
              fontWeight: 700,
              color: '#002147',
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            Cosa trovi nel Portale Didattico
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '28px',
            }}
          >
            {[
              {
                titolo: 'Corsi registrati',
                testo:
                  'Accedi a lezioni preregistrate di Latino, Greco antico, Egiziano geroglifico, Ebraico biblico e Sanscrito. Studia ai tuoi ritmi, senza scadenze.',
              },
              {
                titolo: 'Materiali didattici',
                testo:
                  'Grammatiche, dispense, vocabolari e mappe concettuali scaricabili. Disponibili dai piani Linguae e Accademia.',
              },
              {
                titolo: 'Formazione docenti MIM',
                testo:
                  'Corsi accreditati per la formazione dei docenti, riconosciuti dal Ministero dell\'Istruzione. Esclusivi del piano Accademia.',
              },
              {
                titolo: 'Comunità di studio',
                testo:
                  'Forum, gruppi di lettura e spazi di confronto tra studenti e docenti. Incluso in tutti i piani.',
              },
            ].map((item) => (
              <div
                key={item.titolo}
                style={{
                  background: '#fff',
                  border: '1px solid #DDE3ED',
                  borderTop: '3px solid #C9A84C',
                  borderRadius: '3px',
                  padding: '24px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#002147',
                    marginBottom: '10px',
                  }}
                >
                  {item.titolo}
                </h3>
                <p
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '0.875rem',
                    color: '#555',
                    lineHeight: 1.7,
                  }}
                >
                  {item.testo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          background: '#F5F0E8',
          padding: '72px 24px',
        }}
      >
        <div className="container-narrow">
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)',
              fontWeight: 700,
              color: '#002147',
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            Domande frequenti
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faq.map((item) => (
              <details
                key={item.domanda}
                style={{
                  background: '#fff',
                  border: '1px solid #DDE3ED',
                  borderRadius: '3px',
                  overflow: 'hidden',
                }}
              >
                <summary
                  style={{
                    cursor: 'pointer',
                    padding: '18px 24px',
                    fontFamily: 'Georgia, serif',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#002147',
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {item.domanda}
                  <span
                    style={{
                      color: '#C9A84C',
                      fontSize: '1.2rem',
                      fontWeight: 400,
                      flexShrink: 0,
                      marginLeft: '12px',
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p
                  style={{
                    padding: '0 24px 18px',
                    fontFamily: 'Georgia, serif',
                    fontSize: '0.9rem',
                    color: '#555',
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {item.risposta}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
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
              fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '16px',
            }}
          >
            Pronto a iniziare?
          </h2>
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.7,
              maxWidth: '440px',
              margin: '0 auto 32px',
            }}
          >
            Accedi al portale e inizia il tuo percorso con le lingue classiche oggi stesso.
          </p>
          <a
            href={portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#C9A84C',
              color: '#002147',
              fontFamily: 'Georgia, serif',
              fontSize: '0.95rem',
              fontWeight: 700,
              padding: '14px 32px',
              borderRadius: '3px',
              textDecoration: 'none',
            }}
          >
            Vai al Portale Didattico
          </a>
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.45)',
              marginTop: '16px',
            }}
          >
            Disdici in qualsiasi momento. Nessun vincolo.
          </p>
        </div>
      </section>
    </>
  )
}
