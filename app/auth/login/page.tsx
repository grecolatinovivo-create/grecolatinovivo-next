'use client'
// Pagina login — /auth/login
// NEURO_SPEC §5 FP-08: modal inline se possibile, redirect preserva piano selezionato
import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

function LoginForm() {
  const router = useRouter()
  const params = useSearchParams()
  const redirect = params.get('redirect') ?? '/commercio/abbonamento'
  const piano = params.get('piano')

  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [name, setName] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const endpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/register'
    const body = mode === 'login'
      ? { email: form.email, password: form.password }
      : { email: form.email, password: form.password, name }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()

      if (res.ok) {
        // Se c'è un piano selezionato, avvia il checkout Stripe
        if (piano) {
          const checkoutRes = await fetch('/api/stripe/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'abbonamento', itemId: piano, period: 'monthly' }),
          })
          const checkoutData = await checkoutRes.json()
          if (checkoutData.url) {
            window.location.href = checkoutData.url
            return
          }
        }
        router.push(redirect)
      } else {
        setError(data.error ?? 'Errore. Riprova più tardi.')
      }
    } catch {
      setError('Errore di rete. Riprova più tardi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px', background: '#FAFAF7' }}>
      <div style={{ background: '#fff', border: '1px solid #E8E0D0', borderRadius: '16px', padding: '48px', width: '100%', maxWidth: '420px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Link href="/" aria-label="Home">
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 900, color: '#1B3A6B' }}>ΓΛ</span>
          </Link>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 700, color: '#1A1A1A', marginTop: '8px' }}>
            {mode === 'login' ? 'Accedi al tuo account' : 'Crea il tuo account'}
          </h1>
        </div>

        {/* Toggle login/registrazione */}
        <div style={{ display: 'flex', background: '#F5F0E8', borderRadius: '8px', padding: '4px', marginBottom: '28px' }}>
          <button
            onClick={() => setMode('login')}
            style={{ flex: 1, padding: '8px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: mode === 'login' ? 600 : 400, background: mode === 'login' ? '#fff' : 'transparent', color: mode === 'login' ? '#1A1A1A' : '#6B6B6B', boxShadow: mode === 'login' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none', transition: 'all 0.15s' }}
          >
            Accedi
          </button>
          <button
            onClick={() => setMode('register')}
            style={{ flex: 1, padding: '8px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: mode === 'register' ? 600 : 400, background: mode === 'register' ? '#fff' : 'transparent', color: mode === 'register' ? '#1A1A1A' : '#6B6B6B', boxShadow: mode === 'register' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none', transition: 'all 0.15s' }}
          >
            Registrati
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {mode === 'register' && (
            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="name" className="label">Nome e cognome *</label>
              <input
                id="name" type="text" className="input" required
                value={name} onChange={(e) => setName(e.target.value)}
                placeholder="Mario Rossi" autoComplete="name"
              />
            </div>
          )}

          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="email" className="label">Email *</label>
            <input
              id="email" type="email" className="input" required
              value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="tua@email.it" autoComplete="email"
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label htmlFor="password" className="label">Password *</label>
            <input
              id="password" type="password" className="input" required
              value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder={mode === 'register' ? 'Minimo 8 caratteri' : 'La tua password'}
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            />
          </div>

          {error && (
            <p className="form-error" role="alert" style={{ marginBottom: '16px' }}>{error}</p>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            {loading
              ? 'Accesso in corso...'
              : mode === 'login' ? 'Accedi' : 'Crea account'}
          </button>
        </form>

        {mode === 'login' && (
          <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.85rem', color: '#6B6B6B' }}>
            <Link href="/auth/recupero-password" style={{ color: '#1B3A6B' }}>
              Hai dimenticato la password?
            </Link>
          </p>
        )}

        {/* GDPR Art. 13 — informativa raccolta dati personali */}
        {mode === 'register' && (
          <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '0.78rem', color: '#aaa', lineHeight: 1.5 }}>
            Registrandoti accetti la nostra{' '}
            <Link href="/privacy" style={{ color: '#1B3A6B' }}>
              Informativa Privacy
            </Link>
            {' '}e i{' '}
            <Link href="/termini-condizioni" style={{ color: '#1B3A6B' }}>
              Termini e Condizioni
            </Link>
            . I tuoi dati sono trattati per gestire il tuo account.
          </p>
        )}

        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.8rem', color: '#aaa' }}>
          Hai già un account sul portale?{' '}
          <a href={`${process.env.NEXT_PUBLIC_PORTALE_URL ?? 'https://portale.grecolatinovivo.it'}/login`} style={{ color: '#1B3A6B' }}>
            Accedi direttamente al portale →
          </a>
        </p>
      </div>
    </section>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '70vh' }} />}>
      <LoginForm />
    </Suspense>
  )
}
