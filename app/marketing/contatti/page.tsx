'use client'
// Pagina contatti — /contatti
// Sostituisce contatti.php (PHP non supportato su Vercel)
// Usa /api/contatti → Resend → info@grecolatinovivo.it
import { useState } from 'react'
import type { Metadata } from 'next'

// Nota: metadata non può essere in 'use client' — definirla in un wrapper Server Component in produzione
// Per ora la teniamo come commento di riferimento
// export const metadata: Metadata = {
//   title: 'Contatti — GrecoLatinoVivo',
//   description: 'Contattaci per informazioni sui corsi, iscrizioni e collaborazioni.',
// }

export default function ContattiPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
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
      <section style={{ background: '#1A1A1A', padding: '64px 24px 56px', textAlign: 'center' }}>
        <div className="container-narrow">
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: '#fff', marginBottom: '12px' }}>
            Contattaci
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem' }}>
            Siamo qui per rispondere alle tue domande.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '64px', alignItems: 'start' }}>

          {/* Info contatti */}
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '24px' }}>
              Informazioni di contatto
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1B3A6B', marginBottom: '4px' }}>
                  Telefono
                </p>
                <a href="tel:+393452456696" style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1A1A1A', textDecoration: 'none' }}>
                  +39 345 245 6696
                </a>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1B3A6B', marginBottom: '4px' }}>
                  Email
                </p>
                <a href="mailto:info@grecolatinovivo.it" style={{ fontSize: '1rem', color: '#1A1A1A', textDecoration: 'none' }}>
                  info@grecolatinovivo.it
                </a>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1B3A6B', marginBottom: '4px' }}>
                  Sedi
                </p>
                <p style={{ fontSize: '0.9rem', color: '#6B6B6B', lineHeight: 1.7 }}>
                  Firenze (sede principale) · Milano · Torino · Parma · Pordenone
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {status === 'ok' ? (
              <div style={{ background: 'rgba(30,126,52,0.08)', border: '1px solid rgba(30,126,52,0.3)', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }} aria-hidden="true">✓</div>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>
                  Messaggio inviato
                </h2>
                <p style={{ color: '#6B6B6B' }}>
                  Ti risponderemo entro 24 ore a <strong>{form.email || 'tua email'}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label htmlFor="name" className="label">Nome *</label>
                    <input
                      id="name" type="text" className="input" required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="label">Email *</label>
                    <input
                      id="email" type="email" className="input" required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="tua@email.it"
                    />
                  </div>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label htmlFor="subject" className="label">Oggetto</label>
                  <input
                    id="subject" type="text" className="input"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Informazioni sui corsi, iscrizioni, collaborazioni..."
                  />
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label htmlFor="message" className="label">Messaggio *</label>
                  <textarea
                    id="message" className="input" required rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Scrivi la tua domanda o richiesta..."
                    style={{ resize: 'vertical', fontFamily: 'inherit' }}
                  />
                </div>

                {errorMsg && (
                  <p className="form-error" role="alert" style={{ marginBottom: '16px' }}>{errorMsg}</p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                  style={{ minWidth: '180px' }}
                >
                  {status === 'sending' ? (
                    <>Invio in corso...</>
                  ) : (
                    'Invia messaggio'
                  )}
                </button>
                {/* GDPR Art. 13 — informativa trattamento dati */}
                <p style={{ fontSize: '0.78rem', color: '#aaa', marginTop: '12px', lineHeight: 1.5 }}>
                  * Campi obbligatori. Risponderemo entro 24 ore.
                  I dati inviati sono trattati esclusivamente per rispondere alla tua richiesta,
                  nel rispetto della nostra{' '}
                  <a href="/privacy" style={{ color: '#1B3A6B' }}>Informativa Privacy</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
