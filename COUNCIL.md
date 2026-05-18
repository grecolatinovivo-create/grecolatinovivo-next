# Council — Centro Nazionale di Studi Classici «GrecoLatinoVivo»
*Brainstorming del 18 maggio 2026*

---

## Trascrizione del dialogo

### ROUND 0 — Reazioni libere al brief

**[PM] Entusiasmo, preoccupazione, domanda**
Entusiasmo: La coerenza tra il patrimonio didattico reale (5.000+ studenti, accreditamento MIM, metodo Ørberg) e un'estetica istituzionale sobria è un'opportunità concreta — i dati esistono già, non si inventa nulla. Preoccupazione: Il passaggio da palette Netflix-bordeaux a blu/grigio/oro richiede un design system rigido. Senza token CSS definiti prima del dev, il rischio è un restyling parziale con incoerenze tra componenti. Domanda a UX: Con 4 percorsi distinti la navigazione principale deve essere chirurgica — come la strutturi?
→ Chiede a: UX

**[UX] Entusiasmo, preoccupazione, domanda**
Entusiasmo: Il passaggio da bordeaux/nero Netflix a blu scuro/oro istituzionale è esattamente il repositioning visivo necessario. Un design system ispirato a Oxford o alla Normale di Pisa dà credibilità immediata. Preoccupazione: Il tricolore funzionale — corsi live, asincroni, abbonamento esterno, eventi — rischia di diventare piatto senza gerarchia visiva chiara. Con quattro percorsi equipollenti la navigazione può risultare fredda e disorientante. Domanda a NM: Come creiamo tensione cognitiva positiva tra austerità istituzionale e motivazione emotiva allo studio?
→ Chiede a: NM

**[NM] Entusiasmo, preoccupazione, domanda**
Entusiasmo: Il pubblico colto si convince con la qualità implicita. Un sito che ricorda Oxford non ha bisogno di CTA aggressive: l'architettura visiva stessa diventa argomento di autorevolezza. Il nome "Accademia" per il piano top è perfetto — evoca appartenenza, non un acquisto. Preoccupazione: Il rischio non è il tono ma la friction invisibile. Un adulto colto abbandona se non capisce in 8 secondi cosa lo distingue dagli altri portali di classiche. Domanda a UX: La gerarchia delle 4 sezioni riflette come ragiona l'utente, o come è organizzato il prodotto?
→ Chiede a: UX

**[DEV] Entusiasmo, preoccupazione, domanda**
Entusiasmo: Il design system è già costruito su CSS custom properties centralizzate in `:root`. Cambiare tema bordeaux → blu richiede di toccare esattamente 3 variabili in globals.css. Zero rischio di regressioni sul backend. Preoccupazione: `--gold: #C9A84C` è pensato per accentuare il bordeaux caldo. Su un blu istituzionale, l'oro può stonare o violare WCAG AA. Domanda a UX/NM: quale tonalità di blu — navy accademico (#1B3A6B) o blu elettrico moderno (#1E4D9B)?
→ Chiede a: UX, NM

**[CLA] Entusiasmo, preoccupazione, domanda**
Entusiasmo: La presenza di Egiziano Antico, Ebraico Biblico e Sanscrito accanto a Latino e Greco segnala un posizionamento raro nel panorama italiano — un centro che tratta le lingue classiche come sistema vivente di tradizioni testuali interconnesse, non come monoliti scolastici. Preoccupazione: Il termine "comprensible input" (Krashen) è associato nell'immaginario comune all'apprendimento delle lingue moderne vive. Usato senza mediazione filologica, può far percepire il metodo come meno rigoroso. Serve terminologia calibrata. Domanda a UX: Come gerarchizzi visivamente la distinzione tra le cinque lingue senza appiattire il posizionamento accademico?
→ Chiede a: UX

**[AUD] Entusiasmo, preoccupazione, domanda**
Urgenza massima: globals.css riga 40 carica `fonts.googleapis.com` al primo byte, prima di qualsiasi interazione utente. Trasferisce l'IP del visitatore a Google senza base giuridica — violazione diretta del GDPR (LG München 2022, Az. 3 O 17493/20). Già fatto bene: il layout.tsx include skip-link corretto (`#main-content`). Domanda a DEV: il next.config.js ha CSP configurata? Possiamo usare `next/font` (self-hosting automatico, zero CDN esterno)?
→ Chiede a: DEV

**[QA] Entusiasmo, preoccupazione, domanda**
Preoccupazione: Il toggle mensile/annuale usa `dangerouslySetInnerHTML` con vanilla JS che manipola il DOM via `querySelectorAll('.price-monthly')`. Se durante il refactoring un componente rinomina queste classi, il toggle smette di funzionare silenziosamente — nessun errore TypeScript. Priorità: verificare che `postinstall: prisma generate` funzioni anche in Vercel con DATABASE_URL impostata. Domanda a DEV: `signToken` usa una chiave JWT da env o hardcoded?
→ Chiede a: DEV

---

### ROUND 1 — Tensioni e negoziazione

**[DEV] Risposta ad AUD — Google Fonts**
`next/font/google` risolve tutto: scarica i font a build time, li serve da `/public/_next/static/` senza mai chiamare Google a runtime. Zero CDN esterno, zero violazione GDPR. Si sostituisce il `@import` in globals.css con import via `next/font` in layout.tsx. La CSP nel next.config.js ha già `font-src: self` implicito, quindi nessuna modifica alle header di sicurezza.
→ Risponde a: AUD. Conclusione: passaggio a next/font OBBLIGATORIO, alta priorità.

**[UX] Risposta a NM e CLA — gerarchia 4 percorsi**
NM ha ragione: la gerarchia deve riflettere il mental model dell'utente, non la struttura del prodotto. Proposta: la navigazione principale espone UN solo entry point ("Offerta Formativa" con mega-menu), non quattro link paralleli. In homepage, la sezione orientamento usa una griglia 2+2 con peso visivo differenziato: corsi live e asincroni (acquisto diretto) a sinistra, portale e eventi (prodotti di punta) a destra. Sul colore: navy #1B3A6B vince — più vicino ad Oxford, meno tecnologico del blue elettrico.
→ Risponde a: NM, CLA, DEV.

**[CLA] Risposta a UX — terminologia e gerarchia lingue**
Accordo sulla gerarchia visiva: Latino e Greco come lingue fondanti (card più grandi), le altre tre come specializzazioni avanzate (card più compatte). Sulla terminologia: nel copy pubblico, evitare "comprensible input" e preferire "approccio contestuale-induttivo" o direttamente "Metodo Natura". L'aggancio a Ørberg è più riconoscibile nel mondo accademico italiano e non genera fraintendimenti.
→ Risponde a: UX.

**[NM] Risposta a UX — autorevolezza come persuasione**
L'austerità istituzionale non nega l'emozione: la incanalizza. Le leve da usare nel copy sono: legittimità storica (dal 2015, MIM), scarsità reale (15 studenti/classe — dato vero, non marketing), appartenenza accademica (studiare con "i migliori docenti italiani" è un'affermazione di status). I CTA devono essere sobri ma chiari: "Inizia il tuo percorso" è perfetto. Da evitare: countdown timer, prezzi barrati, badge OFFERTA LIMITATA.
→ Risponde a: UX. Condizione non negoziabile: zero dark pattern.

**[QA] Risposta a DEV — JWT e sicurezza**
Dal codice letto: `signToken` usa `getJwtSecret()` che legge `process.env.JWT_SECRET` — corretto, non hardcoded. Il cookie ha `httpOnly: true` e `secure: process.env.NODE_ENV === 'production'` — corretto. La mia preoccupazione principale resta il toggle pricing: deve diventare un componente React `'use client'` con useState, eliminando il dangerouslySetInnerHTML.
→ Risponde a: DEV.

---

### ROUND 2 — Convergenza

| Agente | Condizioni NON negoziabili | Punti di flessibilità |
|--------|---------------------------|----------------------|
| PM | ZERO dati inventati; design token definiti PRIMA di scrivere codice | Struttura cartelle negoziabile |
| UX | Navy #1B3A6B come --primary; hero con sfondo istituzionale (non nero) | Accettabile footer scuro (pratica standard) |
| NM | Zero dark pattern, zero countdown; CTA sobrie | Copy commerciale accettabile se onesto e preciso |
| DEV | next/font obbligatorio (GDPR); CSS custom properties mantenute | Struttura HTML componenti negoziabile |
| CLA | Terminologia: "Metodo Natura" o "approccio contestuale-induttivo", mai "comprehensible input" crudo | Posizione nel menu delle 5 lingue flessibile |
| AUD | Google Fonts CDN rimosso; gold mai come testo su sfondo chiaro | Cookie banner accettabile in fase 2 (fuori scope MVP) |
| QA | Pricing toggle → React client component con useState; nessun dangerouslySetInnerHTML per logica funzionale | Scroll-reveal via IntersectionObserver (vanilla) accettabile |

---

## Decisioni condivise

1. **Colore primario: #1B3A6B (navy istituzionale)** — proposta da DEV/UX, accettata da tutti. Sostituisce bordeaux #8B1A1A.
2. **Google Fonts → next/font** — proposta da AUD, confermata da DEV. OBBLIGATORIO prima del deploy.
3. **Sfondo home e sezioni: bianco #FFFFFF + grigio istituzionale #F4F6F8** — proposta da UX. Hero può essere navy scuro (non nero Netflix), come da pratica Oxford.
4. **Hero color: #1B3A6B** come alternativa al nero, oppure bianco puro con grande titolatura serif — decisione finale a UX.
5. **Pricing toggle → `'use client'` React component** — proposta da QA, accettata da DEV. Elimina dangerouslySetInnerHTML.
6. **Terminologia: "Metodo Natura"** nel copy pubblico. Nessun "comprensible input" non mediato. — proposta da CLA, accettata da NM.
7. **Gold (#C9A84C) SOLO su sfondi scuri o come bordo decorativo** — mai come testo su sfondo chiaro (WCAG fail). — confermato da AUD/DEV.
8. **ZERO emoji** nel sito pubblico — confermato da PM/NM.
9. **Footer dark** mantenuto (pratica accademica standard) — accettato da UX con riserva estetica.
10. **`postinstall: prisma generate`** già aggiunto in package.json — confermato da QA/DEV.

## Punti di disaccordo residui

- **Hero background**: UX preferisce navy (#1B3A6B), alternativa è bianco puro. Rimandato a DEV con preferenza per navy (più caldo del nero, più istituzionale del bianco puro per l'homepage).
- **Footer colore base**: rimane #1A1A1A (quasi-nero) per coerenza con il dark footer, accettato come standard accademico. UX avrebbe preferito navy. Compromesso: aggiungere una riga di colore navy come accento nel footer.

---

## Mandato per la pipeline

- **PM**: Documentare struttura cartelle, dati reali estratti, roadmap e dipendenze. Nessuna invenzione.
- **UX**: Design system completo con valori esadecimali esatti. Wireframe delle 5 sezioni principali. Navy #1B3A6B come --primary. White backgrounds. Font: Playfair Display (titoli) + Inter (corpo).
- **CLA**: Specifiche didattiche per la comunicazione delle 5 lingue. Terminologia corretta. Posizionamento del Metodo Natura.
- **NM**: Gerarchia attenzione, microcopy CTA, leve di persuasione istituzionale. Zero dark pattern.
- **DEV**: next/font migration PRIMA di tutto. CSS vars update. Pricing toggle come React client. Pagine homepage + chi-siamo + header + footer.
- **QA**: Verificare coerenza colori in tutti i componenti. Testare toggle. Controllare WCAG contrasto.
- **AUD**: Verificare Google Fonts rimosso. Confermare gold non usato come testo su bianco. Segnalare issues aperte (cookie banner, etc.).
