'use client'
// Navbar istituzionale — sfondo bianco, navy come colore primario
// Struttura: logo a sinistra, mega-menu "Offerta Formativa", link diretti, CTA portale
// COUNCIL.md: stile Oxford/Normale di Pisa — NON dark, NON bordeaux

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname.startsWith(href)

  return (
    <header>
      <nav
        role="navigation"
        aria-label="Navigazione principale"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(27,58,107,0.12)',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 1px 8px rgba(27,58,107,0.06)',
        }}
      >
        <div className="nav-inner container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

          {/* LOGO */}
          <Link href="/" className="nav-logo" aria-label="Centro Nazionale di Studi Classici — homepage">
            <span className="nav-logo__gl">ΓΛ</span>
            <span className="nav-logo__text">
              <span className="nav-logo__full">Centro Nazionale di Studi Classici</span>
              <span className="nav-logo__sub">«GrecoLatinoVivo»</span>
            </span>
          </Link>

          {/* NAVIGAZIONE DESKTOP */}
          <ul className="nav-links" role="list">

            {/* Offerta Formativa — mega dropdown */}
            <li className="nav-item nav-item--dropdown">
              <button className="nav-link nav-dropdown-btn" aria-haspopup="true" aria-expanded="false">
                Offerta Formativa
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true" style={{ marginLeft: '4px' }}>
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <div className="nav-mega" role="region" aria-label="Offerta formativa">
                <div className="nav-mega__grid">
                  <div className="nav-mega__col">
                    <p className="nav-mega__label">Percorsi</p>
                    <Link href="/corsi/corsi-live" className="nav-mega__link">Corsi in Diretta</Link>
                    <Link href="/corsi/corsi-asincroni" className="nav-mega__link">Corsi Asincroni</Link>
                    <Link href="/corsi/lezioni-individuali" className="nav-mega__link">Tutoraggio Individuale</Link>
                    <Link href="/corsi/minicorsi" className="nav-mega__link">Corsi Brevi Tematici</Link>
                    <Link href="/corsi/formazione-docenti" className="nav-mega__link">Formazione Docenti MIM</Link>
                  </div>
                  <div className="nav-mega__col">
                    <p className="nav-mega__label">Lingue</p>
                    <Link href="/corsi/corsi-asincroni?lang=latino" className="nav-mega__link">Latino</Link>
                    <Link href="/corsi/corsi-asincroni?lang=greco" className="nav-mega__link">Greco Antico</Link>
                    <Link href="/corsi/corsi-asincroni?lang=egiziano" className="nav-mega__link">Egiziano Antico</Link>
                    <Link href="/corsi/corsi-asincroni?lang=ebraico" className="nav-mega__link">Ebraico Biblico</Link>
                    <Link href="/corsi/corsi-asincroni?lang=sanscrito" className="nav-mega__link">Sanscrito</Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link href="/eventi" className={`nav-link ${isActive('/eventi') ? 'nav-link--active' : ''}`}>
                Eventi
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/commercio/abbonamento" className={`nav-link ${isActive('/commercio/abbonamento') ? 'nav-link--active' : ''}`}>
                Abbonamento
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/marketing/chi-siamo" className={`nav-link ${isActive('/marketing/chi-siamo') ? 'nav-link--active' : ''}`}>
                Chi siamo
              </Link>
            </li>

            <li className="nav-item">
              <a
                href={process.env.NEXT_PUBLIC_PORTALE_URL ?? 'https://portale.grecolatinovivo.it'}
                className="btn btn-primary btn-sm"
                rel="noopener"
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
          >
            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          </button>
        </div>

        {/* MENU MOBILE */}
        {menuOpen && (
          <div id="mobile-menu" className="nav-mobile" aria-label="Menu mobile">
            <ul role="list">
              <li><Link href="/corsi/corsi-live" onClick={() => setMenuOpen(false)}>Corsi in Diretta</Link></li>
              <li><Link href="/corsi/corsi-asincroni" onClick={() => setMenuOpen(false)}>Corsi Asincroni</Link></li>
              <li><Link href="/corsi/lezioni-individuali" onClick={() => setMenuOpen(false)}>Tutoraggio</Link></li>
              <li><Link href="/eventi" onClick={() => setMenuOpen(false)}>Eventi</Link></li>
              <li><Link href="/commercio/abbonamento" onClick={() => setMenuOpen(false)}>Abbonamento</Link></li>
              <li><Link href="/marketing/chi-siamo" onClick={() => setMenuOpen(false)}>Chi siamo</Link></li>
              <li>
                <a href={process.env.NEXT_PUBLIC_PORTALE_URL ?? 'https://portale.grecolatinovivo.it'}>
                  Portale studenti
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <style>{`
        /* Logo */
        .nav-logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; flex-shrink: 0;
        }
        .nav-logo__gl {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: 1.6rem; font-weight: 900;
          color: #1B3A6B; line-height: 1;
          letter-spacing: -0.02em;
        }
        .nav-logo__text {
          display: flex; flex-direction: column; line-height: 1.25;
        }
        .nav-logo__full {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: 0.82rem; font-weight: 700;
          color: #1A2A3A;
        }
        .nav-logo__sub {
          font-family: var(--font-body, Inter, sans-serif);
          font-size: 0.63rem; color: #5A6A7A; letter-spacing: 0.01em;
        }

        /* Links desktop */
        .nav-links {
          display: flex; align-items: center; gap: 2px;
          list-style: none; margin: 0; padding: 0;
        }
        .nav-link {
          color: #3A4A5A;
          font-family: var(--font-body, Inter, sans-serif); font-size: 0.88rem;
          font-weight: 500;
          padding: 8px 12px; border-radius: 5px;
          text-decoration: none; transition: color 0.15s, background 0.15s;
          background: none; border: none; cursor: pointer;
          display: flex; align-items: center;
        }
        .nav-link:hover { color: #1B3A6B; background: rgba(27,58,107,0.06); text-decoration: none; }
        .nav-link--active { color: #1B3A6B; font-weight: 600; }

        /* Dropdown mega */
        .nav-item--dropdown { position: relative; }
        .nav-item--dropdown:hover .nav-mega,
        .nav-item--dropdown:focus-within .nav-mega { display: block; }
        .nav-mega {
          display: none; position: absolute; top: calc(100% + 8px); left: -24px;
          background: #fff; border-radius: 10px;
          box-shadow: 0 20px 60px rgba(27,58,107,0.12);
          border: 1px solid #DDE3ED;
          padding: 20px 24px; min-width: 480px; z-index: 100;
        }
        .nav-mega__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .nav-mega__label {
          font-family: var(--font-body, Inter, sans-serif); font-size: 0.68rem;
          font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em;
          color: #1B3A6B; margin-bottom: 8px; padding-bottom: 6px;
          border-bottom: 1px solid #DDE3ED;
        }
        .nav-mega__link {
          display: block; color: #3A4A5A;
          font-family: var(--font-body, Inter, sans-serif); font-size: 0.875rem;
          padding: 5px 0; text-decoration: none;
          transition: color 0.15s;
        }
        .nav-mega__link:hover { color: #1B3A6B; text-decoration: none; }

        /* Hamburger */
        .nav-hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer;
          padding: 8px; border-radius: 6px;
        }
        .nav-hamburger:hover { background: rgba(27,58,107,0.06); }
        .hamburger-line {
          display: block; width: 22px; height: 2px;
          background: #1A2A3A; border-radius: 2px;
          transition: all 0.2s;
        }

        /* Mobile menu */
        .nav-mobile {
          position: absolute; top: 70px; left: 0; right: 0;
          background: rgba(255,255,255,0.99);
          padding: 16px 24px 24px; border-top: 1px solid #DDE3ED;
          box-shadow: 0 8px 32px rgba(27,58,107,0.10);
        }
        .nav-mobile ul { list-style: none; }
        .nav-mobile li { border-bottom: 1px solid #DDE3ED; }
        .nav-mobile a {
          display: block; color: #1A2A3A;
          font-family: var(--font-body, Inter, sans-serif); font-size: 1rem;
          padding: 14px 0; text-decoration: none;
          transition: color 0.15s;
        }
        .nav-mobile a:hover { color: #1B3A6B; }

        @media (max-width: 1024px) {
          .nav-links { display: none; }
          .nav-hamburger { display: flex; }
          .nav-logo__full { font-size: 0.72rem; }
        }
        @media (max-width: 480px) {
          .nav-logo__sub { display: none; }
        }
      `}</style>
    </header>
  )
}
