// Homepage — Centro Nazionale di Studi Classici «GrecoLatinoVivo»
// Design Oxford/Cambridge — COUNCIL sessione 2 (18/05/2026)
// Struttura: hero centrato → percorsi 2x2 → numeri → metodologia → lingue → pricing → faq → cta
// Dati reali verificati. Zero emoji. Zero dati inventati.
import type { Metadata } from 'next'
import Link from 'next/link'
import PricingToggle from '@/components/sections/PricingToggle'

export const metadata: Metadata = {
  title: 'Centro Nazionale di Studi Classici «GrecoLatinoVivo» — Latino, Greco, Lingue Antiche',
  description: 'Il primo centro nazionale dedicato allo studio attivo del Latino, Greco Antico, Egiziano, Ebraico e Sanscrito. Metodo contestuale-induttivo, accreditato MIM. 5.000+ studenti dal 2015.',
  openGraph: {
    title: 'Centro Nazionale di Studi Classici «GrecoLatinoVivo»',
    description: 'Studio attivo del Latino, Greco Antico e lingue del mondo antico. Accreditato MIM. Dal 2015.',
    url: 'https://grecolatinovivo.it',
    siteName: 'GrecoLatinoVivo',
    locale: 'it_IT',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section aria-labelledby="hero-titolo" style={{ maxWidth: '860px', margin: '0 auto', padding: '7rem 2rem 6rem', textAlign: 'center' }}>
        <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>
          Firenze &middot; Milano &middot; Torino &middot; Parma &middot; Pordenone
        </p>
        <h1 id="hero-titolo" style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 400, color: '#002147', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
          Le lingue classiche<br />nella loro <em style={{ fontStyle: 'normal', color: '#C9A84C' }}>forma viva</em>
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#444', maxWidth: '620px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
          Il primo centro nazionale dedicato allo studio attivo del Latino, del Greco Antico
          e delle lingue del mondo antico, con metodo contestuale-induttivo.
        </p>
        <blockquote className="blockquote-gold" style={{ maxWidth: '620px', margin: '0 auto 3rem', textAlign: 'left' }}>
          &laquo;Le lingue classiche non sono morte: aspettano solo di essere incontrate nella loro forma viva.&raquo;
        </blockquote>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
          <Link href="/corsi/corsi-live" className="card-link" style={{ fontSize: '0.925rem' }}>Scopri i corsi &rarr;</Link>
          <Link href="/marketing/chi-siamo" className="card-link" style={{ fontSize: '0.925rem' }}>Il Centro &rarr;</Link>
        </div>
      </section>

      <hr className="section-divider" />

      {/* PERCORSI 2x2 */}
      <section id="percorsi" aria-labelledby="percorsi-titolo" style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 id="percorsi-titolo" style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 400, color: '#002147', marginBottom: '0.6rem' }}>
            Offerta Formativa
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#666', maxWidth: '520px', margin: '0 auto' }}>
            Quattro modalità di accesso alla conoscenza classica, per ogni esigenza e ritmo di studio.
          </p>
        </div>
        <div className="hp-percorsi-grid">
          <Link href="/corsi/corsi-live" className="card card-clickable" style={{ display: 'block', textDecoration: 'none' }}>
            <h3 style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: '1.1rem', fontWeight: 400, color: '#002147', marginBottom: '0.75rem' }}>Corsi in Diretta</h3>
            <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              Classi live con insegnanti specializzati, massimo 15 studenti per gruppo.
              Livelli A1&ndash;C2. 72 ore equivalenti al biennio liceale.
            </p>
            <span className="card-link">Scopri i corsi in diretta &rarr;</span>
          </Link>
          <Link href="/corsi/corsi-asincroni" className="card card-clickable" style={{ display: 'block', textDecoration: 'none' }}>
            <h3 style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: '1.1rem', fontWeight: 400, color: '#002147', marginBottom: '0.75rem' }}>Corsi Asincroni</h3>
            <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              Percorsi registrati con materiali didattici esclusivi, fruibili in autonomia
              e a qualsiasi ora. Ideali per ritmi personalizzati.
            </p>
            <span className="card-link">Scopri i corsi asincroni &rarr;</span>
          </Link>
          <a href="https://portale.grecolatinovivo.it" target="_blank" rel="noopener noreferrer" className="card card-clickable" style={{ display: 'block', textDecoration: 'none' }}>
            <h3 style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: '1.1rem', fontWeight: 400, color: '#002147', marginBottom: '0.75rem' }}>Portale in Abbonamento</h3>
            <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              Accesso a risorse, testi commentati, esercizi e archivi didattici.
              Cultura &euro;5,90/mese &middot; Linguae &euro;12,90/mese &middot; Accademia &euro;19,90/mese.
            </p>
            <span className="card-link">Scopri il portale &rarr;</span>
          </a>
          <Link href="/eventi" className="card card-clickable" style={{ display: 'block', textDecoration: 'none' }}>
            <h3 style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: '1.1rem', fontWeight: 400, color: '#002147', marginBottom: '0.75rem' }}>Eventi e Convegni</h3>
            <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              Conferenze, seminari e convegni dedicati alle lingue e alle culture del mondo
              antico. Aperti a studenti, docenti e pubblico.
            </p>
            <span className="card-link">Scopri gli eventi &rarr;</span>
          </Link>
        </div>
      </section>

      <hr className="section-divider" />

      {/* NUMERI */}
      <div style={{ borderTop: '1px solid #e8e8e8', borderBottom: '1px solid #e8e8e8' }}>
        <div className="numeri-grid">
          {[
            { valore: '5.000+', etichetta: 'Studenti formati' },
            { valore: '56', etichetta: 'Corsi disponibili' },
            { valore: '15', etichetta: 'Studenti per classe' },
            { valore: '5', etichetta: 'Sedi in Italia' },
          ].map((item) => (
            <div key={item.etichetta} className="numero-item">
              <span className="stat-value">{item.valore}</span>
              <span className="stat-label">{item.etichetta}</span>
            </div>
          ))}
        </div>
      </div>

      <hr className="section-divider" />

      {/* METODOLOGIA */}
      <section id="metodologia" aria-labelledby="metodo-titolo" style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 2rem' }}>
        <div className="hp-metodo-grid">
          <div>
            <h2 id="metodo-titolo" style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: 'clamp(1.4rem, 2vw, 1.85rem)', fontWeight: 400, color: '#002147', marginBottom: '1.25rem' }}>
              Il Metodo Natura
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.8, marginBottom: '1rem' }}>
              Il Centro adotta un approccio contestuale-induttivo ispirato ai principi di
              Hans Henning &Oslash;rberg e alla tradizione del{' '}
              <em>Lingua Latina per se Illustrata</em>. Lo studente incontra la lingua nel suo
              contesto naturale d&apos;uso, attraverso testi graduati che permettono una comprensione
              progressiva della grammatica e del lessico.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Il risultato è la capacità di leggere, comprendere e — a livelli avanzati —
              produrre testi in lingua originale.
            </p>
            <Link href="/marketing/metodologia" className="card-link">Approfondisci &rarr;</Link>
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#777', marginBottom: '1.5rem' }}>
              Caratteristiche del percorso
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {[
                { t: '72 ore corso base', d: 'Equivalenti al biennio liceale, con efficacia superiore grazie al metodo contestuale.' },
                { t: 'Massimo 15 studenti per classe', d: 'Attenzione personalizzata e partecipazione attiva in ogni sessione.' },
                { t: 'Livelli A1–C2 (QCER)', d: 'Percorso strutturato secondo il Quadro Comune Europeo di Riferimento.' },
                { t: '5 sedi in Italia', d: 'Firenze · Milano · Torino · Parma · Pordenone, con didattica a distanza.' },
              ].map((item) => (
                <li key={item.t} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1rem', alignItems: 'start' }}>
                  <span aria-hidden="true" style={{ width: '2px', minHeight: '1.3rem', background: '#C9A84C', display: 'block', marginTop: '0.3rem' }} />
                  <span style={{ fontSize: '0.9rem', color: '#444', lineHeight: 1.6 }}>
                    <strong style={{ color: '#002147', fontWeight: 600, display: 'block', marginBottom: '0.15rem' }}>{item.t}</strong>
                    {item.d}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* LINGUE */}
      <div className="lingue-strip">
        <div className="lingue-inner">
          <span className="lingue-label">Lingue insegnate</span>
          <ul className="lingue-list">
            <li>Latino</li>
            <li>Greco Antico</li>
            <li>Egiziano Antico</li>
            <li>Ebraico Biblico</li>
            <li>Sanscrito</li>
          </ul>
        </div>
      </div>

      <hr className="section-divider" />

      {/* PRICING */}
      <section id="abbonamenti" aria-labelledby="abbonamenti-titolo" style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 id="abbonamenti-titolo" style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 400, color: '#002147', marginBottom: '0.6rem' }}>
            Piani di abbonamento
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#666' }}>
            Accesso al portale didattico con risorse esclusive, testi commentati ed esercizi.
          </p>
        </div>
        <PricingToggle />
      </section>

      <hr className="section-divider" />

      {/* FAQ */}
      <section aria-labelledby="faq-titolo" style={{ maxWidth: '860px', margin: '0 auto', padding: '5rem 2rem' }}>
        <h2 id="faq-titolo" style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 400, color: '#002147', marginBottom: '3rem', textAlign: 'center' }}>
          Domande frequenti
        </h2>
        {FAQS.map((faq, i) => (
          <details key={i} style={{ borderTop: i === 0 ? '1px solid #e8e8e8' : undefined, borderBottom: '1px solid #e8e8e8' }}>
            <summary style={{ padding: '1.1rem 0', cursor: 'pointer', fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: '1rem', fontWeight: 400, color: '#002147', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
              <span>{faq.q}</span>
              <span aria-hidden="true" style={{ color: '#C9A84C', flexShrink: 0, fontSize: '1.2rem', lineHeight: 1 }}>+</span>
            </summary>
            <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.75, paddingBottom: '1.1rem', marginTop: '0.25rem' }}>{faq.a}</p>
          </details>
        ))}
        <p style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link href="/marketing/faq" className="card-link">Vedi tutte le domande &rarr;</Link>
        </p>
      </section>

      <hr className="section-divider" />

      {/* CTA FINALE */}
      <div className="cta-band">
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontWeight: 400 }}>
            Pronto a iniziare?
          </h2>
          <p>
            Scopri i corsi disponibili o accedi direttamente al portale.
            Classi da massimo 15 studenti, livelli A1&ndash;C2.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/corsi/corsi-live" className="btn btn-ghost">Vedi i corsi</Link>
            <a href="https://portale.grecolatinovivo.it" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '11px 26px', border: '1px solid #C9A84C', color: '#C9A84C', fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.875rem', letterSpacing: '0.04em', textDecoration: 'none' }}>
              Accedi al Portale ↗
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hp-percorsi-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.75rem; }
        .hp-metodo-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        @media (max-width: 768px) {
          .hp-percorsi-grid { grid-template-columns: 1fr; }
          .hp-metodo-grid { grid-template-columns: 1fr; gap: 2.5rem; }
        }
      `}</style>
    </main>
  )
}

const FAQS = [
  { q: 'È necessario avere conoscenze pregresse per iscriversi?', a: 'No. I corsi partono dal livello A1 e sono progettati per chi non ha mai studiato la lingua. Il metodo contestuale-induttivo permette di entrare nella lingua senza conoscenze grammaticali precedenti.' },
  { q: 'Quanto dura un corso e come sono strutturate le lezioni?', a: 'Il corso base è di 72 ore, distribuite tipicamente su due semestri. Le lezioni hanno una durata di 90 minuti ciascuna e si svolgono in piccoli gruppi (max 15 studenti).' },
  { q: 'I corsi sono riconosciuti dal Ministero dell\'Istruzione?', a: 'Sì. Il Centro è accreditato dal MIM (Ministero dell\'Istruzione e del Merito). I corsi di Formazione Docenti danno diritto a crediti formativi riconosciuti.' },
  { q: 'È possibile seguire i corsi online?', a: 'Sì. Tutti i corsi in diretta sono disponibili sia in presenza (nelle 5 sedi) sia a distanza via piattaforma. I corsi asincroni sono interamente online.' },
  { q: "Cosa include l'abbonamento al Portale?", a: "Il Portale offre accesso a testi commentati, esercizi graduati, grammatiche di riferimento e archivi didattici. I piani Linguae e Accademia includono anche sessioni di approfondimento e tutoraggio." },
  { q: 'Come funziona il metodo contestuale-induttivo?', a: 'Lo studente incontra la lingua attraverso testi graduati, mai isolati dalla comunicazione. La grammatica emerge dal contesto. Ispirato al metodo Ørberg (Lingua Latina per se Illustrata).' },
]
