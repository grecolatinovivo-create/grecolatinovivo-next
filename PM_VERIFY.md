# PM_VERIFY — Verifica 56 corsi asincroni
> Confronto sistematico tra MOCK_COURSES (portale-glv/public/js/app.js) e app/corsi/corsi-asincroni/page.tsx
> Data: 18 maggio 2026

---

## Risultato: APPROVATO con 1 correzione applicata

---

## Conteggio corsi

| Categoria | DB sorgente (app.js) | Pagina (page.tsx) | Stato |
|-----------|---------------------|-------------------|-------|
| Latino | 7 | 7 | ✅ |
| Greco Antico | 7 | 7 | ✅ |
| Egiziano Geroglifico | 3 | 3 | ✅ |
| Ebraico Biblico | 3 | 3 | ✅ |
| Formazione Docenti (Didattica) | 4 | 4 | ✅ |
| Corsi Brevi | 32 | 32 | ✅ |
| **TOTALE** | **56** | **56** | ✅ |

---

## Verifica ID (tutti i 56)

Tutti i 56 ID corrispondono esattamente al DB sorgente. Verifica effettuata campo per campo.

---

## Verifica titoli

Tutti i titoli corrispondono al DB. Differenza cosmetica accettabile:
- DB usa `•` (bullet U+2022) come separatore nel titolo
- Pagina usa `·` (middle dot U+00B7)

Non è un errore dati — è una scelta tipografica.

---

## Verifica prezzi

Tutti i 56 prezzi in centesimi corrispondono esattamente. Nessuna discrepanza.

---

## Verifica docenti

Tutti i docenti corrispondono. Nessun nome inventato. Docenti reali confermati:
- Giampiero Marchi (Latino, Greco A1-A2, Formazione, Corsi Brevi)
- Giulio Bianchi (Greco B1.1-B1.3, Algoritmica)
- Ilaria Cariddi (Egiziano Geroglifico, Egiziano Approfondimenti)
- Alberto Bibbiani (Ebraico Biblico, vari Corsi Brevi)
- Marta Giannico (Grammatica Latina, Terra Japonia, Pompei)
- Emanuele Viotti (Sacro Romano, Dèi e Uomini, Roma dei, Guerra di Religione)
- Roberto Melfi (Arte Greca, Archeologia Applicata)
- Rossano Fragale (Schiavitù Mondo Antico)
- Andrés Reyes Cabrera (Padri della Chiesa)
- Francesca Iannarilli (Nubia ed Egitto, Nilo)
- Mattia Scarpetta (Etruschi, Etruschi vita)
- Alessandra Chiusaroli (Miniera Luna)
- Maria Di Puorto (Storie Latine)
- Christian Costa (Ars latine scribendi)

---

## Correzioni applicate

### 1. breve-miniera-luna — level corretto
- **Valore nella pagina (errato):** `'Letteratura Italiana'`
- **Valore nel DB sorgente (corretto):** `'Filosofia Antica'`
- **Azione:** Corretto direttamente nel file page.tsx ✅

---

## Note non critiche (nessuna azione richiesta)

### lang Formazione Docenti
- DB: `lang:'Didattica'`
- Pagina: `lang:'Formazione Docenti'`
- La pagina usa questo valore sia nel dato che nel filtro `getCorsiByLang('Formazione Docenti')` — funzionalmente coerente. Label più descrittiva per l'utente.

### level Formazione Docenti (abbreviato)
- DB: `'Formazione – Modulo 1'`
- Pagina: `'Modulo 1'`
- Abbreviazione accettabile — il badge nel card ha spazio limitato.

### Ordine Corsi Brevi
- Il DB ordina i corsi brevi mescolando disponibili e in lavorazione
- La pagina mette i disponibili in cima, i non disponibili (in lavorazione) in fondo
- Scelta UX corretta: l'utente vede prima i corsi acquistabili

---

## Organizzazione per categoria

Struttura navigazione `#latino → #greco → #egiziano → #ebraico → #docenti → #brevi` ✅  
Anchor links presenti nel nav orizzontale ✅  
Header sezione con conteggio corsi e disponibili ✅

---

## Conclusione PM

La pagina corsi-asincroni è pronta per il passaggio ad agent-auditor.
Tutti i dati sono reali dal DB. Una discrepanza corretta. Zero dati inventati.
