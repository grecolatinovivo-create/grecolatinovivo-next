// Footer 4 colonne — dati reali da chi-siamo.html e README_NUOVO.md
// Contatti: tel +39 345 245 6696, info@grecolatinovivo.it
// Sedi: Firenze, Milano, Torino, Parma, Pordenone (da chi-siamo.html numeri-grid)
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#1A1A1A', paddingTop: '60px' }}>
      <div className="container">
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
            {/* Citazione ufficiale da chi-siamo.html missione-quote */}
            <blockquote className="footer-quote">
              «Le lingue classiche non sono morte: aspettano solo di essere incontrate
              nella loro forma viva.»
            </blockquote>
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
              <li><Link href="/chi-siamo">Chi siamo</Link></li>
              <li><Link href="/staff">Docenti</Link></li>
              <li><Link href="/metodologia">La nostra metodologia</Link></li>
              <li><Link href="/sedi">Le nostre sedi</Link></li>
              <li><Link href="/eventi">Eventi e convegni</Link></li>
              <li><Link href="/faq">Domande frequenti</Link></li>
            </ul>
          </div>

          {/* Colonna 4 — Contatti */}
          <div>
            <h3 className="footer-heading">Contatti</h3>
            <ul className="footer-links footer-links--contact">
              <li>
                <a href="tel:+393452456696" aria-label="Telefono">
                  +39 345 245 6696
                </a>
              </li>
              <li>
                <a href="mailto:info@grecolatinovivo.it" aria-label="Email">
                  info@grecolatinovivo.it
                </a>
              </li>
              <li style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', marginTop: '8px' }}>
                {/* 5 sedi da chi-siamo.html numeri-grid */}
                Firenze · Milano · Torino<br />Parma · Pordenone
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', margin: 0 }}>
            © {year} Centro Nazionale di Studi Classici «GrecoLatinoVivo» — Tutti i diritti riservati
          </p>
          <ul style={{ display: 'flex', gap: '16px', listStyle: 'none', margin: 0 }}>
            <li><Link href="/privacy" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>Privacy Policy</Link></li>
            <li><Link href="/termini-condizioni" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>Termini di servizio</Link></li>
            <li><Link href="/contatti" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>Contatti</Link></li>
          </ul>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 48px;
        }
        .footer-logo {
          display: flex; align-items: center; gap: 10px; margin-bottom: 16px;
        }
        .footer-logo__gl {
          font-family: 'Playfair Display', serif;
          font-size: 2rem; font-weight: 900; color: #C9A84C;
        }
        .footer-logo__name {
          font-family: 'Playfair Display', serif;
          font-size: 0.85rem; font-weight: 700; color: #fff; line-height: 1.4;
        }
        .footer-logo__name em { font-style: italic; color: rgba(255,255,255,0.6); font-size: 0.8rem; }
        .footer-tagline {
          font-size: 0.875rem; color: rgba(255,255,255,0.55); line-height: 1.6;
          margin-bottom: 12px;
        }
        .footer-quote {
          font-family: 'Playfair Display', serif;
          font-size: 0.8rem; font-style: italic;
          color: rgba(201,168,76,0.7);
          border-left: 2px solid rgba(201,168,76,0.3);
          padding-left: 12px; margin: 0;
        }
        .footer-heading {
          font-family: Inter, sans-serif; font-size: 0.7rem;
          font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;
          color: rgba(255,255,255,0.5); margin-bottom: 16px;
        }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .footer-links a {
          color: rgba(255,255,255,0.65); font-size: 0.875rem;
          text-decoration: none; transition: color 0.15s;
        }
        .footer-links a:hover { color: #fff; text-decoration: none; }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 16px 0;
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
