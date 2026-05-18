// Chi siamo — /marketing/chi-siamo
// Design istituzionale navy/bianco — COUNCIL.md decisione 1
// Dati reali: storia, numeri, docenti, accreditamenti, timeline
// Fonte originale: chi-siamo.html (verificati nel codebase)
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chi siamo — Centro Nazionale di Studi Classici GrecoLatinoVivo',
  description: 'Il Centro Nazionale di Studi Classici «GrecoLatinoVivo» è un centro di eccellenza per lo studio del Latino, Greco, Egiziano e Ebraico. Dal 2015, accreditato MIM.',
  alternates: { canonical: 'https://grecolatinovivo.it/chi-siamo' },
}

export default function ChiSiamoPage() {
  return (
    <>
      {/* HERO — istituzionale navy */}
      <section style={{ background: 'linear-gradient(160deg, #002147 0%, #002147 100%)', padding: '80px 24px 64px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#C9A84C', fontFamily: 'var(--font-body, Inter, sans-serif)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '16px' }}>
              Dal 2015
            </p>
            <h1 style={{ fontFamily: 'var(--font-heading, Playfair Display, serif)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
              Centro Nazionale<br />di Studi Classici
            </h1>
            {/* Citazione ufficiale dal codice originale */}
            <blockquote style={{ borderLeft: '3px solid rgba(201,168,76,0.5)', paddingLeft: '20px', marginBottom: '28px' }}>
              <p style={{ fontFamily: 'var(--font-heading, Playfair Display, serif)', fontStyle: 'italic', fontSize: '1.02rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}>
                &laquo;Le lingue classiche non sono morte: aspettano solo di essere incontrate
                nella loro forma viva.&raquo;
              </p>
            </blockquote>
            <Link href="/marketing/metodologia" className="btn btn-ghost">
              La nostra metodologia
            </Link>
          </div>

          {/* Numeri reali da chi-siamo.html numeri-grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { n: '5.000+', l: 'studenti formati dal 2015' },
              { n: '6', l: 'dipartimenti linguistici' },
              { n: '5', l: 'sedi in Italia' },
              { n: '15', l: 'studenti max per classe' },
              { n: 'A1–C2', l: 'livelli QCER' },
              { n: '72h', l: 'corso base (equiv. biennio)' },
            ].map((s) => (
              <div key={s.n} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading, Playfair Display, serif)', fontSize: '1.75rem', fontWeight: 700, color: '#C9A84C', marginBottom: '6px' }}>
                  {s.n}
                </div>
                <div style={{ fontFamily: 'var(--font-body, Inter, sans-serif)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCREDITAMENTI */}
      <section style={{ background: '#002147', padding: '18px 24px' }}>
        <div className="container" style={{ display: 'flex', gap: '28px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-body, Inter, sans-serif)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>
            Accreditato MIM (Ministero Istruzione e Merito)
          </span>
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
          <span style={{ fontFamily: 'var(--font-body, Inter, sans-serif)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>
            Membro Associato ALTE (Association of Language Testers in Europe)
          </span>
        </div>
      </section>

      {/* MISSIONE */}
      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 className="section-title reveal">
            <span className="section-title__underline">La nostra missione</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#1a1a1a', lineHeight: 1.85, marginTop: '24px' }} className="reveal">
            Il Centro Nazionale di Studi Classici &laquo;GrecoLatinoVivo&raquo; nasce a Firenze nel 2015
            con la convinzione che le lingue classiche non siano reliquie del passato,
            ma strumenti vivi di pensiero, cultura e comprensione del mondo contemporaneo.
          </p>
          <p style={{ fontSize: '0.98rem', color: '#555555', lineHeight: 1.85, marginTop: '16px' }} className="reveal">
            Attraverso il Metodo Natura &mdash; ispirato all&apos;approccio di Hans Henning &Oslash;rberg &mdash;
            permettiamo a studenti di ogni et&agrave; e provenienza di incontrare Latino, Greco,
            Egiziano, Ebraico e Sanscrito come lingue vive: ascoltando, leggendo
            e producendo nella lingua, non soltanto analizzandone le strutture.
          </p>
        </div>
      </section>

      {/* TIMELINE — storia verificata da chi-siamo/page.tsx originale */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title text-center reveal">
            <span className="section-title__underline">La nostra storia</span>
          </h2>
          <div style={{ maxWidth: '680px', margin: '48px auto 0', position: 'relative' }}>
            {/* Linea verticale */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '32px', top: 0, bottom: 0, width: '2px', background: '#DDE3ED' }} />

            {[
              { year: '2015', event: 'Fondazione a Firenze del Centro Nazionale di Studi Classici «GrecoLatinoVivo»' },
              { year: '2017', event: 'Avvio dei corsi online e apertura del dipartimento di Sanscrito' },
              { year: '2019', event: 'Ottenimento accreditamento MIM. Apertura sedi di Milano e Torino.' },
              { year: '2021', event: 'Lancio del Biduum Latinitatis. Nuovi corsi di Egiziano Antico. Programma BES/DSA.' },
              { year: '2023', event: 'Avvio del programma di Formazione Docenti accreditato MIM' },
              { year: '2025', event: 'Decennale del Centro. 5.000+ studenti formati. Apertura sedi di Parma e Pordenone.' },
            ].map((item) => (
              <div key={item.year} className="reveal" style={{ display: 'flex', gap: '32px', paddingBottom: '32px' }}>
                {/* Anno */}
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: '#002147', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, zIndex: 1, position: 'relative',
                }}>
                  <span style={{ fontFamily: 'var(--font-heading, Playfair Display, serif)', fontSize: '0.82rem', fontWeight: 700, color: '#fff' }}>
                    {item.year}
                  </span>
                </div>
                {/* Evento */}
                <div style={{ paddingTop: '14px' }}>
                  <p style={{ fontSize: '0.92rem', color: '#1a1a1a', lineHeight: 1.65 }}>
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCENTI — nomi reali dal codice originale; ruoli incompleti [DA INSERIRE] */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center reveal">
            <span className="section-title__underline">Il nostro team</span>
          </h2>
          <div className="grid-4" style={{ marginTop: '40px' }}>
            {[
              { name: 'Giampiero Marchi', role: 'Direttore — Latino' },
              { name: 'Ilaria Cariddi', role: 'Greco Antico' },
              { name: 'Alberto Bibbiani', role: '[DA INSERIRE]' },
              { name: 'Emanuele Viotti', role: '[DA INSERIRE]' },
            ].map((t) => (
              <div key={t.name} className="card reveal" style={{ textAlign: 'center' }}>
                {/* Avatar iniziali su sfondo navy */}
                <div style={{
                  width: '68px', height: '68px', borderRadius: '50%',
                  background: '#002147', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontFamily: 'var(--font-heading, Playfair Display, serif)', fontSize: '1.3rem', fontWeight: 700, color: '#fff',
                }} aria-hidden="true">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading, Playfair Display, serif)', fontSize: '1.02rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>
                  {t.name}
                </h3>
                <p style={{ fontSize: '0.78rem', color: '#002147', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-body, Inter, sans-serif)' }}>
                  {t.role}
                </p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '28px' }}>
            <Link href="/marketing/staff" className="btn btn-secondary">Vedi tutti i docenti</Link>
          </p>
        </div>
      </section>

      {/* SEDI — verificate da chi-siamo/page.tsx originale */}
      <section className="section section--alt" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 className="section-title reveal">
            <span className="section-title__underline">Le nostre sedi</span>
          </h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
            {['Firenze', 'Milano', 'Torino', 'Parma', 'Pordenone'].map((s) => (
              <div key={s} style={{ background: '#fff', border: '1px solid #DDE3ED', borderTop: '3px solid #002147', borderRadius: '6px', padding: '14px 22px', fontFamily: 'var(--font-heading, Playfair Display, serif)', fontSize: '0.95rem', fontWeight: 600, color: '#1a1a1a' }}>
                {s}
              </div>
            ))}
          </div>
          <p style={{ marginTop: '18px', color: '#555555', fontSize: '0.88rem' }}>
            Corsi online accessibili da tutto il mondo
          </p>
          <div style={{ marginTop: '24px' }}>
            <Link href="/marketing/sedi" className="btn btn-secondary">Scopri le sedi</Link>
          </div>
        </div>
      </section>
    </>
  )
}
