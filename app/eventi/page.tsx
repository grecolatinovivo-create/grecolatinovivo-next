'use client'
// Calendario eventi — /eventi
// [DA INSERIRE — calendario eventi 2025/2026 da Giampiero]
import { useState, useEffect } from 'react'
import type { Event } from '@/types'
import { formatEur } from '@/types'
import Link from 'next/link'

export default function EventiPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/eventi')
      .then((r) => r.json())
      .then((d) => setEvents(d.events ?? []))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const eventTypeLabel: Record<string, string> = {
    convegno: 'CONVEGNO',
    seminario: 'SEMINARIO',
    biduum: 'BIDUUM LATINITATIS',
    'giornata-studio': 'GIORNATA DI STUDIO',
    workshop: 'WORKSHOP',
  }

  return (
    <>
      <section style={{ background: '#1A1A1A', padding: '72px 24px 56px', textAlign: 'center' }}>
        <div className="container-narrow">
          <p style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>
            Vita del Centro
          </p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: '#fff', marginBottom: '16px' }}>
            Eventi e convegni
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto' }}>
            Seminari, convegni accademici, Bidua Latinitatis e giornate di studio.
            Partecipa alla vita del Centro.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#6B6B6B' }}>
              <p>Caricamento eventi...</p>
            </div>
          ) : events.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#3A3A3A', marginBottom: '8px' }}>
                Nessun evento in programma al momento.
              </p>
              <p style={{ color: '#6B6B6B' }}>
                Torna a trovarci presto o{' '}
                <a href="mailto:info@grecolatinovivo.it" style={{ color: '#8B1A1A' }}>
                  iscriviti alla newsletter
                </a>{' '}
                per restare aggiornato.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
              {events.map((event) => {
                const start = new Date(event.startsAt)
                const ticketsSold = event._count?.tickets ?? 0
                const available = event.maxTickets - ticketsSold
                const isSoldOut = available <= 0
                const isFree = event.priceEur === 0

                return (
                  <div key={event.id} className="card reveal" style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: '24px', alignItems: 'start' }}>
                    {/* Data — box */}
                    <div style={{ background: '#8B1A1A', borderRadius: '8px', padding: '12px 8px', textAlign: 'center', flexShrink: 0 }}>
                      <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>
                        {start.getDate()}
                      </div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase' }}>
                        {start.toLocaleDateString('it-IT', { month: 'short' })}
                      </div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>
                        {start.getFullYear()}
                      </div>
                    </div>

                    {/* Contenuto */}
                    <div>
                      <span className="badge" style={{ marginBottom: '8px', display: 'inline-block' }}>
                        {eventTypeLabel[event.eventType] ?? event.eventType.toUpperCase()}
                      </span>
                      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '6px' }}>
                        {event.title}
                      </h2>
                      <p style={{ fontSize: '0.875rem', color: '#6B6B6B', marginBottom: '8px' }}>
                        📍 {event.location} &nbsp;·&nbsp;
                        {start.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                      {!isSoldOut && available <= 10 && (
                        <p style={{ fontSize: '0.8rem', color: '#8B1A1A', fontWeight: 600 }}>
                          Solo {available} posti disponibili
                        </p>
                      )}
                    </div>

                    {/* Prezzo + CTA */}
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>
                        {isFree ? <span style={{ color: '#1e7e34' }}>Gratuito</span> : formatEur(event.priceEur)}
                      </div>
                      {isSoldOut ? (
                        <span style={{ color: '#dc3545', fontSize: '0.85rem', fontWeight: 600 }}>Esaurito</span>
                      ) : (
                        <Link href={`/eventi/${event.id}`} className="btn btn-primary btn-sm">
                          {isFree ? 'Registrati' : 'Acquista biglietto'}
                        </Link>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA newsletter / contatti */}
      <section className="section section--alt" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 className="section-title reveal">
            <span className="section-title__underline">Non perderti nessun evento</span>
          </h2>
          <p style={{ color: '#6B6B6B', marginBottom: '24px' }}>
            Scrivici a{' '}
            <a href="mailto:info@grecolatinovivo.it" style={{ color: '#8B1A1A' }}>
              info@grecolatinovivo.it
            </a>{' '}
            per essere informato sui prossimi eventi e convegni.
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          .event-card-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
