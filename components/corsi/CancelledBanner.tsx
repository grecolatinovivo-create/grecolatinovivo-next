'use client'
// CancelledBanner — mostrato quando Stripe rimanda l'utente con ?cancelled=true
// Client Component: legge searchParams tramite useSearchParams senza rompere SSG

import { useSearchParams } from 'next/navigation'

export default function CancelledBanner() {
  const sp = useSearchParams()
  const cancelled = sp.get('cancelled') === 'true' || sp.get('cancelled') === '1'

  if (!cancelled) return null

  return (
    <div
      role="alert"
      aria-live="polite"
      style={{
        background: '#fff8e1',
        borderBottom: '2px solid #C9A84C',
        padding: '0.85rem 1.5rem',
        textAlign: 'center',
        fontFamily: 'var(--font-body, sans-serif)',
        fontSize: '0.9rem',
        color: '#5a4000',
      }}
    >
      Il pagamento è stato annullato. Puoi riprovare quando vuoi — il corso ti aspetta.
    </div>
  )
}
