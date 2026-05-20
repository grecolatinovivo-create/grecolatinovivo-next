// Pagina dettaglio corso asincrono — /corsi/corsi-asincroni/[slug]
// Design Oxford/Cambridge — COUNCIL sessione 2 (18/05/2026)
// Neuromarketer-optimized: valore → syllabus → prezzo → CTA (no dark pattern)
// lat-a11 = demo completo con syllabus; tutti gli altri = template ricco da dati reali DB
// ZERO emoji. ZERO dati inventati.

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'

// CancelledBanner — Client Component che legge searchParams senza rompere SSG
const CancelledBanner = dynamic(() => import('@/components/corsi/CancelledBanner'), { ssr: false })

// CheckoutButton è un Client Component — importato dinamicamente per evitare SSR
const CheckoutButton = dynamic(() => import('@/components/corsi/CheckoutButton'), {
  ssr: false,
  loading: () => (
    <button className="btn btn-primary" style={{ width: '100%', opacity: 0.6 }} disabled>
      Caricamento…
    </button>
  ),
})

// ─────────────────────────────────────────────────────
// TIPI
// ─────────────────────────────────────────────────────
interface CorsoDetail {
  slug: string
  lang: string
  level: string
  title: string
  tagline: string
  description: string
  priceEur: number       // centesimi
  hours: number
  lessons: number
  teacher: string
  teacherBio: string
  idc: number
  bonusDocenti?: boolean
  isNew?: boolean
  prerequisites: string
  latinCertRef?: string
  whatYouLearn: string[]
  syllabus?: { n: number; titolo: string; desc: string }[]
}

function fmt(c: number) {
  return '€ ' + (c / 100).toLocaleString('it-IT', { minimumFractionDigits: 0 })
}

// ─────────────────────────────────────────────────────
// DATI — ricavati dal DB portale (MOCK_COURSES maggio 2026)
// ─────────────────────────────────────────────────────
const CORSI: CorsoDetail[] = [

  // ── LATINO ──────────────────────────────────────────
  {
    slug: 'lat-a11', lang: 'Latino', level: 'A1.1',
    title: 'Corso di lingua latina A1.1',
    tagline: 'Il primo passo nel mondo del Latino — con il metodo che ha formato 5.000+ studenti.',
    description: 'Il corso di Latino A1.1 è il punto di ingresso al percorso di GrecoLatinoVivo. Non è un corso di grammatica tradizionale: è un percorso contestuale-induttivo in cui la lingua emerge da testi, frasi e situazioni reali della Roma antica. In 12 lezioni da 2 ore ciascuna, impari a riconoscere le strutture fondamentali del latino — il sistema dei casi, le prime declinazioni, il verbo esse e la prima coniugazione — e a leggere le prime frasi senza dizionario. Il metodo si fonda sull\'approccio contestuale-induttivo di GrecoLatinoVivo, sviluppato integrando la tradizione glottodidattica con le ricerche sull\'acquisizione delle lingue classiche.',
    priceEur: 13000, hours: 24, lessons: 12,
    teacher: 'Giampiero Marchi',
    teacherBio: 'Fondatore del Centro Nazionale di Studi Classici GrecoLatinoVivo. Latinista e glottodidatta, ha formato oltre 5.000 studenti in Italia applicando il metodo contestuale-induttivo alle lingue classiche. Autore di materiali didattici originali e formatore di docenti accreditato MIM.',
    idc: 372,
    prerequisites: 'Nessun prerequisito. Il corso è progettato per chi non ha mai studiato il latino o ha dimenticato tutto quello imparato a scuola.',
    latinCertRef: 'Livello A1 (Latin Cert) — Primo contatto con la lingua latina: sistema di casi, prime declinazioni, verbo esse, presente indicativo.',
    whatYouLearn: [
      'Leggere e comprendere frasi latine semplici senza dizionario, applicando il metodo contestuale-induttivo',
      'Riconoscere e declinare correttamente la prima e la seconda declinazione al singolare e al plurale',
      'Coniugare il verbo esse e i verbi della prima coniugazione al presente indicativo attivo e passivo',
      'Comprendere il sistema dei casi latini: nominativo, accusativo, genitivo, dativo, ablativo e le loro funzioni principali',
      'Identificare le strutture sintattiche fondamentali della frase latina e le prime concordanze nome/aggettivo',
      'Accedere autonomamente a testi graduati originali per il livello A1, con comprensione globale senza dizionario',
    ],
    syllabus: [
      { n: 1, titolo: 'Il metodo e la lingua', desc: 'Come funziona il latino. Il sistema dei casi come alternativa all\'ordine delle parole. Prime frasi in contesto reale.' },
      { n: 2, titolo: 'Prima declinazione', desc: 'Nominativo e accusativo singolari. Concordanza nome/aggettivo. Frasi semplici soggetto–predicato–complemento oggetto.' },
      { n: 3, titolo: 'Il verbo esse', desc: 'Presente indicativo attivo di esse. Frasi nominali. Predicato verbale e nominale a confronto.' },
      { n: 4, titolo: 'Prima coniugazione', desc: 'amare, portare, laudare. Tutte le persone singolari e plurali. Soggetti impliciti. Negazione.' },
      { n: 5, titolo: 'Seconda declinazione', desc: 'Sostantivi in -us e -um. Genitivo, dativo e ablativo. I casi obliqui nella frase.' },
      { n: 6, titolo: 'Le preposizioni', desc: 'Costrutti con accusativo (ad, in, per, ante) e ablativo (cum, de, ex, in). Complementi di luogo, mezzo, compagnia.' },
      { n: 7, titolo: 'Prima declinazione al plurale — aggettivi', desc: 'Completamento della prima declinazione al plurale. Aggettivi della seconda classe. Accordo attributivo e predicativo.' },
      { n: 8, titolo: 'Pronomi personali e dimostrativi', desc: 'ego, tu, nos, vos. is, ea, id / hic, haec, hoc. Usi nel testo. Anafora e catafora in latino.' },
      { n: 9, titolo: 'Terza declinazione', desc: 'Temi consonantici: pater, mater, nomen. Sostantivi irregolari ad alta frequenza. Lettura di frasi miste.' },
      { n: 10, titolo: 'L\'infinito e le frasi infinitive', desc: 'Infinito presente attivo e passivo. Accusativus cum infinitivo con verbi di dire, pensare, sentire.' },
      { n: 11, titolo: 'Testi autentici adattati', desc: 'Lettura guidata di testi graduati originali GrecoLatinoVivo. Commento lessicale e morfologico. Comprensione globale senza dizionario.' },
      { n: 12, titolo: 'Revisione e autovalutazione', desc: 'Test di autovalutazione completo. Riepilogo dei costrutti chiave. Orientamento al corso A1.2 e ai livelli successivi.' },
    ],
  },

  {
    slug: 'lat-a12', lang: 'Latino', level: 'A1.2',
    title: 'Corso di lingua latina A1.2',
    tagline: 'Terza, quarta e quinta declinazione. Le basi per leggere i primi testi autentici.',
    description: 'Continuazione diretta del corso A1.1. Si completa il sistema nominale latino con la terza, quarta e quinta declinazione e si approfondisce il sistema verbale con i principali tempi dell\'indicativo. Si affrontano le prime strutture del periodo e si leggono brani adattati da autori classici.',
    priceEur: 13000, hours: 24, lessons: 12, teacher: 'Giampiero Marchi',
    teacherBio: 'Fondatore di GrecoLatinoVivo. Latinista con specializzazione nella glottodidattica delle lingue classiche. Autore del metodo Natura applicato al latino.',
    idc: 374,
    prerequisites: 'Completamento del corso Latino A1.1 o conoscenze equivalenti (prime due declinazioni, presente indicativo, verbo esse).',
    latinCertRef: 'Livello A1 avanzato (Latin Cert) — Completamento del sistema nominale latino. Terza, quarta e quinta declinazione.',
    whatYouLearn: [
      'Riconoscere e declinare la terza, quarta e quinta declinazione in tutti i casi',
      'Coniugare la seconda e terza coniugazione al presente, imperfetto e futuro indicativo',
      'Comprendere le principali strutture del periodo: proposizioni relative, temporali, causali',
      'Leggere e comprendere brevi brani adattati da Cicerone e Cesare',
      'Riconoscere i principali aggettivi della seconda classe e i comparativi',
      'Usare il vocabolario di base del latino classico (ca. 300 lemmi ad alta frequenza)',
    ],
  },

  {
    slug: 'lat-a21', lang: 'Latino', level: 'A2.1',
    title: 'Corso di lingua latina A2.1',
    tagline: 'Il sistema dei casi completo. Prime letture di testi autentici adattati.',
    description: 'Il corso A2.1 approfondisce il sistema nominale e introduce il sistema verbale con i principali tempi dell\'indicativo attivo e passivo. Si affrontano i costrutti sintattici fondamentali del latino classico e si leggono i primi testi autentici adattati con commento lessicale guidato.',
    priceEur: 15000, hours: 24, lessons: 12, teacher: 'Giampiero Marchi',
    teacherBio: 'Fondatore di GrecoLatinoVivo. Latinista con specializzazione nella glottodidattica delle lingue classiche.',
    idc: 377,
    prerequisites: 'Completamento del corso Latino A1.2 o conoscenze equivalenti delle cinque declinazioni e della coniugazione regolare al presente.',
    latinCertRef: 'Livello A2 (Latin Cert) — Completamento del sistema nominale. Verbi deponenti, participio, gerundio.',
    whatYouLearn: [
      'Comprendere e applicare il sistema dei casi latini in tutte le loro funzioni',
      'Riconoscere e tradurre le forme verbali deponenti nei tempi principali dell\'indicativo',
      'Comprendere l\'ablativo assoluto e il participio in funzione attributiva e predicativa',
      'Leggere con autonomia testi autentici adattati di difficoltà A2',
      'Riconoscere i principali pronomi indefiniti e interrogativi',
      'Costruire frasi complesse con subordinate relative e avverbiali',
    ],
  },

  {
    slug: 'lat-a22', lang: 'Latino', level: 'A2.2',
    title: 'Corso di lingua latina A2.2',
    tagline: 'Accusativo con infinito, ablativo assoluto. Verso i testi in originale.',
    description: 'Il corso A2.2 completa il percorso di livello intermedio. Si padroneggiano i costrutti sintattici avanzati del latino — accusativo con infinito, ablativo assoluto, subordinate finali e causali — e si approfondisce il lessico attraverso la lettura di testi autentici adattati di complessità crescente.',
    priceEur: 15000, hours: 24, lessons: 12, teacher: 'Giampiero Marchi',
    teacherBio: 'Fondatore di GrecoLatinoVivo. Latinista con specializzazione nella glottodidattica delle lingue classiche.',
    idc: 378,
    prerequisites: 'Completamento del corso Latino A2.1.',
    latinCertRef: 'Livello A2 avanzato (Latin Cert) — Ablativo assoluto, frasi infinitive, gerundio. Lettura di testi autentici adattati da autori classici.',
    whatYouLearn: [
      'Comprendere e costruire l\'accusativo con infinito con tutti i verbi reggenti',
      'Riconoscere e analizzare l\'ablativo assoluto participiale e nominale',
      'Padroneggiare le principali subordinate finali, causali e temporali',
      'Leggere con autonomia brani autentici adattati da Cicerone, Cesare e Livio',
      'Completare il sistema del participio: presente, perfetto, futuro',
      'Consolidare il lessico latino ad alta frequenza fino a circa 600 lemmi',
    ],
  },

  {
    slug: 'lat-b11', lang: 'Latino', level: 'B1.1',
    title: 'Corso di lingua latina B1.1',
    tagline: 'Cicerone e Cesare in originale. L\'analisi retorica del testo classico.',
    description: 'Il primo corso di livello avanzato introduce alla lettura di testi in lingua originale non adattati. Si affrontano passi scelti di Cicerone (Epistulae, De Amicitia) e Cesare (De Bello Gallico), con analisi retorica, lessico specialistico e strutture sintattiche avanzate.',
    priceEur: 18000, hours: 24, lessons: 12, teacher: 'Giampiero Marchi',
    teacherBio: 'Fondatore di GrecoLatinoVivo. Latinista e filologo, specializzato nella letteratura latina di età repubblicana.',
    idc: 432,
    prerequisites: 'Completamento del corso Latino A2.2 o conoscenza equivalente del sistema verbale latino inclusi i tempi dell\'indicativo.',
    latinCertRef: 'Livello B1 (Latin Cert) — Sistema del congiuntivo, consecutio temporum, testi autentici in prosa. Testi da Roma Aeterna.',
    whatYouLearn: [
      'Leggere e comprendere testi di Cicerone e Cesare in lingua originale non adattata',
      'Padroneggiare il sistema del congiuntivo latino in tutti i tempi e nelle principali subordinate',
      'Applicare la consecutio temporum nella lettura e nella produzione di testi complessi',
      'Riconoscere le principali figure retoriche del latino classico (tricolon, chiasmo, anafora)',
      'Analizzare la struttura argomentativa dei testi ciceroniani',
      'Costruire autonomamente periodi complessi con subordinate di secondo grado',
    ],
  },

  {
    slug: 'lat-b12', lang: 'Latino', level: 'B1.2',
    title: 'Corso di lingua latina B1.2',
    tagline: 'Virgilio e l\'Eneide. Metrica latina e poesia augustea.',
    description: 'Il corso B1.2 introduce alla poesia epica latina con la lettura di passi scelti dall\'Eneide di Virgilio. Si affrontano la metrica dell\'esametro, le figure retoriche della poesia epica, il lessico poetico augusteo e il contesto storico-culturale della letteratura latina del I sec. a.C.',
    priceEur: 18000, hours: 24, lessons: 12, teacher: 'Giampiero Marchi',
    teacherBio: 'Fondatore di GrecoLatinoVivo. Latinista e filologo, specializzato nella poesia latina di età augustea.',
    idc: 433,
    prerequisites: 'Completamento del corso Latino B1.1.',
    latinCertRef: 'Livello B1 avanzato (Latin Cert) — Poesia latina, metrica, lessico poetico.',
    whatYouLearn: [
      'Leggere e scansire l\'esametro dattilico, il metro dell\'epica latina',
      'Comprendere passi selezionati dall\'Eneide di Virgilio in lingua originale',
      'Riconoscere le figure retoriche della poesia epica: similitudine, iperbato, metonimia',
      'Comprendere il contesto storico e ideologico della letteratura augustea',
      'Distinguere il registro poetico dal registro prosastico nel latino classico',
      'Tradurre con fluidità passi di difficoltà B1 rispettando il tono poetico',
    ],
  },

  {
    slug: 'lat-b13', lang: 'Latino', level: 'B1.3',
    title: 'Corso di lingua latina B1.3',
    tagline: 'Ovidio, Orazio, la lirica latina. Il mondo poetico del I sec. a.C.',
    description: 'Il corso B1.3 completa il percorso di letteratura poetica latina con Ovidio (Metamorfosi, Ars Amatoria), Orazio (Odi, Satire) e l\'elegia latina (Tibullo, Properzio). Si approfondisce la varietà metrica della poesia latina e si affronta il lessico dell\'amore, della natura e della filosofia epicurea.',
    priceEur: 18000, hours: 24, lessons: 12, teacher: 'Giampiero Marchi',
    teacherBio: 'Fondatore di GrecoLatinoVivo. Latinista e filologo.',
    idc: 434,
    prerequisites: 'Completamento del corso Latino B1.2.',
    latinCertRef: 'Livello B1 avanzato (Latin Cert) — Varietà metrica, generi poetici, lessico letterario avanzato.',
    whatYouLearn: [
      'Leggere e comprendere passi di Ovidio, Orazio e Tibullo in lingua originale',
      'Riconoscere i principali metri lirici latini: alcaico, saffico, distici elegiaci',
      'Comprendere la varietà di registro tra epica, lirica ed elegia latina',
      'Analizzare il sistema intertestuale della poesia latina classica',
      'Padroneggiare il lessico dei principali generi poetici del I sec. a.C.',
      'Leggere con autonomia testi poetici di difficoltà B1–B2',
    ],
  },

  // ── GRECO ANTICO ────────────────────────────────────
  {
    slug: 'gr-a11', lang: 'Greco Antico', level: 'A1.1',
    title: 'Corso di greco antico A1.1',
    tagline: 'Dall\'alfabeto alle prime frasi — con pronuncia restituita e metodo contestuale.',
    description: 'Il corso di Greco Antico A1.1 inizia dalla base: l\'alfabeto greco, la pronuncia restituita (pronuncia greca classica), e le prime strutture morfologiche e sintattiche della lingua. In 12 lezioni da 2 ore si impara a leggere l\'alfabeto, a riconoscere le prime declinazioni e a coniugare i verbi fondamentali.',
    priceEur: 13000, hours: 24, lessons: 12, teacher: 'Giampiero Marchi',
    teacherBio: 'Fondatore di GrecoLatinoVivo. Ellenista e glottodidatta, specializzato nel metodo contestuale-induttivo applicato al greco antico.',
    idc: 373,
    prerequisites: 'Nessun prerequisito. Il corso è pensato per chi non ha mai studiato il greco.',
    whatYouLearn: [
      'Leggere e scrivere l\'alfabeto greco con pronuncia restituita classica',
      'Riconoscere e declinare la prima e seconda declinazione greca',
      'Coniugare il verbo εἶναι (essere) e i verbi regolari della prima coniugazione al presente',
      'Comprendere il sistema dei casi greci e le concordanze fondamentali',
      'Identificare l\'articolo determinativo in tutti i casi, generi e numeri',
      'Leggere brevi frasi semplici in greco antico senza ausilio del dizionario',
    ],
  },

  {
    slug: 'gr-a12', lang: 'Greco Antico', level: 'A1.2',
    title: 'Corso di greco antico A1.2',
    tagline: 'Il verbo contratto e le particelle. Il sistema verbale greco si apre.',
    description: 'Continuazione del corso A1.1. Si affrontano il verbo contratto, l\'imperfetto indicativo, i principali verbi irregolari e le particelle greche fondamentali (μέν, δέ, γάρ, οὖν). Si introduce la biblioteca digitale di testi greci adattati inclusa nel corso.',
    priceEur: 13000, hours: 24, lessons: 12, teacher: 'Giampiero Marchi',
    teacherBio: 'Fondatore di GrecoLatinoVivo. Ellenista con specializzazione nella sintassi del greco classico.',
    idc: 375,
    prerequisites: 'Completamento del corso Greco Antico A1.1.',
    whatYouLearn: [
      'Riconoscere e coniugare i verbi contratti in -άω, -έω, -όω al presente indicativo',
      'Comprendere e usare l\'imperfetto indicativo attivo e medio-passivo',
      'Padroneggiare le principali particelle connettive greche',
      'Leggere brevi testi adattati da Platone e Senofonte con commento guidato',
      'Riconoscere i principali pronomi dimostrativi del greco classico',
      'Accedere autonomamente alla biblioteca digitale di testi greci graduati',
    ],
  },

  {
    slug: 'gr-a21', lang: 'Greco Antico', level: 'A2.1',
    title: 'Corso di greco antico A2.1',
    tagline: 'Testi da Platone e Senofonte. Il periodo ipotetico greco.',
    description: 'Il corso A2.1 introduce ai testi di Platone (dialoghi brevi) e Senofonte (Anabasi) adattati per il livello A2. Si approfondisce il sistema verbale con l\'ottativo e il congiuntivo, si affronta il periodo ipotetico greco nei suoi tre tipi principali.',
    priceEur: 15000, hours: 24, lessons: 12, teacher: 'Giampiero Marchi',
    teacherBio: 'Fondatore di GrecoLatinoVivo. Ellenista specializzato nella filosofia platonica e nella prosa attica.',
    idc: 381,
    prerequisites: 'Completamento del corso Greco Antico A1.2.',
    whatYouLearn: [
      'Riconoscere i tre tipi di periodo ipotetico greco e le loro sfumature',
      'Comprendere il congiuntivo e l\'ottativo nelle principali costruzioni sintattiche',
      'Leggere testi adattati di Platone e Senofonte al livello A2',
      'Comprendere e usare il participio greco in funzione attributiva e predicativa',
      'Padroneggiare la terza declinazione greca nei tipi principali',
      'Riconoscere il lessico filosofico e militare del greco classico',
    ],
  },

  {
    slug: 'gr-a22', lang: 'Greco Antico', level: 'A2.2',
    title: 'Corso di greco antico A2.2',
    tagline: 'Il participio greco. Plutarco e Luciano. La prosa ellenistica.',
    description: 'Il corso A2.2 approfondisce gli usi del participio greco — il costrutto più caratteristico della prosa classica — e introduce alla letteratura di età ellenistica con letture da Plutarco e Luciano, scrittori accessibili e stilisticamente ricchi.',
    priceEur: 15000, hours: 24, lessons: 12, teacher: 'Giampiero Marchi',
    teacherBio: 'Fondatore di GrecoLatinoVivo. Ellenista e filologo.',
    idc: 380,
    prerequisites: 'Completamento del corso Greco Antico A2.1.',
    whatYouLearn: [
      'Padroneggiare tutti gli usi del participio greco: attributivo, predicativo, assoluto',
      'Comprendere il genitivo assoluto e il nominativo assoluto',
      'Leggere brani selezionati di Plutarco (Vite Parallele) e Luciano (Dialogi)',
      'Riconoscere le principali strutture della prosa ellenistica',
      'Completare il sistema del congiuntivo e dell\'ottativo nelle subordinate finali e temporali',
      'Ampliare il lessico fino a circa 500 lemmi ad alta frequenza',
    ],
  },

  {
    slug: 'gr-b11', lang: 'Greco Antico', level: 'B1.1',
    title: 'Corso di greco antico B1.1',
    tagline: 'Omero e l\'Iliade in originale. Il dialetto ionico e la metrica epica.',
    description: 'Il corso B1.1 introduce alla lettura dell\'Iliade di Omero in lingua originale. Si affrontano il dialetto ionico omeerico, la metrica dell\'esametro greco, la formulaicità omerica e il lessico epico. Lettura commentata di 200+ versi dall\'Iliade.',
    priceEur: 18000, hours: 24, lessons: 12, teacher: 'Giulio Bianchi',
    teacherBio: 'Ellenista e filologo classico. Docente di greco antico e letteratura greca. Specializzato nella poesia epica omerica e nella lirica greca arcaica.',
    idc: 435,
    prerequisites: 'Completamento del corso Greco Antico A2.2.',
    whatYouLearn: [
      'Leggere l\'esametro greco e comprenderne le regole prosodiche fondamentali',
      'Comprendere il dialetto ionico omerico nelle sue differenze dall\'attico',
      'Leggere e commentare passi scelti dall\'Iliade in lingua originale',
      'Riconoscere le formule omeriche e il loro ruolo nella composizione orale',
      'Analizzare i principali temi dell\'epica greca: kleos, arete, hubris',
      'Padroneggiare il lessico epico ad alta frequenza (ca. 300 lemmi)',
    ],
  },

  {
    slug: 'gr-b12', lang: 'Greco Antico', level: 'B1.2',
    title: 'Corso di greco antico B1.2',
    tagline: 'I tragici greci. Sofocle, Euripide e la struttura del dramma attico.',
    description: 'Il corso B1.2 introduce alla lettura della tragedia attica con Sofocle (Antigone, Edipo Re) ed Euripide (Medea, Alcesti) in lingua originale. Si affrontano la struttura metrica della tragedia, il registro dialettale dorico dei cori e la sintassi del dialogo tragico.',
    priceEur: 18000, hours: 24, lessons: 12, teacher: 'Giulio Bianchi',
    teacherBio: 'Ellenista e filologo classico. Specializzato nella poesia drammatica attica.',
    idc: 436,
    prerequisites: 'Completamento del corso Greco Antico B1.1.',
    whatYouLearn: [
      'Leggere passi selezionati di Sofocle ed Euripide in lingua originale',
      'Riconoscere la struttura metrica della tragedia: trimetro giambico, anapesti dei cori',
      'Comprendere il registro dialettale dorico utilizzato nei cori tragici',
      'Analizzare la struttura drammatica: prologo, parodo, episodi, esodo',
      'Riconoscere i principali temi della tragedia attica: destino, hybris, colpa',
      'Padroneggiare il lessico tragico e teatrale del greco classico',
    ],
  },

  {
    slug: 'gr-b13', lang: 'Greco Antico', level: 'B1.3',
    title: 'Corso di greco antico B1.3',
    tagline: 'Lirici, Pindaro, Saffo. Filosofia presocratica. Tucidide.',
    description: 'Il corso B1.3 completa il percorso avanzato di greco con la lirica arcaica (Saffo, Alceo, Pindaro), i frammenti dei filosofi presocratici e la storiografia di Tucidide. Un viaggio attraverso i generi e i dialetti del greco antico.',
    priceEur: 18000, hours: 24, lessons: 12, teacher: 'Giulio Bianchi',
    teacherBio: 'Ellenista e filologo classico. Specializzato nella lirica greca arcaica e nella storiografia.',
    idc: 437,
    prerequisites: 'Completamento del corso Greco Antico B1.2.',
    whatYouLearn: [
      'Leggere i frammenti di Saffo e Alceo nel dialetto eolico',
      'Comprendere l\'epinicio pindarico e la sua struttura tripartita',
      'Accedere ai frammenti dei presocratici (Eraclito, Parmenide) con commento filosofico',
      'Leggere passi dello stile complesso e denso di Tucidide',
      'Padroneggiare i principali dialetti del greco letterario: ionico, dorico, eolico, attico',
      'Raggiungere l\'autonomia di lettura su testi di difficoltà B1–B2',
    ],
  },

  // ── EGIZIANO GEROGLIFICO ────────────────────────────
  {
    slug: 'eg-a11', lang: 'Egiziano Geroglifico', level: 'A1.1',
    title: 'Corso di Egiziano Geroglifico A1.1',
    tagline: 'I geroglifici dal vivo — logogrammi, fonogrammi e le prime iscrizioni.',
    description: 'Il corso di Egiziano Geroglifico A1.1 insegna a leggere i geroglifici egiziani distinguendo logogrammi e fonogrammi, a comprendere la struttura del medio-egiziano e a leggere le prime iscrizioni autentiche.',
    priceEur: 17000, hours: 24, lessons: 12, teacher: 'Ilaria Cariddi',
    teacherBio: 'Egittologa e linguista. Specializzata nel medio-egiziano e nella letteratura del Medio Regno. Docente di egiziano geroglifico presso GrecoLatinoVivo dal 2018.',
    idc: 382,
    prerequisites: 'Nessun prerequisito.',
    whatYouLearn: [
      'Riconoscere e leggere l\'alfabeto geroglifico nelle sue principali classi',
      'Distinguere logogrammi, fonogrammi e determinativi nelle iscrizioni',
      'Comprendere le basi del sistema grammaticale del medio-egiziano',
      'Leggere brevi iscrizioni autentiche su monumenti e papiri',
      'Comprendere il contesto storico e culturale della scrittura geroglifica',
      'Accedere autonomamente ai principali strumenti di studio dell\'egiziano',
    ],
  },

  {
    slug: 'eg-a12', lang: 'Egiziano Geroglifico', level: 'A1.2',
    title: 'Corso di Egiziano Geroglifico A1.2',
    tagline: 'Il medio-egiziano. Morfologia nominale e il verbo egiziano.',
    description: 'Continuazione del corso A1.1. Si approfondisce la morfologia nominale e si introduce il complesso sistema verbale del medio-egiziano. Lettura di testi del Medio Regno.',
    priceEur: 17000, hours: 24, lessons: 12, teacher: 'Ilaria Cariddi',
    teacherBio: 'Egittologa e linguista. Specializzata nel medio-egiziano e nella letteratura del Medio Regno.',
    idc: 430,
    prerequisites: 'Completamento del corso Egiziano Geroglifico A1.1.',
    whatYouLearn: [
      'Padroneggiare la morfologia nominale del medio-egiziano',
      'Riconoscere le principali forme del verbo egiziano: stativo, imperativo, infinito',
      'Leggere testi narrativi brevi del Medio Regno con commento guidato',
      'Comprendere il sistema pronomiale del medio-egiziano',
      'Riconoscere i costrutti sintattici di base della prosa egiziana',
      'Usare i principali strumenti lessicografici dell\'egittologia',
    ],
  },

  {
    slug: 'eg-a21', lang: 'Egiziano Geroglifico', level: 'A2',
    title: 'Corso di Egiziano Geroglifico A2',
    tagline: 'Il Libro dei Morti. Iscrizioni tombali. Letteratura del Medio Regno.',
    description: 'Il corso A2 introduce ai grandi testi della letteratura egiziana classica: il Libro dei Morti, le iscrizioni tombali del Medio Egitto e i testi narrativi del Medio Regno. Lettura e commento di testi autentici con trascrizione in egiziano e traduzione.',
    priceEur: 19000, hours: 24, lessons: 12, teacher: 'Ilaria Cariddi',
    teacherBio: 'Egittologa e linguista. Specializzata nel medio-egiziano e nella letteratura del Medio Regno.',
    idc: 431,
    prerequisites: 'Completamento del corso Egiziano Geroglifico A1.2.',
    whatYouLearn: [
      'Leggere e comprendere passi dal Libro dei Morti in geroglifico',
      'Analizzare iscrizioni tombali autobiografiche del Medio Egitto',
      'Leggere testi narrativi del Medio Regno: Papiro Westcar, Il Naufrago',
      'Padroneggiare il sistema verbale del medio-egiziano nei principali tempi',
      'Comprendere il lessico religioso e funerario del medio-egiziano',
      'Raggiungere l\'autonomia di lettura su testi autentici di difficoltà A2',
    ],
  },

  // ── EBRAICO BIBLICO ─────────────────────────────────
  {
    slug: 'eb-a11', lang: 'Ebraico Biblico', level: 'A1.1',
    title: 'Ebraico Biblico A1.1',
    tagline: 'L\'alfabeto ebraico, la scrittura destra-sinistra, le vocali masoretiche.',
    description: 'Il corso di Ebraico Biblico A1.1 insegna l\'alfabeto ebraico (ktav ashuri), la lettura con le vocali masoretiche (nikud), i primi sostantivi e le strutture grammaticali fondamentali della prosa biblica.',
    priceEur: 17000, hours: 24, lessons: 12, teacher: 'Alberto Bibbiani',
    teacherBio: 'Biblista e semitista. Specializzato nell\'ebraico biblico e nelle lingue semitiche antiche. Docente di lingue bibliche presso GrecoLatinoVivo.',
    idc: 383,
    prerequisites: 'Nessun prerequisito.',
    whatYouLearn: [
      'Leggere e scrivere l\'alfabeto ebraico nelle forme finali e non finali',
      'Leggere testi vocalizzati con le vocali masoretiche (nikud)',
      'Comprendere le basi della morfologia nominale biblica',
      'Riconoscere i principali tipi di radice trilettera',
      'Leggere brevi frasi dal Genesi con commento guidato',
      'Orientarsi nella struttura della Bibbia Ebraica (Tanakh)',
    ],
  },

  {
    slug: 'eb-a12', lang: 'Ebraico Biblico', level: 'A1.2',
    title: 'Ebraico Biblico A1.2',
    tagline: 'Il verbo forte. Prime radici trilittere. Lettura del Genesi.',
    description: 'Continuazione del corso A1.1. Si introduce il sistema verbale dell\'ebraico biblico con il verbo forte (binyan Qal), il perfetto e l\'imperfetto. Lettura di brani narrativi dal Genesi con commento morfologico e lessicale.',
    priceEur: 17000, hours: 24, lessons: 12, teacher: 'Alberto Bibbiani',
    teacherBio: 'Biblista e semitista. Specializzato nell\'ebraico biblico.',
    idc: 428,
    prerequisites: 'Completamento del corso Ebraico Biblico A1.1.',
    whatYouLearn: [
      'Coniugare i verbi forti del binyan Qal al perfetto e all\'imperfetto',
      'Riconoscere le principali radici trilittere ad alta frequenza biblica',
      'Leggere brani narrativi del Genesi (capitoli 1–6) con commento guidato',
      'Comprendere il sistema dei generi grammaticali e dei suffissi pronominali',
      'Padroneggiare il lessico fondamentale della narrativa biblica',
      'Riconoscere i costrutti sintattici tipici della prosa biblica antica',
    ],
  },

  {
    slug: 'eb-a21', lang: 'Ebraico Biblico', level: 'A2',
    title: 'Ebraico Biblico A2',
    tagline: 'Prosa narrativa biblica. Esodo, Salmi, sintassi ebraica avanzata.',
    description: 'Il corso A2 approfondisce la lettura della prosa biblica con testi dall\'Esodo e dai Salmi. Si introduce la sintassi avanzata dell\'ebraico biblico e si amplia il vocabolario con i principali campi semantici della letteratura biblica.',
    priceEur: 19000, hours: 24, lessons: 12, teacher: 'Alberto Bibbiani',
    teacherBio: 'Biblista e semitista. Specializzato nell\'ebraico biblico.',
    idc: 429,
    prerequisites: 'Completamento del corso Ebraico Biblico A1.2.',
    whatYouLearn: [
      'Leggere brani selezionati dell\'Esodo e del libro dei Salmi in ebraico',
      'Padroneggiare i binyanim verbali principali: Qal, Niphal, Piel',
      'Comprendere la sintassi della consecutio temporale biblica (waw conversivo)',
      'Riconoscere i principali generi letterari biblici: narrativa, profezia, salmo',
      'Ampliare il lessico fino ai 500 lemmi più frequenti della Bibbia Ebraica',
      'Leggere con autonomia testi di difficoltà A2 della prosa biblica',
    ],
  },

  // ── FORMAZIONE DOCENTI ──────────────────────────────
  {
    slug: 'did-elementa', lang: 'Formazione Docenti', level: 'Modulo 1',
    title: 'Didattica del Latino: Pars Prima – Elementa',
    tagline: 'Metodo induttivo-contestuale per principianti. Bonus Docenti applicabile.',
    description: 'Il primo modulo del percorso di formazione docenti introduce al metodo induttivo-contestuale applicato al latino per principianti. Si affrontano morfologia nominale, lessico ad alta frequenza e le prime declinazioni attraverso materiali didattici originali. 10 ore video + 10 ore autoapprendimento. Carta del Docente applicabile.',
    priceEur: 15000, hours: 20, lessons: 10, teacher: 'Giampiero Marchi',
    teacherBio: 'Fondatore di GrecoLatinoVivo. Formatore accreditato MIM. Autore del metodo Natura per il latino.',
    idc: 388, bonusDocenti: true,
    prerequisites: 'Nessun prerequisito specifico di latino. Riservato a insegnanti in servizio o aspiranti docenti.',
    whatYouLearn: [
      'Applicare il metodo induttivo-contestuale nelle prime lezioni di latino',
      'Costruire sequenze didattiche per principianti assoluti',
      'Usare materiali originali GrecoLatinoVivo per la morfologia nominale',
      'Strutturare lezioni di 60 e 90 minuti con metodo Natura',
      'Valutare i progressi degli studenti con strumenti non tradizionali',
      'Ottenere crediti formativi riconosciuti MIM con Bonus Docenti (Carta del Docente)',
    ],
  },

  {
    slug: 'did-principia', lang: 'Formazione Docenti', level: 'Modulo 2',
    title: 'Didattica del Latino: Pars Secunda – Principia',
    tagline: 'Livello intermedio: morfologia verbale, sintassi, testi autentici in classe.',
    description: 'Continuazione del Modulo 1. Si approfondisce la didattica del livello intermedio: morfologia verbale, sintassi dei casi, uso dei testi autentici adattati in classe. 10 ore video + 10 ore autonomo. Prerequisito: Elementa. Bonus Docenti attivo.',
    priceEur: 18000, hours: 20, lessons: 10, teacher: 'Giampiero Marchi',
    teacherBio: 'Fondatore di GrecoLatinoVivo. Formatore accreditato MIM.',
    idc: 389, bonusDocenti: true,
    prerequisites: 'Completamento del Modulo 1 (Elementa) o equivalente formazione glottodidattica.',
    whatYouLearn: [
      'Insegnare la morfologia verbale latina con il metodo contestuale a studenti intermedi',
      'Costruire sequenze didattiche per il livello A2 del latino',
      'Scegliere e adattare testi autentici latini per la classe',
      'Gestire la progressione grammaticale senza grammatica esplicita',
      'Strutturare la valutazione del livello intermedio',
      'Ottenere crediti formativi MIM con Carta del Docente',
    ],
  },

  {
    slug: 'did-grammatica', lang: 'Formazione Docenti', level: 'Percorso',
    title: 'Grammatica Latina e Buone Pratiche Didattiche',
    tagline: 'Metodologia grammaticale-traduttiva e glottodidattica. 20 ore riconosciute MIM.',
    description: 'Percorso di aggiornamento per docenti che vogliono integrare la metodologia tradizionale con approcci glottodidattici moderni. Come rendere la grammatica latina più efficace, motivante e accessibile in classe. 20 ore in 10 parti. Bonus Docenti attivo.',
    priceEur: 17000, hours: 20, lessons: 10, teacher: 'Marta Giannico',
    teacherBio: 'Latinista e glottodidatta. Formatrice di docenti specializzata nell\'integrazione tra metodo tradizionale e approcci contestuali.',
    idc: 392, bonusDocenti: true,
    prerequisites: 'Insegnanti di latino o greco in servizio. Non sono richiesti prerequisiti metodologici specifici.',
    whatYouLearn: [
      'Comprendere le differenze tra metodo grammaticale-traduttivo e metodo contestuale',
      'Integrare le buone pratiche glottodidattiche nell\'insegnamento della grammatica',
      'Rendere le lezioni di grammatica latina più motivanti e accessibili',
      'Usare testi autentici per l\'insegnamento induttivo della morfologia',
      'Valutare la competenza linguistica latina in modo olistico',
      'Ottenere crediti formativi MIM con Carta del Docente',
    ],
  },

  {
    slug: 'did-tertia', lang: 'Formazione Docenti', level: 'Modulo 3',
    title: 'Didattica della Letteratura Latina: Pars Tertia – Litterae',
    tagline: 'La letteratura latina in classe. Come renderla viva e accessibile.',
    description: 'Il Modulo 3 si rivolge ai docenti che insegnano la letteratura latina al biennio e al triennio. Approcci didattici, selezione dei testi, metodi di commento, strumenti digitali. Come rendere Virgilio, Cicerone e Orazio vivi per gli studenti di oggi. Bonus Docenti attivo.',
    priceEur: 18000, hours: 20, lessons: 10, teacher: 'Giampiero Marchi',
    teacherBio: 'Fondatore di GrecoLatinoVivo. Latinista e filologo, autore di materiali per la didattica della letteratura latina.',
    idc: 448, bonusDocenti: true, isNew: true,
    prerequisites: 'Moduli 1 e 2 consigliati ma non obbligatori. Riservato a docenti in servizio.',
    whatYouLearn: [
      'Scegliere e organizzare testi di letteratura latina per la classe',
      'Applicare approcci contestuali e comparativi alla letteratura latina',
      'Usare strumenti digitali per il commento e l\'analisi dei testi',
      'Costruire percorsi tematici su autori e generi della letteratura latina',
      'Motivare gli studenti con metodologie attive e partecipative',
      'Ottenere crediti formativi MIM con Carta del Docente',
    ],
  },

  // ── CORSI BREVI (32) ────────────────────────────────
  // Template generico arricchito per tutti i 32 corsi brevi

  { slug:'breve-marziale', lang:'Corsi Brevi', level:'Autori Latini', title:'Marziale per principianti avanzati', tagline:'Ironia e critica del benessere negli Epigrammi. 4 ore di lettura guidata.', description:'Lettura guidata degli Epigrammi di Marziale: ironia, critica sociale, vita quotidiana nella Roma di Domiziano. Con commento lessicale e contestuale. Accesso permanente. Nessun prerequisito di metrica.', priceEur:2900, hours:4, lessons:4, teacher:'Giampiero Marchi', teacherBio:'Fondatore di GrecoLatinoVivo. Latinista e filologo.', idc:406, prerequisites:'Latino livello A2 o superiore.', whatYouLearn:['Leggere epigrammi scelti di Marziale in lingua originale','Comprendere l\'ironia e la satira nella Roma imperiale','Riconoscere i principali topoi dell\'epigramma latino','Padroneggiare il lessico quotidiano della Roma di Domiziano','Comprendere il metro del distico elegiaco nella versificazione satirica','Accedere autonomamente agli Epigrammi con commento critico'] },

  { slug:'breve-tradurre', lang:'Corsi Brevi', level:'Metodo', title:'Tradurre senza scomporre', tagline:'Un approccio neuroscientifico al testo classico: fluidità senza analisi ossessiva.', description:'Come tradurre testi latini e greci con fluidità, senza decostruire ogni parola. Basato sulle ricerche neurocognitive sull\'elaborazione del linguaggio e sul metodo GrecoLatinoVivo. 4 ore di teoria e pratica.', priceEur:2900, hours:4, lessons:4, teacher:'Giampiero Marchi', teacherBio:'Fondatore di GrecoLatinoVivo. Glottodidatta e neurolinguista applicato.', idc:439, prerequisites:'Latino o Greco Antico livello A2 o superiore.', whatYouLearn:['Applicare il metodo contestuale alla traduzione di testi autentici','Superare il blocco dell\'analisi morfologica ossessiva','Tradurre con fluidità mantenendo il senso del testo originale','Comprendere come il cervello elabora le lingue classiche','Applicare strategie neurocognitive alla comprensione del testo','Velocizzare significativamente il processo di traduzione'] },

  { slug:'breve-catullo', lang:'Corsi Brevi', level:'Autori Latini', title:'Catullo per principianti avanzati', tagline:'Passioni, invettive e vita quotidiana al tramonto della Repubblica. 4 ore.', description:'Lettura guidata del Liber di Catullo: i carmi d\'amore, le invettive politiche, gli scherzi agli amici. Con commento metrico, lessicale e biografico. Il ritratto più vivido della tarda Repubblica.', priceEur:3900, hours:4, lessons:4, teacher:'Giampiero Marchi', teacherBio:'Fondatore di GrecoLatinoVivo. Latinista specializzato nella poesia neoterica.', idc:454, isNew:true, prerequisites:'Latino livello A2 o superiore.', whatYouLearn:['Leggere carmi scelti di Catullo in lingua originale','Comprendere il contesto storico e biografico del poeta','Riconoscere i principali metri lirici: endecasillabo falecio, distico elegiaco','Analizzare il lessico dell\'amore e dell\'invettiva in Catullo','Comprendere il movimento dei poeti neot erici nel contesto della Repubblica','Accedere autonomamente al Liber Catullianus con strumenti critici'] },

  { slug:'breve-sacro-romano', lang:'Corsi Brevi', level:'Civiltà Romana', title:'Pensare e fare il sacro: un percorso religioso romano', description:'Riti, culti, divinità e spazio sacro nella Roma antica. 6 ore di storia della religione romana.', tagline:'Riti, divinità, spazio sacro. La religione romana vista dall\'interno.', priceEur:6000, hours:6, lessons:6, teacher:'Emanuele Viotti', teacherBio:'Storico delle religioni antiche. Specializzato nel politeismo romano e nei culti misterici.', idc:360, prerequisites:'Nessun prerequisito di lingua.', whatYouLearn:['Comprendere la struttura del politeismo romano e il rapporto tra dei e città','Riconoscere i principali riti pubblici e privati della religione romana','Comprendere il ruolo dei sacerdoti, dei flamini e dei pontefici','Analizzare lo spazio sacro: il templum, l\'ara, i luoghi di culto','Confrontare la religione romana con i culti orientali e il Cristianesimo nascente','Leggere le fonti antiche sulla religione con commento guidato'] },

  { slug:'breve-dei-uomini', lang:'Corsi Brevi', level:'Civiltà Romana', title:"Tra Dèi e Uomini: il mito come fondamento di Roma", description:'Il mito come fondamento della Roma religiosa e civile. 6 ore.', tagline:'Il mito come fondamento della Roma religiosa e civile.', priceEur:6000, hours:6, lessons:6, teacher:'Emanuele Viotti', teacherBio:'Storico delle religioni antiche. Specializzato nel politeismo romano e nei miti di fondazione.', idc:368, prerequisites:'Nessun prerequisito di lingua.', whatYouLearn:['Comprendere il ruolo fondativo del mito nella cultura romana','Analizzare i principali miti di fondazione: Romolo, Enea, i Dioscuri','Confrontare la mitologia romana con quella greca','Leggere i miti di Ovidio (Metamorfosi) con commento guidato','Comprendere il rapporto tra mito, storia e politica a Roma','Riconoscere la mitologia romana nelle arti figurative antiche'] },

  { slug:'breve-conclave', lang:'Corsi Brevi', level:'Storia della Chiesa', title:'Conclave: le bolle papali che decidono la Chiesa', description:'Storia e linguaggio delle bolle papali. Dal latino dei documenti pontifici alla politica ecclesiastica. 4 ore.', tagline:'Il latino che governa la Chiesa. Bolle, decreti e la lingua del potere ecclesiastico.', priceEur:6000, hours:4, lessons:4, teacher:'Giampiero Marchi', teacherBio:'Fondatore di GrecoLatinoVivo. Latinista specializzato nel latino medievale e ecclesiastico.', idc:427, prerequisites:'Nessun prerequisito di lingua latina.', whatYouLearn:['Leggere e comprendere brani di bolle papali in latino medievale','Comprendere il lessico giuridico-ecclesiastico del latino pontificio','Conoscere la storia dei conclavi dalla riforma di Gregorio X','Analizzare la struttura formale dei documenti pontifici','Comprendere il ruolo del latino come lingua del potere ecclesiastico','Leggere le bolle più importanti della storia della Chiesa con commento'] },

  { slug:'breve-echi-marmo', lang:'Corsi Brevi', level:'Arte Antica', title:"Echi di Marmo: viaggio nell'Arte Greca da Omero ad Alessandro", description:'Scultura, ceramica e architettura greca nel contesto storico e letterario. 6 ore.', tagline:'Scultura, ceramica e architettura greca. L\'arte come linguaggio della civiltà.', priceEur:9000, hours:6, lessons:6, teacher:'Roberto Melfi', teacherBio:'Storico dell\'arte antica e archeologia classica. Specializzato nell\'arte greca arcaica e classica.', idc:370, prerequisites:'Nessun prerequisito.', whatYouLearn:['Riconoscere i principali stili dell\'arte greca: arcaico, severo, classico, ellenistico','Analizzare le opere scultoree più importanti: Mirone, Fidia, Prassitele','Comprendere il programma figurativo dei principali templi greci','Leggere la ceramica greca come documento storico e narrativo','Collegare l\'arte greca ai testi letterari contemporanei','Comprendere l\'evoluzione del canone nel corpo maschile e femminile'] },

  { slug:'breve-schiavitu', lang:'Corsi Brevi', level:'Storia Antica', title:'Vite in catene: la Schiavitù nel Mondo Antico', description:'Storia, diritto e filosofia della schiavitù nel mondo greco-romano. Fonti antiche. 6 ore.', tagline:'Una storia scomoda e necessaria. La schiavitù antica attraverso le fonti.', priceEur:9000, hours:6, lessons:6, teacher:'Rossano Fragale', teacherBio:'Storico del mondo antico. Specializzato nel diritto romano e nelle istituzioni sociali di Grecia e Roma.', idc:418, prerequisites:'Nessun prerequisito.', whatYouLearn:['Comprendere la struttura giuridica e sociale della schiavitù greco-romana','Leggere le fonti antiche sulla schiavitù (Aristotele, Seneca, Plauto)','Analizzare le principali rivolte servili: Spartaco, Sicilia','Confrontare la schiavitù antica con la tratta atlantica moderna','Comprendere il dibattito filosofico antico sulla schiavitù naturale','Valutare il ruolo della schiavitù nell\'economia del mondo antico'] },

  { slug:'breve-guerra-religione', lang:'Corsi Brevi', level:'Storia della Religione', title:'Guerra di Religione, Religione di Guerra', description:'Le guerre di religione nella storia antica e medievale: teologia, propaganda, martirio. 6 ore.', tagline:'Quando il sacro si fa battaglia. Teologia, propaganda e martirio.', priceEur:11000, hours:6, lessons:6, teacher:'Emanuele Viotti', teacherBio:'Storico delle religioni antiche. Specializzato nel rapporto tra religione e conflitto.', idc:424, prerequisites:'Nessun prerequisito.', whatYouLearn:['Analizzare il concetto di "guerra santa" nel mondo antico e medievale','Confrontare le crociate con le guerre sacre del mondo antico','Leggere le fonti sulla persecuzione dei cristiani e dei "pagani"','Comprendere il ruolo della propaganda religiosa nel conflitto','Analizzare il martirio come strategia di resistenza e costruzione identitaria','Comprendere le radici antiche del conflitto tra religioni monoteistiche'] },

  { slug:'breve-tragedia-greci', lang:'Corsi Brevi', level:'Teatro Antico', title:'La tragedia dei Greci: Eschilo, Sofocle, Euripide', description:'La struttura del dramma attico e i tre grandi tragici. 4 ore.', tagline:'Perché la tragedia greca è ancora il linguaggio più potente dell\'umanità.', priceEur:17000, hours:4, lessons:4, teacher:'Giampiero Marchi', teacherBio:'Fondatore di GrecoLatinoVivo. Ellenista e studioso del teatro antico.', idc:456, isNew:true, prerequisites:'Nessun prerequisito di lingua greca.', whatYouLearn:['Comprendere la struttura formale della tragedia attica','Confrontare Eschilo, Sofocle ed Euripide: stile e poetica','Analizzare i grandi temi: fato, colpa, hybris, giustizia','Leggere passi chiave in traduzione con commento critico','Comprendere il teatro come istituzione politica e religiosa ad Atene','Riconoscere la presenza della tragedia greca nella cultura contemporanea'] },

  { slug:'breve-maturita-latino', lang:'Corsi Brevi', level:'Esercitazioni', title:'Ponte alla Maturità Classica: tradurre il Latino', description:'Preparazione alla traduzione latina per la Maturità classica. Metodo e pratica. 6 ore.', tagline:'La traduzione latina all\'esame di maturità: metodo pratico in 6 ore.', priceEur:19000, hours:6, lessons:6, teacher:'Giampiero Marchi', teacherBio:'Fondatore di GrecoLatinoVivo. Latinista con esperienza ventennale nella preparazione agli esami classici.', idc:452, prerequisites:'Latino livello B1 o preparazione liceale equivalente.', whatYouLearn:['Applicare un metodo sistematico alla traduzione del brano d\'esame','Riconoscere rapidamente le strutture sintattiche più frequenti nella traduzione d\'esame','Gestire il tempo durante la prova: scansione, traduzione, revisione','Affrontare il lessico specifico degli autori più frequenti all\'esame','Correggere gli errori più comuni nella traduzione latina','Sviluppare sicurezza e velocità nella traduzione sotto pressione'] },

  { slug:'breve-roma-dei', lang:'Corsi Brevi', level:'Civiltà Romana', title:"Roma e i suoi Dèi: storia di una religione millenaria", description:'Percorso completo sulla religione romana: politeismo, culto imperiale, Cristianesimo. 15 ore.', tagline:'Il percorso completo sulla religione romana. Da Romolo a Costantino.', priceEur:25000, hours:15, lessons:10, teacher:'Emanuele Viotti', teacherBio:'Storico delle religioni antiche. Specializzato nel politeismo romano e nella tarda antichità.', idc:387, prerequisites:'Nessun prerequisito.', whatYouLearn:['Ricostruire la storia della religione romana dalle origini alla tarda antichità','Comprendere il politeismo come sistema coerente di relazione con il divino','Analizzare i culti orientali e la loro ricezione a Roma','Comprendere il processo di divinizzazione dell\'imperatore','Analizzare il conflitto e la convivenza tra paganesimo e Cristianesimo','Leggere le fonti antiche sulla religione con commento storico e critico'] },

  { slug:'breve-japonia', lang:'Corsi Brevi', level:'Autori Latini', title:'Terra Japonia: un viaggio in latino nel Giappone del Cinquecento', description:'Un testo in latino del XVI secolo che racconta il Giappone. Lettura guidata. 4 ore.', tagline:'Un gesuita scrive in latino del Giappone. Il mondo antico incontra il mondo nuovo.', priceEur:2900, hours:4, lessons:4, teacher:'Marta Giannico', teacherBio:'Latinista medievista. Specializzata nel latino umanistico e nella letteratura dei gesuiti.', idc:440, prerequisites:'Latino livello A2 o superiore.', whatYouLearn:['Leggere un testo autentico del XVI sec. in latino umanistico','Comprendere la differenza tra latino classico e latino moderno','Riconoscere il lessico della letteratura missionaria gesuitica','Comprendere il Giappone cinquecentesco attraverso gli occhi di un europeo','Apprezzare il latino come lingua viva e globale del Cinquecento','Accedere autonomamente alla letteratura latina post-classica'] },

  { slug:'breve-metrica', lang:'Corsi Brevi', level:'Metodo', title:'Il ritmo del verso: approccio neuroscientifico alla metrica classica', description:'Come il cervello elabora il ritmo poetico. Metrica latina e greca in chiave cognitiva. 4 ore.', tagline:'Perché il cervello ama l\'esametro. Metrica e neuroscienza del ritmo.', priceEur:2900, hours:4, lessons:4, teacher:'Giampiero Marchi', teacherBio:'Fondatore di GrecoLatinoVivo. Glottodidatta con specializzazione nella metrica classica e nella linguistica cognitiva.', idc:441, prerequisites:'Nessun prerequisito di metrica. Conoscenza di base del latino o greco consigliata.', whatYouLearn:['Comprendere come il cervello elabora il ritmo poetico','Imparare la scansione dell\'esametro e del distico elegiaco senza memorizzare regole','Applicare il metodo contestuale alla comprensione della metrica','Riconoscere i principali metri latini e greci a orecchio','Comprendere il rapporto tra prosodia e significato nel verso classico','Leggere versi latini e greci con il ritmo corretto'] },

  { slug:'breve-voci-vangeli', lang:'Corsi Brevi', level:'Bibbia e Antichità', title:'Voci dei Vangeli: un viaggio dalle Radici alla Rivelazione', description:'I Vangeli nel loro contesto storico, linguistico e culturale. 6 ore.', tagline:'I Vangeli come documento storico, linguistico e culturale.', priceEur:6000, hours:6, lessons:6, teacher:'Alberto Bibbiani', teacherBio:'Biblista e semitista. Specializzato nel Nuovo Testamento e nel giudaismo del Secondo Tempio.', idc:337, prerequisites:'Nessun prerequisito.', whatYouLearn:['Comprendere il contesto storico della Palestina del I sec. d.C.','Conoscere la struttura dei quattro Vangeli e le loro differenze','Comprendere il rapporto tra i Vangeli sinottici e il Vangelo di Giovanni','Leggere brani evangelici in greco con commento guidato','Analizzare il Gesù storico nel contesto del giudaismo del Secondo Tempio','Comprendere la formazione del canone neotestamentario'] },

  { slug:'breve-storie-latine', lang:'Corsi Brevi', level:'Autori Latini', title:"Dall'Antico al Moderno: Storie in Lingua Latina", description:'Lettura di testi latini medievali e moderni che narrano storie di ogni epoca. 6 ore.', tagline:'Il latino racconta il mondo. Dai classici al Medioevo al Rinascimento.', priceEur:6000, hours:6, lessons:6, teacher:'Maria Di Puorto', teacherBio:'Latinista medievista. Specializzata nella prosa latina medievale e umanistica.', idc:338, prerequisites:'Latino livello A2 o superiore.', whatYouLearn:['Leggere testi narrativi latini dall\'antichità al Rinascimento','Comprendere le differenze tra latino classico, medievale e umanistico','Scoprire storie sorprendenti raccontate in latino da autori di epoche diverse','Ampliare il lessico narrativo del latino post-classico','Comprendere la continuità del latino come lingua letteraria per 2000 anni','Accedere autonomamente a testi latini medievali con strumenti critici'] },

  { slug:'breve-buona-novella', lang:'Corsi Brevi', level:'Bibbia e Antichità', title:'La Buona Novella tra greco e latino', description:'Il Vangelo nelle sue versioni greca (Koiné) e latina (Vulgata): confronto linguistico e teologico. 6 ore.', tagline:'Il Vangelo in due lingue. Confronto tra Koiné greca e Vulgata latina.', priceEur:7000, hours:6, lessons:6, teacher:'Giampiero Marchi', teacherBio:'Fondatore di GrecoLatinoVivo. Latinista ed ellenista con specializzazione nei testi biblici.', idc:276, prerequisites:'Conoscenza di base del latino o del greco antico (livello A1 o superiore).', whatYouLearn:['Leggere passi del Vangelo in greco koiné e in latino (Vulgata) a confronto','Comprendere le principali scelte traduttive di Girolamo nella Vulgata','Riconoscere il lessico teologico greco-latino di base','Analizzare le differenze stilistiche tra greco del NT e greco classico','Comprendere il ruolo del greco koiné come lingua universale nel I sec. d.C.','Accedere ai principali strumenti di studio della Bibbia in lingua originale'] },

  { slug:'breve-padri-chiesa', lang:'Corsi Brevi', level:'Bibbia e Antichità', title:'Il Vangelo attraverso i Padri della Chiesa', description:'Lettura e interpretazione patristica del Vangelo: Agostino, Gregorio, Ambrogio. 6 ore.', tagline:'Come Agostino, Ambrogio e Gregorio leggevano il Vangelo. Il latino patristico.', priceEur:7000, hours:6, lessons:6, teacher:'Andrés Reyes Cabrera', teacherBio:'Teologo e patristico. Specializzato nella letteratura latina dei Padri della Chiesa.', idc:286, prerequisites:'Nessun prerequisito di lingua latina.', whatYouLearn:['Leggere brani dei Padri della Chiesa in latino con commento guidato','Comprendere i metodi di interpretazione biblica nella tarda antichità','Confrontare le letture di Agostino, Ambrogio e Gregorio Magno','Riconoscere il lessico teologico del latino patristico','Comprendere il passaggio dalla cultura classica alla cultura cristiana','Accedere autonomamente ai testi dei Padri della Chiesa'] },

  { slug:'breve-etruschi', lang:'Corsi Brevi', level:'Archeologia', title:'Tracce Etrusche: origini, espansioni, eredità di una civiltà', description:'Dalla Villanove alla romanizzazione: la civiltà etrusca. 8 ore.', tagline:'Il popolo misterioso che insegnò a Roma come essere Roma.', priceEur:9000, hours:8, lessons:8, teacher:'Mattia Scarpetta', teacherBio:'Archeologo ed etruscol ogo. Specializzato nella civiltà etrusca e nella protostoria italiana.', idc:339, prerequisites:'Nessun prerequisito.', whatYouLearn:['Ricostruire le origini e l\'espansione della civiltà etrusca','Analizzare i principali siti e musei etruschi in Italia','Comprendere la lingua etrusca e i progressi nella sua decifrazione','Analizzare l\'arte etrusca: scultura, pittura tombale, bronzistica','Comprendere l\'eredità etrusca nella cultura romana','Leggere le fonti antiche sugli Etruschi con commento critico'] },

  { slug:'breve-nubia-egitto', lang:'Corsi Brevi', level:'Archeologia', title:'Tra due Mondi: Nubia ed Egitto sulla linea di confine', description:'Il rapporto tra Egitto e Nubia: conflitto, scambio culturale, ibridazione artistica. 6 ore.', tagline:'Dove Egitto e Africa si incontrano. Arte, potere e identità sul Nilo.', priceEur:9000, hours:6, lessons:6, teacher:'Francesca Iannarilli', teacherBio:'Egittologa e nubiologica. Specializzata nelle culture del Nilo antico.', idc:340, prerequisites:'Nessun prerequisito.', whatYouLearn:['Comprendere la storia dei rapporti tra Egitto e Nubia dall\'Antico al Nuovo Regno','Analizzare i siti nubiani: Kerma, Meroe, Abu Simbel','Riconoscere le ibridazioni artistiche tra cultura egizia e nubiana','Comprendere i regni nubiani indipendenti: Kush, la XXV dinastia','Leggere le fonti egiziane sulla Nubia con commento guidato','Comprendere il dibattito contemporaneo sull\'identità culturale del Nilo'] },

  { slug:'breve-archeologia', lang:'Corsi Brevi', level:'Archeologia', title:"Testimonianze del Tempo: un viaggio nell'Archeologia Applicata", description:'Come si fa archeologia: metodo, scavo, interpretazione. 4 ore.', tagline:'Come si fa archeologia. Metodo scientifico, scavo e interpretazione.', priceEur:9000, hours:4, lessons:4, teacher:'Roberto Melfi', teacherBio:'Storico dell\'arte e archeologo classico. Specializzato nel metodo archeologico applicato.', idc:341, prerequisites:'Nessun prerequisito.', whatYouLearn:['Comprendere il metodo stratigrafico e la periodizzazione in archeologia','Conoscere le fasi di una campagna di scavo: survey, documentazione, analisi','Interpretare i dati materiali: ceramica, numismatica, strutture','Comprendere il rapporto tra fonte scritta e fonte materiale','Conoscere i principali musei e siti archeologici italiani','Comprendere le questioni etiche dell\'archeologia contemporanea'] },

  { slug:'breve-passione', lang:'Corsi Brevi', level:'Bibbia e Antichità', title:'Prospettive di Passione: gli ultimi giorni di Gesù nei Vangeli', description:'Confronto sinottico della Passione nei quattro Vangeli: stile, teologia, storicità. 6 ore.', tagline:'Quattro racconti della stessa storia. Il testo più letto della storia dell\'umanità.', priceEur:9000, hours:6, lessons:6, teacher:'Alberto Bibbiani', teacherBio:'Biblista e semitista. Specializzato nel Nuovo Testamento e nella letteratura giudaica.', idc:349, prerequisites:'Nessun prerequisito.', whatYouLearn:['Confrontare i quattro racconti della Passione: differenze e concordanze','Comprendere la teologia della Croce nei quattro Vangeli','Analizzare il processo storico di Gesù nel suo contesto giuridico romano','Comprendere le fonti storiche extrabibliche su Gesù','Leggere passi della Passione in greco con commento guidato','Valutare il dibattito sul Gesù storico nella ricerca contemporanea'] },

  { slug:'breve-pompei', lang:'Corsi Brevi', level:'Archeologia', title:'Voci silenziose di Pompei: scoperte epigrafiche nella città sepolta', description:'Le iscrizioni di Pompei: graffiti, tituli, dipinti elettorali. 8 ore.', tagline:'I pompeiani parlavano sui muri. Le iscrizioni di Pompei come fonte storica.', priceEur:9000, hours:8, lessons:8, teacher:'Marta Giannico', teacherBio:'Latinista ed epigrafi sta. Specializzata nella cultura materiale e nelle iscrizioni romane.', idc:350, prerequisites:'Nessun prerequisito di latino.', whatYouLearn:['Leggere e interpretare graffiti e iscrizioni di Pompei','Comprendere la varietà del latino parlato a Pompei','Analizzare i dipinti elettorali (programmata) come fonte politica','Ricostruire la vita quotidiana a Pompei attraverso le iscrizioni','Comprendere il lessico quotidiano del latino parlato','Leggere il corpus epigrafico pompeiano (CIL IV) con strumenti critici'] },

  { slug:'breve-miniera-luna', lang:'Corsi Brevi', level:'Filosofia Antica', title:"Dalla Miniera alla Luna: Pirandello e Verga tra esistenza e letteratura", description:'Percorso letterario tra i due grandi autori siciliani. 6 ore.', tagline:'Due siciliani e una domanda senza risposta: che cosa siamo?', priceEur:9000, hours:6, lessons:6, teacher:'Alessandra Chiusaroli', teacherBio:'Critica letteraria e italianista. Specializzata nella letteratura italiana di fine Ottocento e inizio Novecento.', idc:361, prerequisites:'Nessun prerequisito.', whatYouLearn:['Analizzare i temi principali di Pirandello: identità, maschera, relativismo','Comprendere il Verismo di Verga: metodo e ideologia','Confrontare il mondo siciliano di Verga con quello di Pirandello','Leggere brani scelti dei due autori con commento critico','Comprendere il rapporto tra letteratura italiana e cultura europea di fine \'800','Riconoscere l\'eredità di Pirandello e Verga nella cultura contemporanea'] },

  { slug:'breve-algoritmica', lang:'Corsi Brevi', level:'Filosofia Antica', title:"L'Algoritmica dell'Essere: filosofia nell'Intelligenza Artificiale", description:'Esplorazioni filosofiche ai confini tra intelligenza artificiale e pensiero antico. 6 ore.', tagline:'Platone e ChatGPT. La filosofia antica interroga l\'intelligenza artificiale.', priceEur:9000, hours:6, lessons:6, teacher:'Giulio Bianchi', teacherBio:'Filologo classico e filosofo. Specializzato nella filosofia greca antica e nelle sue applicazioni contemporanee.', idc:362, prerequisites:'Nessun prerequisito.', whatYouLearn:['Comprendere le questioni filosofiche poste dall\'intelligenza artificiale','Confrontare il pensiero di Platone, Aristotele e Turing sull\'intelligenza','Analizzare i concetti di logos, nous e techne nel pensiero antico','Discutere il problema della coscienza e dell\'identità nell\'IA','Leggere testi filosofici classici in dialogo con la contemporaneità','Applicare il pensiero critico antico alle questioni tecnologiche di oggi'] },

  { slug:'breve-voci-femminili', lang:'Corsi Brevi', level:'Bibbia e Antichità', title:'Dal Margine al Centro: Voci Femminili nei Vangeli', description:'Le donne nei Vangeli: protagoniste dimenticate della storia cristiana. 4 ore.', tagline:'Maria, Marta, la Maddalena. Le donne che i Vangeli non hanno dimenticato.', priceEur:9000, hours:4, lessons:4, teacher:'Alberto Bibbiani', teacherBio:'Biblista. Specializzato nel Nuovo Testamento e nella storia delle donne nel Giudaismo antico.', idc:369, prerequisites:'Nessun prerequisito.', whatYouLearn:['Identificare le figure femminili nei Vangeli e il loro ruolo narrativo','Comprendere la condizione delle donne nella Palestina del I sec. d.C.','Leggere i testi evangelici sulle donne con commento storico e critico','Analizzare la Maddalena, Maria di Betania, la Samaritana nella ricerca contemporanea','Comprendere il dibattito femminista sulla Bibbia','Valutare il ruolo delle donne nella chiesa primitiva secondo le fonti'] },

  { slug:'breve-nilo', lang:'Corsi Brevi', level:'Archeologia', title:"Aldilà e Al-di-qua del Nilo: l'Antico Egitto tra vita e morte", description:"Il concetto egiziano di morte, aldilà e resurrezione. Testi funerari e iconografia. 8 ore.", tagline:'Per gli egizi la morte era un secondo inizio. I testi funerari lo raccontano.', priceEur:10000, hours:8, lessons:8, teacher:'Francesca Iannarilli', teacherBio:'Egittologa. Specializzata nella letteratura funeraria egiziana e nella religione dell\'Antico Egitto.', idc:403, prerequisites:'Nessun prerequisito.', whatYouLearn:['Comprendere la concezione egiziana dell\'anima: ba, ka, akh','Leggere passi dal Libro dei Morti con commento iconografico','Analizzare le principali iconografie funerarie del Nuovo Regno','Comprendere il processo di mummificazione nel suo contesto religioso','Riconoscere le principali divinità funerarie: Osiride, Anubi, Thot','Leggere i Testi delle Piramidi e dei Sarcofagi con commento guidato'] },

  { slug:'breve-etruschi-vita', lang:'Corsi Brevi', level:'Archeologia', title:'Etruschi: vita, guerra, spirito di una civiltà antica', description:'La civiltà etrusca nelle sue dimensioni quotidiana, militare e spirituale. 6 ore.', tagline:'La vita quotidiana degli Etruschi: banchetti, guerra e spirito.', priceEur:10000, hours:6, lessons:6, teacher:'Mattia Scarpetta', teacherBio:'Archeologo ed etruscol ogo. Specializzato nella cultura materiale etrusca.', idc:404, prerequisites:'Nessun prerequisito.', whatYouLearn:['Ricostruire la vita quotidiana etrusca: alimentazione, abbigliamento, economia','Comprendere l\'organizzazione militare etrusca e il suo impatto su Roma','Analizzare la spiritualità etrusca: haruspicina, fegato di Piacenza, Libri Fatales','Riconoscere l\'iconografia funeraria delle tombe dipinte','Comprendere la società etrusca: aristocrazia, clero, artigiani','Valutare l\'eredità etrusca nella religione e nella cultura romana'] },

  { slug:'breve-terre-bibbia', lang:'Corsi Brevi', level:'Bibbia e Antichità', title:'Le Terre della Bibbia: viaggio fra storia e sacro', description:'Israele, Giordania, Egitto: i luoghi della Bibbia tra archeologia e fede. 4 ore.', tagline:'Gerusalemme, il Sinai, il Giordano. I luoghi della Bibbia tra storia e fede.', priceEur:10000, hours:4, lessons:4, teacher:'Alberto Bibbiani', teacherBio:'Biblista e geografo sacro. Specializzato nell\'archeologia biblica e nella geografia storica del Medio Oriente.', idc:405, prerequisites:'Nessun prerequisito.', whatYouLearn:['Riconoscere i principali siti biblici in Israele, Giordania e Egitto','Comprendere il rapporto tra topografia biblica e racconto sacro','Analizzare le principali scoperte archeologiche in Terra Santa','Comprendere Gerusalemme come città della memoria delle tre religioni','Leggere i testi biblici in relazione ai loro luoghi storici','Valutare il contributo dell\'archeologia alla comprensione della Bibbia'] },

  { slug:'breve-maturita-greco', lang:'Corsi Brevi', level:'Esercitazioni', title:'Ponte alla Maturità Classica: tradurre il Greco Antico', description:'Preparazione alla traduzione greca per la Maturità classica. Metodo e pratica. 6 ore.', tagline:'La traduzione greca all\'esame di maturità: metodo pratico in 6 ore.', priceEur:14000, hours:6, lessons:6, teacher:'Alberto Bibbiani', teacherBio:'Ellenista e biblista. Specializzato nella preparazione agli esami classici.', idc:363, prerequisites:'Greco Antico livello B1 o preparazione liceale equivalente.', whatYouLearn:['Applicare un metodo sistematico alla traduzione del brano greco d\'esame','Riconoscere rapidamente i costrutti sintattici più frequenti nella traduzione d\'esame','Gestire il tempo durante la prova: scansione, traduzione, revisione','Affrontare il lessico specifico degli autori più frequenti all\'esame (Platone, Tucidide, Isocrate)','Correggere gli errori più comuni nella traduzione greca','Sviluppare sicurezza e velocità nella traduzione sotto pressione'] },

  { slug:'breve-egiziano-appro', lang:'Corsi Brevi', level:'Egiziano Geroglifico', title:'Approfondimenti di Egiziano Geroglifico: preparazione alla letteratura', description:'Testi letterari egiziani per studenti di livello intermedio. 4 ore.', tagline:'Oltre il geroglifico di base. I testi letterari egiziani per chi già conosce la grammatica.', priceEur:15000, hours:4, lessons:4, teacher:'Ilaria Cariddi', teacherBio:'Egittologa. Specializzata nella letteratura del Medio e Nuovo Regno.', idc:352, prerequisites:'Egiziano Geroglifico livello A1.2 o equivalente.', whatYouLearn:['Leggere testi letterari del Medio e Nuovo Regno di difficoltà intermedia','Ampliare il vocabolario egiziano con il lessico letterario e poetico','Comprendere i generi letterari del Medio Regno: sapienziale, narrativo, lirico','Padroneggiare le forme verbali secondarie del medio-egiziano','Accedere autonomamente ai principali testi letterari egiziani','Prepararsi alla lettura avanzata di testi letterari e funerari'] },

  { slug:'breve-ars-scribendi', lang:'Corsi Brevi', level:'Scrittura Latina', title:"Ars latine scribendi: l'arte di scrivere in latino", description:"Composizione latina avanzata: stile, prosa, epistolografia. Per studenti di livello B2+. 10 ore.", tagline:'Scrivere in latino: non solo tradurre, ma comporre. Per studenti avanzati.', priceEur:45000, hours:10, lessons:10, teacher:'Christian Costa', teacherBio:'Latinista e filologo. Specializzato nella composizione latina e nell\'epistolografia classica e umanistica.', idc:419, prerequisites:'Latino livello B2 o superiore. Capacità di tradurre testi autentici con autonomia.', whatYouLearn:['Comporre brevi testi in prosa latina corretta stilisticamente','Padroneggiare i principali modelli dell\'epistolografia latina: Cicerone, Plinio','Scrivere in diversi registri: formale, informale, filosofico','Correggere e revisionare composizioni latine proprie e altrui','Comprendere le norme stilistiche della prosa latina classica','Partecipare a scambi epistolari in latino con altri studenti avanzati'] },

]

// ─────────────────────────────────────────────────────
// RECENSIONI — struttura predisposta
// Populate aggiungendo oggetti a questo array.
// In futuro: fetch da DB o CMS.
// ─────────────────────────────────────────────────────
interface Recensione {
  nome: string
  stelle: 1 | 2 | 3 | 4 | 5
  testo: string
  data?: string
}

// Array vuoto = mostra placeholder "In arrivo".
// Per aggiungere recensioni: { nome:'…', stelle:5, testo:'…', data:'maggio 2026' }
const RECENSIONI_CORSO: Recensione[] = []

// ─────────────────────────────────────────────────────
// LOOKUP
// ─────────────────────────────────────────────────────
function getCorso(slug: string): CorsoDetail | undefined {
  return CORSI.find(c => c.slug === slug)
}

// ─────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────
type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return CORSI.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const corso = getCorso(slug)
  if (!corso) return { title: 'Corso non trovato | GrecoLatinoVivo' }
  return {
    title: `${corso.title} — ${corso.lang} ${corso.level} | GrecoLatinoVivo`,
    description: corso.description.slice(0, 160),
    alternates: { canonical: `https://grecolatinovivo.it/corsi/corsi-asincroni/${corso.slug}` },
    openGraph: {
      title: `${corso.title} | GrecoLatinoVivo`,
      description: corso.description.slice(0, 160),
      url: `https://grecolatinovivo.it/corsi/corsi-asincroni/${corso.slug}`,
    },
  }
}

// ─────────────────────────────────────────────────────
// COMPONENTE
// ─────────────────────────────────────────────────────
export default async function CorsoDetailPage({ params }: Props) {
  const { slug } = await params
  const corso = getCorso(slug)
  if (!corso) notFound()

  const prezzo = fmt(corso.priceEur)
  const isLang = corso.lang !== 'Corsi Brevi' && corso.lang !== 'Formazione Docenti'

  return (
    <>
      {/* ── BANNER ANNULLATO (client component — legge URL senza rompere SSG) ── */}
      <CancelledBanner />

      {/* ── HERO ─────────────────────────────────────── */}
      <section
        aria-labelledby="corso-titolo"
        style={{
          background: '#002147',
          padding: '5rem 2rem 4rem',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
            <ol style={{ display: 'flex', gap: '0.5rem', listStyle: 'none', fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', flexWrap: 'wrap' }}>
              <li><Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></li>
              <li aria-hidden="true" style={{ color: 'rgba(255,255,255,0.3)' }}>›</li>
              <li><Link href="/corsi/corsi-asincroni" style={{ color: 'inherit', textDecoration: 'none' }}>Corsi Asincroni</Link></li>
              <li aria-hidden="true" style={{ color: 'rgba(255,255,255,0.3)' }}>›</li>
              <li style={{ color: 'rgba(255,255,255,0.8)' }}>{corso.lang}</li>
            </ol>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'start' }}>
            <div>
              {/* Badge lingua + livello */}
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                <span style={{ display: 'inline-block', padding: '4px 12px', border: '1px solid rgba(201,168,76,0.5)', color: '#C9A84C', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-body, sans-serif)' }}>
                  {corso.lang}
                </span>
                <span style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(201,168,76,0.12)', color: '#C9A84C', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-body, sans-serif)' }}>
                  Livello {corso.level}
                </span>
                {corso.isNew && (
                  <span style={{ display: 'inline-block', padding: '4px 12px', background: '#C9A84C', color: '#002147', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-body, sans-serif)', fontWeight: 600 }}>
                    Nuovo
                  </span>
                )}
                {corso.bonusDocenti && (
                  <span style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-body, sans-serif)' }}>
                    Bonus Docenti
                  </span>
                )}
              </div>

              {/* Titolo */}
              <h1
                id="corso-titolo"
                style={{
                  fontFamily: 'var(--font-heading, Georgia, serif)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  fontWeight: 400,
                  color: '#fff',
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                }}
              >
                {corso.title}
              </h1>

              {/* Tagline */}
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: '620px', marginBottom: '2rem', fontFamily: 'var(--font-heading, Georgia, serif)', fontStyle: 'italic' }}>
                {corso.tagline}
              </p>

              {/* Quick stats strip */}
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                {[
                  { label: 'Ore totali', val: `${corso.hours} ore` },
                  { label: 'Lezioni', val: `${corso.lessons} lezioni` },
                  { label: 'Formato', val: 'Asincrono' },
                  { label: 'Accesso', val: 'Permanente' },
                ].map(s => (
                  <div key={s.label}>
                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-body, sans-serif)', marginBottom: '2px' }}>{s.label}</div>
                    <div style={{ fontSize: '0.9rem', color: '#fff', fontFamily: 'var(--font-body, sans-serif)', fontWeight: 500 }}>{s.val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prezzo desktop inline nell'hero */}
            <div
              style={{
                background: '#fff',
                padding: '2rem',
                minWidth: '240px',
                borderTop: '3px solid #C9A84C',
              }}
              className="corso-sidebar-desktop"
            >
              <div style={{ fontSize: '0.7rem', color: '#777', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px', fontFamily: 'var(--font-body, sans-serif)' }}>Prezzo</div>
              <div style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: '2rem', fontWeight: 400, color: '#002147', marginBottom: '4px' }}>{prezzo}</div>
              <div style={{ fontSize: '0.75rem', color: '#777', marginBottom: '1.5rem', fontFamily: 'var(--font-body, sans-serif)' }}>Accesso permanente · Nessuna scadenza</div>
              <CheckoutButton
                slug={corso.slug}
                label="Acquista ora"
                style={{ marginBottom: '0.75rem' }}
              />
              <Link
                href="/corsi/corsi-asincroni"
                className="btn btn-secondary btn-sm"
                style={{ display: 'block', width: '100%', textAlign: 'center', boxSizing: 'border-box' }}
              >
                Tutti i corsi asincroni
              </Link>
              {corso.bonusDocenti && (
                <div style={{ marginTop: '1rem', padding: '10px 12px', background: '#f8f7f4', borderLeft: '2px solid #C9A84C', fontSize: '0.75rem', color: '#555', fontFamily: 'var(--font-body, sans-serif)', lineHeight: 1.5 }}>
                  Carta del Docente (Bonus Docenti) applicabile
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Linea oro */}
      <div style={{ height: '2px', background: '#C9A84C' }} aria-hidden="true" />

      {/* ── CORPO ────────────────────────────────────── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem', display: 'grid', gridTemplateColumns: '1fr 320px', gap: '4rem', alignItems: 'start' }} className="corso-body-grid">

        {/* COLONNA SINISTRA */}
        <div>

          {/* COSA IMPARERAI */}
          <section aria-labelledby="imparerai-titolo" style={{ marginBottom: '3.5rem' }}>
            <h2
              id="imparerai-titolo"
              style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: '1.4rem', fontWeight: 400, color: '#002147', marginBottom: '1.5rem' }}
            >
              Cosa imparerai
            </h2>
            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="cosa-imparerai-grid">
              {corso.whatYouLearn.map((item, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '2px 1fr', gap: '0.875rem', alignItems: 'start' }}>
                  <span aria-hidden="true" style={{ background: '#C9A84C', width: '2px', minHeight: '1.2rem', display: 'block', marginTop: '0.25rem' }} />
                  <span style={{ fontSize: '0.875rem', color: '#444', lineHeight: 1.65, fontFamily: 'var(--font-body, sans-serif)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid #e8e8e8', margin: '0 0 3.5rem' }} />

          {/* DESCRIZIONE */}
          <section aria-labelledby="desc-titolo" style={{ marginBottom: '3.5rem' }}>
            <h2
              id="desc-titolo"
              style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: '1.4rem', fontWeight: 400, color: '#002147', marginBottom: '1.25rem' }}
            >
              Il corso
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.85, fontFamily: 'var(--font-body, sans-serif)' }}>
              {corso.description}
            </p>
          </section>

          {/* PROGRAMMA — solo se disponibile (lat-a11 demo) */}
          {corso.syllabus && corso.syllabus.length > 0 && (
            <>
              <hr style={{ border: 'none', borderTop: '1px solid #e8e8e8', margin: '0 0 3.5rem' }} />
              <section aria-labelledby="programma-titolo" style={{ marginBottom: '3.5rem' }}>
                <h2
                  id="programma-titolo"
                  style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: '1.4rem', fontWeight: 400, color: '#002147', marginBottom: '1.5rem' }}
                >
                  Programma del corso
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {corso.syllabus.map((u, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '40px 1fr',
                        gap: '1rem',
                        padding: '1.1rem 0',
                        borderBottom: '1px solid #e8e8e8',
                        alignItems: 'start',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-body, sans-serif)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: '#C9A84C',
                          letterSpacing: '0.04em',
                          paddingTop: '2px',
                        }}
                      >
                        {String(u.n).padStart(2, '0')}
                      </span>
                      <div>
                        <div style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: '0.95rem', color: '#002147', fontWeight: 400, marginBottom: '4px' }}>
                          {u.titolo}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6, fontFamily: 'var(--font-body, sans-serif)' }}>
                          {u.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          <hr style={{ border: 'none', borderTop: '1px solid #e8e8e8', margin: '0 0 3.5rem' }} />

          {/* PREREQUISITI */}
          <section aria-labelledby="prereq-titolo" style={{ marginBottom: '3.5rem' }}>
            <h2
              id="prereq-titolo"
              style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: '1.4rem', fontWeight: 400, color: '#002147', marginBottom: '1rem' }}
            >
              Prerequisiti
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#444', lineHeight: 1.75, fontFamily: 'var(--font-body, sans-serif)' }}>
              {corso.prerequisites}
            </p>
          </section>

          {/* LIVELLO DI RIFERIMENTO (solo per corsi di lingua) */}
          {corso.latinCertRef && (
            <>
              <hr style={{ border: 'none', borderTop: '1px solid #e8e8e8', margin: '0 0 3.5rem' }} />
              <section aria-labelledby="cert-titolo" style={{ marginBottom: '3.5rem' }}>
                <h2
                  id="cert-titolo"
                  style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: '1.4rem', fontWeight: 400, color: '#002147', marginBottom: '1rem' }}
                >
                  Livello di riferimento
                </h2>
                <div style={{ padding: '1.25rem 1.5rem', borderLeft: '3px solid #C9A84C', background: '#fafaf8' }}>
                  <p style={{ fontSize: '0.875rem', color: '#444', lineHeight: 1.75, fontFamily: 'var(--font-body, sans-serif)', marginBottom: '0.75rem' }}>
                    {corso.latinCertRef}
                  </p>
                  {isLang && (
                    <a
                      href="https://www.latin-cert.org/sillabo_corsiLatino.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ marginTop: '0.75rem' }}
                    >
                      Consulta il sillabo Latin Cert
                    </a>
                  )}
                </div>
              </section>
            </>
          )}

          <hr style={{ border: 'none', borderTop: '1px solid #e8e8e8', margin: '0 0 3.5rem' }} />

          {/* IL DOCENTE */}
          <section aria-labelledby="docente-titolo" style={{ marginBottom: '3.5rem' }}>
            <h2
              id="docente-titolo"
              style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: '1.4rem', fontWeight: 400, color: '#002147', marginBottom: '1.25rem' }}
            >
              Il tuo docente
            </h2>
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              {/* Monogramma docente */}
              <div
                aria-hidden="true"
                style={{
                  width: '52px',
                  height: '52px',
                  background: '#002147',
                  color: '#C9A84C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-heading, Georgia, serif)',
                  fontSize: '1.1rem',
                  flexShrink: 0,
                }}
              >
                {corso.teacher.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: '1rem', color: '#002147', marginBottom: '6px' }}>
                  {corso.teacher}
                </div>
                <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.7, fontFamily: 'var(--font-body, sans-serif)' }}>
                  {corso.teacherBio}
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* ── SIDEBAR DESTRA (sticky) ───────────────── */}
        <aside
          className="corso-sidebar"
          style={{
            position: 'sticky',
            top: '100px',
          }}
        >
          <div
            style={{
              background: '#fff',
              border: '1px solid #e8e8e8',
              borderTop: '3px solid #C9A84C',
              padding: '1.75rem',
            }}
          >
            {/* Prezzo */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.7rem', color: '#777', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px', fontFamily: 'var(--font-body, sans-serif)' }}>Prezzo</div>
              <div style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontSize: '2rem', fontWeight: 400, color: '#002147' }}>{prezzo}</div>
              <div style={{ fontSize: '0.75rem', color: '#777', marginTop: '4px', fontFamily: 'var(--font-body, sans-serif)' }}>Accesso permanente · Nessuna scadenza</div>
            </div>

            {/* CTA principale */}
            <CheckoutButton
              slug={corso.slug}
              label="Acquista ora"
              style={{ marginBottom: '0.75rem' }}
            />

            {/* Rassicurazione */}
            <p style={{ fontSize: '0.75rem', color: '#888', textAlign: 'center', marginBottom: '1.5rem', fontFamily: 'var(--font-body, sans-serif)' }}>
              Studia al tuo ritmo. Nessuna scadenza.
            </p>

            <hr style={{ border: 'none', borderTop: '1px solid #f0f0f0', margin: '0 0 1.25rem' }} />

            {/* Dettagli */}
            {[
              { label: 'Lingua', val: corso.lang },
              { label: 'Livello', val: corso.level },
              { label: 'Durata totale', val: `${corso.hours} ore` },
              { label: 'Lezioni', val: `${corso.lessons} lezioni` },
              { label: 'Formato', val: 'Video on demand' },
              { label: 'Docente', val: corso.teacher },
              ...(corso.bonusDocenti ? [{ label: 'Carta del Docente', val: 'Applicabile' }] : []),
            ].map(d => (
              <div key={d.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '0.55rem 0', borderBottom: '1px solid #f5f5f5' }}>
                <span style={{ fontSize: '0.78rem', color: '#888', fontFamily: 'var(--font-body, sans-serif)' }}>{d.label}</span>
                <span style={{ fontSize: '0.82rem', color: '#333', fontFamily: 'var(--font-body, sans-serif)', fontWeight: 500, textAlign: 'right', maxWidth: '55%' }}>{d.val}</span>
              </div>
            ))}

            {/* Link catalogo */}
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <Link href="/corsi/corsi-asincroni" className="btn btn-secondary btn-sm" style={{ width: '100%', textAlign: 'center', boxSizing: 'border-box' }}>
                Tutti i corsi asincroni
              </Link>
            </div>
          </div>
        </aside>

      </div>

      {/* ── RECENSIONI ───────────────────────────────── */}
      <section
        aria-labelledby="recensioni-titolo"
        style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 2rem' }}
      >
        <div style={{ borderTop: '1px solid #e8e8e8', paddingTop: '3.5rem' }}>
          {/* Intestazione sezione */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <h2
              id="recensioni-titolo"
              style={{
                fontFamily: 'var(--font-heading, Georgia, serif)',
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                fontWeight: 400,
                color: '#002147',
                margin: 0,
              }}
            >
              Cosa dicono gli studenti
            </h2>
            <span style={{
              fontFamily: 'var(--font-body, sans-serif)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#999',
              border: '1px solid #e8e8e8',
              padding: '2px 10px',
            }}>
              In arrivo
            </span>
          </div>

          {/* Placeholder — popolato quando arrivano le prime recensioni */}
          {RECENSIONI_CORSO.length === 0 ? (
            <div style={{
              border: '1px solid #e8e8e8',
              borderTop: '3px solid #e8e8e8',
              padding: '2.5rem',
              textAlign: 'center',
              background: '#fafafa',
            }}>
              <p style={{
                fontFamily: 'var(--font-heading, Georgia, serif)',
                fontSize: '0.95rem',
                color: '#777',
                fontStyle: 'italic',
                marginBottom: '0.5rem',
              }}>
                Le prime recensioni saranno pubblicate dopo i prossimi acquisti.
              </p>
              <p style={{
                fontFamily: 'var(--font-body, sans-serif)',
                fontSize: '0.8rem',
                color: '#aaa',
              }}>
                Hai già frequentato questo corso?{' '}
                <a
                  href="mailto:info@grecolatinovivo.it?subject=Recensione corso"
                  style={{ color: '#002147', borderBottom: '1px solid #C9A84C', textDecoration: 'none', paddingBottom: '1px' }}
                >
                  Scrivi la tua opinione
                </a>
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {RECENSIONI_CORSO.map((r, i) => (
                <blockquote
                  key={i}
                  style={{
                    margin: 0,
                    border: '1px solid #e8e8e8',
                    borderTop: '3px solid #C9A84C',
                    padding: '1.5rem',
                    background: '#fff',
                  }}
                >
                  {/* Stelle */}
                  <div style={{ color: '#C9A84C', fontSize: '0.85rem', marginBottom: '0.75rem', letterSpacing: '0.05em' }} aria-label={`Valutazione: ${r.stelle} su 5`}>
                    {'★'.repeat(r.stelle)}{'☆'.repeat(5 - r.stelle)}
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-heading, Georgia, serif)',
                    fontSize: '0.9rem',
                    color: '#333',
                    fontStyle: 'italic',
                    lineHeight: 1.65,
                    marginBottom: '1rem',
                  }}>
                    &ldquo;{r.testo}&rdquo;
                  </p>
                  <footer style={{
                    fontFamily: 'var(--font-body, sans-serif)',
                    fontSize: '0.78rem',
                    color: '#777',
                  }}>
                    <strong style={{ color: '#002147', fontWeight: 600 }}>{r.nome}</strong>
                    {r.data && <span> &middot; {r.data}</span>}
                  </footer>
                </blockquote>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA BAND FINALE ──────────────────────────── */}
      <div className="cta-band">
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading, Georgia, serif)', fontWeight: 400 }}>
            Pronto a iniziare {corso.title}?
          </h2>
          <p style={{ marginBottom: '2rem' }}>
            {prezzo} · Accesso permanente · Studia al tuo ritmo dal portale GrecoLatinoVivo.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', maxWidth: '420px', margin: '0 auto' }}>
            <CheckoutButton
              slug={corso.slug}
              label="Acquista ora"
              className="btn btn-ghost"
              style={{ flex: 1 }}
            />
            <Link href="/corsi/corsi-asincroni" className="btn btn-ghost" style={{ opacity: 0.7 }}>
              Tutti i corsi
            </Link>
          </div>
        </div>
      </div>

      {/* ── RESPONSIVE STYLES ────────────────────────── */}
      <style>{`
        .corso-sidebar-desktop { display: none; }
        .corso-sidebar { display: block; }
        .cosa-imparerai-grid { grid-template-columns: 1fr 1fr !important; }
        .corso-body-grid { grid-template-columns: 1fr 320px !important; }
        @media (max-width: 900px) {
          .corso-sidebar-desktop { display: block !important; }
          .corso-sidebar { display: none !important; }
          .corso-body-grid { grid-template-columns: 1fr !important; }
          .cosa-imparerai-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .cosa-imparerai-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
