'use client'
// Navbar sticky con mega-dropdown per l'Offerta Formativa
// Struttura da chi-siamo.html navbar — adattata in React
// Usa solo CSS (no JS libraries) per i dropdown: :hover + :focus-within

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
          background: 'rgba(26,26,26,0.97)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(201,168,76,0.2)',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
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
                    <p className="nav-mega__label">Corsi</p>
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
                Abbonati
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/chi-siamo" className={`nav-link ${isActive('/chi-siamo') ? 'nav-link--active' : ''}`}>
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
              <li><Link href="/commercio/abbonamento" onClick={() => setMenuOpen(false)}>Abbonati</Link></li>
              <li><Link href="/chi-siamo" onClick={() => setMenuOpen(false)}>Chi siamo</Link></li>
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
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem; font-weight: 900;
          color: #C9A84C; line-height: 1;
        }
        .nav-logo__text {
          display: flex; flex-direction: column; line-height: 1.2;
        }
        .nav-logo__full {
          font-family: 'Playfair Display', serif;
          font-size: 0.85rem; font-weight: 700;
          color: #FFFFFF;
        }
        .nav-logo__sub {
          font-family: Inter, sans-serif;
          font-size: 0.65rem; color: rgba(255,255,255,0.55);
        }

        /* Links desktop */
        .nav-links {
          display: flex; align-items: center; gap: 4px;
          list-style: none; margin: 0; padding: 0;
        }
        .nav-link {
          color: rgba(255,255,255,0.85);
          font-family: Inter, sans-serif; font-size: 0.9rem;
          padding: 8px 12px; border-radius: 6px;
          text-decoration: none; transition: color 0.15s, background 0.15s;
          background: none; border: none; cursor: pointer;
          display: flex; align-items: center;
        }
        .nav-link:hover,
        .nav-link--active { color: #FFFFFF; background: rgba(255,255,255,0.08); text-decoration: none; }

        /* Dropdown mega */
        .nav-item--dropdown { position: relative; }
        .nav-item--dropdown:hover .nav-mega,
        .nav-item--dropdown:focus-within .nav-mega { display: block; }
        .nav-mega {
          display: none; position: absolute; top: calc(100% + 8px); left: -24px;
          background: #fff; border-radius: 10px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
          border: 1px solid #E8E0D0;
          padding: 20px 24px; min-width: 480px; z-index: 100;
        }
        .nav-mega__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .nav-mega__label {
          font-family: Inter, sans-serif; font-size: 0.7rem;
          font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;
          color: #8B1A1A; margin-bottom: 8px; padding-bottom: 6px;
          border-bottom: 1px solid #E8E0D0;
        }
        .nav-mega__link {
          display: block; color: #3A3A3A;
          font-family: Inter, sans-serif; font-size: 0.875rem;
          padding: 5px 0; text-decoration: none;
          transition: color 0.15s;
        }
        .nav-mega__link:hover { color: #8B1A1A; text-decoration: none; }

        /* Hamburger */
        .nav-hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer;
          padding: 8px; border-radius: 6px;
        }
        .nav-hamburger:hover { background: rgba(255,255,255,0.1); }
        .hamburger-line {
          display: block; width: 22px; height: 2px;
          background: #fff; border-radius: 2px;
          transition: all 0.2s;
        }

        /* Mobile menu */
        .nav-mobile {
          position: absolute; top: 70px; left: 0; right: 0;
          background: rgba(26,26,26,0.98);
          padding: 16px 24px 24px; border-top: 1px solid rgba(255,255,255,0.1);
        }
        .nav-mobile ul { list-style: none; }
        .nav-mobile li { border-bottom: 1px solid rgba(255,255,255,0.08); }
        .nav-mobile a {
          display: block; color: rgba(255,255,255,0.85);
          font-family: Inter, sans-serif; font-size: 1rem;
          padding: 14px 0; text-decoration: none;
          transition: color 0.15s;
        }
        .nav-mobile a:hover { color: #C9A84C; }

        @media (max-width: 1024px) {
          .nav-links { display: none; }
          .nav-hamburger { display: flex; }
          .nav-logo__full { font-size: 0.75rem; }
        }
        @media (max-width: 480px) {
          .nav-logo__sub { display: none; }
        }
      `}</style>
    </header>
  )
}
