import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Termini e condizioni — GrecoLatinoVivo',
  description:
    'Termini e condizioni di utilizzo del portale e dei servizi del Centro Nazionale di Studi Classici GrecoLatinoVivo. Disciplina del rapporto contrattuale, abbonamenti, recesso e proprietà intellettuale.',
}

export default function TerminiCondizioniPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: '#002147',
          padding: '72px 24px 60px',
          textAlign: 'center',
        }}
      >
        <div className="container-narrow">
          <p className="eyebrow" style={{ color: '#C9A84C', marginBottom: '16px' }}>
            Versione del [DA INSERIRE]
          </p>
          <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.25,
            }}
          >
            Termini e condizioni di utilizzo
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '1rem',
              maxWidth: '600px',
              margin: '16px auto 0',
            }}
          >
            Leggere attentamente prima di accedere ai servizi del portale.
          </p>
        </div>
      </section>

      {/* Linea oro */}
      <div style={{ height: '3px', background: '#C9A84C' }} />

      {/* Corpo */}
      <section className="section" style={{ background: '#f8f7f4' }}>
        <div className="container-narrow">

          {/* 1. Definizioni */}
          <div style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontWeight: 400,
                color: '#002147',
                marginBottom: '16px',
                paddingBottom: '10px',
                borderBottom: '1px solid #e8e8e8',
              }}
            >
              1. Definizioni
            </h2>
            <p style={{ color: '#1a1a1a', lineHeight: 1.8, marginBottom: '16px' }}>
              Ai fini dei presenti Termini e condizioni si intende per:
            </p>
            <ul
              style={{
                paddingLeft: '24px',
                color: '#555',
                lineHeight: 1.9,
              }}
            >
              <li>
                <strong style={{ color: '#1a1a1a' }}>«Centro»</strong> o{' '}
                <strong style={{ color: '#1a1a1a' }}>«GrecoLatinoVivo»</strong>: il
                Centro Nazionale di Studi Classici «GrecoLatinoVivo», P.IVA [DA
                INSERIRE], con sede legale in [DA INSERIRE], titolare e gestore del
                Portale.
              </li>
              <li>
                <strong style={{ color: '#1a1a1a' }}>«Portale»</strong>: il sito web{' '}
                <a
                  href="https://portale.grecolatinovivo.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  portale.grecolatinovivo.it
                </a>{' '}
                e tutti i sottodomini e le applicazioni web a esso collegati.
              </li>
              <li>
                <strong style={{ color: '#1a1a1a' }}>«Servizi»</strong>: l&apos;insieme
                delle risorse didattiche, dei corsi, dei materiali multimediali, delle
                sessioni in diretta e di ogni altra prestazione resa disponibile
                tramite il Portale.
              </li>
              <li>
                <strong style={{ color: '#1a1a1a' }}>«Utente»</strong>: qualsiasi
                persona fisica che si registri al Portale, crei un account e acceda ai
                Servizi, anche nella sola veste di visitatore.
              </li>
              <li>
                <strong style={{ color: '#1a1a1a' }}>«Consumatore»</strong>: l&apos;Utente
                persona fisica che agisce per finalità estranee all&apos;attività imprenditoriale,
                commerciale, artigianale o professionale eventualmente svolta, ai sensi
                dell&apos;art. 3 D.Lgs. 206/2005 (Codice del Consumo).
              </li>
              <li>
                <strong style={{ color: '#1a1a1a' }}>«Abbonamento»</strong>: il
                contratto a esecuzione periodica con cui l&apos;Utente acquisisce accesso
                ai Servizi per un periodo determinato, a fronte del pagamento di un
                corrispettivo.
              </li>
            </ul>
          </div>

          {/* 2. Oggetto del contratto */}
          <div style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontWeight: 400,
                color: '#002147',
                marginBottom: '16px',
                paddingBottom: '10px',
                borderBottom: '1px solid #e8e8e8',
              }}
            >
              2. Oggetto del contratto
            </h2>
            <p style={{ color: '#1a1a1a', lineHeight: 1.8, marginBottom: '16px' }}>
              I presenti Termini e condizioni regolano il rapporto contrattuale tra il
              Centro e l&apos;Utente in relazione all&apos;accesso e all&apos;utilizzo del Portale e
              dei Servizi ivi erogati.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '16px' }}>
              L&apos;accesso al Portale e la registrazione di un account comportano
              l&apos;accettazione integrale e incondizionata dei presenti Termini. Chi non
              accetta tali condizioni deve astenersi dall&apos;utilizzo del Portale.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8 }}>
              Il Centro si riserva il diritto di modificare i presenti Termini in
              qualsiasi momento. Le modifiche sostanziali saranno comunicate agli Utenti
              registrati con un preavviso di almeno 15 giorni. Il proseguimento
              nell&apos;utilizzo dei Servizi dopo la data di entrata in vigore delle modifiche
              costituisce accettazione delle stesse.
            </p>
          </div>

          {/* 3. Registrazione e account */}
          <div style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontWeight: 400,
                color: '#002147',
                marginBottom: '16px',
                paddingBottom: '10px',
                borderBottom: '1px solid #e8e8e8',
              }}
            >
              3. Registrazione e account
            </h2>
            <p style={{ color: '#1a1a1a', lineHeight: 1.8, marginBottom: '16px' }}>
              Per accedere ai Servizi riservati è necessario creare un account personale
              fornendo un indirizzo email valido e scegliendo una password sicura.
              L&apos;Utente deve avere almeno 16 anni di età o, in caso di minori, agire
              con il consenso del titolare della responsabilità genitoriale.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '16px' }}>
              L&apos;Utente è responsabile della riservatezza delle proprie credenziali di
              accesso e di tutte le attività svolte tramite il proprio account. In caso
              di accesso non autorizzato o sospetto, l&apos;Utente deve darne immediata
              comunicazione al Centro all&apos;indirizzo{' '}
              <a href="mailto:info@grecolatinovivo.it" className="card-link">
                info@grecolatinovivo.it
              </a>
              .
            </p>
            <p style={{ color: '#555', lineHeight: 1.8 }}>
              Il Centro si riserva il diritto di sospendere o disattivare gli account
              in caso di violazione dei presenti Termini, di comportamenti fraudolenti
              o di inattività prolungata, secondo le modalità e i termini comunicati
              all&apos;Utente.
            </p>
          </div>

          {/* 4. Abbonamenti e pagamenti */}
          <div style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontWeight: 400,
                color: '#002147',
                marginBottom: '16px',
                paddingBottom: '10px',
                borderBottom: '1px solid #e8e8e8',
              }}
            >
              4. Abbonamenti e pagamenti
            </h2>
            <p style={{ color: '#1a1a1a', lineHeight: 1.8, marginBottom: '16px' }}>
              I Servizi sono disponibili nelle formule e ai prezzi indicati nelle
              rispettive pagine del Portale al momento dell&apos;acquisto. I prezzi sono
              espressi in Euro e comprendono l&apos;IVA ove applicabile.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '16px' }}>
              I pagamenti sono elaborati in modo sicuro tramite{' '}
              <strong style={{ color: '#1a1a1a' }}>Stripe</strong>, società terza
              certificata PCI DSS. Il Centro non detiene né memorizza i dati degli
              strumenti di pagamento dell&apos;Utente. Le transazioni sono soggette alle
              condizioni e alle politiche di Stripe.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '16px' }}>
              Gli Abbonamenti si rinnovano automaticamente al termine di ogni periodo
              (mensile o annuale, secondo la formula scelta), salvo disdetta comunicata
              dall&apos;Utente almeno [DA INSERIRE] giorni prima della scadenza tramite
              l&apos;area personale del Portale o via email a{' '}
              <a href="mailto:info@grecolatinovivo.it" className="card-link">
                info@grecolatinovivo.it
              </a>
              .
            </p>
            <p style={{ color: '#555', lineHeight: 1.8 }}>
              In caso di mancato pagamento, il Centro si riserva il diritto di
              sospendere o revocare l&apos;accesso ai Servizi, previa comunicazione
              all&apos;Utente.
            </p>
          </div>

          {/* 5. Recesso */}
          <div style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontWeight: 400,
                color: '#002147',
                marginBottom: '16px',
                paddingBottom: '10px',
                borderBottom: '1px solid #e8e8e8',
              }}
            >
              5. Recesso
            </h2>
            <p style={{ color: '#1a1a1a', lineHeight: 1.8, marginBottom: '16px' }}>
              Ai sensi degli artt. 52 e ss. del D.Lgs. 206/2005 (Codice del Consumo),
              il Consumatore ha il diritto di recedere dal contratto di acquisto di
              Servizi digitali senza indicare alcun motivo entro{' '}
              <strong style={{ color: '#1a1a1a' }}>14 giorni</strong> dalla conclusione
              del contratto.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '16px' }}>
              Il Consumatore che desideri esercitare il diritto di recesso deve
              comunicarlo al Centro prima della scadenza del suddetto termine mediante
              una dichiarazione esplicita (ad esempio via email a{' '}
              <a href="mailto:info@grecolatinovivo.it" className="card-link">
                info@grecolatinovivo.it
              </a>
              ), indicando il numero d&apos;ordine e i propri dati identificativi.
            </p>
            <div
              className="blockquote-gold"
              style={{ marginBottom: '16px' }}
            >
              Attenzione: il Consumatore che richieda l&apos;accesso immediato ai contenuti
              digitali prima della scadenza del termine di recesso, esprimendo
              espressamente tale consenso, perde il diritto di recesso ai sensi
              dell&apos;art. 59, lett. o), D.Lgs. 206/2005, limitatamente ai contenuti
              effettivamente fruiti.
            </div>
            <p style={{ color: '#555', lineHeight: 1.8 }}>
              Il rimborso sarà effettuato tramite lo stesso mezzo di pagamento
              utilizzato per l&apos;acquisto entro 14 giorni dalla ricezione della
              comunicazione di recesso.
            </p>
          </div>

          {/* 6. Proprietà intellettuale */}
          <div style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontWeight: 400,
                color: '#002147',
                marginBottom: '16px',
                paddingBottom: '10px',
                borderBottom: '1px solid #e8e8e8',
              }}
            >
              6. Proprietà intellettuale
            </h2>
            <p style={{ color: '#1a1a1a', lineHeight: 1.8, marginBottom: '16px' }}>
              Tutti i contenuti presenti nel Portale — inclusi, a titolo non esaustivo,
              testi, video, audio, immagini, grafiche, loghi, software, banche dati e
              materiali didattici — sono di proprietà del Centro o dei relativi
              titolari di diritti, e sono protetti dalla normativa in materia di
              diritto d&apos;autore (L. 633/1941 e successive modifiche) e da altre
              disposizioni applicabili sulla proprietà intellettuale.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '16px' }}>
              L&apos;Abbonamento concede all&apos;Utente una licenza personale, non esclusiva,
              non trasferibile e revocabile per accedere ai Servizi e fruire dei
              contenuti esclusivamente per uso privato e non commerciale. È vietato:
            </p>
            <ul
              style={{
                paddingLeft: '24px',
                color: '#555',
                lineHeight: 1.9,
                marginBottom: '16px',
              }}
            >
              <li>
                riprodurre, distribuire, comunicare al pubblico o mettere a
                disposizione i contenuti senza autorizzazione scritta del Centro;
              </li>
              <li>
                condividere le credenziali di accesso con terzi o cedere l&apos;account;
              </li>
              <li>
                utilizzare i contenuti per finalità commerciali, didattiche
                istituzionali esterne o qualsiasi altro scopo non strettamente
                personale.
              </li>
            </ul>
            <p style={{ color: '#555', lineHeight: 1.8 }}>
              La violazione delle presenti disposizioni comporta la revoca immediata
              della licenza e potrà dare luogo ad azioni legali per il risarcimento
              del danno.
            </p>
          </div>

          {/* 7. Limitazione di responsabilità */}
          <div style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontWeight: 400,
                color: '#002147',
                marginBottom: '16px',
                paddingBottom: '10px',
                borderBottom: '1px solid #e8e8e8',
              }}
            >
              7. Limitazione di responsabilità
            </h2>
            <p style={{ color: '#1a1a1a', lineHeight: 1.8, marginBottom: '16px' }}>
              Il Centro si impegna a garantire la disponibilità continua del Portale e
              l&apos;accuratezza dei contenuti, ma non può escludere interruzioni tecniche,
              aggiornamenti o eventi di forza maggiore. Il Portale e i Servizi sono
              forniti &quot;come sono&quot; (as is), senza garanzie di ininterrotto funzionamento
              o assenza di errori.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '16px' }}>
              Nei limiti consentiti dalla legge applicabile, il Centro non è
              responsabile per danni indiretti, consequenziali, incidentali o punitivi
              derivanti dall&apos;utilizzo o dall&apos;impossibilità di utilizzo del Portale o dei
              Servizi, inclusi — a titolo esemplificativo — la perdita di dati, la
              perdita di profitti o opportunità commerciali.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8 }}>
              Le presenti limitazioni non si applicano laddove la legge italiana
              preveda l&apos;inderogabilità della responsabilità, in particolare nei
              confronti dei Consumatori ai sensi del D.Lgs. 206/2005.
            </p>
          </div>

          {/* 8. Legge applicabile e foro */}
          <div style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontWeight: 400,
                color: '#002147',
                marginBottom: '16px',
                paddingBottom: '10px',
                borderBottom: '1px solid #e8e8e8',
              }}
            >
              8. Legge applicabile e foro competente
            </h2>
            <p style={{ color: '#1a1a1a', lineHeight: 1.8, marginBottom: '16px' }}>
              I presenti Termini e condizioni sono disciplinati e interpretati in base
              al <strong style={{ color: '#002147' }}>diritto italiano</strong>.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '16px' }}>
              Per qualsiasi controversia derivante dai presenti Termini o dall&apos;utilizzo
              del Portale e dei Servizi, è competente in via esclusiva il{' '}
              <strong style={{ color: '#1a1a1a' }}>Tribunale di Firenze</strong>, salvo
              diversa disposizione inderogabile di legge — in particolare le norme a
              tutela del Consumatore che prevedono la competenza del giudice del luogo
              di residenza o domicilio elettivo dell&apos;Utente.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8 }}>
              Il Consumatore residente nell&apos;Unione Europea ha inoltre il diritto di
              ricorrere alla piattaforma di risoluzione delle controversie online (ODR)
              della Commissione Europea, accessibile all&apos;indirizzo{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                ec.europa.eu/consumers/odr
              </a>
              .
            </p>
          </div>

          {/* Link ad altre pagine legali */}
          <div
            style={{
              marginTop: '32px',
              paddingTop: '32px',
              borderTop: '1px solid #e8e8e8',
            }}
          >
            <p style={{ color: '#555', fontSize: '0.9rem' }}>
              Consulta anche la nostra{' '}
              <Link href="/marketing/privacy" className="card-link">
                Informativa Privacy
              </Link>{' '}
              oppure{' '}
              <Link href="/marketing/contatti" className="card-link">
                contattaci
              </Link>{' '}
              per qualsiasi chiarimento.
            </p>
          </div>

        </div>
      </section>

      {/* CTA band */}
      <section className="cta-band">
        <div className="container-narrow">
          <h2>Pronto a iniziare?</h2>
          <p>
            Accedi al portale didattico e scopri i corsi di Latino e Greco disponibili.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://portale.grecolatinovivo.it"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Accedi al Portale
            </a>
            <Link href="/marketing/contatti" className="btn btn-ghost">
              Contattaci
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
