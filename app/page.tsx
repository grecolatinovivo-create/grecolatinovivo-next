// Homepage — /
// Design istituzionale navy/bianco/grigio — COUNCIL.md decisione 1, 3, 4
// Dati reali: 5.000+ studenti, MIM, ALTE, dal 2015, 6 dipartimenti, 5 sedi, 56 corsi
// ZERO emoji. ZERO dati inventati. ZERO bordeaux.
import type { Metadata } from 'next'
import Link from 'next/link'
import PricingToggle from '@/components/sections/PricingToggle'

export const metadata: Metadata = {
  title: 'Centro Nazionale di Studi Classici «GrecoLatinoVivo»',
  description:
    'Studia Latino, Greco Antico, Egiziano, Ebraico e Sanscrito con i migliori docenti italiani. Corsi live, asincroni e tutoraggio 1:1. Dal 2015, accreditato MIM.',
  alternates: { canonical: 'https://grecolatinovivo.it' },
}

export default function HomePage() {
  return (
    <>
      {/* ================================================
          HERO — sfondo navy istituzionale (#1A2A4A)
          Gerarchia: badge accreditamento → headline → sottotitolo → CTA → trust bar
          Ref: NEURO_SPEC §3 — 0–300ms: headline; 300ms–2s: trust bar + CTA
          ================================================ */}
      <section
        style={{
          background: 'linear-gradient(160deg, #1A2A4A 0%, #1B3A6B 60%, #1A2A4A 100%)',
          padding: '96px 24px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorazione geometrica discreta */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'radial-gradient(ellipse 50% 60% at 80% 40%, rgba(201,168,76,0.05) 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: '820px' }}>

          {/* Badge accreditamento — legittimità istituzionale */}
          <p style={{
            display: 'inline-block',
            background: 'rgba(201,168,76,0.12)',
            border: '1px solid rgba(201,168,76,0.28)',
            color: '#C9A84C',
            fontFamily: 'var(--font-body, Inter, sans-serif)',
            fontSize: '0.72rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            padding: '5px 16px',
            borderRadius: '3px',
            marginBottom: '28px',
          }}>
            Accreditato MIM &middot; Membro Associato ALTE &middot; Dal 2015
          </p>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--font-heading, Playfair Display, serif)',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: '22px',
            letterSpacing: '-0.01em',
          }}>
            Studia le lingue dell&apos;antichità<br />
            con i migliori docenti italiani
          </h1>

          {/* Sottotitolo */}
          <p style={{
            fontFamily: 'var(--font-body, Inter, sans-serif)',
            fontSize: 'clamp(1rem, 1.8vw, 1.1rem)',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.75,
            marginBottom: '36px',
            maxWidth: '600px',
            margin: '0 auto 36px',
          }}>
            Latino, Greco Antico, Egiziano Antico, Ebraico Biblico e Sanscrito.
            Il Metodo Natura applicato alle lingue classiche, in corsi live e asincroni
            con un massimo di 15 studenti per classe.
          </p>

          {/* CTA — sobri, istituzionali */}
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/corsi/corsi-live" className="btn btn-primary" style={{ background: '#C9A84C', color: '#1A2A4A', borderColor: '#C9A84C', fontWeight: 700 }}>
              Scopri i corsi
            </Link>
            <Link href="/marketing/chi-siamo" className="btn btn-ghost">
              Il Centro
            </Link>
          </div>

          {/* Trust bar — dati verificati */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
            marginTop: '60px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
          }}>
            {[
              { value: '5.000+', label: 'studenti formati' },
              { value: '2015', label: 'anno di fondazione' },
              { value: '56', label: 'corsi disponibili' },
              { value: '5', label: 'sedi in Italia' },
            ].map((stat, i) => (
              <div key={stat.value} style={{
                textAlign: 'center',
                padding: '20px 12px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <div style={{
                  fontFamily: 'var(--font-heading, Playfair Display, serif)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: '#C9A84C',
                  lineHeight: 1,
                  marginBottom: '5px',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: 'var(--font-body, Inter, sans-serif)',
                  fontSize: '0.72rem',
                  color: 'rgba(255,255,255,0.45)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          ACCREDITAMENTI — striscia istituzionale
          ================================================ */}
      <section style={{ background: '#F4F6F8', borderBottom: '1px solid #DDE3ED', padding: '18px 24px' }}>
        <div className="container" style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-body, Inter, sans-serif)', fontSize: '0.82rem', color: '#1B3A6B', fontWeight: 600 }}>
            Accreditato MIM (Ministero dell&apos;Istruzione e del Merito)
          </span>
          <span style={{ color: '#DDE3ED' }}>|</span>
          <span style={{ fontFamily: 'var(--font-body, Inter, sans-serif)', fontSize: '0.82rem', color: '#1B3A6B', fontWeight: 600 }}>
            Membro Associato ALTE (Association of Language Testers in Europe)
          </span>
          <span style={{ color: '#DDE3ED' }}>|</span>
          <span style={{ fontFamily: 'var(--font-body, Inter, sans-serif)', fontSize: '0.82rem', color: '#5A6A7A' }}>
            Bonus Docenti (Carta del Docente) applicabile
          </span>
        </div>
      </section>

      {/* ================================================
          ORIENTAMENTO — 4 percorsi
          Layout: 2 colonne superiori (acquisto diretto) + 2 inferiori
          Ref: COUNCIL.md decisione UX — struttura riflette mental model utente
          ================================================ */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 className="section-title reveal">
              <span className="section-title__underline">Scegli il tuo percorso</span>
            </h2>
            <p className="section-subtitle reveal" style={{ margin: '12px auto 0', maxWidth: '560px' }}>
              Quattro modalità di accesso alla formazione classica del Centro.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {[
              {
                label: 'Corsi in Diretta',
                sublabel: 'Acquisto singolo',
                desc: 'Lezioni live con docenti specializzati in classi di massimo 15 studenti. Feedback diretto, calendario strutturato, registrazione della lezione inclusa.',
                detail: 'Latino · Greco Antico · Egiziano · Ebraico · Sanscrito',
                href: '/corsi/corsi-live',
                cta: 'Vedi i corsi disponibili',
                accent: false,
              },
              {
                label: 'Corsi Asincroni',
                sublabel: 'Acquisto singolo',
                desc: 'Video-lezioni registrate da seguire ai propri tempi, con accesso a vita al materiale. 56 corsi su tutte le lingue, con attestato digitale incluso.',
                detail: '56 corsi · Accesso a vita',
                href: '/corsi/corsi-asincroni',
                cta: 'Sfoglia il catalogo',
                accent: false,
              },
              {
                label: 'Portale in Abbonamento',
                sublabel: 'Abbonamento mensile o annuale',
                desc: 'Accesso illimitato a tutto il catalogo registrato con un abbonamento. Tre piani da €5,90/mese. Il portale è gestito su portale.grecolatinovivo.it.',
                detail: 'Cultura · Linguae · Accademia',
                href: '/commercio/abbonamento',
                cta: 'Scopri i piani',
                accent: true,
              },
              {
                label: 'Eventi e Convegni',
                sublabel: 'Biglietteria singola',
                desc: 'Seminari, Bidua Latinitatis, convegni accademici e giornate di studio. Partecipa alla vita scientifica del Centro Nazionale di Studi Classici.',
                detail: 'Calendario eventi 2025–2026',
                href: '/eventi',
                cta: 'Vedi il calendario',
                accent: false,
              },
            ].map((item) => (
              <div
                key={item.href}
                className="card reveal"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderLeft: item.accent ? '4px solid #1B3A6B' : '4px solid transparent',
                  background: item.accent ? '#F4F6F8' : '#fff',
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-body, Inter, sans-serif)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#1B3A6B',
                  marginBottom: '8px',
                }}>
                  {item.sublabel}
                </p>
                <h3 style={{
                  fontFamily: 'var(--font-heading, Playfair Display, serif)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#1A2A3A',
                  marginBottom: '12px',
                }}>
                  {item.label}
                </h3>
                <p style={{
                  fontSize: '0.88rem',
                  color: '#5A6A7A',
                  lineHeight: 1.7,
                  flex: 1,
                  marginBottom: '16px',
                }}>
                  {item.desc}
                </p>
                <p style={{
                  fontSize: '0.78rem',
                  color: '#1B3A6B',
                  fontWeight: 600,
                  fontFamily: 'var(--font-body, Inter, sans-serif)',
                  marginBottom: '20px',
                }}>
                  {item.detail}
                </p>
                <Link href={item.href} className="btn btn-secondary btn-sm" style={{ alignSelf: 'flex-start' }}>
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          METODOLOGIA — sezione istituzionale
          Ref: DIDACTIC_SPEC §1 — comunicazione Metodo Natura
          ================================================ */}
      <section className="section section--alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>
            <div className="reveal">
              <p style={{ color: '#1B3A6B', fontFamily: 'var(--font-body, Inter, sans-serif)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '16px' }}>
                La nostra metodologia
              </p>
              <h2 style={{ fontFamily: 'var(--font-heading, Playfair Display, serif)', fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#1A2A3A', marginBottom: '20px', lineHeight: 1.25 }}>
                Il Metodo Natura
              </h2>
              <p style={{ color: '#5A6A7A', lineHeight: 1.8, marginBottom: '16px', fontSize: '0.95rem' }}>
                Ispirato all&apos;approccio di Hans Henning Ørberg, il Metodo Natura consente
                di acquisire le lingue classiche attraverso un percorso contestuale e induttivo:
                leggendo, ascoltando e producendo nella lingua, piuttosto che memorizzando
                paradigmi astratti.
              </p>
              <p style={{ color: '#5A6A7A', lineHeight: 1.8, marginBottom: '28px', fontSize: '0.95rem' }}>
                Il corso base (72 ore) equivale al biennio liceale. Con il nostro approccio,
                studenti adulti raggiungono la lettura autonoma dei testi classici in tempi
                significativamente più brevi rispetto ai metodi tradizionali.
              </p>
              <Link href="/marketing/metodologia" className="btn btn-secondary">
                Approfondisci il metodo
              </Link>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { n: '72h', label: 'corso base, equivalente al biennio liceale' },
                { n: '15', label: 'studenti per classe, massimo' },
                { n: 'A1–C2', label: 'livelli QCER coperti' },
                { n: '5', label: 'sedi fisiche in Italia' },
              ].map((s) => (
                <div key={s.n} style={{
                  background: '#fff',
                  border: '1px solid #DDE3ED',
                  borderRadius: '8px',
                  padding: '24px 20px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-heading, Playfair Display, serif)',
                    fontSize: '1.9rem',
                    fontWeight: 700,
                    color: '#1B3A6B',
                    marginBottom: '8px',
                    lineHeight: 1,
                  }}>
                    {s.n}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body, Inter, sans-serif)',
                    fontSize: '0.78rem',
                    color: '#5A6A7A',
                    lineHeight: 1.5,
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          LE NOSTRE LINGUE
          Latino e Greco: card grandi (lingue fondanti)
          Egiziano, Ebraico, Sanscrito: card compatte (specializzazioni)
          Ref: COUNCIL.md decisione UX/CLA
          ================================================ */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title reveal">
              <span className="section-title__underline">Le lingue del Centro</span>
            </h2>
            <p className="section-subtitle reveal" style={{ margin: '12px auto 0', maxWidth: '540px' }}>
              Cinque tradizioni testuali dell&apos;antichità, insegnate con rigore filologico
              e approccio contestuale-induttivo.
            </p>
          </div>

          {/* Lingue fondanti — card grandi */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <LanguageCard
              lang="Latino"
              desc="La lingua della civiltà giuridica, letteraria e filosofica occidentale."
              courses="7 corsi &middot; A1.1–B1.3"
              quote="Alea iacta est"
              quoteAuthor="Gaio Giulio Cesare"
              href="/corsi/corsi-asincroni?lang=latino"
              featured
            />
            <LanguageCard
              lang="Greco Antico"
              desc="La lingua della filosofia, della scienza e del primo pensiero critico europeo."
              courses="7 corsi &middot; A1.1–B1.3"
              quote="&#947;&#957;&#8182;&#952;&#953; &#963;&#949;&#945;&#965;&#964;&#972;&#957;"
              quoteAuthor="Oracolo di Delfi"
              href="/corsi/corsi-asincroni?lang=greco"
              featured
            />
          </div>

          {/* Specializzazioni avanzate — card compatte */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            <LanguageCard lang="Egiziano Antico" desc="Scrittura geroglifica e lingua parlata dell&apos;antico Egitto." courses="3 corsi" href="/corsi/corsi-asincroni?lang=egiziano" />
            <LanguageCard lang="Ebraico Biblico" desc="La lingua dei testi della tradizione ebraica e cristiana antica." courses="3 corsi" href="/corsi/corsi-asincroni?lang=ebraico" />
            <LanguageCard lang="Sanscrito" desc="La lingua classica dell&apos;India e radice dell&apos;indoeuropeo." courses="[DA INSERIRE]" href="/corsi/corsi-asincroni?lang=sanscrito" />
          </div>
        </div>
      </section>

      {/* ================================================
          ABBONAMENTO — i tre piani
          Ref: NEURO_SPEC §6 — presentazione istituzionale, non SaaS
          ================================================ */}
      <section className="section section--alt" id="abbonamento">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title reveal">
            <span className="section-title__underline">Il Portale in abbonamento</span>
          </h2>
          <p className="section-subtitle reveal" style={{ margin: '12px auto 0', maxWidth: '540px' }}>
            Accesso illimitato a tutto il catalogo registrato con un piano mensile o annuale.
            Disdici in qualsiasi momento.
          </p>
          <p style={{
            color: '#5A6A7A',
            fontSize: '0.85rem',
            marginTop: '8px',
            marginBottom: '44px',
            fontFamily: 'var(--font-body, Inter, sans-serif)',
          }}>
            Gestito su <a href="https://portale.grecolatinovivo.it" rel="noopener" style={{ color: '#1B3A6B' }}>portale.grecolatinovivo.it</a>
          </p>

          <PricingToggle />
        </div>
      </section>

      {/* ================================================
          STORIA E NUMERI — sezione istituzionale
          ================================================ */}
      <section className="section" style={{ background: '#1A2A4A' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'var(--font-heading, Playfair Display, serif)', fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#fff', marginBottom: '12px' }} className="reveal">
              Un decennio di studi classici
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto' }} className="reveal">
              Dal 2015, il Centro Nazionale di Studi Classici forma studiosi
              con rigore filologico e metodo didattico innovativo.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
            {[
              { n: '5.000+', label: 'studenti formati dal 2015' },
              { n: '6', label: 'dipartimenti linguistici' },
              { n: '15', label: 'studenti massimo per classe' },
            ].map((s, i) => (
              <div key={s.n} className="reveal" style={{
                padding: '36px 24px',
                textAlign: 'center',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                background: 'rgba(255,255,255,0.03)',
              }}>
                <div style={{ fontFamily: 'var(--font-heading, Playfair Display, serif)', fontSize: '2.4rem', fontWeight: 700, color: '#C9A84C', marginBottom: '8px' }}>
                  {s.n}
                </div>
                <div style={{ fontFamily: 'var(--font-body, Inter, sans-serif)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          FAQ — accordion
          ================================================ */}
      <section className="section">
        <div className="container-narrow">
          <h2 className="section-title text-center reveal">
            <span className="section-title__underline">Domande frequenti</span>
          </h2>
          <div style={{ textAlign: 'left', marginTop: '40px' }}>
            <FaqAccordion />
          </div>
          <div style={{ marginTop: '28px', textAlign: 'center' }}>
            <Link href="/marketing/faq" className="btn btn-secondary">
              Vedi tutte le domande
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================
          CTA FINALE — istituzionale
          Ref: NEURO_SPEC §4 — coerenza con hero, tono sobrio
          ================================================ */}
      <section style={{ background: '#1B3A6B', padding: '80px 24px', textAlign: 'center' }}>
        <div className="container-narrow">
          <p style={{ fontFamily: 'var(--font-body, Inter, sans-serif)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(201,168,76,0.8)', marginBottom: '16px' }}>
            Centro Nazionale di Studi Classici
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading, Playfair Display, serif)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 700, color: '#fff', marginBottom: '16px', lineHeight: 1.25 }}>
            Inizia il tuo percorso nelle lingue classiche
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '36px', fontSize: '1rem', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto 36px' }}>
            5.000 studenti hanno scelto il Centro. Classi di massimo 15 persone,
            docenti specializzati, accreditamento MIM.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/corsi/corsi-live" className="btn" style={{ background: '#C9A84C', color: '#1A2A4A', padding: '14px 32px', fontWeight: 700, fontSize: '0.95rem', borderRadius: '5px', textDecoration: 'none' }}>
              Scopri i corsi
            </Link>
            <Link href="/marketing/chi-siamo" className="btn btn-ghost">
              Chi siamo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

// ================================================
// SUB-COMPONENTS
// ================================================

function LanguageCard({
  lang, desc, courses, quote, quoteAuthor, href, featured = false,
}: {
  lang: string
  desc: string
  courses: string
  quote?: string
  quoteAuthor?: string
  href: string
  featured?: boolean
}) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div
        style={{
          background: featured ? '#F4F6F8' : '#fff',
          border: featured ? '1px solid #DDE3ED' : '1px solid #DDE3ED',
          borderTop: featured ? '3px solid #1B3A6B' : '1px solid #DDE3ED',
          borderRadius: '8px',
          padding: featured ? '28px 28px 24px' : '22px 24px 20px',
          transition: 'box-shadow 0.2s, transform 0.2s',
          cursor: 'pointer',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
        className="lang-card"
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', flex: 1 }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-heading, Playfair Display, serif)',
              fontSize: featured ? '1.35rem' : '1.05rem',
              fontWeight: 700,
              color: '#1A2A3A',
              marginBottom: '6px',
            }}>
              {lang}
            </h3>
            <p style={{ color: '#5A6A7A', fontSize: '0.85rem', marginBottom: '4px', lineHeight: 1.6 }}>
              {desc}
            </p>
            <p style={{ color: '#1B3A6B', fontSize: '0.78rem', fontWeight: 600, fontFamily: 'var(--font-body, Inter, sans-serif)', marginBottom: 0 }}>
              {courses}
            </p>
          </div>
          {quote && (
            <blockquote style={{ textAlign: 'right', margin: 0, borderLeft: 'none', paddingLeft: 0, maxWidth: '180px' }}>
              <p style={{
                fontFamily: 'var(--font-heading, Playfair Display, serif)',
                fontStyle: 'italic',
                color: '#1B3A6B',
                fontSize: '0.9rem',
                marginBottom: '2px',
                opacity: 0.75,
              }}>
                &ldquo;{quote}&rdquo;
              </p>
              <footer style={{ fontSize: '0.7rem', color: '#5A6A7A' }}>
                &mdash; {quoteAuthor}
              </footer>
            </blockquote>
          )}
        </div>
        <div style={{ marginTop: '16px' }}>
          <span style={{ color: '#1B3A6B', fontSize: '0.82rem', fontWeight: 600, fontFamily: 'var(--font-body, Inter, sans-serif)' }}>
            Vedi i corsi &rarr;
          </span>
        </div>
      </div>
    </Link>
  )
}

function FaqAccordion() {
  const faqs = [
    {
      q: 'Devo avere conoscenze pregresse per iscrivermi?',
      a: 'No. I nostri corsi partono dal livello A1.1, pensato per chi non ha mai studiato la lingua. Ogni percorso è costruito su livelli progressivi secondo il QCER.',
    },
    {
      q: 'Cosa distingue i corsi in diretta dai corsi asincroni?',
      a: 'I corsi in diretta sono lezioni in tempo reale con il docente, con feedback diretto e sessioni di conversazione nella lingua. I corsi asincroni sono video-lezioni registrate, da seguire ai propri tempi con accesso a vita al materiale.',
    },
    {
      q: 'Il Bonus Docenti MIM è applicabile?',
      a: 'Sì. I corsi di Formazione Docenti del Centro sono accreditati MIM e sono quindi acquistabili con il Bonus Docenti (Carta del Docente).',
    },
    {
      q: 'Come funziona il tutoraggio individuale?',
      a: 'Scegli il docente, la lingua e l\'orario disponibile. Il primo colloquio di orientamento (30 minuti) è gratuito. Dopo la conferma del pagamento ricevi il collegamento alla sessione.',
    },
    {
      q: 'Posso disdire l\'abbonamento al portale?',
      a: 'Sì, in qualsiasi momento, senza penali. L\'accesso rimane attivo fino alla fine del periodo già pagato.',
    },
    {
      q: 'Dove si trovano le sedi fisiche?',
      a: 'Il Centro ha sedi a Firenze (sede principale), Milano, Torino, Parma e Pordenone. I corsi online sono accessibili da qualsiasi parte del mondo.',
    },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {faqs.map((faq, i) => (
        <details key={i} style={{ borderBottom: '1px solid #DDE3ED', padding: '0' }}>
          <summary style={{
            cursor: 'pointer', padding: '18px 0',
            fontFamily: 'var(--font-body, Inter, sans-serif)', fontWeight: 600, fontSize: '0.95rem',
            color: '#1A2A3A', listStyle: 'none', display: 'flex', justifyContent: 'space-between',
            userSelect: 'none',
          }}>
            {faq.q}
            <span style={{ color: '#1B3A6B', fontWeight: 400, flexShrink: 0, marginLeft: '16px', fontSize: '1.1rem' }}>+</span>
          </summary>
          <p style={{ padding: '0 0 18px', color: '#5A6A7A', fontSize: '0.88rem', lineHeight: 1.75 }}>
            {faq.a}
          </p>
        </details>
      ))}
    </div>
  )
}
