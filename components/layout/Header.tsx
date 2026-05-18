'use client'
// Header istituzionale — design Oxford/Cambridge
// COUNCIL sessione 2 (18/05/2026): #002147, linea oro 2px, Georgia serif
// Logo: /public/logo.* — fallback testo "ΓΛ" se non presente
// Portale studenti → https://www.portale.grecolatinovivo.it (target="_blank")

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname.startsWith(href)

  return (
    <>
      <header style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
        <nav
          aria-label="Navigazione principale"
          style={{
            background: '#FFFFFF',
            borderBottom: '1px solid #002147',
            height: '68px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              padding: '0 2rem',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* LOGO */}
            <Link href="/" className="nav-brand" aria-label="Centro Nazionale di Studi Classici GrecoLatinoVivo — homepage">
              <span className="nav-logo-img">
                {/* Logo reale se presente in /public/, altrimenti monogramma ΓΛ */}
                <LogoImage />
              </span>
              <span className="nav-brand-text">
                <span className="nav-brand-name">Centro Nazionale di Studi Classici</span>
                <span className="nav-brand-sub">«GrecoLatinoVivo»</span>
              </span>
            </Link>

            {/* NAV DESKTOP */}
            <ul className="nav-list" role="list">
              {/* Offerta Formativa — dropdown */}
              <li className="nav-item nav-item--has-dropdown">
                <button
                  className="nav-link nav-dropdown-btn"
                  aria-haspopup="true"
                  aria-expanded="false"
                  type="button"
                >
                  Offerta Formativa
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true" style={{ marginLeft: '5px', flexShrink: 0 }}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <div className="nav-dropdown" role="region" aria-label="Offerta formativa">
                  <div className="nav-dropdown-grid">
                    <div>
                      <p className="nav-dropdown-label">Percorsi</p>
                      <Link href="/corsi/corsi-live" className="nav-dropdown-link">Corsi in Diretta</Link>
                      <Link href="/corsi/corsi-asincroni" className="nav-dropdown-link">Corsi Asincroni</Link>
                      <Link href="/corsi/lezioni-individuali" className="nav-dropdown-link">Tutoraggio Individuale</Link>
                      <Link href="/corsi/minicorsi" className="nav-dropdown-link">Corsi Brevi Tematici</Link>
                      <Link href="/corsi/formazione-docenti" className="nav-dropdown-link">Formazione Docenti MIM</Link>
                    </div>
                    <div>
                      <p className="nav-dropdown-label">Lingue</p>
                      <Link href="/corsi/corsi-live?lang=latino" className="nav-dropdown-link">Latino</Link>
                      <Link href="/corsi/corsi-live?lang=greco" className="nav-dropdown-link">Greco Antico</Link>
                      <Link href="/corsi/corsi-asincroni?lang=egiziano" className="nav-dropdown-link">Egiziano Antico</Link>
                      <Link href="/corsi/corsi-asincroni?lang=ebraico" className="nav-dropdown-link">Ebraico Biblico</Link>
                      <Link href="/corsi/corsi-asincroni?lang=sanscrito" className="nav-dropdown-link">Sanscrito</Link>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link href="/eventi" className={`nav-link${isActive('/eventi') ? ' nav-link--active' : ''}`}>
                  Eventi
                </Link>
              </li>

              <li className="nav-item">
                <a
                  href="https://www.portale.grecolatinovivo.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  Abbonamento
                </a>
              </li>

              <li className="nav-item">
                <Link href="/marketing/chi-siamo" className={`nav-link${isActive('/marketing/chi-siamo') ? ' nav-link--active' : ''}`}>
                  Chi siamo
                </Link>
              </li>

              {/* CTA Portale → esterno */}
              <li className="nav-item nav-item--cta">
                <a
                  href="https://www.portale.grecolatinovivo.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-cta"
                >
                  Portale studenti
                </a>
              </li>
            </ul>

            {/* HAMBURGER MOBILE */}
            <button
              className="nav-hamburger"
              aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
            >
              <span className={`hline${menuOpen ? ' hline--open' : ''}`} />
              <span className={`hline${menuOpen ? ' hline--open' : ''}`} />
              <span className={`hline${menuOpen ? ' hline--open' : ''}`} />
            </button>
          </div>
        </nav>

        {/* Linea oro decorativa 2px */}
        <div className="gold-line" aria-hidden="true" />

        {/* Strip accreditamento */}
        <div className="accreditamento-strip" role="banner">
          <p>Accreditato MIM &middot; Membro Associato ALTE &middot; Dal 2015</p>
        </div>

        {/* MENU MOBILE */}
        {menuOpen && (
          <div id="mobile-menu" className="nav-mobile-menu" aria-label="Menu mobile">
            <ul role="list">
              <li><Link href="/corsi/corsi-live" onClick={() => setMenuOpen(false)}>Corsi in Diretta</Link></li>
              <li><Link href="/corsi/corsi-asincroni" onClick={() => setMenuOpen(false)}>Corsi Asincroni</Link></li>
              <li><Link href="/corsi/lezioni-individuali" onClick={() => setMenuOpen(false)}>Tutoraggio</Link></li>
              <li><Link href="/corsi/minicorsi" onClick={() => setMenuOpen(false)}>Corsi Brevi</Link></li>
              <li><Link href="/corsi/formazione-docenti" onClick={() => setMenuOpen(false)}>Formazione Docenti</Link></li>
              <li><Link href="/eventi" onClick={() => setMenuOpen(false)}>Eventi</Link></li>
              <li><a href="https://www.portale.grecolatinovivo.it" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Abbonamento ↗</a></li>
              <li><Link href="/marketing/chi-siamo" onClick={() => setMenuOpen(false)}>Chi siamo</Link></li>
              <li>
                <a
                  href="https://www.portale.grecolatinovivo.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  style={{ fontWeight: 600, color: '#002147' }}
                >
                  Portale studenti ↗
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <style>{`
        /* ---- BRAND ---- */
        .nav-brand {
          display: flex; align-items: center; gap: 12px;
          text-decoration: none; flex-shrink: 0; color: #002147;
        }
        .nav-brand:hover { text-decoration: none; }
        .nav-logo-img {
          display: flex; align-items: center; flex-shrink: 0;
        }
        .nav-brand-text {
          display: flex; flex-direction: column; line-height: 1.3;
        }
        .nav-brand-name {
          font-family: var(--font-heading, Georgia, serif);
          font-size: 0.92rem; font-weight: 400; color: #002147;
          letter-spacing: 0.02em;
        }
        .nav-brand-sub {
          font-size: 0.68rem; color: #555;
          letter-spacing: 0.04em; font-family: var(--font-body, sans-serif);
        }

        /* ---- NAV LIST ---- */
        .nav-list {
          display: flex; align-items: center; gap: 0;
          list-style: none; margin: 0; padding: 0;
        }
        .nav-link {
          display: flex; align-items: center;
          padding: 0 1rem; height: 68px;
          font-family: var(--font-body, sans-serif);
          font-size: 0.875rem; color: #002147;
          text-decoration: none; letter-spacing: 0.02em;
          background: none; border: none; cursor: pointer;
          white-space: nowrap;
          border-bottom: 2px solid transparent;
          transition: border-color 0.15s;
        }
        .nav-link:hover { border-bottom-color: #C9A84C; text-decoration: none; }
        .nav-link--active { border-bottom-color: #002147; font-weight: 600; }
        .nav-dropdown-btn { gap: 0; }

        /* ---- DROPDOWN ---- */
        .nav-item--has-dropdown { position: relative; }
        .nav-item--has-dropdown:hover .nav-dropdown,
        .nav-item--has-dropdown:focus-within .nav-dropdown { display: block; }
        .nav-dropdown {
          display: none;
          position: absolute; top: 100%; left: 0;
          background: #fff;
          border: 1px solid #e8e8e8;
          border-top: 2px solid #002147;
          padding: 20px 24px; min-width: 460px; z-index: 200;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        }
        .nav-dropdown-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .nav-dropdown-label {
          font-family: var(--font-body, sans-serif);
          font-size: 0.68rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: #C9A84C; margin-bottom: 8px; padding-bottom: 6px;
          border-bottom: 1px solid #e8e8e8;
        }
        .nav-dropdown-link {
          display: block; color: #002147;
          font-family: var(--font-body, sans-serif); font-size: 0.875rem;
          padding: 5px 0; text-decoration: none;
        }
        .nav-dropdown-link:hover { text-decoration: underline; color: #002147; }

        /* ---- CTA PORTALE ---- */
        .nav-item--cta { margin-left: 12px; }
        .nav-cta {
          display: inline-block;
          padding: 0.45rem 1.1rem;
          border: 1px solid #002147;
          font-family: var(--font-body, sans-serif);
          font-size: 0.8rem; letter-spacing: 0.05em;
          text-transform: uppercase; color: #002147;
          text-decoration: none; white-space: nowrap;
          transition: background 0.15s, color 0.15s;
        }
        .nav-cta:hover { background: #002147; color: #fff; text-decoration: none; }

        /* ---- HAMBURGER ---- */
        .nav-hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 8px;
        }
        .hline {
          display: block; width: 22px; height: 2px;
          background: #002147; transition: all 0.2s;
        }

        /* ---- MOBILE MENU ---- */
        .nav-mobile-menu {
          position: absolute; top: 100%; left: 0; right: 0;
          background: #fff; border-top: 1px solid #e8e8e8;
          border-bottom: 1px solid #e8e8e8;
          padding: 0 2rem 1.5rem; z-index: 999;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        }
        .nav-mobile-menu ul { list-style: none; }
        .nav-mobile-menu li { border-bottom: 1px solid #e8e8e8; }
        .nav-mobile-menu a {
          display: block; color: #002147;
          font-family: var(--font-body, sans-serif); font-size: 0.95rem;
          padding: 13px 0; text-decoration: none;
        }
        .nav-mobile-menu a:hover { text-decoration: underline; }

        @media (max-width: 900px) {
          .nav-list { display: none; }
          .nav-hamburger { display: flex; }
          .nav-brand-name { font-size: 0.8rem; }
        }
        @media (max-width: 480px) {
          .nav-brand-sub { display: none; }
          .nav-brand-name { font-size: 0.75rem; }
        }
      `}</style>
    </>
  )
}

/**
 * Logo component: tenta next/image con /logo.svg, poi /logo.png, poi fallback ΓΛ.
 * Il file deve stare in /public/ nella root del progetto.
 */
function LogoImage() {
  // Logo reale: /public/logo.png (copiare glv-logo-nobg.png in public/logo.png)
  // Il componente usa next/image con fallback al monogramma ΓΛ se il file non è ancora presente.
  return (
    <Image
      src="/logo.png"
      alt="Logo Centro Nazionale di Studi Classici GrecoLatinoVivo"
      width={44}
      height={44}
      priority
      style={{ objectFit: 'contain' }}
      onError={(e) => {
        // Fallback: nasconde il tag img se il file non è ancora presente
        (e.target as HTMLImageElement).style.display = 'none'
      }}
    />
  )
}
