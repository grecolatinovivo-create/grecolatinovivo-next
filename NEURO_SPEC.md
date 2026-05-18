# NEURO_SPEC.md
## Specifiche di Persuasione e Architettura Cognitiva per il Sito del Centro Nazionale di Studi Classici «GrecoLatinoVivo»

*Redatto da NM — Neuromarketer*
*Versione 1.0 — 18 maggio 2026*

---

## 1. Premessa metodologica

Il pubblico di riferimento del Centro è adulto, colto, con un rapporto già esistente con le discipline umanistiche. Non risponde a leve commerciali aggressive. Risponde invece a:

- **Autorevolezza istituzionale** percepita (anni, accreditamenti, numeri reali)
- **Segnali di qualità implicita** (design, registro linguistico, tipografia)
- **Senso di appartenenza** a una comunità accademica seria
- **Concretezza** dei risultati (72 ore, 15 studenti, dato verificabile)
- **Scarsità reale** (non artificiale) come garanzia di qualità

Ogni decisione persuasiva deve essere fondata su dati reali e comunicata con tono istituzionale. Il sito deve sembrare Oxford, non Udemy.

---

## 2. Gerarchia dell'attenzione nella homepage

### 2.1 Mappa temporale di lettura (eye-tracking atteso)

**0–300 ms — Pre-attentivo**
L'occhio registra: dimensione del titolo, colore dominante (navy #1B3A6B), presenza di un badge istituzionale. Il cervello categorizza istantaneamente: «questo è un sito autorevole» oppure «questo è un sito di e-learning generico». Il badge «Accreditato MIM · Membro Associato ALTE · Dal 2015» deve essere visibile senza scroll a qualsiasi viewport.

**300 ms – 2 s — Lettura headline**
L'headline è il testo con il rapporto sforzo/impatto più alto dell'intera pagina. Va letta e trattenuta. La formulazione attuale («Studia le lingue dell'antichità con i migliori docenti italiani») è corretta: specifica, credibile, non iperbole.

**2 s – 5 s — Valutazione trust**
L'occhio cerca prove di credibilità: i 4 stat (5.000+ studenti, 2015, 56 corsi, MIM). Questo blocco deve apparire nell'hero, non richiedere scroll. L'ordine cognitivo ottimale è: numeri prima, etichette dopo.

**5 s – 10 s — Orientamento percorso**
L'utente valuta se quello che offrite corrisponde a quello che cerca. La sezione «Da dove vuoi iniziare?» con le 4 card (Corsi in Diretta, Catalogo Asincrono, Tutoraggio 1:1, Eventi) deve rispondere a questa domanda prima di qualsiasi scroll aggiuntivo.

**10 s + — Decisione o abbandono**
Chi è arrivato fin qui ha superato la soglia critica. Ora valuta il prodotto specifico. Le sezioni successive (lingue, pricing, metodologia) devono approfondire senza ripetere.

### 2.2 Ordine delle sezioni nella homepage (raccomandazione confermata dal codebase)

1. Hero (headline + sottotitolo + badge + CTA primario + trust bar)
2. Orientamento percorso (4 card «Da dove vuoi iniziare?»)
3. Tre modalità di accesso (Corsi live / Asincroni / Portale abbonamento)
4. Le nostre lingue (2 card grandi + 3 card compatte)
5. Pricing abbonamento (con toggle mensile/annuale)
6. Il Metodo Natura (dati concreti + spiegazione)
7. FAQ
8. CTA finale

**Principio:** ogni sezione deve rispondere a una domanda implicita dell'utente, nell'ordine in cui quella domanda emerge naturalmente.

---

## 3. Leve cognitive appropriate per un pubblico adulto colto

### 3.1 Autorevolezza istituzionale

**Meccanismo:** gli adulti colti usano le istituzioni come scorciatoia cognitiva per valutare la qualità. «Accreditato MIM» equivale a «è stato valutato da un'autorità esterna». Non richiede spiegazione: il riconoscimento è automatico per il pubblico target.

**Applicazione:**
- Il badge nell'hero deve citare: MIM, ALTE, anno di fondazione (2015). Tre segnali, non uno solo.
- La formulazione corretta è «Accreditato MIM» (non «Riconosciuto dal Ministero» — troppo vago; non «Certificato» — termine tecnico diverso).
- Le sedi fisiche (Firenze, Milano, Torino, Parma, Pordenone) comunicano radicamento territoriale e presenza reale. Vanno citate nella pagina /sedi e nella FAQ, non nell'hero (troppo dettagliate per il primo impatto).
- L'anno 2015 ha doppio valore: anzianità (11 anni di attività nel 2026) e stabilità istituzionale. Va sempre citato accanto agli accreditamenti, mai da solo.

**Tono:** mai «orgogliosi di essere accreditati» — autoreferenziale. Il fatto parla da solo. Stile Oxford: «Accreditato MIM · Membro Associato ALTE · Dal 2015.»

### 3.2 Scarsità reale

**Meccanismo:** la scarsità artificiale (countdown, «ultimi 3 posti!») è vietata perché manipolativa e incompatibile con il posizionamento. La scarsità reale — 15 studenti massimo per classe — è un dato strutturale che comunica qualità, non urgenza.

**Applicazione:**
- «Massimo 15 studenti per classe» va citato nella card dei Corsi in Diretta, nella sezione Metodo Natura, nella pagina /corsi/corsi-live, e nella FAQ.
- La formulazione corretta è: «Classi di massimo 15 studenti per garantire il feedback diretto del docente.» — spiega il perché, non crea artificialmente ansia.
- Se un corso live è effettivamente esaurito, il sito può mostrare «Corso esaurito — lista d'attesa disponibile». Questo è un segnale di qualità, non un dark pattern.
- Non usare mai: «Affrettati», «Pochi posti rimasti» senza evidenza concreta, countdown timer.

### 3.3 Appartenenza accademica

**Meccanismo:** il pubblico colto cerca affiliazione con una comunità di pari. «Studiare con i migliori docenti italiani» è un'affermazione di status: chi studia qui non sceglie un corso online, sceglie un'appartenenza.

**Applicazione:**
- Il nome del piano abbonamento «Accademia» evoca un'istituzione, non un prodotto. Mantenere.
- Il badge del piano Linguae («Il preferito dai docenti MIM») usa la prova sociale specifica — non «popolare» o «più venduto», ma una categoria professionale riconoscibile dal pubblico target.
- La sezione «Il nostro team» (con i docenti nominati per nome e ruolo) deve essere popolata con dati reali e accessibile dalla homepage. I nomi dei docenti [DA INSERIRE — confermare con Giampiero Marchi] sono un segnale di trasparenza e qualità.
- Il linguaggio dei CTA deve usare «percorso», non «corso» o «abbonamento» quando possibile: «Inizia il tuo percorso» posiziona lo studio come un cammino, non un acquisto.

### 3.4 Concretezza dei risultati

**Meccanismo:** gli adulti colti sono refrattari alle promesse generiche. Rispondono a dati specifici, verificabili e comparabili.

**Applicazione:**

| Formulazione vaga (da evitare) | Formulazione concreta (da usare) |
|---|---|
| «Impara il latino in poco tempo» | «72 ore equivalenti al biennio liceale» |
| «Risultati garantiti» | «5.000+ studenti formati dal 2015» |
| «Il metodo migliore» | «Il Metodo Natura, ispirato all'approccio di Hans Henning Ørberg» |
| «Corsi di qualità» | «Corsi accreditati MIM, acquistabili con la Carta del Docente» |
| «Insegnanti esperti» | «Docenti universitari specializzati» (+ nomi reali dove disponibili) |
| «Impara a leggere i classici» | «Raggiungi la lettura autonoma dei testi entro il corso base» |

Il dato «72 ore = biennio liceale» è il più potente del sito: contestualizza il risultato in un riferimento che il pubblico conosce, comunicando efficienza senza promesse vuote.

---

## 4. Microcopy per i 4 CTA principali

### 4.1 Principi generali del microcopy istituzionale

- Verbo all'infinito o all'imperativo seconda persona plurale (mai «Clicca qui»)
- Nessuna urgenza artificiale, nessuna esclamazione
- Il CTA descrive l'azione, non la promessa
- Coerenza verticale: il testo del CTA corrisponde al titolo della pagina di destinazione

### 4.2 Corsi Live

**CTA primario (da hero o card orientamento):**
> «Vedi i corsi disponibili»

**CTA secondario (da sezione dettaglio):**
> «Scopri il calendario»

**Microcopy di supporto sotto il CTA:**
> «Classi di massimo 15 studenti · Registrazione inclusa · Attestato MIM»

**Tono:** il CTA deve comunicare che l'utente va a esplorare, non a impegnarsi. Riduce la friction psicologica.

### 4.3 Corsi Asincroni

**CTA primario:**
> «Sfoglia il catalogo»

**CTA secondario (da pagina corso specifico):**
> «Accedi al corso»

**Microcopy di supporto:**
> «Accesso a vita al materiale · Attestato digitale incluso»

**Nota:** «Sfoglia» è preferibile a «Scopri» perché implica autonomia e basso impegno — abbassa la barriera all'ingresso.

### 4.4 Portale Abbonamento

**CTA primario (da homepage sezione abbonamento):**
> «Scopri i piani»

**CTA primario (da piano Cultura):**
> «Inizia con Cultura»

**CTA primario (da piano Linguae — featured):**
> «Scegli Linguae»

**CTA primario (da piano Accademia):**
> «Accedi all'Accademia»

**Microcopy di supporto (sotto tutti i piani):**
> «Disdici quando vuoi. Nessun vincolo.»

**Nota:** il microcopy «Disdici quando vuoi. Nessun vincolo.» è già presente nel codice e va mantenuto. È la friction reduction più efficace per chi teme il lock-in — formulazione breve, diretta, senza enfasi.

### 4.5 Eventi e Convegni

**CTA primario:**
> «Vedi gli eventi»

**CTA da card singolo evento:**
> «Iscriviti all'evento»

**CTA da card Biduum Latinitatis:**
> «Partecipa al Biduum»

**Microcopy di supporto (per eventi gratuiti):**
> «Ingresso libero · Prenotazione consigliata»

**Microcopy di supporto (per eventi a pagamento):**
> «[DA INSERIRE prezzo] · Attestato di partecipazione incluso»

---

## 5. Testo dell'hero: specifiche complete

### 5.1 Badge accreditamento

**Testo:**
> Accreditato MIM · Membro Associato ALTE · Dal 2015

**Specifiche visive** (già implementate nel codebase `page.tsx`):
- Sfondo: `rgba(201,168,76,0.12)` — oro trasparente su fondo scuro
- Bordo: `1px solid rgba(201,168,76,0.3)`
- Testo: `#C9A84C` su sfondo scuro — WCAG conforme
- Font: Inter, 0.75rem, uppercase, letterspacing 0.12em
- Forma: pill (border-radius 20px)

**Posizione:** prima dell'headline, centrato.

**Nota:** il badge NON deve essere un link. È un segnale di credibilità, non un punto di navigazione.

### 5.2 Headline principale

**Testo attuale (da mantenere):**
> «Studia le lingue dell'antichità con i migliori docenti italiani»

**Analisi cognitiva:**
- «Studia» — imperativo diretto, non promessa generica
- «le lingue dell'antichità» — categorizza l'offerta senza elencare
- «con i migliori docenti italiani» — appartenenza accademica, affermazione di status

**Alternativa se si vuole menzionare il metodo:**
> «Studia il Latino e il Greco come lingue vive, con il Metodo Natura»

**Alternativa più istituzionale:**
> «Centro Nazionale di Studi Classici. Dal 2015, 5.000+ studenti.»
*(Meno efficace come headline: è un'intestazione, non un invito)*

**Raccomandazione:** mantenere la formulazione attuale. È la più equilibrata tra specificità e ampiezza.

### 5.3 Sottotitolo

**Testo attuale (da mantenere):**
> «Latino, Greco Antico, Egiziano, Ebraico e Sanscrito. Corsi live, asincroni e tutoraggio 1:1. Il metodo Natura applicato alle lingue classiche.»

**Analisi cognitiva:**
- Prima frase: elenco delle lingue — risponde immediatamente a «cosa offrite?»
- Seconda frase: modalità di accesso — risponde a «come posso accedervi?»
- Terza frase: metodo — risponde a «perché siete diversi?»

**Struttura in tre frasi brevi:** preferibile al periodo lungo. Su mobile, ogni frase può andare a capo.

### 5.4 Struttura completa dell'hero (sequenza visiva dall'alto)

```
[badge: Accreditato MIM · Membro Associato ALTE · Dal 2015]

[headline: Studia le lingue dell'antichità
con i migliori docenti italiani]

[sottotitolo: Latino, Greco Antico, Egiziano, Ebraico e Sanscrito.
Corsi live, asincroni e tutoraggio 1:1.
Il metodo Natura applicato alle lingue classiche.]

[CTA primario: Inizia il tuo percorso]  [CTA secondario: Sfoglia il catalogo]

[trust bar: 5.000+ studenti | 2015 | 56 corsi | MIM]
```

---

## 6. Come presentare i 3 piani abbonamento senza sembrare un SaaS

### 6.1 Il problema cognitivo

I piani abbonamento con toggle mensile/annuale, badge «più popolare», e CTA a colori diversi sono schemi visivi nati nel mondo SaaS (Spotify, Netflix, Notion). Applicati a un centro di studi classici, generano dissonanza cognitiva: il pubblico percepisce incoerenza tra il posizionamento istituzionale e la logica e-commerce.

### 6.2 Principi di presentazione istituzionale

**Nomina i piani con parole, non con livelli:**
I nomi «Cultura», «Linguae», «Accademia» (già implementati) sono corretti perché evocano appartenenza culturale, non tier di prodotto. Non usare «Base», «Pro», «Premium» — sono termini SaaS.

**Descrivi il piano con il beneficio principale, non con la lista di feature:**
- «Cultura» — «Per iniziare il percorso» (già corretto nel codice)
- «Linguae» — «Per gli studiosi seri» (già corretto nel codice)
- «Accademia» — «Per la formazione avanzata» (già corretto nel codice)

**Il badge del piano featured deve usare prova sociale specifica:**
Il badge attuale «Il preferito dai docenti MIM» (piano Linguae) è corretto perché:
1. Non dice «Il più venduto» (metrica commerciale anonima)
2. Identifica una categoria professionale riconoscibile dal target
3. È verificabile (i docenti acquistano con Carta del Docente)

Non usare: «Più popolare», «Consigliato», «Best value» — sono etichette SaaS generiche.

**Il prezzo va contestualizzato:**
€12,90/mese (piano Linguae) deve essere accompagnato da un riferimento concreto. Esempi:
- «Meno del prezzo di un manuale universitario al mese»
- «[DA INSERIRE — calcolo equivalenza reale da confermare]»

**Il toggle mensile/annuale deve mostrare il risparmio in euro, non in percentuale:**
- Corretto: «Annuale — risparmia fino a 60€» (già nel codice per il toggle)
- Scorretto: «Annuale — risparmia il 40%» — la percentuale è una leva SaaS

**Non mostrare il prezzo barrato:**
Mostrare il prezzo mensile accanto al prezzo annuale come «valore originale barrato» è un dark pattern. Mostrare i due prezzi alternativamente tramite toggle è corretto.

### 6.3 Struttura testuale raccomandata per le card piano

```
[PIANO]
[Nome piano in Playfair Display]
[Sottotitolo descrittivo]

[Prezzo: €XX,XX/mese]

— Feature 1
— Feature 2
— Feature 3
— Feature 4

[CTA: "Inizia con [Nome]" oppure "Scegli [Nome]" oppure "Accedi all'[Nome]"]
[microcopy: Disdici quando vuoi. Nessun vincolo.]
```

L'etichetta «PIANO» sopra il nome (già implementata in rosso MIM nel codice) è un'ancora visiva corretta: categorizza senza gerarchizzare.

---

## 7. Regole di friction reduction

### 7.1 Cosa riduce la friction cognitiva per questo pubblico

**Chiarezza del percorso:**
Il pubblico adulto colto ha poco tempo e bassa tolleranza all'ambiguità. Se non capisce in 8 secondi cosa fa il Centro e come accedervi, abbandona. La sezione «Da dove vuoi iniziare?» con le 4 card è la soluzione corretta.

**Trasparenza sui prezzi:**
I prezzi devono essere visibili senza dover entrare nel processo di acquisto. La homepage deve mostrare i prezzi dei piani abbonamento (già presente nel codice) e rimandare alle pagine corso per i prezzi singoli.

**Primo contatto a basso impegno:**
Il «primo colloquio di orientamento gratuito» per il tutoraggio 1:1 è il meccanismo di ingresso a minor friction. Va evidenziato nella card del tutoraggio e nella FAQ.

**FAQ visibile in homepage:**
Le obiezioni prevedibili (devo avere conoscenze pregresse? il Bonus Docenti è applicabile? posso disdire?) vanno anticipate in homepage. La sezione FAQ già presente nel codice assolve questa funzione. Mantenere le 6 domande esistenti, che coprono i principali punti di attrito.

### 7.2 Dark pattern vietati (lista definitiva)

Questi elementi sono stati esplicitamente vietati nel COUNCIL.md e non devono mai apparire nel sito:

| Dark pattern | Descrizione | Perché è vietato |
|---|---|---|
| Countdown timer | Timer che conta alla scadenza di un'offerta | Crea urgenza artificiale; non autentica per il posizionamento istituzionale |
| Prezzi barrati | Mostrare un «prezzo originale» tagliato accanto al prezzo attuale | Dark pattern di ancoraggio falso; le offerte non esistono nel modello del Centro |
| Badge «OFFERTA LIMITATA» | Etichette che simulano scarsità non reale | Incompatibile con il posizionamento; può essere contestato legalmente se falso |
| Confirm-shaming | CTA negativo come «No, preferisco non studiare» | Manipolativo; danneggia la percezione del brand |
| Hidden costs | Prezzi che cambiano nel carrello | Viola il GDPR e il Codice del Consumo; non applicabile ma va prevenuto |
| Opt-out preselezionato | Checkbox newsletter già spuntate | Viola il GDPR per il consenso esplicito |
| Infinity scroll | Scroll infinito senza fine pagina | Non applicabile all'architettura attuale, ma va evitato in future sezioni blog/eventi |
| Social proof falsa | «127 persone stanno guardando questo corso» | Dato non verificabile; distrugge credibilità presso pubblico colto |

### 7.3 Cosa NON fare nel microcopy

- Non usare punti esclamativi nel copy istituzionale
- Non usare la seconda persona singolare informale («tu») nell'hero e nei titoli di sezione — riservarla alla FAQ e alle email transazionali
- Non usare «gratis» — preferire «gratuito» o «senza costi»
- Non usare «incroyable», «esclusivo», «irripetibile» — aggettivi da catalogo
- Non usare «ti aspettiamo» — familiare in eccesso per il posizionamento
- Non usare «non aspettare» — urgenza artificiale

---

## 8. Gerarchia visiva del pricing: ordine di presentazione dei piani

**Ordine raccomandato (da sinistra a destra):**

1. **Cultura** (€5,90/mese) — presentato per primo perché il prezzo basso funge da ancora cognitiva. L'utente elabora «questo è accessibile» prima di valutare gli altri piani.
2. **Linguae** (€12,90/mese) — il piano featured, posizionato al centro. Visivamente più elevato (bordo, ombra). Badge «Il preferito dai docenti MIM».
3. **Accademia** (€19,90/mese) — presentato per ultimo perché l'âncora del piano Cultura rende il prezzo più alto percepito come proporzionato.

**Meccanismo cognitivo:** questo ordine (basso → featured → alto) riduce la percezione del prezzo del piano Accademia rispetto a una presentazione inversa (alto → featured → basso).

**Nota:** questo è un ordine di presentazione psicologicamente ottimale, non un dark pattern. I prezzi sono reali, le feature sono reali, nessuna leva è artificiosa.

---

## 9. Microcopy di sistema (messaggi di errore, conferme, transazioni)

Questi testi non sono ancora nel codebase ma vanno definiti prima dell'implementazione del flusso di acquisto.

**Conferma iscrizione corso live:**
> «Iscrizione confermata. Riceverai il link Zoom e il calendario delle lezioni all'indirizzo [email]. Per qualsiasi necessità: [DA INSERIRE email assistenza].»

**Conferma attivazione abbonamento:**
> «Il tuo abbonamento [Nome piano] è attivo. Accedi al portale con le stesse credenziali.»

**Corso live esaurito:**
> «Questo corso è al completo. Puoi iscriverti alla lista d'attesa: ti contatteremo se si libera un posto.»
*(Non usare: «Purtroppo il corso è esaurito» — «purtroppo» è ridondante e infantilizzante)*

**Errore di pagamento:**
> «Il pagamento non è andato a buon fine. Verifica i dati della carta o contatta la tua banca. Se il problema persiste, scrivi a [DA INSERIRE email assistenza].»

**Cancellazione abbonamento:**
> «Il tuo abbonamento è stato disdetto. Continuerai ad avere accesso al portale fino al [data fine periodo]. Non è richiesta alcuna azione aggiuntiva.»

---

## 10. Note di implementazione per il developer

Le seguenti specifiche hanno impatto diretto sul codice e devono essere trasmesse al developer:

1. **Il badge nell'hero** deve essere il primo elemento visivo — posizione `before` l'headline, non dopo.
2. **La trust bar** (4 stat) deve essere visibile nell'hero senza scroll su viewport desktop (min 1024px). Su mobile può richiedere uno scroll minimo, ma deve comparire entro il primo schermo.
3. **Il CTA «Inizia il tuo percorso»** deve essere coerente in tutta la homepage (hero, final CTA). Non cambiare formulazione tra sezioni. Coerenza = riduzione cognitive load.
4. **Il piano Linguae** deve essere visivamente differenziato (già implementato con bordo e ombra). Il badge «Il preferito dai docenti MIM» deve essere posizionato in `absolute` sopra la card, centrato, non come elemento inline del testo.
5. **Il microcopy «Disdici quando vuoi. Nessun vincolo.»** deve apparire sotto il CTA di ogni piano abbonamento, non solo sotto il piano featured.
6. **Il toggle mensile/annuale** deve diventare un React client component con useState — eliminare il `dangerouslySetInnerHTML` attuale (già indicato in COUNCIL.md e QA_REPORT).
7. **Il colore #8B1A1A (bordeaux)** nei componenti esistenti deve essere aggiornato a #1B3A6B (navy) nelle etichette «PIANO» e negli accenti testuali — in accordo con la decisione del Council sul colore primario. Il bordeaux rimane accettabile solo nella final CTA section e nei componenti che non sono stati ancora migrati.

