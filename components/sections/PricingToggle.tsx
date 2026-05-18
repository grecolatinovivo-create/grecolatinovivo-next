'use client'
// PricingToggle — toggle mensile/annuale come React client component
// Sostituisce dangerouslySetInnerHTML + vanilla JS — fix QA_REPORT
// Dati piani da types/index.ts: Cultura €5,90, Linguae €12,90, Accademia €19,90

import { useState } from 'react'
import Link from 'next/link'
import { PLANS } from '@/types'

export default function PricingToggle() {
  const [period, setPeriod] = useState<'monthly' | 'annual'>('monthly')

  return (
    <div>
      {/* Toggle mensile/annuale */}
      <div style={{ marginBottom: '44px' }}>
        <div style={{
          display: 'inline-flex',
          background: '#DDE3ED',
          borderRadius: '6px',
          padding: '4px',
          gap: '4px',
        }}>
          <button
            onClick={() => setPeriod('monthly')}
            aria-pressed={period === 'monthly'}
            style={{
              background: period === 'monthly' ? '#fff' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-body, Inter, sans-serif)',
              fontSize: '0.875rem',
              fontWeight: period === 'monthly' ? 600 : 500,
              color: period === 'monthly' ? '#1a1a1a' : '#555555',
              padding: '8px 20px',
              borderRadius: '4px',
              transition: 'all 0.15s',
              boxShadow: period === 'monthly' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
            }}
          >
            Mensile
          </button>
          <button
            onClick={() => setPeriod('annual')}
            aria-pressed={period === 'annual'}
            style={{
              background: period === 'annual' ? '#fff' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-body, Inter, sans-serif)',
              fontSize: '0.875rem',
              fontWeight: period === 'annual' ? 600 : 500,
              color: period === 'annual' ? '#1a1a1a' : '#555555',
              padding: '8px 20px',
              borderRadius: '4px',
              transition: 'all 0.15s',
              boxShadow: period === 'annual' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
            }}
          >
            Annuale{' '}
            <span style={{ color: '#1e7e34', fontWeight: 700, fontSize: '0.8rem' }}>
              — risparmio incluso
            </span>
          </button>
        </div>
      </div>

      {/* Tre piani */}
      <div className="grid-3" style={{ maxWidth: '960px', margin: '0 auto' }}>
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className="card reveal"
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              border: plan.isFeatured ? '2px solid #002147' : '1px solid #DDE3ED',
              boxShadow: plan.isFeatured ? '0 8px 32px rgba(0,33,71,0.12)' : undefined,
            }}
          >
            {/* Badge piano in evidenza */}
            {plan.badge && (
              <div style={{
                position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)',
                background: '#002147', color: '#fff',
                fontFamily: 'var(--font-body, Inter, sans-serif)', fontSize: '0.7rem', fontWeight: 700,
                padding: '4px 16px', borderRadius: '3px', whiteSpace: 'nowrap',
              }}>
                {plan.badge}
              </div>
            )}

            <p style={{
              fontFamily: 'var(--font-body, Inter, sans-serif)',
              fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.12em', color: '#002147', marginBottom: '4px',
            }}>
              Piano
            </p>

            <h3 style={{
              fontFamily: 'var(--font-heading, Playfair Display, serif)',
              fontSize: '1.5rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px',
            }}>
              {plan.name}
            </h3>

            <p style={{ color: '#555555', fontSize: '0.875rem', marginBottom: '20px' }}>
              {plan.subtitle}
            </p>

            {/* Prezzo */}
            <div style={{ marginBottom: '24px' }}>
              <span style={{
                fontFamily: 'var(--font-heading, Playfair Display, serif)',
                fontSize: '2.4rem', fontWeight: 700, color: '#1a1a1a',
              }}>
                &euro;{period === 'monthly'
                  ? plan.priceMonthly.toFixed(2).replace('.', ',')
                  : plan.priceAnnual}
              </span>
              <span style={{ color: '#555555', fontSize: '0.875rem' }}>
                {period === 'monthly' ? '/mese' : '/anno'}
              </span>
              {period === 'annual' && (
                <p style={{ fontSize: '0.78rem', color: '#1e7e34', marginTop: '4px', fontWeight: 600 }}>
                  Equivale a &euro;{(plan.priceAnnual / 12).toFixed(2).replace('.', ',')}/mese
                </p>
              )}
            </div>

            {/* Features */}
            <ul style={{ listStyle: 'none', marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
              {plan.features.map((f) => (
                <li key={f} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '0.875rem', color: '#3A4A5A' }}>
                  <span style={{ color: '#1e7e34', fontWeight: 700, flexShrink: 0 }}>&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={`https://portale.grecolatinovivo.it/abbonamento?piano=${plan.id}&periodo=${period}`}
              className={`btn ${plan.isFeatured ? 'btn-primary' : 'btn-secondary'}`}
              style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}
              rel="noopener"
            >
              {plan.id === 'cultura' ? 'Scegli Cultura' : plan.id === 'linguae' ? 'Scegli Linguae' : 'Scegli Accademia'}
            </a>

            <p style={{ fontSize: '0.73rem', color: '#555555', textAlign: 'center', marginTop: '10px', marginBottom: 0 }}>
              Disdici in qualsiasi momento.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
