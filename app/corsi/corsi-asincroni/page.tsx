// Catalogo corsi asincroni — /corsi/corsi-asincroni
// 56 corsi reali dal DB portale (portale-glv/public/js/app.js — MOCK_COURSES, maggio 2026)
// Server Component statico — dati hardcoded per SEO e preview senza DB
// Design Oxford/Cambridge — COUNCIL sessione 2
// ZERO emoji. ZERO dati inventati. Docenti dal DB.
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corsi Asincroni — Centro Nazionale di Studi Classici «GrecoLatinoVivo»',
  description: '56 corsi online di Latino, Greco Antico, Egiziano Geroglifico, Ebraico Biblico e Corsi Brevi tematici. Metodo contestuale-induttivo. Accreditato MIM.',
  alternates: { canonical: 'https://grecolatinovivo.it/corsi/corsi-asincroni' },
}

// ----------------------------------------------------------------
// TIPI
// ----------------------------------------------------------------
interface Corso {
  id: string
  slug: string
  lang: string
  level: string
  title: string
  description: string
  priceEur: number   // centesimi
  hours: number
  teacher: string
  isNew?: boolean
  available?: boolean
  bonusDocenti?: boolean
  idc: number
}

function formatPrezzo(centesimi: number): string {
  return '€ ' + (centesimi / 100).toLocaleString('it-IT', { minimumFractionDigits: 0 })
}

// ----------------------------------------------------------------
// DATI — 56 corsi reali dal DB portale (sincronizzati maggio 2026)
// ----------------------------------------------------------------
const CORSI: Corso[] = [
  // ── LATINO (7) ───────────────────────────────────────────────
  { id:'lat-a11', slug:'lat-a11', lang:'Latino', level:'A1.1', title:'Corso di lingua latina A1.1 · E-Learning', description:'Parti da zero con un metodo rigoroso basato sulle ricerche neurocognitive. Declinazioni, morfologia nominale, verbo esse.', priceEur:13000, hours:24, teacher:'Giampiero Marchi', available:true, idc:372 },
  { id:'lat-a12', slug:'lat-a12', lang:'Latino', level:'A1.2', title:'Corso di lingua latina A1.2 · E-Learning', description:'Terza, quarta e quinta declinazione. Struttura grammaticale del latino: concordanze, forme verbali, prime strutture del periodo.', priceEur:13000, hours:24, teacher:'Giampiero Marchi', available:true, idc:374 },
  { id:'lat-a21', slug:'lat-a21', lang:'Latino', level:'A2.1', title:'Corso di lingua latina A2.1 · E-Learning', description:'Sistema dei casi completo, concordanze avanzate, forme verbali essenziali. Prime letture di testi autentici adattati.', priceEur:15000, hours:24, teacher:'Giampiero Marchi', available:true, idc:377 },
  { id:'lat-a22', slug:'lat-a22', lang:'Latino', level:'A2.2', title:'Corso di lingua latina A2.2 · E-Learning', description:'Accusativo con infinito, ablativo assoluto, subordinate finali e causali. Approfondimento sintattico e lessicale.', priceEur:15000, hours:24, teacher:'Giampiero Marchi', available:true, idc:378 },
  { id:'lat-b11', slug:'lat-b11', lang:'Latino', level:'B1.1', title:'Corso di lingua latina B1.1 · E-Learning', description:'Lettura di Cicerone e Cesare in originale. Analisi retorica del testo, strutture sintattiche avanzate, traduzione guidata.', priceEur:18000, hours:24, teacher:'Giampiero Marchi', available:true, idc:432 },
  { id:'lat-b12', slug:'lat-b12', lang:'Latino', level:'B1.2', title:'Corso di lingua latina B1.2 · E-Learning', description:'Virgilio e la poesia epica: Eneide, metrica latina, figure retoriche. Introduzione alla poesia augustea.', priceEur:18000, hours:24, teacher:'Giampiero Marchi', available:true, idc:433 },
  { id:'lat-b13', slug:'lat-b13', lang:'Latino', level:'B1.3', title:'Corso di lingua latina B1.3 · E-Learning', description:'Ovidio, Orazio e la poesia lirica. Elegia latina, epigramma, generi poetici del I sec. a.C.', priceEur:18000, hours:24, teacher:'Giampiero Marchi', available:true, idc:434 },
  // ── GRECO ANTICO (7) ─────────────────────────────────────────
  { id:'gr-a11', slug:'gr-a11', lang:'Greco Antico', level:'A1.1', title:'Corso di greco antico A1.1 · E-Learning', description:'Alfabeto greco, pronuncia restituita, prime declinazioni e coniugazioni. 18 ore in 12 lezioni da 90 minuti.', priceEur:13000, hours:24, teacher:'Giampiero Marchi', available:true, idc:373 },
  { id:'gr-a12', slug:'gr-a12', lang:'Greco Antico', level:'A1.2', title:'Corso di greco antico A1.2 · E-Learning', description:'Il verbo contratto, il sistema verbale greco, le particelle. Accesso a biblioteca digitale di testi greci antichi.', priceEur:13000, hours:24, teacher:'Giampiero Marchi', available:true, idc:375 },
  { id:'gr-a21', slug:'gr-a21', lang:'Greco Antico', level:'A2.1', title:'Corso di greco antico A2.1 · E-Learning', description:'Testi da Platone e Senofonte adattati. Il periodo ipotetico. Biblioteca digitale inclusa.', priceEur:15000, hours:24, teacher:'Giampiero Marchi', available:true, idc:381 },
  { id:'gr-a22', slug:'gr-a22', lang:'Greco Antico', level:'A2.2', title:'Corso di greco antico A2.2 · E-Learning', description:'Il participio greco: usi e costrutti. Sintassi del periodo complesso. Letture da Plutarco e Luciano.', priceEur:15000, hours:24, teacher:'Giampiero Marchi', available:true, idc:380 },
  { id:'gr-b11', slug:'gr-b11', lang:'Greco Antico', level:'B1.1', title:'Corso di greco antico B1.1 · E-Learning', description:"Omero: lettura dell'Iliade in originale. Metrica epica, dialetto ionico, formulaicità omerica.", priceEur:18000, hours:24, teacher:'Giulio Bianchi', available:true, idc:435 },
  { id:'gr-b12', slug:'gr-b12', lang:'Greco Antico', level:'B1.2', title:'Corso di greco antico B1.2 · E-Learning', description:'I tragici greci: Sofocle, Euripide, la struttura del dramma attico. Letture in originale.', priceEur:18000, hours:24, teacher:'Giulio Bianchi', available:true, idc:436 },
  { id:'gr-b13', slug:'gr-b13', lang:'Greco Antico', level:'B1.3', title:'Corso di greco antico B1.3 · E-Learning', description:'Lirici greci, Pindaro, Saffo. Filosofia presocratica in lingua. Storiografia: Tucidide.', priceEur:18000, hours:24, teacher:'Giulio Bianchi', available:true, idc:437 },
  // ── EGIZIANO GEROGLIFICO (3) ──────────────────────────────────
  { id:'eg-a11', slug:'eg-a11', lang:'Egiziano Geroglifico', level:'A1.1', title:'Corso di Egiziano Geroglifico A1.1 · E-Learning', description:'I geroglifici: logogrammi e fonogrammi. Lettura delle prime iscrizioni. Introduzione al medio-egiziano.', priceEur:17000, hours:24, teacher:'Ilaria Cariddi', available:true, idc:382 },
  { id:'eg-a12', slug:'eg-a12', lang:'Egiziano Geroglifico', level:'A1.2', title:'Corso di Egiziano Geroglifico A1.2 · E-Learning', description:'Il medio-egiziano: morfologia nominale, il verbo egiziano. Testi del Medio Regno.', priceEur:17000, hours:24, teacher:'Ilaria Cariddi', available:true, idc:430 },
  { id:'eg-a21', slug:'eg-a21', lang:'Egiziano Geroglifico', level:'A2', title:'Corso di Egiziano Geroglifico A2 · E-Learning', description:'Testi autentici: il Libro dei Morti, iscrizioni tombali, letteratura del Medio Regno.', priceEur:19000, hours:24, teacher:'Ilaria Cariddi', available:true, idc:431 },
  // ── EBRAICO BIBLICO (3) ───────────────────────────────────────
  { id:'eb-a11', slug:'eb-a11', lang:'Ebraico Biblico', level:'A1.1', title:'Ebraico Biblico A1.1 · E-Learning', description:"L'alfabeto ebraico, scrittura destra-sinistra, vocali masoretiche. 18 ore di formazione.", priceEur:17000, hours:24, teacher:'Alberto Bibbiani', available:true, idc:383 },
  { id:'eb-a12', slug:'eb-a12', lang:'Ebraico Biblico', level:'A1.2', title:'Ebraico Biblico A1.2 · E-Learning', description:'Il verbo forte, prime radici trilittere. Lettura del Genesi in originale.', priceEur:17000, hours:24, teacher:'Alberto Bibbiani', available:true, idc:428 },
  { id:'eb-a21', slug:'eb-a21', lang:'Ebraico Biblico', level:'A2', title:'Ebraico Biblico A2 · E-Learning', description:'La prosa narrativa biblica: Esodo, Salmi, sintassi ebraica avanzata.', priceEur:19000, hours:24, teacher:'Alberto Bibbiani', available:true, idc:429 },
  // ── FORMAZIONE DOCENTI MIM (4) ───────────────────────────────
  { id:'did-elementa', slug:'did-elementa', lang:'Formazione Docenti', level:'Modulo 1', title:'Didattica del Latino: Pars Prima – Elementa', description:'Metodo induttivo-contestuale per principianti: morfologia nominale, lessico, prime declinazioni. 10h video + 10h autoapprendimento. Bonus Docenti attivo.', priceEur:15000, hours:20, teacher:'Giampiero Marchi', available:true, bonusDocenti:true, idc:388 },
  { id:'did-principia', slug:'did-principia', lang:'Formazione Docenti', level:'Modulo 2', title:'Didattica del Latino: Pars Secunda – Principia', description:'Livello intermedio: morfologia verbale, sintassi, testi autentici. Prerequisito: Elementa. 10h video + 10h autonomo. Bonus Docenti attivo.', priceEur:18000, hours:20, teacher:'Giampiero Marchi', available:true, bonusDocenti:true, idc:389 },
  { id:'did-grammatica', slug:'did-grammatica', lang:'Formazione Docenti', level:'Percorso', title:'Grammatica Latina e Buone Pratiche Didattiche', description:'Metodologia grammaticale-traduttiva e glottodidattica. Come rendere la grammatica più efficace in classe. 20 ore in 10 parti. Bonus Docenti attivo.', priceEur:17000, hours:20, teacher:'Marta Giannico', available:true, bonusDocenti:true, idc:392 },
  { id:'did-tertia', slug:'did-tertia', lang:'Formazione Docenti', level:'Modulo 3', title:'Didattica della Letteratura Latina: Pars Tertia – Litterae', description:'Letteratura latina in classe: approcci, testi, metodi. Come rendere la letteratura classica viva e accessibile. Bonus Docenti attivo.', priceEur:18000, hours:20, teacher:'Giampiero Marchi', isNew:true, available:true, bonusDocenti:true, idc:448 },
  // ── CORSI BREVI (32) ─────────────────────────────────────────
  { id:'breve-marziale', slug:'breve-marziale', lang:'Corsi Brevi', level:'Autori Latini', title:'Marziale per principianti avanzati', description:'Ironia e critica della società del benessere negli Epigrammi. 4 ore.', priceEur:2900, hours:4, teacher:'Giampiero Marchi', available:true, idc:406 },
  { id:'breve-tradurre', slug:'breve-tradurre', lang:'Corsi Brevi', level:'Metodo', title:'Tradurre senza scomporre', description:'Un approccio neuroscientifico al testo classico: come tradurre con fluidità. 4 ore.', priceEur:2900, hours:4, teacher:'Giampiero Marchi', available:true, idc:439 },
  { id:'breve-catullo', slug:'breve-catullo', lang:'Corsi Brevi', level:'Autori Latini', title:'Catullo per principianti avanzati', description:'Passioni, invettive e vita quotidiana al tramonto della Repubblica. 4 ore.', priceEur:3900, hours:4, teacher:'Giampiero Marchi', isNew:true, available:true, idc:454 },
  { id:'breve-sacro-romano', slug:'breve-sacro-romano', lang:'Corsi Brevi', level:'Civiltà Romana', title:'Pensare e fare il sacro: un percorso religioso romano', description:'Riti, culti, divinità e spazio sacro nella Roma antica. 6 ore in asincrono.', priceEur:6000, hours:6, teacher:'Emanuele Viotti', available:true, idc:360 },
  { id:'breve-dei-uomini', slug:'breve-dei-uomini', lang:'Corsi Brevi', level:'Civiltà Romana', title:"Tra Dèi e Uomini: il mito come fondamento di Roma", description:'Il mito come fondamento della Roma religiosa e civile. 6 ore in asincrono.', priceEur:6000, hours:6, teacher:'Emanuele Viotti', available:true, idc:368 },
  { id:'breve-conclave', slug:'breve-conclave', lang:'Corsi Brevi', level:'Storia della Chiesa', title:'Conclave: le bolle papali che decidono la Chiesa', description:'Storia e linguaggio delle bolle papali. Dal latino dei documenti pontifici alla politica ecclesiastica. 4 ore.', priceEur:6000, hours:4, teacher:'Giampiero Marchi', available:true, idc:427 },
  { id:'breve-echi-marmo', slug:'breve-echi-marmo', lang:'Corsi Brevi', level:'Arte Antica', title:"Echi di Marmo: viaggio nell'Arte Greca da Omero ad Alessandro", description:'Scultura, ceramica e architettura greca nel contesto storico e letterario. 6 ore.', priceEur:9000, hours:6, teacher:'Roberto Melfi', available:true, idc:370 },
  { id:'breve-schiavitu', slug:'breve-schiavitu', lang:'Corsi Brevi', level:'Storia Antica', title:'Vite in catene: la Schiavitù nel Mondo Antico', description:'Storia, diritto e filosofia della schiavitù nel mondo greco-romano. Fonti antiche. 6 ore.', priceEur:9000, hours:6, teacher:'Rossano Fragale', available:true, idc:418 },
  { id:'breve-guerra-religione', slug:'breve-guerra-religione', lang:'Corsi Brevi', level:'Storia della Religione', title:'Guerra di Religione, Religione di Guerra', description:'Le guerre di religione nella storia antica e medievale: teologia, propaganda, martirio. 6 ore.', priceEur:11000, hours:6, teacher:'Emanuele Viotti', available:true, idc:424 },
  { id:'breve-tragedia-greci', slug:'breve-tragedia-greci', lang:'Corsi Brevi', level:'Teatro Antico', title:'La tragedia dei Greci: Eschilo, Sofocle, Euripide', description:'La struttura del dramma attico, i grandi temi, le differenze di stile tra i tre tragici. 4 ore.', priceEur:17000, hours:4, teacher:'Giampiero Marchi', isNew:true, available:true, idc:456 },
  { id:'breve-maturita-latino', slug:'breve-maturita-latino', lang:'Corsi Brevi', level:'Esercitazioni', title:'Ponte alla Maturità Classica: tradurre il Latino', description:'Preparazione alla traduzione latina per la Maturità classica. Metodo e pratica. 6 ore.', priceEur:19000, hours:6, teacher:'Giampiero Marchi', available:true, idc:452 },
  { id:'breve-roma-dei', slug:'breve-roma-dei', lang:'Corsi Brevi', level:'Civiltà Romana', title:"Roma e i suoi Dèi: storia di una religione millenaria", description:'Percorso completo sulla religione romana: politeismo, culto imperiale, rapporto col Cristianesimo. 15 ore.', priceEur:25000, hours:15, teacher:'Emanuele Viotti', available:true, idc:387 },
  { id:'breve-japonia', slug:'breve-japonia', lang:'Corsi Brevi', level:'Autori Latini', title:'Terra Japonia: un viaggio in latino nel Giappone del Cinquecento', description:'Un testo in latino del XVI secolo che racconta il Giappone. Lettura guidata. 4 ore.', priceEur:2900, hours:4, teacher:'Marta Giannico', available:true, idc:440 },
  { id:'breve-metrica', slug:'breve-metrica', lang:'Corsi Brevi', level:'Metodo', title:'Il ritmo del verso: approccio neuroscientifico alla metrica classica', description:'Come il cervello elabora il ritmo poetico. Metrica latina e greca in chiave cognitiva. 4 ore.', priceEur:2900, hours:4, teacher:'Giampiero Marchi', available:true, idc:441 },
  { id:'breve-voci-vangeli', slug:'breve-voci-vangeli', lang:'Corsi Brevi', level:'Bibbia e Antichità', title:'Voci dei Vangeli: un viaggio dalle Radici alla Rivelazione', description:'I Vangeli nel loro contesto storico, linguistico e culturale. 6 ore.', priceEur:6000, hours:6, teacher:'Alberto Bibbiani', available:true, idc:337 },
  { id:'breve-storie-latine', slug:'breve-storie-latine', lang:'Corsi Brevi', level:'Autori Latini', title:"Dall'Antico al Moderno: Storie in Lingua Latina", description:'Lettura di testi latini medievali e moderni che narrano storie di ogni epoca. 6 ore.', priceEur:6000, hours:6, teacher:'Maria Di Puorto', available:true, idc:338 },
  { id:'breve-buona-novella', slug:'breve-buona-novella', lang:'Corsi Brevi', level:'Bibbia e Antichità', title:'La Buona Novella tra greco e latino', description:'Il Vangelo nelle sue versioni greca e latina: confronto linguistico e teologico. 6 ore.', priceEur:7000, hours:6, teacher:'Giampiero Marchi', available:true, idc:276 },
  { id:'breve-padri-chiesa', slug:'breve-padri-chiesa', lang:'Corsi Brevi', level:'Bibbia e Antichità', title:'Il Vangelo attraverso i Padri della Chiesa', description:"Lettura e interpretazione patristica del Vangelo: Agostino, Gregorio, Ambrogio. 6 ore.", priceEur:7000, hours:6, teacher:'Andrés Reyes Cabrera', available:true, idc:286 },
  { id:'breve-etruschi', slug:'breve-etruschi', lang:'Corsi Brevi', level:'Archeologia', title:'Tracce Etrusche: origini, espansioni, eredità di una civiltà', description:'Dalla Villanove alla romanizzazione: la civiltà etrusca attraverso le sue testimonianze materiali. 8 ore.', priceEur:9000, hours:8, teacher:'Mattia Scarpetta', available:true, idc:339 },
  { id:'breve-nubia-egitto', slug:'breve-nubia-egitto', lang:'Corsi Brevi', level:'Archeologia', title:'Tra due Mondi: Nubia ed Egitto sulla linea di confine', description:'Il rapporto tra Egitto e Nubia: conflitto, scambio culturale, ibridazione artistica. 6 ore.', priceEur:9000, hours:6, teacher:'Francesca Iannarilli', available:true, idc:340 },
  { id:'breve-archeologia', slug:'breve-archeologia', lang:'Corsi Brevi', level:'Archeologia', title:"Testimonianze del Tempo: un viaggio nell'Archeologia Applicata", description:'Come si fa archeologia: metodo, scavo, interpretazione. 4 ore.', priceEur:9000, hours:4, teacher:'Roberto Melfi', available:true, idc:341 },
  { id:'breve-passione', slug:'breve-passione', lang:'Corsi Brevi', level:'Bibbia e Antichità', title:'Prospettive di Passione: gli ultimi giorni di Gesù nei Vangeli', description:'Confronto sinottico della Passione nei quattro Vangeli: stile, teologia, storicità. 6 ore.', priceEur:9000, hours:6, teacher:'Alberto Bibbiani', available:true, idc:349 },
  { id:'breve-pompei', slug:'breve-pompei', lang:'Corsi Brevi', level:'Archeologia', title:'Voci silenziose di Pompei: scoperte epigrafiche nella città sepolta', description:'Le iscrizioni di Pompei: graffiti, tituli, dipinti elettorali. Lettura e contesto. 8 ore.', priceEur:9000, hours:8, teacher:'Marta Giannico', available:true, idc:350 },
  { id:'breve-miniera-luna', slug:'breve-miniera-luna', lang:'Corsi Brevi', level:'Filosofia Antica', title:"Dalla Miniera alla Luna: Pirandello e Verga tra esistenza e letteratura", description:'Percorso letterario tra i due grandi autori siciliani: tema del destino, della natura, della lotta. 6 ore.', priceEur:9000, hours:6, teacher:'Alessandra Chiusaroli', available:true, idc:361 },
  { id:'breve-algoritmica', slug:'breve-algoritmica', lang:'Corsi Brevi', level:'Filosofia Antica', title:"L'Algoritmica dell'Essere: filosofia nell'Intelligenza Artificiale", description:"Esplorazioni filosofiche ai confini tra intelligenza artificiale e pensiero antico. 6 ore.", priceEur:9000, hours:6, teacher:'Giulio Bianchi', available:true, idc:362 },
  { id:'breve-voci-femminili', slug:'breve-voci-femminili', lang:'Corsi Brevi', level:'Bibbia e Antichità', title:'Dal Margine al Centro: Voci Femminili nei Vangeli', description:'Le donne nei Vangeli: protagoniste dimenticate della storia cristiana. 4 ore.', priceEur:9000, hours:4, teacher:'Alberto Bibbiani', available:true, idc:369 },
  { id:'breve-nilo', slug:'breve-nilo', lang:'Corsi Brevi', level:'Archeologia', title:"Aldilà e Al-di-qua del Nilo: l'Antico Egitto tra vita e morte", description:"Il concetto egiziano di morte, aldilà e resurrezione. Testi funerari e iconografia. 8 ore.", priceEur:10000, hours:8, teacher:'Francesca Iannarilli', available:true, idc:403 },
  { id:'breve-etruschi-vita', slug:'breve-etruschi-vita', lang:'Corsi Brevi', level:'Archeologia', title:'Etruschi: vita, guerra, spirito di una civiltà antica', description:'La civiltà etrusca nelle sue dimensioni quotidiana, militare e spirituale. 6 ore.', priceEur:10000, hours:6, teacher:'Mattia Scarpetta', available:true, idc:404 },
  { id:'breve-terre-bibbia', slug:'breve-terre-bibbia', lang:'Corsi Brevi', level:'Bibbia e Antichità', title:'Le Terre della Bibbia: viaggio fra storia e sacro', description:'Israele, Giordania, Egitto: i luoghi della Bibbia tra archeologia e fede. 4 ore.', priceEur:10000, hours:4, teacher:'Alberto Bibbiani', available:true, idc:405 },
  { id:'breve-maturita-greco', slug:'breve-maturita-greco', lang:'Corsi Brevi', level:'Esercitazioni', title:'Ponte alla Maturità Classica: tradurre il Greco Antico', description:'Preparazione alla traduzione greca per la Maturità classica. Metodo e pratica. 6 ore.', priceEur:14000, hours:6, teacher:'Alberto Bibbiani', available:true, idc:363 },
  { id:'breve-egiziano-appro', slug:'breve-egiziano-appro', lang:'Corsi Brevi', level:'Egiziano Geroglifico', title:'Approfondimenti di Egiziano Geroglifico: preparazione alla letteratura', description:'Testi letterari egiziani per studenti di livello intermedio. 4 ore.', priceEur:15000, hours:4, teacher:'Ilaria Cariddi', available:true, idc:352 },
  { id:'breve-ars-scribendi', slug:'breve-ars-scribendi', lang:'Corsi Brevi', level:'Scrittura Latina', title:"Ars latine scribendi: l'arte di scrivere in latino", description:"Composizione latina avanzata: stile, prosa, epistolografia. Per studenti di livello B2+. 10 ore.", priceEur:45000, hours:10, teacher:'Christian Costa', available:true, idc:419 },
]

// ----------------------------------------------------------------
// SEZIONI CATALOGO
// ----------------------------------------------------------------
const SEZIONI = [
  { id: 'latino',     label: 'Latino',              count: 7  },
  { id: 'greco',      label: 'Greco Antico',         count: 7  },
  { id: 'egiziano',   label: 'Egiziano Geroglifico', count: 3  },
  { id: 'ebraico',    label: 'Ebraico Biblico',      count: 3  },
  { id: 'docenti',    label: 'Formazione Docenti',   count: 4  },
  { id: 'brevi',      label: 'Corsi Brevi',          count: 32 },
]

function getCorsiByLang(lang: string) {
  return CORSI.filter(c => c.lang === lang)
}

// ----------------------------------------------------------------
// CARD CORSO — design Oxford
// Usa Link diretto (no componente inline) per garantire href nel build
// ----------------------------------------------------------------
function CardContent({ corso, prezzo }: { corso: Corso; prezzo: string }) {
  const available = corso.available !== false
  return (
    <>
      {/* Badge riga superiore */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '0.75rem', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: available ? '#002147' : '#aaa', border: `1px solid ${available ? '#002147' : '#ddd'}`, padding: '1px 6px' }}>
          {corso.level}
        </span>
        {corso.isNew && (
          <span style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#fff', background: '#C9A84C', padding: '1px 6px' }}>
            Nuovo
          </span>
        )}
        {corso.bonusDocenti && (
          <span style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.65rem', fontWeight: 600, color: '#555', padding: '1px 6px', border: '1px solid #ddd' }}>
            Bonus Docenti
          </span>
        )}
        {!available && (
          <span style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.65rem', fontWeight: 600, color: '#999', padding: '1px 6px', border: '1px solid #eee' }}>
            In lavorazione
          </span>
        )}
      </div>

      {/* Titolo */}
      <h3 style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: '0.95rem', fontWeight: 400, color: available ? '#002147' : '#777', lineHeight: 1.4, marginBottom: '0.6rem' }}>
        {corso.title}
      </h3>

      {/* Descrizione */}
      <p style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.85rem', color: '#555', lineHeight: 1.65, marginBottom: '1rem', flex: 1 }}>
        {corso.description}
      </p>

      {/* Meta inferiore: docente + prezzo + CTA */}
      <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '8px' }}>
        <div>
          {corso.teacher && (
            <p style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.75rem', color: '#777', margin: 0 }}>
              {corso.teacher}
            </p>
          )}
          <p style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.75rem', color: '#aaa', margin: 0 }}>
            {corso.hours}&thinsp;ore
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: '1.05rem', color: available ? '#002147' : '#aaa' }}>
            {prezzo}
          </span>
          {available && (
            <div style={{ marginTop: '8px' }}>
              <span className="btn-card-cta">Scopri il corso</span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

function CorsoCard({ corso }: { corso: Corso }) {
  const prezzo = formatPrezzo(corso.priceEur)
  const available = corso.available !== false

  // Corsi disponibili → Link interno alla pagina del corso
  // Corsi in lavorazione → article statico (no link)
  if (available) {
    return (
      <Link
        href={`/corsi/corsi-asincroni/${corso.slug}`}
        className="corso-card-link"
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: '#FFFFFF',
          borderTop: '3px solid #002147',
          borderLeft: '1px solid #e8e8e8',
          borderRight: '1px solid #e8e8e8',
          borderBottom: '1px solid #e8e8e8',
          padding: '1.5rem',
          textDecoration: 'none',
          color: 'inherit',
          transition: 'border-top-color 0.15s, box-shadow 0.15s',
        }}
      >
        <CardContent corso={corso} prezzo={prezzo} />
      </Link>
    )
  }

  return (
    <article
      style={{
        background: '#FFFFFF',
        borderTop: '3px solid #aaa',
        borderLeft: '1px solid #e8e8e8',
        borderRight: '1px solid #e8e8e8',
        borderBottom: '1px solid #e8e8e8',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        opacity: 0.72,
      }}
    >
      <CardContent corso={corso} prezzo={prezzo} />
    </article>
  )
}

// ----------------------------------------------------------------
// SEZIONE
// ----------------------------------------------------------------
function SezioneCorsi({ id, titolo, sottotitolo, corsi }: { id: string; titolo: string; sottotitolo: string; corsi: Corso[] }) {
  const disponibili = corsi.filter(c => c.available !== false).length
  return (
    <section id={id} style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
      <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid #e8e8e8', paddingBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', fontWeight: 400, color: '#002147', margin: 0 }}>
            {titolo}
          </h2>
          <span style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.75rem', color: '#999', letterSpacing: '0.06em' }}>
            {corsi.length} {corsi.length === 1 ? 'corso' : 'corsi'}{disponibili < corsi.length ? ` · ${disponibili} disponibili` : ''}
          </span>
        </div>
        <p style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.9rem', color: '#555', margin: 0 }}>
          {sottotitolo}
        </p>
      </div>
      <div className="ca-grid">
        {corsi.map(c => <CorsoCard key={c.id} corso={c} />)}
      </div>
    </section>
  )
}

// ----------------------------------------------------------------
// PAGE
// ----------------------------------------------------------------
export default function CorsiAsincroniPage() {
  const corsiLatino    = getCorsiByLang('Latino')
  const corsiGreco     = getCorsiByLang('Greco Antico')
  const corsiEgiziano  = getCorsiByLang('Egiziano Geroglifico')
  const corsiEbraico   = getCorsiByLang('Ebraico Biblico')
  const corsiDocenti   = getCorsiByLang('Formazione Docenti')
  const corsiBrevi     = getCorsiByLang('Corsi Brevi')

  return (
    <main>
      {/* HERO */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
        <p className="eyebrow" style={{ marginBottom: '1rem' }}>56 corsi disponibili</p>
        <h1 style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400, color: '#002147', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
          Corsi Asincroni
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#444', maxWidth: '580px', margin: '0 auto 2rem', lineHeight: 1.75 }}>
          Percorsi registrati con materiali didattici esclusivi, fruibili in autonomia a qualsiasi ora.
          Dal livello A1 al B1, per tutte le lingue classiche insegnate dal Centro.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#latino" className="btn btn-primary">
            Sfoglia i corsi
          </a>
          <a href="/abbonamenti" className="btn btn-secondary">
            Vedi gli abbonamenti
          </a>
        </div>
      </section>

      {/* NAVIGAZIONE SEZIONI */}
      <nav aria-label="Categorie corsi" style={{ borderTop: '1px solid #e8e8e8', borderBottom: '1px solid #e8e8e8', background: '#f8f7f4' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', gap: 0, overflowX: 'auto' }}>
          {SEZIONI.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.85rem', color: '#002147', padding: '1rem 1.25rem', textDecoration: 'none', whiteSpace: 'nowrap', borderBottom: '2px solid transparent', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              {s.label}
              <span style={{ fontSize: '0.72rem', color: '#999' }}>{s.count}</span>
            </a>
          ))}
        </div>
      </nav>

      <hr className="section-divider" />

      {/* LATINO */}
      <SezioneCorsi
        id="latino"
        titolo="Latino"
        sottotitolo="Percorso A1.1–B1.3: dal primo approccio alla lettura degli autori classici in originale. Metodo Natura, ispirato a Ørberg."
        corsi={corsiLatino}
      />

      <hr className="section-divider" />

      {/* GRECO ANTICO */}
      <SezioneCorsi
        id="greco"
        titolo="Greco Antico"
        sottotitolo="Percorso A1.1–B1.3: dall'alfabeto all'Iliade, ai tragici, ai lirici. Pronuncia restituita e biblioteca digitale inclusa."
        corsi={corsiGreco}
      />

      <hr className="section-divider" />

      {/* EGIZIANO */}
      <SezioneCorsi
        id="egiziano"
        titolo="Egiziano Geroglifico"
        sottotitolo="Percorso A1.1–A2: dai logogrammi e fonogrammi al Libro dei Morti e alla letteratura del Medio Regno."
        corsi={corsiEgiziano}
      />

      <hr className="section-divider" />

      {/* EBRAICO */}
      <SezioneCorsi
        id="ebraico"
        titolo="Ebraico Biblico"
        sottotitolo="Percorso A1.1–A2: dall'alfabeto masoratico alla lettura del Genesi e dei Salmi in originale."
        corsi={corsiEbraico}
      />

      <hr className="section-divider" />

      {/* FORMAZIONE DOCENTI */}
      <div style={{ background: '#f8f7f4' }}>
        <SezioneCorsi
          id="docenti"
          titolo="Formazione Docenti MIM"
          sottotitolo="Percorsi accreditati MIM per docenti di scuola secondaria. Bonus Docenti utilizzabile. Crediti formativi riconosciuti."
          corsi={corsiDocenti}
        />
      </div>

      <hr className="section-divider" />

      {/* CORSI BREVI */}
      <SezioneCorsi
        id="brevi"
        titolo="Corsi Brevi Tematici"
        sottotitolo="Moduli da 4 a 15 ore su autori, temi, civiltà e metodologie. Adatti a studenti di ogni livello che vogliono approfondire un argomento specifico."
        corsi={corsiBrevi}
      />

      <hr className="section-divider" />

      {/* CTA FINALE */}
      <div className="cta-band">
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontWeight: 400 }}>
            Preferisci accedere a tutto il catalogo?
          </h2>
          <p>
            Con il Portale Abbonamento hai accesso illimitato a tutti i corsi registrati e alle sessioni live,
            a prezzo fisso mensile o annuale. Un'alternativa all'acquisto del singolo corso.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="/abbonamenti"
              className="btn btn-ghost"
            >
              Confronta i piani
            </a>
            <a
              href="https://portale.grecolatinovivo.it"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-gold"
              style={{ borderColor: '#C9A84C', color: '#C9A84C' }}
            >
              Accedi al Portale
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .ca-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1024px) { .ca-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px)  { .ca-grid { grid-template-columns: 1fr; } }
        .corso-card-link:hover {
          border-top-color: #C9A84C !important;
          box-shadow: 0 4px 18px rgba(0,33,71,0.08);
          text-decoration: none;
        }
      `}</style>
    </main>
  )
}
