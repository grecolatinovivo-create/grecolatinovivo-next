import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — GrecoLatinoVivo',
  description:
    'Informativa sul trattamento dei dati personali ai sensi del Regolamento (UE) 2016/679 (GDPR), art. 13. Centro Nazionale di Studi Classici GrecoLatinoVivo.',
}

export default function PrivacyPage() {
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
            Aggiornata al [DA INSERIRE]
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
            Informativa sul trattamento<br />dei dati personali
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '1rem',
              marginTop: '16px',
              maxWidth: '600px',
              margin: '16px auto 0',
            }}
          >
            Ai sensi dell&apos;art. 13 del Regolamento (UE) 2016/679 (GDPR)
          </p>
        </div>
      </section>

      {/* Linea oro */}
      <div style={{ height: '3px', background: '#C9A84C' }} />

      {/* Corpo */}
      <section className="section" style={{ background: '#f8f7f4' }}>
        <div className="container-narrow">

          {/* 1. Titolare del trattamento */}
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
              1. Titolare del trattamento
            </h2>
            <p style={{ color: '#1a1a1a', lineHeight: 1.8 }}>
              Il Titolare del trattamento dei dati personali raccolti tramite il
              presente portale web e i servizi correlati è:
            </p>
            <div
              className="card"
              style={{ marginTop: '20px', background: '#ffffff' }}
            >
              <p style={{ color: '#1a1a1a', lineHeight: 1.8, marginBottom: '8px' }}>
                <strong>Centro Nazionale di Studi Classici «GrecoLatinoVivo»</strong>
              </p>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '4px' }}>
                P.IVA: [DA INSERIRE]
              </p>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '4px' }}>
                Email:{' '}
                <a href="mailto:info@grecolatinovivo.it" className="card-link">
                  info@grecolatinovivo.it
                </a>
              </p>
              <p style={{ color: '#555', lineHeight: 1.8 }}>
                Sede legale: [DA INSERIRE]
              </p>
            </div>
          </div>

          {/* 2. Dati raccolti */}
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
              2. Categorie di dati raccolti
            </h2>
            <p style={{ color: '#1a1a1a', lineHeight: 1.8, marginBottom: '16px' }}>
              Nell&apos;ambito dell&apos;erogazione dei propri servizi, il Titolare raccoglie
              le seguenti categorie di dati personali:
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
                <strong style={{ color: '#1a1a1a' }}>Dati anagrafici:</strong> nome e
                cognome, forniti in fase di registrazione al portale o di contatto.
              </li>
              <li>
                <strong style={{ color: '#1a1a1a' }}>Dati di contatto:</strong> indirizzo
                email, necessario per la comunicazione e l&apos;autenticazione al servizio.
              </li>
              <li>
                <strong style={{ color: '#1a1a1a' }}>Dati di pagamento:</strong> le
                transazioni economiche sono gestite dalla piattaforma Stripe, Inc. Il
                Titolare non memorizza direttamente i dati delle carte di credito o degli
                strumenti di pagamento. Si rinvia all&apos;informativa privacy di Stripe (
                <a
                  href="https://stripe.com/it/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  stripe.com/it/privacy
                </a>
                ).
              </li>
              <li>
                <strong style={{ color: '#1a1a1a' }}>Dati tecnici di navigazione:</strong>{' '}
                cookie tecnici necessari al funzionamento del sito (v. sezione 7).
              </li>
            </ul>
            <p style={{ color: '#555', lineHeight: 1.8 }}>
              Non vengono raccolte categorie particolari di dati ai sensi dell&apos;art. 9
              GDPR (dati relativi alla salute, all&apos;origine etnica, alle opinioni
              politiche, ecc.).
            </p>
          </div>

          {/* 3. Finalità */}
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
              3. Finalità del trattamento
            </h2>
            <p style={{ color: '#1a1a1a', lineHeight: 1.8, marginBottom: '16px' }}>
              I dati personali raccolti sono trattati per le seguenti finalità:
            </p>
            <ul
              style={{
                paddingLeft: '24px',
                color: '#555',
                lineHeight: 1.9,
              }}
            >
              <li>
                Erogazione dei servizi didattici e dell&apos;accesso al portale
                (corsi, materiali, abbonamenti).
              </li>
              <li>
                Gestione della fatturazione e degli adempimenti fiscali e contabili
                obbligatori.
              </li>
              <li>
                Invio di comunicazioni relative ai servizi sottoscritti
                (aggiornamenti, variazioni, scadenze).
              </li>
              <li>
                Risposta alle richieste di informazioni inviate tramite il modulo di
                contatto.
              </li>
              <li>
                Adempimento di obblighi di legge (normativa fiscale, contabile,
                anticorruzione ove applicabile).
              </li>
            </ul>
          </div>

          {/* 4. Base giuridica */}
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
              4. Base giuridica del trattamento
            </h2>
            <p style={{ color: '#1a1a1a', lineHeight: 1.8, marginBottom: '16px' }}>
              Il trattamento dei dati si fonda sulle seguenti basi giuridiche ai sensi
              dell&apos;art. 6 GDPR:
            </p>
            <ul
              style={{
                paddingLeft: '24px',
                color: '#555',
                lineHeight: 1.9,
              }}
            >
              <li>
                <strong style={{ color: '#1a1a1a' }}>Esecuzione di un contratto</strong>{' '}
                (art. 6, par. 1, lett. b): per l&apos;erogazione dei servizi sottoscritti
                dall&apos;utente, la gestione dell&apos;account e del rapporto contrattuale.
              </li>
              <li>
                <strong style={{ color: '#1a1a1a' }}>Obbligo legale</strong>{' '}
                (art. 6, par. 1, lett. c): per gli adempimenti fiscali e contabili
                previsti dalla normativa vigente.
              </li>
              <li>
                <strong style={{ color: '#1a1a1a' }}>Legittimo interesse</strong>{' '}
                (art. 6, par. 1, lett. f): per comunicazioni tecniche relative ai servizi
                in uso, prevenzione di frodi e tutela dei diritti del Titolare, nei
                limiti in cui tale interesse non pregiudichi i diritti fondamentali
                dell&apos;interessato.
              </li>
            </ul>
          </div>

          {/* 5. Conservazione */}
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
              5. Periodo di conservazione
            </h2>
            <p style={{ color: '#1a1a1a', lineHeight: 1.8, marginBottom: '16px' }}>
              I dati personali sono conservati per il tempo strettamente necessario al
              conseguimento delle finalità indicate:
            </p>
            <ul
              style={{
                paddingLeft: '24px',
                color: '#555',
                lineHeight: 1.9,
              }}
            >
              <li>
                Dati relativi all&apos;account e ai servizi: per tutta la durata del
                rapporto contrattuale e, successivamente, per un periodo di{' '}
                <strong style={{ color: '#1a1a1a' }}>[DA INSERIRE] anni</strong> dalla
                cessazione, ai fini della tutela di eventuali diritti contrattuali.
              </li>
              <li>
                Dati di fatturazione e documenti contabili: 10 anni ai sensi dell&apos;art.
                2220 c.c. e della normativa fiscale applicabile.
              </li>
              <li>
                Richieste di contatto: fino all&apos;evasione della richiesta e, ove
                necessario, per il periodo di prescrizione ordinaria.
              </li>
            </ul>
            <p
              style={{
                color: '#555',
                lineHeight: 1.8,
                marginTop: '16px',
              }}
            >
              Al termine del periodo di conservazione i dati sono cancellati o resi
              anonimi in modo irreversibile.
            </p>
          </div>

          {/* 6. Diritti dell'interessato */}
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
              6. Diritti dell&apos;interessato
            </h2>
            <p style={{ color: '#1a1a1a', lineHeight: 1.8, marginBottom: '16px' }}>
              In qualità di interessato, l&apos;utente ha il diritto di esercitare in
              qualsiasi momento i seguenti diritti nei confronti del Titolare:
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
                <strong style={{ color: '#1a1a1a' }}>Diritto di accesso</strong>{' '}
                (art. 15 GDPR): ottenere conferma del trattamento e copia dei dati.
              </li>
              <li>
                <strong style={{ color: '#1a1a1a' }}>Diritto di rettifica</strong>{' '}
                (art. 16 GDPR): correggere dati inesatti o incompleti.
              </li>
              <li>
                <strong style={{ color: '#1a1a1a' }}>Diritto alla cancellazione</strong>{' '}
                (art. 17 GDPR, &quot;diritto all&apos;oblio&quot;): ottenere la cancellazione dei
                dati nei casi previsti dalla normativa.
              </li>
              <li>
                <strong style={{ color: '#1a1a1a' }}>Diritto alla limitazione</strong>{' '}
                (art. 18 GDPR): richiedere la sospensione del trattamento in determinati
                casi.
              </li>
              <li>
                <strong style={{ color: '#1a1a1a' }}>Diritto alla portabilità</strong>{' '}
                (art. 20 GDPR): ricevere i dati forniti in formato strutturato e
                leggibile da dispositivo automatico.
              </li>
              <li>
                <strong style={{ color: '#1a1a1a' }}>Diritto di opposizione</strong>{' '}
                (art. 21 GDPR): opporsi al trattamento fondato sul legittimo interesse.
              </li>
            </ul>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '12px' }}>
              Le richieste vanno inviate a:{' '}
              <a href="mailto:info@grecolatinovivo.it" className="card-link">
                info@grecolatinovivo.it
              </a>
              . Il Titolare risponderà entro 30 giorni dalla ricezione.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8 }}>
              L&apos;interessato ha inoltre il diritto di proporre reclamo all&apos;Autorità Garante
              per la protezione dei dati personali (
              <a
                href="https://www.garanteprivacy.it"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                www.garanteprivacy.it
              </a>
              ).
            </p>
          </div>

          {/* 7. Cookie */}
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
              7. Cookie e tecnologie di tracciamento
            </h2>
            <p style={{ color: '#1a1a1a', lineHeight: 1.8, marginBottom: '16px' }}>
              Il portale utilizza esclusivamente <strong>cookie tecnici necessari</strong>{' '}
              al funzionamento del servizio (gestione della sessione autenticata,
              preferenze di navigazione). Non vengono utilizzati cookie di profilazione
              o tracciamento di terze parti.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '16px' }}>
              I font tipografici (Google Fonts) sono serviti localmente dal server del
              portale: nessuna richiesta viene inoltrata ai server di Google a runtime.
              Il sito non effettua quindi trasferimenti di dati verso terzi legati alla
              tipografia.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8 }}>
              I cookie tecnici non richiedono il consenso preventivo dell&apos;utente ai
              sensi del Provvedimento Garante 8 maggio 2014 e delle Linee Guida cookie
              del Garante (10 giugno 2021). L&apos;utente può comunque disabilitarli tramite
              le impostazioni del proprio browser, fermo restando che ciò potrebbe
              compromettere il funzionamento del servizio.
            </p>
          </div>

          {/* 8. Contatti DPO */}
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
              8. Responsabile della protezione dei dati (DPO)
            </h2>
            <p style={{ color: '#1a1a1a', lineHeight: 1.8, marginBottom: '16px' }}>
              [DA INSERIRE: il Titolare ha/non ha designato un Responsabile della
              protezione dei dati (DPO/RPD) ai sensi dell&apos;art. 37 GDPR.]
            </p>
            <div
              className="card"
              style={{ background: '#ffffff' }}
            >
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '4px' }}>
                <strong style={{ color: '#1a1a1a' }}>DPO / Referente Privacy:</strong>{' '}
                [DA INSERIRE — Nome e Cognome o denominazione]
              </p>
              <p style={{ color: '#555', lineHeight: 1.8 }}>
                <strong style={{ color: '#1a1a1a' }}>Email:</strong>{' '}
                [DA INSERIRE — es. dpo@grecolatinovivo.it]
              </p>
            </div>
          </div>

          {/* Nota finale */}
          <div
            className="blockquote-gold"
            style={{ marginTop: '32px' }}
          >
            Il Titolare si riserva il diritto di aggiornare la presente informativa in
            caso di modifiche normative o organizzative. Le variazioni sostanziali
            saranno comunicate agli utenti registrati tramite email con almeno 15 giorni
            di anticipo rispetto alla loro entrata in vigore.
          </div>

          {/* Link a termini */}
          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #e8e8e8' }}>
            <p style={{ color: '#555', fontSize: '0.9rem' }}>
              Consulta anche i{' '}
              <Link href="/marketing/termini-condizioni" className="card-link">
                Termini e condizioni di utilizzo
              </Link>
              {' '}oppure{' '}
              <Link href="/marketing/contatti" className="card-link">
                contattaci
              </Link>{' '}
              per qualsiasi domanda relativa al trattamento dei tuoi dati.
            </p>
          </div>

        </div>
      </section>

      {/* CTA band */}
      <section className="cta-band">
        <div className="container-narrow">
          <h2>Hai domande sulla tua privacy?</h2>
          <p>
            Scrivici a{' '}
            <a
              href="mailto:info@grecolatinovivo.it"
              style={{ color: '#C9A84C' }}
            >
              info@grecolatinovivo.it
            </a>
            . Ti risponderemo entro 24 ore.
          </p>
          <Link href="/marketing/contatti" className="btn btn-ghost">
            Vai alla pagina Contatti
          </Link>
        </div>
      </section>
    </>
  )
}
