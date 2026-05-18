// Staff — /marketing/staff
// Design Oxford/Cambridge: navy #002147, gold #C9A84C
// Docenti reali: Marchi, Cariddi, Bibbiani, Viotti
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Il nostro team di docenti — GrecoLatinoVivo',
  description: 'Conosci il team di docenti specializzati di GrecoLatinoVivo: Giampiero Marchi (Latino), Ilaria Cariddi (Greco Antico) e gli altri esperti del Centro Nazionale di Studi Classici.',
  alternates: { canonical: 'https://grecolatinovivo.it/staff' },
}

const docenti = [
  {
    nome: 'Giampiero Marchi',
    ruolo: 'Direttore',
    disciplina: 'Latino',
    bio: 'Fondatore e direttore del Centro dal 2015. Specialista del Metodo Natura e della tradizione di Hans Henning Ørberg. Ha formato oltre 5.000 studenti in dieci anni di attività.',
  },
  {
    nome: 'Ilaria Cariddi',
    ruolo: 'Docente',
    disciplina: 'Greco Antico',
    bio: 'Specialista di lingua e letteratura greca. Applica l’approccio induttivo-contestuale ai testi del corpus greco: da Omero ai tragici, dai lirici agli oratori.',
  },
  {
    nome: 'Alberto Bibbiani',
    ruolo: 'Docente',
    disciplina: '[DA INSERIRE]',
    bio: 'Docente specializzato presso il Centro Nazionale di Studi Classici GrecoLatinoVivo. Formazione e ambiti disciplinari in aggiornamento.',
  },
  {
    nome: 'Emanuele Viotti',
    ruolo: 'Docente',
    disciplina: '[DA INSERIRE]',
    bio: 'Docente specializzato presso il Centro Nazionale di Studi Classici GrecoLatinoVivo. Formazione e ambiti disciplinari in aggiornamento.',
  },
]

function Avatar({ nome }: { nome: string }) {
  const iniziali = nome
    .split(' ')
    .map((n) => n[0])
    .join('')
  return (
    <div
      style={{
        width: '72px',
        height: '72px',
        background: '#002147',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 20px',
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      <span
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.4rem',
          fontWeight: 400,
          color: '#C9A84C',
          letterSpacing: '0.04em',
        }}
      >
        {iniziali}
      </span>
    </div>
  )
}

export default function StaffPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: 'linear-gradient(160deg, #002147 0%, #003070 100%)',
          padding: '80px 24px 64px',
          textAlign: 'center',
        }}
      >
        <div className="container-narrow">
          <p
            className="eyebrow"
            style={{ color: '#C9A84C', marginBottom: '16px' }}
          >
            Centro Nazionale di Studi Classici
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '20px',
            }}
          >
            Il nostro team di docenti
          </h1>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.8,
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Specialisti nelle lingue classiche e nelle metodologie di acquisizione.
            Ogni docente ha un percorso di formazione rigoroso e una pratica
            didattica continua.
          </p>
        </div>
      </section>

      {/* GRID DOCENTI */}
      <section className="section">
        <div className="container">
          <div className="grid-4">
            {docenti.map((d) => (
              <div key={d.nome} className="card reveal" style={{ textAlign: 'center' }}>
                <Avatar nome={d.nome} />
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#C9A84C',
                    background: '#002147',
                    display: 'inline-block',
                    padding: '2px 10px',
                    marginBottom: '10px',
                  }}
                >
                  {d.disciplina}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 400,
                    color: '#002147',
                    marginBottom: '4px',
                  }}
                >
                  {d.nome}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#777777',
                    marginBottom: '14px',
                  }}
                >
                  {d.ruolo}
                </p>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: '#555555',
                    lineHeight: 1.7,
                  }}
                >
                  {d.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* SELEZIONE DOCENTI */}
      <section className="section section--alt">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'start',
            }}
          >
            <div>
              <h2
                className="section-title"
                style={{ color: '#002147' }}
              >
                <span className="section-title__underline">
                  Docenti certificati
                </span>
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#1a1a1a',
                  lineHeight: 1.85,
                  marginTop: '24px',
                  marginBottom: '20px',
                }}
              >
                La selezione dei docenti di GrecoLatinoVivo segue criteri precisi:
                preparazione filologica solida, formazione specifica nel Metodo
                Natura, e comprovata esperienza nell&apos;insegnamento a classi
                di adulti e liceali.
              </p>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#1a1a1a',
                  lineHeight: 1.85,
                  marginBottom: '20px',
                }}
              >
                Non basta conoscere la lingua classica: occorre saper guidare
                uno studente attraverso le fasi dell&apos;acquisizione, riconoscere
                le difficolt&agrave; specifiche del Metodo Natura, e costruire
                un ambiente d&apos;apprendimento che non spaventi e non frusti.
              </p>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#1a1a1a',
                  lineHeight: 1.85,
                }}
              >
                Tutti i docenti del Centro partecipano ai programmi interni
                di aggiornamento e sono coinvolti nella progettazione del
                materiale didattico originale usato nei corsi.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {[
                {
                  n: '10+',
                  l: 'anni di esperienza media dei docenti',
                },
                {
                  n: '15',
                  l: 'studenti massimo per classe',
                },
                {
                  n: 'MIM',
                  l: 'accreditamento per la Formazione Docenti',
                },
                {
                  n: 'ALTE',
                  l: 'membro associato per la valutazione linguistica',
                },
              ].map((s) => (
                <div
                  key={s.n}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    background: '#ffffff',
                    borderTop: '3px solid #002147',
                    borderLeft: '1px solid #e8e8e8',
                    borderRight: '1px solid #e8e8e8',
                    borderBottom: '1px solid #e8e8e8',
                    padding: '20px 24px',
                  }}
                >
                  <span className="stat-value" style={{ flexShrink: 0, minWidth: '60px' }}>
                    {s.n}
                  </span>
                  <span className="stat-label">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* FORMAZIONE DOCENTI MIM */}
      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <p
            className="eyebrow"
            style={{ color: '#777777', marginBottom: '12px' }}
          >
            Dal 2023
          </p>
          <h2
            className="section-title"
            style={{ marginBottom: '16px' }}
          >
            <span className="section-title__underline">
              Formazione Docenti accreditata MIM
            </span>
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#555555',
              lineHeight: 1.85,
              maxWidth: '600px',
              margin: '0 auto 12px',
            }}
          >
            Dal 2023 GrecoLatinoVivo offre un programma di formazione per
            gli insegnanti di Latino e Greco dei licei italiani, accreditato
            dal Ministero dell&apos;Istruzione e del Merito. I docenti imparano
            a usare il Metodo Natura nelle proprie classi.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <div className="container-narrow">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
            Vuoi saperne di pi&ugrave;?
          </h2>
          <p>
            Contattaci per informazioni sui corsi, sulla didattica
            e sul team di GrecoLatinoVivo.
          </p>
          <Link href="/marketing/contatti" className="btn btn-ghost">
            Contattaci
          </Link>
        </div>
      </div>
    </>
  )
}
