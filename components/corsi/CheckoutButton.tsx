'use client'
// CheckoutButton — bottone "Acquista ora" per corsi asincroni
// Manda lo slug all'API /api/corsi-asincroni/checkout (guest checkout Stripe).
// Il prezzo è verificato server-side — il client non invia né manipola importi.

import { useState } from 'react'

interface CheckoutButtonProps {
  slug: string
  label?: string
  /** Classe CSS applicata al bottone (default: btn btn-primary) */
  className?: string
  /** Stile inline addizionale */
  style?: React.CSSProperties
  /** Testo mostrato durante il redirect a Stripe */
  loadingLabel?: string
}

export default function CheckoutButton({
  slug,
  label = 'Acquista ora',
  className = 'btn btn-primary',
  style,
  loadingLabel = 'Reindirizzamento al pagamento…',
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  async function handleClick() {
    setLoading(true)
    setErrorMsg('')

    try {
      const res = await fetch('/api/corsi-asincroni/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      })

      const data = await res.json() as { url?: string; error?: string }

      if (!res.ok || !data.url) {
        throw new Error(data.error ?? 'Impossibile avviare il pagamento. Riprova.')
      }

      // Redirect a Stripe Checkout (hosted, sicuro)
      window.location.href = data.url
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Errore sconosciuto'
      setErrorMsg(message)
      setLoading(false)
    }
  }

  return (
    <div style={{ width: '100%' }}>
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className={className}
        style={{
          width: '100%',
          justifyContent: 'center',
          opacity: loading ? 0.75 : 1,
          cursor: loading ? 'wait' : 'pointer',
          ...style,
        }}
        aria-busy={loading}
      >
        {loading ? loadingLabel : label}
      </button>

      {errorMsg && (
        <p
          role="alert"
          style={{
            color: 'var(--error, #dc3545)',
            fontSize: '0.8rem',
            marginTop: '8px',
            textAlign: 'center',
            fontFamily: 'var(--font-body, sans-serif)',
            lineHeight: 1.4,
          }}
        >
          {errorMsg}
        </p>
      )}
    </div>
  )
}
