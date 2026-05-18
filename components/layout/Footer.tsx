// Footer istituzionale — design Oxford/Cambridge
// COUNCIL sessione 2: #002147, Georgia, gold decorativo
// Link portale → https://www.portale.grecolatinovivo.it (target="_blank")
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#002147', padding: '4rem 2rem 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="footer-grid">

          {/* Colonna 1 — Brand */}
          <div className="footer-brand-col">
            <span className="footer-brand-name">
              Centro Nazionale di Studi Classici «GrecoLatinoVivo»
            </span>
            <p className="footer-tagline">
              «Le lingue classiche non sono morte: aspettano solo di essere incontrate nella loro forma viva.»
            </p>
            <p className="footer-sedi">
              Firenze &middot; Milano &middot; Torino &middot; Parma &middot; Pordenone
            </p>
            <p className="footer-sedi" style={{ marginTop: '4px' }}>
              Accreditato MIM &middot; Membro Associato ALTE &middot; Fondato 2015
            </p>
          </div>

          {/* Colonna 2 — Navigazione */}
          <nav aria-label="Link rapidi footer">
            <h4 className="footer-col-heading">Navigazione</h4>
            <ul className="footer-link-list">
              <li><Link href="/corsi/corsi-live">Corsi in Diretta</Link></li>
              <li><Link href="/corsi/corsi-asincroni">Corsi Asincroni</Link></li>
              <li><Link href="/corsi/lezioni-individuali">Tutoraggio</Link></li>
              <li><Link href="/commercio/abbonamento">Abbonamenti</Link></li>
              <li><Link href="/eventi">Eventi e Convegni</Link></li>
              <li><Link href="/corsi/formazione-docenti">Formazione Docenti</Link></li>
            </ul>
          </nav>

          {/* Colonna 3 — Il Centro */}
          <nav aria-label="Il Centro">
            <h4 className="footer-col-heading">Il Centro</h4>
            <ul className="footer-link-list">
              <li><Link href="/marketing/chi-siamo">Chi siamo</Link></li>
              <li><Link href="/marketing/metodologia">Metodologia</Link></li>
              <li><Link href="/marketing/staff">Docenti</Link></li>
              <li><Link href="/marketing/sedi">Sedi</Link></li>
              <li><Link href="/marketing/faq">FAQ</Link></li>
              <li><Link href="/marketing/contatti">Contatti</Link></li>
            </ul>
          </nav>

          {/* Colonna 4 — Contatti */}
          <div>
            <h4 className="footer-col-heading">Contatti</h4>
            <address style={{ fontStyle: 'normal' }}>
              <p className="footer-contact-line">
                <a href="tel:+393452456696">+39 345 245 6696</a>
              </p>
              <p className="footer-contact-line">
                <a href="mailto:info@grecolatinovivo.it">info@grecolatinovivo.it</a>
              </p>
              <p className="footer-contact-line" style={{ marginTop: '12px', lineHeight: 1.6 }}>
                Sede Firenze: [DA INSERIRE]
              </p>
              <p className="footer-contact-line">
                P.IVA: [DA INSERIRE]
              </p>
            </address>

            <div style={{ marginTop: '20px' }}>
              <a
                href="https://www.portale.grecolatinovivo.it"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-portale-btn"
              >
                Accedi al Portale ↗
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <p style={{ fontSize: '0.75rem', color: '#5a6e80', letterSpacing: '0.03em', margin: 0 }}>
            &copy; {year} Centro Nazionale di Studi Classici «GrecoLatinoVivo». Tutti i diritti riservati.
          </p>
          <ul style={{ display: 'flex', gap: '16px', listStyle: 'none', margin: 0 }}>
            <li><Link href="/marketing/privacy" style={{ color: '#5a6e80', fontSize: '0.75rem', textDecoration: 'none' }}>Privacy Policy</Link></li>
            <li><Link href="/marketing/termini-condizioni" style={{ color: '#5a6e80', fontSize: '0.75rem', textDecoration: 'none' }}>Termini</Link></li>
            <li><Link href="/marketing/contatti" style={{ color: '#5a6e80', fontSize: '0.75rem', textDecoration: 'none' }}>Contatti</Link></li>
          </ul>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          padding-bottom: 3rem;
        }
        .footer-brand-col {}
        .footer-brand-name {
          font-family: var(--font-heading, Georgia, serif);
          font-size: 1.1rem;
          font-weight: 400;
          color: #fff;
          display: block;
          margin-bottom: 1rem;
          line-height: 1.4;
        }
        .footer-tagline {
          font-family: var(--font-heading, Georgia, serif);
          font-style: italic;
          font-size: 0.875rem;
          color: #a8b8cc;
          line-height: 1.65;
          margin-bottom: 1rem;
          max-width: 320px;
        }
        .footer-sedi {
          font-size: 0.8rem;
          color: #7a8fa0;
          letter-spacing: 0.03em;
          margin-bottom: 0;
          font-family: var(--font-body, sans-serif);
        }
        .footer-col-heading {
          font-family: var(--font-body, sans-serif);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 1.25rem;
        }
        .footer-link-list {
          list-style: none;
          margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 0.6rem;
        }
        .footer-link-list a {
          font-size: 0.875rem;
          color: #a8b8cc;
          text-decoration: none;
          font-family: var(--font-body, sans-serif);
          transition: color 0.15s;
        }
        .footer-link-list a:hover { color: #fff; text-decoration: none; }
        .footer-contact-line {
          font-size: 0.875rem;
          color: #a8b8cc;
          margin-bottom: 0.4rem;
          font-family: var(--font-body, sans-serif);
        }
        .footer-contact-line a { color: #a8b8cc; text-decoration: none; }
        .footer-contact-line a:hover { color: #fff; }
        .footer-portale-btn {
          display: inline-block;
          border: 1px solid rgba(201,168,76,0.6);
          color: #C9A84C;
          font-family: var(--font-body, sans-serif);
          font-size: 0.8rem;
          letter-spacing: 0.04em;
          padding: 0.5rem 1rem;
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
        }
        .footer-portale-btn:hover {
          background: rgba(201,168,76,0.12);
          text-decoration: none;
          color: #C9A84C;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 1.5rem 2rem;
          margin-top: 0;
        }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .footer-brand-col { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
          .footer-brand-col { grid-column: auto; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  )
}
