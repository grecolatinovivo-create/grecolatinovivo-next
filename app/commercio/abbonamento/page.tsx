// Pagina abbonamento — /commercio/abbonamento
// Presenta i 3 piani con toggle mensile/annuale
// Integra il flusso Stripe (data-plan, data-open-register — pattern portale)
import type { Metadata } from 'next'
import Link from 'next/link'
import { PLANS } from '@/types'

export const metadata: Metadata = {
  title: 'Piani abbonamento — GrecoLatinoVivo',
  description: 'Abbonati al portale GLV: Cultura €5,90/mese, Linguae €12,90/mese, Accademia €19,90/mese. Accedi a tutti i corsi registrati di Latino, Greco, Egiziano e Ebraico.',
  alternates: { canonical: 'https://grecolatinovivo.it/commercio/abbonamento' },
}

export default function AbbonamentoPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: '#1A1A1A', padding: '72px 24px 60px', textAlign: 'center' }}>
        <div className="container-narrow">
          <p style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>
            Il portale abbonamento
          </p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#fff', marginBottom: '16px', lineHeight: 1.15 }}>
            Accedi a tutti i corsi<br />con un unico abbonamento
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto 0' }}>
            Latino, Greco, Egiziano, Ebraico e Sanscrito. 56 corsi e contando.
            Disdici quando vuoi.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="section section--alt">
        <div className="container" style={{ textAlign: 'center' }}>

          {/* Toggle mensile/annuale */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', background: '#E8E0D0', borderRadius: '8px', padding: '4px', gap: '4px' }}>
              <button id="tog-monthly" className="tog-btn tog-btn--active" aria-pressed="true">
                Mensile
              </button>
              <button id="tog-annual" className="tog-btn" aria-pressed="false">
                Annuale &nbsp;<strong style={{ color: '#1e7e34' }}>Risparmia fino a 60€</strong>
              </button>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#aaa', marginTop: '8px' }}>
              Con il piano annuale risparmi rispetto a 12 mesi separati.
            </p>
          </div>

          {/* Cards — Cultura prima (ancoraggio NEURO_SPEC §2.5) */}
          <div className="grid-3" style={{ maxWidth: '1020px', margin: '0 auto', alignItems: 'start' }}>
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`card pricing-card ${plan.isFeatured ? 'pricing-card--featured' : ''}`}
                style={{ display: 'flex', flexDirection: 'column', position: 'relative', paddingTop: plan.badge ? '32px' : '24px' }}
              >
                {plan.badge && (
                  <div className="pricing-badge" aria-label={`Piano consigliato: ${plan.badge}`}>
                    {plan.badge}
                  </div>
                )}

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8B1A1A', marginBottom: '6px' }}>
                  PIANO
                </p>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '4px' }}>
                  {plan.name}
                </h2>
                <p style={{ color: '#6B6B6B', fontSize: '0.875rem', marginBottom: '20px' }}>
                  {plan.subtitle}
                </p>

                {/* Prezzo */}
                <div style={{ marginBottom: '8px' }}>
                  <span
                    className="price-monthly"
                    style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.4rem', fontWeight: 700, color: '#1A1A1A' }}
                  >
                    €{plan.priceMonthly.toFixed(2).replace('.', ',')}
                  </span>
                  <span
                    className="price-annual"
                    style={{ display: 'none', fontFamily: 'Playfair Display, serif', fontSize: '2.4rem', fontWeight: 700, color: '#1A1A1A' }}
                  >
                    €{plan.priceAnnual}
                  </span>
                  <span style={{ color: '#6B6B6B', fontSize: '0.9rem' }}>
                    &nbsp;<span className="price-period">/mese</span>
                  </span>
                </div>
                <p className="price-annual" style={{ display: 'none', fontSize: '0.8rem', color: '#1e7e34', marginBottom: '16px' }}>
                  Fatturato annualmente
                </p>
                <p className="price-monthly" style={{ fontSize: '0.8rem', color: '#aaa', marginBottom: '16px' }}>
                  Fatturato mensilmente
                </p>

                {/* Features */}
                <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.875rem', color: '#3A3A3A' }}>
                      <span style={{ color: '#1e7e34', fontWeight: 700, flexShrink: 0, fontSize: '1rem' }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={`/auth/login?redirect=/commercio/abbonamento&piano=${plan.id}`}
                  className={`btn ${plan.isFeatured ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%', justifyContent: 'center' }}
                  data-plan={plan.id}
                >
                  {plan.id === 'cultura'
                    ? 'Inizia con Cultura'
                    : plan.id === 'linguae'
                    ? 'Scegli Linguae'
                    : "Accedi all'Accademia"}
                </Link>
                <p style={{ fontSize: '0.72rem', color: '#aaa', textAlign: 'center', marginTop: '8px' }}>
                  Disdici quando vuoi. Nessun vincolo.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARAZIONE */}
      <section className="section">
        <div className="container-narrow">
          <h2 className="section-title text-center reveal">
            <span className="section-title__underline">A cosa hai accesso</span>
          </h2>
          <div style={{ marginTop: '40px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #E8E0D0' }}>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#6B6B6B', fontWeight: 600 }}>Funzionalità</th>
                  {PLANS.map((p) => (
                    <th key={p.id} style={{ padding: '12px', color: p.isFeatured ? '#8B1A1A' : '#3A3A3A', fontWeight: 700, textAlign: 'center' }}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Accesso portale studenti', v: ['✓', '✓', '✓'] },
                  { label: 'Catalogo corsi registrati', v: ['Base', 'Completo', 'Completo'] },
                  { label: 'Materiali scaricabili', v: ['—', '✓', '✓'] },
                  { label: 'Attestati di completamento', v: ['—', '✓', '✓'] },
                  { label: 'Corsi formazione docenti MIM', v: ['—', '—', '✓'] },
                  { label: 'Percorsi personalizzati', v: ['—', '—', '✓'] },
                  { label: 'Accesso anticipato nuovi corsi', v: ['—', '—', '✓'] },
                ].map((row) => (
                  <tr key={row.label} style={{ borderBottom: '1px solid #F5F0E8' }}>
                    <td style={{ padding: '12px', color: '#3A3A3A' }}>{row.label}</td>
                    {row.v.map((val, i) => (
                      <td key={i} style={{ padding: '12px', textAlign: 'center', color: val === '✓' ? '#1e7e34' : val === '—' ? '#ccc' : '#3A3A3A', fontWeight: val === '✓' ? 700 : 400 }}>
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Script toggle */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          var togM = document.getElementById('tog-monthly');
          var togA = document.getElementById('tog-annual');
          if (!togM || !togA) return;
          function setMonthly() {
            togM.classList.add('tog-btn--active'); togA.classList.remove('tog-btn--active');
            togM.setAttribute('aria-pressed','true'); togA.setAttribute('aria-pressed','false');
            document.querySelectorAll('.price-monthly').forEach(function(el){el.style.display='';});
            document.querySelectorAll('.price-annual').forEach(function(el){el.style.display='none';});
            document.querySelectorAll('.price-period').forEach(function(el){el.textContent='/mese';});
          }
          function setAnnual() {
            togA.classList.add('tog-btn--active'); togM.classList.remove('tog-btn--active');
            togA.setAttribute('aria-pressed','true'); togM.setAttribute('aria-pressed','false');
            document.querySelectorAll('.price-monthly').forEach(function(el){el.style.display='none';});
            document.querySelectorAll('.price-annual').forEach(function(el){el.style.display='';});
            document.querySelectorAll('.price-period').forEach(function(el){el.textContent='/anno';});
          }
          togM.addEventListener('click', setMonthly);
          togA.addEventListener('click', setAnnual);
        })();
      `}} />

      <style>{`
        .pricing-card { transition: transform 0.2s, box-shadow 0.2s; }
        .pricing-card--featured { border: 2px solid #8B1A1A; box-shadow: 0 8px 32px rgba(139,26,26,0.12); }
        .pricing-card--featured:hover { transform: translateY(-6px); }
        .pricing-badge {
          position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
          background: #8B1A1A; color: #fff;
          font-family: Inter, sans-serif; font-size: 0.72rem; font-weight: 700;
          padding: 4px 14px; border-radius: 20px; white-space: nowrap;
        }
        .tog-btn {
          background: transparent; border: none; cursor: pointer;
          font-family: Inter, sans-serif; font-size: 0.9rem; font-weight: 500;
          color: #6B6B6B; padding: 10px 20px; border-radius: 6px; transition: all 0.15s;
        }
        .tog-btn--active { background: #fff; color: #1A1A1A; font-weight: 600; box-shadow: 0 1px 4px rgba(0,0,0,0.1); }
        .text-center { text-align: center; }
      `}</style>
    </>
  )
}
