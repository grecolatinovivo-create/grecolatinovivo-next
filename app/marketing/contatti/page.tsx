'use client'
// Pagina contatti — /contatti
// Design Oxford/Cambridge: #002147 navy, #C9A84C gold, Georgia serif
// Form con fetch /api/contatti → Resend → info@grecolatinovivo.it
import { useState } from 'react'
import Link from 'next/link'

// Nota: metadata non può essere in 'use client'.
// Definirla in un wrapper Server Component in produzione.
// export const metadata: Metadata = {
//   title: 'Contatti — GrecoLatinoVivo',
//   description: 'Contattaci per informazioni sui corsi, iscrizioni e collaborazioni.',
// }

const SEDI = [
  {
    city: 'Firenze',
    label: 'Sede principale',
    address: '[DA INSERIRE — Via, n., CAP Firenze]',
    email: 'info@grecolatinovivo.it',
    phone: '+39 345 245 6696',
  },
  {
    city: 'Milano',
    label: 'Sede distaccata',
    address: '[DA INSERIRE — Via, n., CAP Milano]',
    email: 'milano@grecolatinovivo.it',
    phone: null,
  },
  {
    city: 'Torino',
    label: 'Sede distaccata',
    address: '[DA INSERIRE — Via, n., CAP Torino]',
    email: 'torino@grecolatinovivo.it',
    phone: null,
  },
  {
    city: 'Parma',
    label: 'Sede distaccata',
    address: '[DA INSERIRE — Via, n., CAP Parma]',
    email: 'parma@grecolatinovivo.it',
    phone: null,
  },
  {
    city: 'Pordenone',
    label: 'Sede distaccata',
    address: '[DA INSERIRE — Via, n., CAP Pordenone]',
    email: 'pordenone@grecolatinovivo.it',
    phone: null,
  },
]

export default function ContattiPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contatti', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('ok')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
        setErrorMsg(data.error ?? 'Errore invio. Riprova più tardi.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Errore di rete. Riprova o scrivi direttamente a info@grecolatinovivo.it.')
    }
  }

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: '#002147',
          padding: '72px 24px 60px',
          textAlign: 'center',
        }}
      >
        <div className="container-narrow">
          <p className="eyebrow" style={{ color: '#C9A84C', marginBottom: '16px' }}>
            Siamo qui per te
          </p>
          <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.25,
            }}
          >
            Contattaci
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '1rem',
              maxWidth: '560px',
              margin: '16px auto 0',
            }}
          >
            Rispondiamo entro 24 ore alle richieste di informazioni su corsi,
            iscrizioni e collaborazioni.
          </p>
        </div>
      </section>

      {/* Linea oro */}
      <div style={{ height: '3px', background: '#C9A84C' }} />

      {/* Grid form + info */}
      <section className="section" style={{ background: '#f8f7f4' }}>
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '64px',
            alignItems: 'start',
          }}
        >
          {/* Colonna sinistra: form */}
          <div>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontWeight: 400,
                color: '#002147',
                marginBottom: '8px',
              }}
            >
              Inviaci un messaggio
            </h2>
            <p style={{ color: '#555', marginBottom: '32px', fontSize: '0.95rem' }}>
              Compila il modulo e ti risponderemo entro un giorno lavorativo.
            </p>

            {status === 'ok' ? (
              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid #e8e8e8',
                  borderTop: '3px solid #002147',
                  padding: '40px 32px',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.2rem',
                    color: '#002147',
                    marginBottom: '12px',
                    fontWeight: 400,
                  }}
                >
                  Messaggio ricevuto
                </p>
                <p style={{ color: '#555', lineHeight: 1.7 }}>
                  Ti risponderemo entro 24 ore a{' '}
                  <strong style={{ color: '#1a1a1a' }}>{form.email || 'tua email'}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Riga nome + email */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                    marginBottom: '16px',
                  }}
                >
                  <div>
                    <label htmlFor="name" className="label">
                      Nome *
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="input"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="label">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="input"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="tua@email.it"
                    />
                  </div>
                </div>

                {/* Oggetto */}
                <div style={{ marginBottom: '16px' }}>
                  <label htmlFor="subject" className="label">
                    Oggetto
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="input"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Informazioni sui corsi, iscrizioni, collaborazioni..."
                  />
                </div>

                {/* Messaggio */}
                <div style={{ marginBottom: '24px' }}>
                  <label htmlFor="message" className="label">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    className="input"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Scrivi la tua domanda o richiesta..."
                    style={{ resize: 'vertical', fontFamily: 'inherit' }}
                  />
                </div>

                {errorMsg && (
                  <p
                    className="form-error"
                    role="alert"
                    style={{ marginBottom: '16px' }}
                  >
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                  style={{ minWidth: '200px' }}
                >
                  {status === 'sending' ? 'Invio in corso...' : 'Invia messaggio'}
                </button>

                <p
                  style={{
                    fontSize: '0.78rem',
                    color: '#777',
                    marginTop: '14px',
                    lineHeight: 1.6,
                  }}
                >
                  * Campi obbligatori. I dati inviati sono trattati esclusivamente per
                  rispondere alla tua richiesta, nel rispetto della nostra{' '}
                  <Link href="/marketing/privacy" className="card-link">
                    Informativa Privacy
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>

          {/* Colonna destra: info */}
          <div>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontWeight: 400,
                color: '#002147',
                marginBottom: '32px',
              }}
            >
              Informazioni di contatto
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {/* Telefono */}
              <div>
                <p
                  className="eyebrow"
                  style={{ color: '#555', marginBottom: '6px' }}
                >
                  Telefono
                </p>
                <a
                  href="tel:+393452456696"
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    textDecoration: 'none',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  +39 345 245 6696
                </a>
              </div>

              {/* Email */}
              <div>
                <p
                  className="eyebrow"
                  style={{ color: '#555', marginBottom: '6px' }}
                >
                  Email
                </p>
                <a
                  href="mailto:info@grecolatinovivo.it"
                  className="card-link"
                  style={{ fontSize: '1rem' }}
                >
                  info@grecolatinovivo.it
                </a>
              </div>

              {/* Portale */}
              <div>
                <p
                  className="eyebrow"
                  style={{ color: '#555', marginBottom: '6px' }}
                >
                  Portale didattico
                </p>
                <a
                  href="https://www.portale.grecolatinovivo.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                  style={{ fontSize: '1rem' }}
                >
                  portale.grecolatinovivo.it
                </a>
              </div>

              {/* Sedi */}
              <div>
                <p
                  className="eyebrow"
                  style={{ color: '#555', marginBottom: '8px' }}
                >
                  Sedi operative
                </p>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#1a1a1a',
                    lineHeight: 1.8,
                  }}
                >
                  Firenze (sede principale) · Milano · Torino · Parma · Pordenone
                </p>
              </div>

              {/* Orari */}
              <div>
                <p
                  className="eyebrow"
                  style={{ color: '#555', marginBottom: '6px' }}
                >
                  Orari di risposta
                </p>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.7 }}>
                  Lunedi–Venerdì, 9:00–18:00<br />
                  Risposta entro 24 ore lavorative
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisore */}
      <hr className="section-divider" />

      {/* Sezione sedi */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
            <p className="eyebrow" style={{ color: '#555', marginBottom: '10px' }}>
              Presenza nazionale
            </p>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontWeight: 400,
                color: '#002147',
              }}
            >
              Le nostre sedi
            </h2>
          </div>

          <div className="grid-3" style={{ gap: '24px' }}>
            {SEDI.map((sede) => (
              <div key={sede.city} className="card" style={{ background: '#ffffff' }}>
                <p
                  className="eyebrow"
                  style={{ color: '#777777', marginBottom: '8px' }}
                >
                  {sede.label}
                </p>
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontWeight: 400,
                    color: '#002147',
                    fontSize: '1.25rem',
                    marginBottom: '12px',
                  }}
                >
                  {sede.city}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#555',
                    lineHeight: 1.7,
                    marginBottom: '10px',
                  }}
                >
                  {sede.address}
                </p>
                <a
                  href={`mailto:${sede.email}`}
                  className="card-link"
                  style={{ fontSize: '0.85rem' }}
                >
                  {sede.email}
                </a>
                {sede.phone && (
                  <p style={{ marginTop: '6px' }}>
                    <a
                      href={`tel:${sede.phone.replace(/\s/g, '')}`}
                      style={{
                        fontSize: '0.85rem',
                        color: '#1a1a1a',
                        textDecoration: 'none',
                      }}
                    >
                      {sede.phone}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="cta-band">
        <div className="container-narrow">
          <h2>Scopri il nostro portale didattico</h2>
          <p>
            Accedi a corsi di Latino e Greco con il metodo della comprensione diretta.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://www.portale.grecolatinovivo.it"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Accedi al Portale
            </a>
            <Link href="/marketing/chi-siamo" className="btn btn-ghost">
              Chi siamo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
