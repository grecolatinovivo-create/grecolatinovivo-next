// 404 Not Found — pagina di errore custom
// Next.js la usa automaticamente per qualsiasi route non trovata
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pagina non trovata',
  description: 'La pagina che stai cercando non esiste o è stata spostata.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <>
      <section style={{
        background: '#1A1A1A',
        minHeight: 'calc(100vh - 160px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 24px',
      }}>
        <div style={{ maxWidth: '480px' }}>
          {/* Numero errore decorativo */}
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(5rem, 15vw, 9rem)',
            fontWeight: 900,
            color: 'rgba(201,168,76,0.18)',
            lineHeight: 1,
            marginBottom: '0',
            userSelect: 'none',
          }} aria-hidden="true">
            404
          </p>

          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '16px',
            marginTop: '-8px',
          }}>
            Pagina non trovata
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1rem',
            lineHeight: 1.7,
            marginBottom: '36px',
          }}>
            La pagina che stai cercando non esiste o è stata spostata.
            Prova a navigare dal menu oppure torna alla home.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-primary" style={{ padding: '14px 28px' }}>
              ← Torna alla home
            </Link>
            <Link href="/corsi/corsi-asincroni" className="btn btn-ghost" style={{ padding: '14px 28px' }}>
              Sfoglia i corsi
            </Link>
          </div>

          {/* Citazione latina — coerente col tono del sito */}
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontStyle: 'italic',
            color: 'rgba(201,168,76,0.5)',
            fontSize: '0.9rem',
            marginTop: '48px',
          }}>
            «Errare humanum est» — Seneca
          </p>
        </div>
      </section>
    </>
  )
}
