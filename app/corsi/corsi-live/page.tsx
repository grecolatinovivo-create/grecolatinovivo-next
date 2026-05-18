'use client'
// Catalogo corsi in diretta — /corsi/corsi-live
// [DA INSERIRE — calendario corsi live 2025/2026 da Giampiero]
// I corsi live sono nel DB nella tabella LiveCourse
import { useState, useEffect } from 'react'
import type { LiveCourse } from '@/types'
import { formatEur } from '@/types'
import Link from 'next/link'

export default function CorsiLivePage() {
  const [courses, setCourses] = useState<LiveCourse[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/corsi-live')
      .then((r) => r.json())
      .then((d) => setCourses(d.courses ?? []))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <section style={{ background: '#002147', padding: '72px 24px 56px', textAlign: 'center' }}>
        <div className="container-narrow">
          <p style={{ color: '#C9A84C', fontFamily: 'var(--font-body, Inter, sans-serif)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>
            Formazione in diretta
          </p>
          <h1 style={{ fontFamily: 'var(--font-heading, Playfair Display, serif)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 400, color: '#fff', marginBottom: '16px' }}>
            Corsi in Diretta
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto' }}>
            Lezioni live con docenti universitari. Massimo 15 studenti per classe,
            feedback in tempo reale.
          </p>
        </div>
      </section>

      {/* Caratteristiche chiave */}
      <section style={{ background: '#002147', padding: '20px 24px' }}>
        <div className="container" style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            '✓ Massimo 15 studenti per classe',
            '✓ Docenti universitari',
            '✓ Feedback in tempo reale',
            '✓ Accreditato MIM',
          ].map((f) => (
            <span key={f} style={{ fontFamily: 'var(--font-body, Inter, sans-serif)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>
              {f}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          {loading ? (
            <div className="grid-3" style={{ gap: '24px' }}>
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} style={{ background: '#E8E0D0', borderRadius: '12px', height: '280px', animation: 'pulse 1.5s infinite' }} />
              ))}
            </div>
          ) : courses.length === 0 ? (
            /* Empty state — NEURO_SPEC §4.3 */
            <div style={{ textAlign: 'center', padding: '80px 24px' }}>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#3A3A3A', marginBottom: '12px' }}>
                Il calendario corsi {new Date().getFullYear()}/{new Date().getFullYear() + 1} è in fase di pubblicazione.
              </p>
              <p style={{ color: '#6B6B6B', marginBottom: '28px' }}>
                Scrivici per essere informato alla pubblicazione del calendario.
              </p>
              <Link href="/contatti" className="btn btn-primary">
                Richiedi informazioni
              </Link>
            </div>
          ) : (
            <div className="grid-3" style={{ gap: '24px' }}>
              {courses.map((course) => (
                <LiveCourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.5} }
      `}</style>
    </>
  )
}

function LiveCourseCard({ course }: { course: LiveCourse }) {
  const nextSession = course.sessions
    .filter((s) => new Date(s.scheduledAt) > new Date())
    .sort((a, b) => new Date(a.scheduledAt).getTime() - new Date(b.scheduledAt).getTime())[0]

  const bookingsCount = course._count?.bookings ?? 0
  const spotsLeft = course.maxStudents - bookingsCount
  const isFull = spotsLeft <= 0

  return (
    <div className="card reveal" style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
        <span className="badge">{course.lang.toUpperCase()}</span>
        <span className="badge" style={{ background: '#F5F0E8', color: '#6B6B6B' }}>{course.level}</span>
      </div>

      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '6px' }}>
        {course.title}
      </h2>

      <p style={{ fontSize: '0.85rem', color: '#002147', fontWeight: 600, marginBottom: '4px' }}>
        {course.teacher.name}
      </p>

      <p style={{ fontSize: '0.8rem', color: '#6B6B6B', marginBottom: '16px', flex: 1, lineHeight: 1.6 }}>
        {course.description.substring(0, 120)}...
      </p>

      {nextSession && (
        <p style={{ fontSize: '0.8rem', color: '#3A3A3A', marginBottom: '8px', padding: '8px', background: '#F5F0E8', borderRadius: '6px' }}>
          📅 Prossima lezione: {new Date(nextSession.scheduledAt).toLocaleString('it-IT', { day: '2-digit', month: 'long', hour: '2-digit', minute: '2-digit' })}
        </p>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E8E0D0', paddingTop: '12px', marginBottom: '12px' }}>
        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 700, color: '#002147' }}>
          {formatEur(course.priceEur)}
        </span>
        {!isFull && spotsLeft <= 5 && (
          <span style={{ fontSize: '0.75rem', color: '#002147', fontWeight: 600 }}>
            Solo {spotsLeft} posti
          </span>
        )}
      </div>

      {isFull ? (
        <button disabled className="btn btn-secondary" style={{ opacity: 0.5, cursor: 'not-allowed', width: '100%', justifyContent: 'center' }}>
          Corso completo
        </button>
      ) : (
        <Link href={`/corsi/corsi-live/${course.id}`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}>
          Prenota il tuo posto
        </Link>
      )}
    </div>
  )
}
