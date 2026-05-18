'use client'
// Catalogo corsi asincroni — /corsi/corsi-asincroni
// 56 corsi dal DB portale — NEURO_SPEC §2.4: tutto consultabile senza login
import { useState, useEffect } from 'react'
import type { AsyncCourse } from '@/types'
import { formatEur, langBadgeLabel } from '@/types'
import Link from 'next/link'

const LANGS = ['Latino', 'Greco', 'Egiziano', 'Ebraico', 'Sanscrito', 'Didattica']
const LEVELS = ['A1.1', 'A1.2', 'A2.1', 'A2.2', 'B1.1', 'B1.2', 'B1.3']

export default function CorsiAsincroniPage() {
  const [courses, setCourses] = useState<AsyncCourse[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [lang, setLang] = useState('')
  const [level, setLevel] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const params = new URLSearchParams()
    if (lang) params.set('lang', lang)
    if (level) params.set('level', level)
    params.set('limit', '56')

    setLoading(true)
    fetch(`/api/corsi-asincroni?${params}`)
      .then((r) => r.json())
      .then((d) => { setCourses(d.courses ?? []); setTotal(d.total ?? 0) })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [lang, level])

  // Filtro ricerca client-side
  const filtered = search
    ? courses.filter((c) =>
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.lang.toLowerCase().includes(search.toLowerCase())
      )
    : courses

  return (
    <>
      {/* HERO interno */}
      <section style={{ background: '#1A1A1A', padding: '60px 24px 48px', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: '#fff', marginBottom: '12px' }}>
            Corsi asincroni
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto' }}>
            {total || 56} corsi registrati, da seguire al tuo ritmo. Accesso a vita al materiale.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="catalog-layout" style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '40px', alignItems: 'start' }}>

            {/* SIDEBAR FILTRI */}
            <aside>
              <div style={{ background: '#fff', border: '1px solid #E8E0D0', borderRadius: '12px', padding: '24px', position: 'sticky', top: '90px' }}>
                <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1B3A6B', marginBottom: '16px' }}>
                  Filtra
                </h2>

                {/* Ricerca */}
                <div style={{ marginBottom: '20px' }}>
                  <label className="label" htmlFor="search">Cerca</label>
                  <input
                    id="search"
                    type="text"
                    className="input"
                    placeholder="Titolo o lingua..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                {/* Lingua */}
                <div style={{ marginBottom: '20px' }}>
                  <p className="label">Lingua</p>
                  {LANGS.map((l) => (
                    <label key={l} style={{ display: 'flex', gap: '8px', alignItems: 'center', cursor: 'pointer', padding: '4px 0', fontSize: '0.9rem', color: lang === l ? '#1B3A6B' : '#3A3A3A' }}>
                      <input
                        type="radio"
                        name="lang"
                        value={l}
                        checked={lang === l}
                        onChange={() => setLang(lang === l ? '' : l)}
                        style={{ accentColor: '#1B3A6B' }}
                      />
                      {l}
                    </label>
                  ))}
                </div>

                {/* Livello */}
                <div>
                  <p className="label">Livello QCER</p>
                  {LEVELS.map((lv) => (
                    <label key={lv} style={{ display: 'flex', gap: '8px', alignItems: 'center', cursor: 'pointer', padding: '4px 0', fontSize: '0.9rem', color: level === lv ? '#1B3A6B' : '#3A3A3A' }}>
                      <input
                        type="radio"
                        name="level"
                        value={lv}
                        checked={level === lv}
                        onChange={() => setLevel(level === lv ? '' : lv)}
                        style={{ accentColor: '#1B3A6B' }}
                      />
                      {lv}
                    </label>
                  ))}
                </div>

                {(lang || level || search) && (
                  <button
                    onClick={() => { setLang(''); setLevel(''); setSearch('') }}
                    style={{ marginTop: '16px', color: '#1B3A6B', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, padding: 0 }}
                  >
                    × Azzera filtri
                  </button>
                )}
              </div>
            </aside>

            {/* GRIGLIA CORSI */}
            <div>
              <p style={{ color: '#6B6B6B', fontSize: '0.875rem', marginBottom: '24px' }}>
                {loading ? 'Caricamento...' : `${filtered.length} corsi disponibili`}
              </p>

              {loading ? (
                /* Skeleton loader — NEURO_SPEC §8.2 */
                <div className="grid-3" style={{ gap: '20px' }}>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} style={{ background: '#E8E0D0', borderRadius: '12px', height: '220px', animation: 'pulse 1.5s infinite' }} />
                  ))}
                </div>
              ) : filtered.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 0', color: '#6B6B6B' }}>
                  <p style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Nessun corso corrisponde ai filtri selezionati.</p>
                  <p style={{ fontSize: '0.9rem' }}>Prova a modificare lingua o livello.</p>
                </div>
              ) : (
                <div className="grid-3" style={{ gap: '20px' }}>
                  {filtered.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @media (max-width: 768px) {
          .catalog-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

function CourseCard({ course }: { course: AsyncCourse }) {
  const priceStr = formatEur(course.priceEur)

  return (
    <Link href={`/corsi/corsi-asincroni/${course.slug}`} style={{ textDecoration: 'none' }}>
      <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
        {/* Thumbnail placeholder — sostituire con immagine reale */}
        <div style={{ background: 'linear-gradient(135deg, #1A1A1A, #2d1a1a)', borderRadius: '8px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', position: 'relative' }}>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 900, color: 'rgba(201,168,76,0.4)' }} aria-hidden="true">ΓΛ</span>
          {course.lessons && course.lessons.length > 0 && (
            <span style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(0,0,0,0.6)', color: '#fff', fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px' }}>
              Anteprima gratuita
            </span>
          )}
        </div>

        {/* Badge lingua + livello */}
        <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <span className="badge">{langBadgeLabel(course.lang)}</span>
          <span className="badge" style={{ background: '#F5F0E8', color: '#6B6B6B' }}>{course.level}</span>
        </div>

        {/* Titolo */}
        <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.975rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '4px', flex: 1 }}>
          {course.title}
        </h3>

        {/* Docente */}
        <p style={{ fontSize: '0.825rem', color: '#6B6B6B', marginBottom: '12px' }}>
          {course.teacherName}
        </p>

        {/* Prezzo + durata */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E8E0D0', paddingTop: '12px' }}>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, color: '#1B3A6B' }}>
            {priceStr}
          </span>
          {course.durationMin > 0 && (
            <span style={{ fontSize: '0.75rem', color: '#aaa' }}>
              {Math.round(course.durationMin / 60)}h
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
