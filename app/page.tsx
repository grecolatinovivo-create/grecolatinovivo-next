// Homepage — /
// Struttura da README_NUOVO.md §9 e UX_SPEC.md wireframe
// Dati reali: 5.000+ studenti, MIM, ALTE, dal 2015, 6 dipartimenti, 5 sedi
// Citazione ufficiale da chi-siamo.html missione-quote
import type { Metadata } from 'next'
import Link from 'next/link'
import { PLANS } from '@/types'

export const metadata: Metadata = {
  title: 'Centro Nazionale di Studi Classici «GrecoLatinoVivo»',
  description:
    'Studia Latino, Greco Antico, Egiziano, Ebraico e Sanscrito con i migliori docenti italiani. Corsi live, asincroni e tutoraggio 1:1. Dal 2015, accreditato MIM.',
  alternates: { canonical: 'https://grecolatinovivo.it' },
}

export default function HomePage() {
  return (
    <>
      {/* ===========================
          HERO
          Gerarchia attenzione NEURO_SPEC §3.1:
          0-300ms: headline
          300ms-2s: trust bar + CTA
          =========================== */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1A1A1A 0%, #2d1a1a 60%, #1A1A1A 100%)',
          padding: '100px 24px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorazione gold — solo visiva, non testo (WCAG) */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'radial-gradient(ellipse 60% 40% at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: '860px' }}>

          {/* Badge accreditamento */}
          <p style={{
            display: 'inline-block',
            background: 'rgba(201,168,76,0.12)',
            border: '1px solid rgba(201,168,76,0.3)',
            color: '#C9A84C',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            padding: '5px 14px',
            borderRadius: '20px',
            marginBottom: '24px',
          }}>
            Accreditato MIM · Membro Associato ALTE · Dal 2015
          </p>

          {/* Headline principale */}
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 900,
            fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
            color: '#FFFFFF',
            lineHeight: 1.15,
            marginBottom: '20px',
          }}>
            Studia le lingue dell&apos;antichità<br />
            con i migliori docenti italiani
          </h1>

          {/* Sottotitolo */}
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.7,
            marginBottom: '36px',
            maxWidth: '640px',
            margin: '0 auto 36px',
          }}>
            Latino, Greco Antico, Egiziano, Ebraico e Sanscrito.
            Corsi live, asincroni e tutoraggio 1:1.
            Il metodo Natura applicato alle lingue classiche.
          </p>

          {/* CTA */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/commercio/abbonamento" className="btn btn-primary">
              Inizia il tuo percorso
            </Link>
            <Link href="/corsi/corsi-asincroni" className="btn btn-ghost">
              Sfoglia il catalogo
            </Link>
          </div>

          {/* Trust bar — ordine NEURO_SPEC §2.1: studenti → anno → corsi → accreditamento */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '8px',
            marginTop: '56px',
            padding: '24px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
          }}>
            {[
              { value: '5.000+', label: 'studenti formati' },
              { value: '2015', label: 'anno di fondazione' },
              { value: '56', label: 'corsi disponibili' },
              { value: 'MIM', label: 'accreditato' },
            ].map((stat) => (
              <div key={stat.value} style={{ textAlign: 'center', padding: '8px 4px' }}>
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.8rem',
                  fontWeight: 900,
                  color: '#C9A84C', // oro su sfondo scuro — WCAG OK
                  lineHeight: 1,
                  marginBottom: '4px',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.55)',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          GUIDA ORIENTAMENTO
          NEURO_SPEC §5 FP-01: riduce paralisi da scelta
          =========================== */}
      <section className="section section--alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title reveal">
            <span className="section-title__underline">Da dove vuoi iniziare?</span>
          </h2>
          <p className="section-subtitle reveal" style={{ margin: '0 auto 48px' }}>
            Scegli il percorso più adatto a te.
          </p>
          <div className="grid-4">
            {[
              {
                icon: '📖',
                emoji: true,
                title: 'Corsi in Diretta',
                desc: 'Lezioni live con docenti universitari. Massimo 15 studenti per classe, feedback in tempo reale.',
                href: '/corsi/corsi-live',
                cta: 'Vedi i corsi',
              },
              {
                icon: '▶',
                title: 'Catalogo Asincrono',
                desc: '56 corsi registrati da seguire al tuo ritmo. Accesso a vita al materiale.',
                href: '/corsi/corsi-asincroni',
                cta: 'Sfoglia il catalogo',
              },
              {
                icon: '👤',
                title: 'Tutoraggio 1:1',
                desc: 'Percorso personalizzato con un docente dedicato. Il primo colloquio di orientamento è gratuito.',
                href: '/corsi/lezioni-individuali',
                cta: 'Prenota un colloquio',
              },
              {
                icon: '🎟',
                title: 'Eventi e Convegni',
                desc: 'Seminari, bidua latinitatis, convegni accademici. Partecipa alla vita del Centro.',
                href: '/eventi',
                cta: 'Vedi gli eventi',
              },
            ].map((item) => (
              <div key={item.href} className="card reveal" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '12px' }} aria-hidden="true">{item.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: '#1A1A1A' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6B6B6B', lineHeight: 1.6, flex: 1, marginBottom: '16px' }}>
                  {item.desc}
                </p>
                <Link href={item.href} className="btn btn-secondary btn-sm" style={{ alignSelf: 'flex-start' }}>
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          TRE PERCORSI DI ACQUISTO
          Sezione istituzionale — zero emoji
          Distinzione chiara dei tre canali di accesso
          =========================== */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title reveal">
              <span className="section-title__underline">Come accedere ai corsi</span>
            </h2>
            <p className="section-subtitle reveal" style={{ margin: '8px auto 0' }}>
              Tre modalità di acquisto. Scegli quella più adatta al tuo percorso.
            </p>
          </div>

          {/* Tre colonne in una scheda unica — bordo perimetrale condiviso */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            border: '1px solid #E8E0D0',
            borderRadius: '14px',
            overflow: 'hidden',
          }}>

            {/* ── 1. Corsi in Diretta ── */}
            <div className="reveal" style={{
              padding: '36px 28px',
              background: '#fff',
              borderRight: '1px solid #E8E0D0',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#8B1A1A',
                marginBottom: '12px',
              }}>
                Acquisto singolo
              </p>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#1A1A1A',
                marginBottom: '12px',
              }}>
                Corsi in Diretta
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: '#6B6B6B',
                lineHeight: 1.7,
                marginBottom: '20px',
                flex: 1,
              }}>
                Lezioni live con docenti specializzati, in classi di massimo 15 studenti.
                Feedback diretto e calendario fisso con sessioni settimanali.
              </p>
              <ul style={{
                listStyle: 'none',
                marginBottom: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}>
                {[
                  'Iscrizione per singolo corso',
                  'Registrazione della lezione inclusa',
                  'Attestato di partecipazione',
                  'Bonus Docenti MIM applicabile',
                ].map((f) => (
                  <li key={f} style={{ display: 'flex', gap: '8px', fontSize: '0.82rem', color: '#3A3A3A' }}>
                    <span style={{ color: '#8B1A1A', fontWeight: 700, flexShrink: 0 }}>—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/corsi/corsi-live" className="btn btn-secondary btn-sm" style={{ alignSelf: 'flex-start' }}>
                Vedi i corsi disponibili
              </Link>
            </div>

            {/* ── 2. Corsi Asincroni ── */}
            <div className="reveal" style={{
              padding: '36px 28px',
              background: '#fff',
              borderRight: '1px solid #E8E0D0',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#8B1A1A',
                marginBottom: '12px',
              }}>
                Acquisto singolo
              </p>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#1A1A1A',
                marginBottom: '12px',
              }}>
                Corsi Asincroni
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: '#6B6B6B',
                lineHeight: 1.7,
                marginBottom: '20px',
                flex: 1,
              }}>
                Video-lezioni registrate da seguire ai propri tempi, con accesso
                a vita al materiale. 56 corsi disponibili su tutte le lingue.
              </p>
              <ul style={{
                listStyle: 'none',
                marginBottom: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}>
                {[
                  'Acquisto per singolo corso',
                  'Accesso a vita al materiale',
                  'Attestato digitale incluso',
                  'Bonus Docenti MIM applicabile',
                ].map((f) => (
                  <li key={f} style={{ display: 'flex', gap: '8px', fontSize: '0.82rem', color: '#3A3A3A' }}>
                    <span style={{ color: '#8B1A1A', fontWeight: 700, flexShrink: 0 }}>—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/corsi/corsi-asincroni" className="btn btn-secondary btn-sm" style={{ alignSelf: 'flex-start' }}>
                Sfoglia il catalogo
              </Link>
            </div>

            {/* ── 3. Portale Abbonamento ── */}
            <div className="reveal" style={{
              padding: '36px 28px',
              background: 'linear-gradient(160deg, #1A1A1A 0%, #2d1a1a 100%)',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#C9A84C',
                marginBottom: '12px',
              }}>
                Abbonamento mensile o annuale
              </p>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '12px',
              }}>
                Portale Abbonamento
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.7,
                marginBottom: '20px',
                flex: 1,
              }}>
                Accesso illimitato a tutti i corsi registrati del catalogo
                con un unico abbonamento. Tre piani disponibili.
              </p>
              {/* Tre piani in sintesi */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
                {PLANS.map((plan) => (
                  <div key={plan.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 14px',
                    background: plan.isFeatured ? 'rgba(201,168,76,0.12)' : 'rgba(255,255,255,0.05)',
                    border: plan.isFeatured ? '1px solid rgba(201,168,76,0.3)' : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                  }}>
                    <span style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: plan.isFeatured ? 700 : 400,
                      color: plan.isFeatured ? '#C9A84C' : 'rgba(255,255,255,0.75)',
                    }}>
                      {plan.name}
                    </span>
                    <span style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: plan.isFeatured ? '#C9A84C' : 'rgba(255,255,255,0.65)',
                    }}>
                      €{plan.priceMonthly.toFixed(2).replace('.', ',')}<span style={{ fontSize: '0.7rem', fontWeight: 400 }}>/mese</span>
                    </span>
                  </div>
                ))}
              </div>
              <a href="https://portale.grecolatinovivo.it" className="btn btn-primary btn-sm" style={{ alignSelf: 'flex-start' }} target="_blank" rel="noopener noreferrer">
                Scopri i piani
              </a>
              <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginTop: '10px' }}>
                Disdici quando vuoi. Nessun vincolo.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===========================
          SEZIONE LINGUE
          Latino e Greco 2x width — COUNCIL.md decisione 3
          =========================== */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title reveal">
              <span className="section-title__underline">Le nostre lingue</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            {/* Latino — card 2x */}
            <LanguageCard
              lang="Latino"
              quote="Alea iacta est"
              quoteAuthor="Cesare"
              desc="La lingua della civiltà occidentale"
              courses="7 corsi · A1.1–B1.3"
              href="/corsi/corsi-asincroni?lang=latino"
              featured
            />
            {/* Greco Antico — card 2x */}
            <LanguageCard
              lang="Greco Antico"
              quote="γνῶθι σεαυτόν"
              quoteAuthor="Oracolo di Delfi"
              desc="La lingua della filosofia e della scienza"
              courses="7 corsi · A1.1–B1.3"
              href="/corsi/corsi-asincroni?lang=greco"
              featured
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            <LanguageCard lang="Egiziano Antico" desc="Geroglifici e lingua parlata" courses="3 corsi" href="/corsi/corsi-asincroni?lang=egiziano" />
            <LanguageCard lang="Ebraico Biblico" desc="La lingua dei testi sacri" courses="3 corsi" href="/corsi/corsi-asincroni?lang=ebraico" />
            <LanguageCard lang="Sanscrito" desc="La lingua madre dell'Indo-Europeo" courses="[DA INSERIRE]" href="/corsi/corsi-asincroni?lang=sanscrito" />
          </div>
        </div>
      </section>

      {/* ===========================
          PRICING — sezione abbonamento
          Ordine NEURO_SPEC §2.5: Cultura prima (ancoraggio prezzo basso)
          =========================== */}
      <section className="section section--alt" id="abbonamento">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title reveal">
            <span className="section-title__underline">Il portale abbonamento</span>
          </h2>
          <p className="section-subtitle reveal" style={{ margin: '0 auto 12px' }}>
            Accedi a tutti i corsi registrati con un abbonamento mensile o annuale.
          </p>
          <p style={{ color: '#6B6B6B', fontSize: '0.875rem', marginBottom: '40px' }}>
            Disdici quando vuoi. Nessun vincolo.
          </p>

          {/* Toggle mensile/annuale */}
          <PricingToggle />
        </div>
      </section>

      {/* ===========================
          METODOLOGIA
          =========================== */}
      <section className="section" style={{ background: '#1A1A1A', color: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            <div className="reveal">
              <p style={{ color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>
                La nostra metodologia
              </p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>
                Il Metodo Natura
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '16px' }}>
                Ispirato all&apos;approccio di Hans Henning Ørberg, il Metodo Natura permette di
                apprendere le lingue classiche come lingue vive: ascoltando, leggendo e
                parlando nella lingua, non studiando regole astratte.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '28px' }}>
                Il corso base (72 ore) equivale al biennio liceale. Con il nostro approccio,
                studenti adulti raggiungono la lettura autonoma dei testi in tempi notevolmente
                più brevi rispetto ai metodi tradizionali.
              </p>
              <Link href="/metodologia" className="btn btn-ghost">
                Scopri il metodo
              </Link>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { n: '72h', label: 'corso base (equivalente al biennio liceale)' },
                { n: '15', label: 'studenti massimo per classe' },
                { n: 'A1–C2', label: 'livelli QCER coperti' },
                { n: '5', label: 'sedi fisiche in Italia' },
              ].map((s) => (
                <div key={s.n} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 900, color: '#C9A84C', marginBottom: '8px' }}>{s.n}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===========================
          FAQ — accordion
          =========================== */}
      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 className="section-title reveal">
            <span className="section-title__underline">Domande frequenti</span>
          </h2>
          <div style={{ textAlign: 'left', marginTop: '40px' }}>
            <FaqAccordion />
          </div>
          <div style={{ marginTop: '24px' }}>
            <Link href="/faq" className="btn btn-secondary">
              Vedi tutte le FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* ===========================
          FINAL CTA
          NEURO_SPEC §4.1: "Inizia il tuo percorso" — coerenza con hero
          =========================== */}
      <section className="section" style={{ background: '#8B1A1A', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
            Inizia il tuo percorso oggi
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px', fontSize: '1.05rem' }}>
            5.000+ studenti hanno già scelto il Centro Nazionale di Studi Classici.
            Unisciti a una comunità di studiosi seri.
          </p>
          <Link href="/commercio/abbonamento" className="btn" style={{ background: '#fff', color: '#8B1A1A', padding: '16px 36px', fontWeight: 700, fontSize: '1rem' }}>
            Inizia il tuo percorso
          </Link>
        </div>
      </section>
    </>
  )
}

// --- SUB-COMPONENTS ---

function LanguageCard({
  lang, quote, quoteAuthor, desc, courses, href, featured = false,
}: {
  lang: string; quote?: string; quoteAuthor?: string; desc: string; courses: string; href: string; featured?: boolean
}) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div style={{
        background: featured ? 'linear-gradient(135deg, #1A1A1A, #2d1a1a)' : '#fff',
        border: `1px solid ${featured ? 'rgba(201,168,76,0.2)' : '#E8E0D0'}`,
        borderRadius: '12px',
        padding: '28px',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
        height: '100%',
      }}
      className="lang-card"
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: featured ? '1.4rem' : '1.1rem',
              fontWeight: 700,
              color: featured ? '#fff' : '#1A1A1A',
              marginBottom: '6px',
            }}>
              {lang}
            </h3>
            <p style={{ color: featured ? 'rgba(255,255,255,0.65)' : '#6B6B6B', fontSize: '0.875rem', marginBottom: '0' }}>
              {desc} · {courses}
            </p>
          </div>
          {quote && (
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: '#C9A84C', fontSize: '0.95rem', marginBottom: '2px' }}>
                &ldquo;{quote}&rdquo;
              </p>
              <p style={{ fontSize: '0.7rem', color: featured ? 'rgba(255,255,255,0.4)' : '#aaa' }}>
                — {quoteAuthor}
              </p>
            </div>
          )}
        </div>
        <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: featured ? '#C9A84C' : '#8B1A1A', fontSize: '0.85rem', fontWeight: 600 }}>
            Inizia →
          </span>
        </div>
      </div>
    </Link>
  )
}

function PricingToggle() {
  // Reso Server Component statico — il toggle interattivo è gestito client-side
  // via script inline per evitare hydration mismatch
  return (
    <div>
      <div id="pricing-toggle-wrapper" style={{ marginBottom: '40px' }}>
        <div style={{ display: 'inline-flex', background: '#E8E0D0', borderRadius: '8px', padding: '4px', gap: '4px' }}>
          <button id="tog-monthly" className="tog-btn tog-btn--active" aria-pressed="true">
            Mensile
          </button>
          <button id="tog-annual" className="tog-btn" aria-pressed="false">
            Annuale <span style={{ color: '#1e7e34', fontWeight: 700 }}>— risparmia fino a 60€</span>
          </button>
        </div>
      </div>

      <div className="grid-3" style={{ maxWidth: '960px', margin: '0 auto' }}>
        {PLANS.map((plan) => (
          <div key={plan.id} className={`pricing-card card reveal ${plan.isFeatured ? 'pricing-card--featured' : ''}`}>
            {plan.badge && (
              <div className="pricing-badge">{plan.badge}</div>
            )}
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8B1A1A', marginBottom: '4px' }}>
              PIANO
            </p>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '4px' }}>
              {plan.name}
            </h3>
            <p style={{ color: '#6B6B6B', fontSize: '0.875rem', marginBottom: '16px' }}>
              {plan.subtitle}
            </p>
            <div style={{ marginBottom: '20px' }}>
              <span className="price-monthly" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.4rem', fontWeight: 700, color: '#1A1A1A' }}>
                €{plan.priceMonthly.toFixed(2).replace('.', ',')}
              </span>
              <span className="price-annual" style={{ display: 'none', fontFamily: 'Playfair Display, serif', fontSize: '2.4rem', fontWeight: 700, color: '#1A1A1A' }}>
                €{plan.priceAnnual}
              </span>
              <span style={{ color: '#6B6B6B', fontSize: '0.875rem' }}>
                <span className="price-period">/mese</span>
              </span>
            </div>
            <ul style={{ listStyle: 'none', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {plan.features.map((f) => (
                <li key={f} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '0.875rem', color: '#3A3A3A' }}>
                  <span style={{ color: '#1e7e34', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={`/commercio/abbonamento?piano=${plan.id}`}
              className={`btn ${plan.isFeatured ? 'btn-primary' : 'btn-secondary'}`}
              style={{ width: '100%', justifyContent: 'center' }}
              data-plan={plan.id}
              data-open-register="true"
            >
              {plan.id === 'cultura' ? 'Inizia con Cultura' : plan.id === 'linguae' ? 'Scegli Linguae' : 'Accedi all\'Accademia'}
            </Link>
            <p style={{ fontSize: '0.75rem', color: '#aaa', textAlign: 'center', marginTop: '8px' }}>
              Disdici quando vuoi. Nessun vincolo.
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .pricing-card { display: flex; flex-direction: column; position: relative; }
        .pricing-card--featured {
          border: 2px solid #8B1A1A;
          box-shadow: 0 8px 32px rgba(139,26,26,0.12);
        }
        .pricing-badge {
          position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
          background: #8B1A1A; color: #fff;
          font-family: Inter, sans-serif; font-size: 0.72rem; font-weight: 700;
          padding: 4px 14px; border-radius: 20px; white-space: nowrap;
        }
        .tog-btn {
          background: transparent; border: none; cursor: pointer;
          font-family: Inter, sans-serif; font-size: 0.875rem; font-weight: 500;
          color: #6B6B6B; padding: 8px 18px; border-radius: 6px;
          transition: all 0.15s;
        }
        .tog-btn--active {
          background: #fff; color: #1A1A1A; font-weight: 600;
          box-shadow: 0 1px 4px rgba(0,0,0,0.1);
        }
      `}</style>

      {/* Script toggle mensile/annuale — senza React per evitare idratazione */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          var togM = document.getElementById('tog-monthly');
          var togA = document.getElementById('tog-annual');
          if (!togM || !togA) return;
          function setMonthly() {
            togM.classList.add('tog-btn--active'); togA.classList.remove('tog-btn--active');
            togM.setAttribute('aria-pressed','true'); togA.setAttribute('aria-pressed','false');
            document.querySelectorAll('.price-monthly').forEach(function(el){el.style.display='';});
            document.querySelectorAll('.price-annual').forEach(function(el){el.style.display='none';});
            document.querySelectorAll('.price-period').forEach(function(el){el.textContent='/mese';});
          }
          function setAnnual() {
            togA.classList.add('tog-btn--active'); togM.classList.remove('tog-btn--active');
            togA.setAttribute('aria-pressed','true'); togM.setAttribute('aria-pressed','false');
            document.querySelectorAll('.price-monthly').forEach(function(el){el.style.display='none';});
            document.querySelectorAll('.price-annual').forEach(function(el){el.style.display='';});
            document.querySelectorAll('.price-period').forEach(function(el){el.textContent='/anno';});
          }
          togM.addEventListener('click', setMonthly);
          togA.addEventListener('click', setAnnual);
        })();
      `}} />
    </div>
  )
}

function FaqAccordion() {
  const faqs = [
    { q: 'Devo avere conoscenze pregresse per iscrivermi?', a: 'No. I nostri corsi partono dal livello A1.1, pensato per chi non ha mai studiato la lingua. Ogni percorso è costruito su livelli progressivi.' },
    { q: 'Cosa distingue i corsi live dai corsi asincroni?', a: 'I corsi live sono lezioni in tempo reale con il docente, con feedback diretto. I corsi asincroni sono video-lezioni registrate, da seguire ai propri tempi con accesso a vita al materiale.' },
    { q: 'Il Bonus Docenti MIM è applicabile?', a: 'Sì. I corsi di Formazione Docenti del Centro sono accreditati MIM e sono quindi acquistabili con il Bonus Docenti (Carta del Docente).' },
    { q: 'Come funziona il tutoraggio individuale?', a: 'Scegli il docente, la lingua e l\'orario disponibile. Il primo colloquio di orientamento (30 min) è gratuito. Dopo la conferma del pagamento ricevi il link per il collegamento.' },
    { q: 'Posso disdire l\'abbonamento al portale?', a: 'Sì, in qualsiasi momento, senza penali. L\'accesso rimane attivo fino alla fine del periodo già pagato.' },
    { q: 'Dove si trovano le sedi fisiche?', a: 'Il Centro ha sedi a Firenze (sede principale), Milano, Torino, Parma e Pordenone. I corsi online sono accessibili da qualsiasi parte del mondo.' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {faqs.map((faq, i) => (
        <details key={i} style={{ borderBottom: '1px solid #E8E0D0', padding: '0' }}>
          <summary style={{
            cursor: 'pointer', padding: '16px 0',
            fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '1rem',
            color: '#1A1A1A', listStyle: 'none', display: 'flex', justifyContent: 'space-between',
            userSelect: 'none',
          }}>
            {faq.q}
            <span style={{ color: '#8B1A1A', fontWeight: 400, flexShrink: 0, marginLeft: '16px' }}>+</span>
          </summary>
          <p style={{ padding: '0 0 16px', color: '#6B6B6B', fontSize: '0.9rem', lineHeight: 1.7 }}>
            {faq.a}
          </p>
        </details>
      ))}
    </div>
  )
}
