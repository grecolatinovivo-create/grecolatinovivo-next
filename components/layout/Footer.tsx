// Footer istituzionale — navy scuro (#1A2A4A), 4 colonne
// Dati reali: tel +39 345 245 6696, info@grecolatinovivo.it
// Sedi: Firenze, Milano, Torino, Parma, Pordenone
// Citazione ufficiale dal codice esistente
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#1A2A4A', paddingTop: '64px' }}>

      {/* Striscia navy accento — separa footer dal body */}
      <div style={{ borderTop: '3px solid rgba(201,168,76,0.4)' }} />

      <div className="container" style={{ paddingTop: '60px' }}>
        <div className="footer-grid">

          {/* Colonna 1 — Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo__gl">ΓΛ</span>
              <span className="footer-logo__name">
                Centro Nazionale di Studi Classici<br />
                <em>«GrecoLatinoVivo»</em>
              </span>
            </div>
            <p className="footer-tagline">
              Studia le lingue dell&apos;antichità con i migliori docenti italiani.
              Dal 2015, accreditato MIM.
            </p>
            {/* Citazione ufficiale dal codice originale chi-siamo/page.tsx */}
            <blockquote className="footer-quote">
              «Le lingue classiche non sono morte: aspettano solo di essere incontrate
              nella loro forma viva.»
            </blockquote>
            <div style={{ marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body, Inter, sans-serif)' }}>
                Accreditato MIM
              </span>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
              <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body, Inter, sans-serif)' }}>
                Membro Associato ALTE
              </span>
            </div>
          </div>

          {/* Colonna 2 — Formazione */}
          <div>
            <h3 className="footer-heading">Formazione</h3>
            <ul className="footer-links">
              <li><Link href="/corsi/corsi-live">Corsi in Diretta</Link></li>
              <li><Link href="/corsi/corsi-asincroni">Corsi Asincroni</Link></li>
              <li><Link href="/corsi/lezioni-individuali">Tutoraggio 1:1</Link></li>
              <li><Link href="/corsi/minicorsi">Corsi Brevi Tematici</Link></li>
              <li><Link href="/corsi/formazione-docenti">Formazione Docenti MIM</Link></li>
              <li><Link href="/commercio/abbonamento">Piani abbonamento</Link></li>
            </ul>
          </div>

          {/* Colonna 3 — Centro */}
          <div>
            <h3 className="footer-heading">Il Centro</h3>
            <ul className="footer-links">
              <li><Link href="/marketing/chi-siamo">Chi siamo</Link></li>
              <li><Link href="/marketing/staff">Docenti</Link></li>
              <li><Link href="/marketing/metodologia">La nostra metodologia</Link></li>
              <li><Link href="/marketing/sedi">Le nostre sedi</Link></li>
              <li><Link href="/eventi">Eventi e convegni</Link></li>
              <li><Link href="/marketing/faq">Domande frequenti</Link></li>
            </ul>
          </div>

          {/* Colonna 4 — Contatti */}
          <div>
            <h3 className="footer-heading">Contatti</h3>
            <ul className="footer-links footer-links--contact">
              <li>
                <a href="tel:+393452456696" aria-label="Chiama il Centro">
                  +39 345 245 6696
                </a>
              </li>
              <li>
                <a href="mailto:info@grecolatinovivo.it" aria-label="Scrivi al Centro">
                  info@grecolatinovivo.it
                </a>
              </li>
              <li style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', marginTop: '12px', lineHeight: 1.6 }}>
                {/* 5 sedi verificate da chi-siamo/page.tsx */}
                Firenze &middot; Milano &middot; Torino<br />Parma &middot; Pordenone
              </li>
              <li style={{ marginTop: '16px' }}>
                <a
                  href={process.env.NEXT_PUBLIC_PORTALE_URL ?? 'https://portale.grecolatinovivo.it'}
                  style={{
                    display: 'inline-block',
                    background: 'rgba(201,168,76,0.15)',
                    border: '1px solid rgba(201,168,76,0.4)',
                    color: '#C9A84C',
                    fontFamily: 'var(--font-body, Inter, sans-serif)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    padding: '7px 16px',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    transition: 'background 0.15s',
                  }}
                  rel="noopener"
                >
                  Accedi al Portale
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', margin: 0, fontFamily: 'var(--font-body, Inter, sans-serif)' }}>
            &copy; {year} Centro Nazionale di Studi Classici «GrecoLatinoVivo» &mdash; Tutti i diritti riservati
          </p>
          <ul style={{ display: 'flex', gap: '16px', listStyle: 'none', margin: 0 }}>
            <li><Link href="/marketing/privacy" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem' }}>Privacy Policy</Link></li>
            <li><Link href="/marketing/termini-condizioni" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem' }}>Termini di servizio</Link></li>
            <li><Link href="/marketing/contatti" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem' }}>Contatti</Link></li>
          </ul>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 44px;
          padding-bottom: 52px;
        }
        .footer-logo {
          display: flex; align-items: center; gap: 10px; margin-bottom: 16px;
        }
        .footer-logo__gl {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: 2rem; font-weight: 900; color: #C9A84C;
          letter-spacing: -0.02em;
        }
        .footer-logo__name {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: 0.82rem; font-weight: 700; color: rgba(255,255,255,0.9); line-height: 1.4;
        }
        .footer-logo__name em { font-style: italic; color: rgba(255,255,255,0.5); font-size: 0.78rem; }
        .footer-tagline {
          font-size: 0.865rem; color: rgba(255,255,255,0.5); line-height: 1.65;
          margin-bottom: 12px; font-family: var(--font-body, Inter, sans-serif);
        }
        .footer-quote {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: 0.8rem; font-style: italic;
          color: rgba(201,168,76,0.65);
          border-left: 2px solid rgba(201,168,76,0.25);
          padding-left: 12px; margin: 0;
          line-height: 1.6;
        }
        .footer-heading {
          font-family: var(--font-body, Inter, sans-serif); font-size: 0.68rem;
          font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em;
          color: rgba(255,255,255,0.4); margin-bottom: 16px;
        }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 9px; }
        .footer-links a {
          color: rgba(255,255,255,0.6); font-size: 0.865rem;
          font-family: var(--font-body, Inter, sans-serif);
          text-decoration: none; transition: color 0.15s;
        }
        .footer-links a:hover { color: rgba(255,255,255,0.95); text-decoration: none; }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 18px 0;
          margin-top: 8px;
        }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; gap: 28px; }
          .footer-brand { grid-column: auto; }
        }
      `}</style>
    </footer>
  )
}
