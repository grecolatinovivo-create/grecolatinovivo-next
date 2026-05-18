// Chi siamo — /chi-siamo
// Contenuto REALE da chi-siamo.html: storia, numeri, docenti, accreditamenti
// Citazione ufficiale, timeline, metodo Natura
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
      {/* HERO */}
      <section style={{ background: '#1A1A1A', padding: '80px 24px 64px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>
              Dal 2015
            </p>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '20px' }}>
              Centro Nazionale<br />di Studi Classici
            </h1>
            {/* Citazione ufficiale da chi-siamo.html missione-quote */}
            <blockquote style={{ borderLeft: '3px solid #C9A84C', paddingLeft: '20px', marginBottom: '28px' }}>
              <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                «Le lingue classiche non sono morte: aspettano solo di essere incontrate
                nella loro forma viva.»
              </p>
            </blockquote>
            <Link href="/metodologia" className="btn btn-ghost">
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
              <div key={s.n} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 900, color: '#C9A84C', marginBottom: '6px' }}>
                  {s.n}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCREDITAMENTI */}
      <section style={{ background: '#8B1A1A', padding: '24px' }}>
        <div className="container" style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Da chi-siamo.html accred-section */}
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>
            Accreditato MIM (Ministero Istruzione e Merito)
          </span>
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>·</span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>
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
          <p style={{ fontSize: '1.1rem', color: '#3A3A3A', lineHeight: 1.8, marginTop: '24px' }} className="reveal">
            Il Centro Nazionale di Studi Classici «GrecoLatinoVivo» nasce a Firenze nel 2015
            con la convinzione che le lingue classiche non siano reliquie del passato,
            ma strumenti vivi di pensiero, cultura e comprensione del mondo contemporaneo.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#6B6B6B', lineHeight: 1.8, marginTop: '16px' }} className="reveal">
            Attraverso il Metodo Natura — ispirato all&apos;approccio di Hans Henning Ørberg —
            permettiamo a studenti di ogni età e provenienza di incontrare Latino, Greco,
            Egiziano, Ebraico e Sanscrito come lingue vive: ascoltando, leggendo,
            parlando, non solo analizzando.
          </p>
        </div>
      </section>

      {/* TIMELINE — storia da chi-siamo.html storia-timeline */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title text-center reveal">
            <span className="section-title__underline">La nostra storia</span>
          </h2>
          <div style={{ maxWidth: '680px', margin: '48px auto 0', position: 'relative' }}>
            {/* Linea verticale */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '32px', top: 0, bottom: 0, width: '2px', background: '#E8E0D0' }} />

            {[
              { year: '2015', event: 'Fondazione a Firenze del Centro Nazionale di Studi Classici «GrecoLatinoVivo»' },
              { year: '2017', event: 'Avvio dei corsi online e apertura del dipartimento di Sanscrito' },
              { year: '2019', event: 'Ottenimento accreditamento MIM. Apertura sedi di Milano e Torino.' },
              { year: '2021', event: 'Lancio del Biduum Latinitatis. Nuovi corsi di Egiziano Antico. Programma BES/DSA.' },
              { year: '2023', event: 'Avvio del programma di Formazione Docenti accreditato MIM' },
              { year: '2025', event: 'Decennale del Centro. 5.000+ studenti formati. Apertura sedi di Parma e Pordenone.' },
            ].map((item) => (
              <div key={item.year} className="reveal" style={{ display: 'flex', gap: '32px', paddingBottom: '32px', paddingLeft: '0' }}>
                {/* Anno */}
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: '#8B1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, zIndex: 1, position: 'relative',
                }}>
                  <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.85rem', fontWeight: 900, color: '#fff' }}>
                    {item.year}
                  </span>
                </div>
                {/* Evento */}
                <div style={{ paddingTop: '12px' }}>
                  <p style={{ fontSize: '0.975rem', color: '#3A3A3A', lineHeight: 1.6 }}>
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCENTI — [DA INSERIRE] nomi reali da confermare con Giampiero */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center reveal">
            <span className="section-title__underline">Il nostro team</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#6B6B6B', marginBottom: '48px', marginTop: '12px' }}>
            {/* [DA INSERIRE — nomi docenti reali da confermare con Giampiero] */}
          </p>
          <div className="grid-4">
            {[
              { name: 'Giampiero Marchi', role: 'Direttore · Latino', dept: 'LA' },
              { name: 'Ilaria Cariddi', role: 'Greco Antico', dept: 'GR' },
              { name: 'Alberto Bibbiani', role: '[DA INSERIRE]', dept: '??' },
              { name: 'Emanuele Viotti', role: '[DA INSERIRE]', dept: '??' },
            ].map((t) => (
              <div key={t.name} className="card reveal" style={{ textAlign: 'center' }}>
                {/* Avatar con iniziali su sfondo bordeaux (fallback foto) */}
                <div style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  background: '#8B1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 700, color: '#fff'
                }} aria-hidden="true">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '4px' }}>
                  {t.name}
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#8B1A1A', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {t.role}
                </p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '24px' }}>
            <Link href="/staff" className="btn btn-secondary">Vedi tutti i docenti</Link>
          </p>
        </div>
      </section>

      {/* SEDI */}
      <section className="section section--alt" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 className="section-title reveal">
            <span className="section-title__underline">Le nostre sedi</span>
          </h2>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
            {['Firenze', 'Milano', 'Torino', 'Parma', 'Pordenone'].map((s) => (
              <div key={s} style={{ background: '#fff', border: '1px solid #E8E0D0', borderRadius: '10px', padding: '16px 24px', fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 600, color: '#1A1A1A' }}>
                {s}
              </div>
            ))}
          </div>
          <p style={{ marginTop: '20px', color: '#6B6B6B', fontSize: '0.9rem' }}>
            + Corsi online accessibili da tutto il mondo
          </p>
          <div style={{ marginTop: '24px' }}>
            <Link href="/sedi" className="btn btn-secondary">Scopri le sedi</Link>
          </div>
        </div>
      </section>
    </>
  )
}
