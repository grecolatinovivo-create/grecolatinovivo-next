// Catalogo corsi asincroni — fonte di verità server-side per i prezzi
// Questo file viene importato SOLO lato server (API routes).
// Il client manda lo slug; il server verifica il prezzo da qui.
// I prezzi sono in centesimi di euro (es. 13000 = €130,00).
// Sincronizzato con il catalogo del portale (maggio 2026).

export interface CorsoCatalogEntry {
  slug: string
  title: string
  priceEur: number  // centesimi
  idc: number       // ID corso nel portale GrecoLatinoVivo
  lang: string
  level: string
}

const CATALOG: CorsoCatalogEntry[] = [
  // ── LATINO ─────────────────────────────────────────────────────
  { slug:'lat-a11', title:'Corso di lingua latina A1.1', priceEur:13000, idc:372, lang:'Latino', level:'A1.1' },
  { slug:'lat-a12', title:'Corso di lingua latina A1.2', priceEur:13000, idc:374, lang:'Latino', level:'A1.2' },
  { slug:'lat-a21', title:'Corso di lingua latina A2.1', priceEur:15000, idc:377, lang:'Latino', level:'A2.1' },
  { slug:'lat-a22', title:'Corso di lingua latina A2.2', priceEur:15000, idc:378, lang:'Latino', level:'A2.2' },
  { slug:'lat-b11', title:'Corso di lingua latina B1.1', priceEur:18000, idc:432, lang:'Latino', level:'B1.1' },
  { slug:'lat-b12', title:'Corso di lingua latina B1.2', priceEur:18000, idc:433, lang:'Latino', level:'B1.2' },
  { slug:'lat-b13', title:'Corso di lingua latina B1.3', priceEur:18000, idc:434, lang:'Latino', level:'B1.3' },
  // ── GRECO ANTICO ────────────────────────────────────────────────
  { slug:'gr-a11', title:'Corso di greco antico A1.1', priceEur:13000, idc:373, lang:'Greco Antico', level:'A1.1' },
  { slug:'gr-a12', title:'Corso di greco antico A1.2', priceEur:13000, idc:375, lang:'Greco Antico', level:'A1.2' },
  { slug:'gr-a21', title:'Corso di greco antico A2.1', priceEur:15000, idc:381, lang:'Greco Antico', level:'A2.1' },
  { slug:'gr-a22', title:'Corso di greco antico A2.2', priceEur:15000, idc:380, lang:'Greco Antico', level:'A2.2' },
  { slug:'gr-b11', title:'Corso di greco antico B1.1', priceEur:18000, idc:435, lang:'Greco Antico', level:'B1.1' },
  { slug:'gr-b12', title:'Corso di greco antico B1.2', priceEur:18000, idc:436, lang:'Greco Antico', level:'B1.2' },
  { slug:'gr-b13', title:'Corso di greco antico B1.3', priceEur:18000, idc:437, lang:'Greco Antico', level:'B1.3' },
  // ── EGIZIANO GEROGLIFICO ────────────────────────────────────────
  { slug:'eg-a11', title:'Corso di Egiziano Geroglifico A1.1', priceEur:17000, idc:382, lang:'Egiziano Geroglifico', level:'A1.1' },
  { slug:'eg-a12', title:'Corso di Egiziano Geroglifico A1.2', priceEur:17000, idc:430, lang:'Egiziano Geroglifico', level:'A1.2' },
  { slug:'eg-a21', title:'Corso di Egiziano Geroglifico A2',   priceEur:19000, idc:431, lang:'Egiziano Geroglifico', level:'A2' },
  // ── EBRAICO BIBLICO ─────────────────────────────────────────────
  { slug:'eb-a11', title:'Ebraico Biblico A1.1', priceEur:17000, idc:383, lang:'Ebraico Biblico', level:'A1.1' },
  { slug:'eb-a12', title:'Ebraico Biblico A1.2', priceEur:17000, idc:428, lang:'Ebraico Biblico', level:'A1.2' },
  { slug:'eb-a21', title:'Ebraico Biblico A2',   priceEur:19000, idc:429, lang:'Ebraico Biblico', level:'A2' },
  // ── FORMAZIONE DOCENTI ──────────────────────────────────────────
  { slug:'did-elementa',   title:'Didattica del Latino: Pars Prima – Elementa',          priceEur:15000, idc:388, lang:'Formazione Docenti', level:'Modulo 1' },
  { slug:'did-principia',  title:'Didattica del Latino: Pars Secunda – Principia',        priceEur:18000, idc:389, lang:'Formazione Docenti', level:'Modulo 2' },
  { slug:'did-grammatica', title:'Grammatica Latina e Buone Pratiche Didattiche',         priceEur:17000, idc:392, lang:'Formazione Docenti', level:'Percorso' },
  { slug:'did-tertia',     title:'Didattica della Letteratura Latina: Pars Tertia – Litterae', priceEur:18000, idc:448, lang:'Formazione Docenti', level:'Modulo 3' },
  // ── CORSI BREVI ─────────────────────────────────────────────────
  { slug:'breve-marziale',         title:'Marziale per principianti avanzati',                                    priceEur:2900,  idc:406, lang:'Corsi Brevi', level:'Autori Latini' },
  { slug:'breve-tradurre',         title:'Tradurre senza scomporre',                                              priceEur:2900,  idc:439, lang:'Corsi Brevi', level:'Metodo' },
  { slug:'breve-catullo',          title:'Catullo per principianti avanzati',                                     priceEur:3900,  idc:454, lang:'Corsi Brevi', level:'Autori Latini' },
  { slug:'breve-sacro-romano',     title:'Pensare e fare il sacro: un percorso religioso romano',                 priceEur:6000,  idc:360, lang:'Corsi Brevi', level:'Civiltà Romana' },
  { slug:'breve-dei-uomini',       title:'Tra Dèi e Uomini: il mito come fondamento di Roma',                    priceEur:6000,  idc:368, lang:'Corsi Brevi', level:'Civiltà Romana' },
  { slug:'breve-conclave',         title:'Conclave: le bolle papali che decidono la Chiesa',                      priceEur:6000,  idc:427, lang:'Corsi Brevi', level:'Storia della Chiesa' },
  { slug:'breve-echi-marmo',       title:"Echi di Marmo: viaggio nell'Arte Greca da Omero ad Alessandro",         priceEur:9000,  idc:370, lang:'Corsi Brevi', level:'Arte Antica' },
  { slug:'breve-schiavitu',        title:'Vite in catene: la Schiavitù nel Mondo Antico',                         priceEur:9000,  idc:418, lang:'Corsi Brevi', level:'Storia Antica' },
  { slug:'breve-guerra-religione', title:'Guerra di Religione, Religione di Guerra',                              priceEur:11000, idc:424, lang:'Corsi Brevi', level:'Storia della Religione' },
  { slug:'breve-tragedia-greci',   title:'La tragedia dei Greci: Eschilo, Sofocle, Euripide',                     priceEur:17000, idc:456, lang:'Corsi Brevi', level:'Teatro Antico' },
  { slug:'breve-maturita-latino',  title:'Ponte alla Maturità Classica: tradurre il Latino',                      priceEur:19000, idc:452, lang:'Corsi Brevi', level:'Esercitazioni' },
  { slug:'breve-roma-dei',         title:"Roma e i suoi Dèi: storia di una religione millenaria",                  priceEur:25000, idc:387, lang:'Corsi Brevi', level:'Civiltà Romana' },
  { slug:'breve-japonia',          title:'Terra Japonia: un viaggio in latino nel Giappone del Cinquecento',       priceEur:2900,  idc:440, lang:'Corsi Brevi', level:'Autori Latini' },
  { slug:'breve-metrica',          title:'Il ritmo del verso: approccio neuroscientifico alla metrica classica',   priceEur:2900,  idc:441, lang:'Corsi Brevi', level:'Metodo' },
  { slug:'breve-voci-vangeli',     title:'Voci dei Vangeli: un viaggio dalle Radici alla Rivelazione',            priceEur:6000,  idc:337, lang:'Corsi Brevi', level:'Bibbia e Antichità' },
  { slug:'breve-storie-latine',    title:"Dall'Antico al Moderno: Storie in Lingua Latina",                        priceEur:6000,  idc:338, lang:'Corsi Brevi', level:'Autori Latini' },
  { slug:'breve-buona-novella',    title:'La Buona Novella tra greco e latino',                                    priceEur:7000,  idc:276, lang:'Corsi Brevi', level:'Bibbia e Antichità' },
  { slug:'breve-padri-chiesa',     title:'Il Vangelo attraverso i Padri della Chiesa',                            priceEur:7000,  idc:286, lang:'Corsi Brevi', level:'Bibbia e Antichità' },
  { slug:'breve-etruschi',         title:'Tracce Etrusche: origini, espansioni, eredità di una civiltà',           priceEur:9000,  idc:339, lang:'Corsi Brevi', level:'Archeologia' },
  { slug:'breve-nubia-egitto',     title:'Tra due Mondi: Nubia ed Egitto sulla linea di confine',                  priceEur:9000,  idc:340, lang:'Corsi Brevi', level:'Archeologia' },
  { slug:'breve-archeologia',      title:"Testimonianze del Tempo: un viaggio nell'Archeologia Applicata",         priceEur:9000,  idc:341, lang:'Corsi Brevi', level:'Archeologia' },
  { slug:'breve-passione',         title:'Prospettive di Passione: gli ultimi giorni di Gesù nei Vangeli',        priceEur:9000,  idc:349, lang:'Corsi Brevi', level:'Bibbia e Antichità' },
  { slug:'breve-pompei',           title:'Voci silenziose di Pompei: scoperte epigrafiche nella città sepolta',    priceEur:9000,  idc:350, lang:'Corsi Brevi', level:'Archeologia' },
  { slug:'breve-miniera-luna',     title:'Dalla Miniera alla Luna: Pirandello e Verga tra esistenza e letteratura',priceEur:9000,  idc:361, lang:'Corsi Brevi', level:'Filosofia Antica' },
  { slug:'breve-algoritmica',      title:"L'Algoritmica dell'Essere: filosofia nell'Intelligenza Artificiale",    priceEur:9000,  idc:362, lang:'Corsi Brevi', level:'Filosofia Antica' },
  { slug:'breve-voci-femminili',   title:'Dal Margine al Centro: Voci Femminili nei Vangeli',                      priceEur:9000,  idc:369, lang:'Corsi Brevi', level:'Bibbia e Antichità' },
  { slug:'breve-nilo',             title:"Aldilà e Al-di-qua del Nilo: l'Antico Egitto tra vita e morte",          priceEur:10000, idc:403, lang:'Corsi Brevi', level:'Archeologia' },
  { slug:'breve-etruschi-vita',    title:'Etruschi: vita, guerra, spirito di una civiltà antica',                  priceEur:10000, idc:404, lang:'Corsi Brevi', level:'Archeologia' },
  { slug:'breve-terre-bibbia',     title:'Le Terre della Bibbia: viaggio fra storia e sacro',                      priceEur:10000, idc:405, lang:'Corsi Brevi', level:'Bibbia e Antichità' },
  { slug:'breve-maturita-greco',   title:'Ponte alla Maturità Classica: tradurre il Greco Antico',                 priceEur:14000, idc:363, lang:'Corsi Brevi', level:'Esercitazioni' },
  { slug:'breve-egiziano-appro',   title:'Approfondimenti di Egiziano Geroglifico: preparazione alla letteratura', priceEur:15000, idc:352, lang:'Corsi Brevi', level:'Egiziano Geroglifico' },
  { slug:'breve-ars-scribendi',    title:"Ars latine scribendi: l'arte di scrivere in latino",                     priceEur:45000, idc:419, lang:'Corsi Brevi', level:'Scrittura Latina' },
]

// Lookup veloce per slug (O(1))
const CATALOG_MAP = new Map<string, CorsoCatalogEntry>(
  CATALOG.map(c => [c.slug, c])
)

export function getCorsoByCatalogSlug(slug: string): CorsoCatalogEntry | undefined {
  return CATALOG_MAP.get(slug)
}

export default CATALOG
