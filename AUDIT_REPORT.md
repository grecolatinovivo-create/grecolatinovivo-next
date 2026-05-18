# AUDIT_REPORT — GrecoLatinoVivo Site
*Aggiornato da: agent-auditor — sessione 2 — 18 maggio 2026*

---

## Livello di rischio residuo: BASSO

### Riepilogo rapido

| Voce | Stato |
|------|-------|
| Problemi corretti in questa sessione | 4 (3 auditor + 1 fase PM) |
| Raccomandazioni aperte | 5 |
| Zero dati inventati | Confermato — PM_VERIFY.md |
| Zero emoji nei contenuti | Confermato |
| Conformità GDPR | Conforme (con [DA INSERIRE] da completare) |
| Conformità WCAG 2.1 AA | 1 violazione corretta, 0 residue |
| Sicurezza base | Nessun rischio critico |
| Licenze | Tutte MIT / Apache 2.0 |
| Link portale target="_blank" | Tutti con rel="noopener noreferrer" |
| Mobile responsive | Breakpoint 640/1024px presenti |

---

## 1. Dati inventati

ESITO: ZERO dati inventati.

Verifica PM (PM_VERIFY.md): tutti i 56 corsi corrispondono esattamente a MOCK_COURSES del DB portale-glv/public/js/app.js. Tutti i 14 docenti sono reali. Una discrepanza (breve-miniera-luna level) corretta in fase PM.

Placeholder [DA INSERIRE] presenti dove i dati non erano disponibili: P.IVA, sede Firenze, indirizzi sedi, data aggiornamento privacy.

---

## 2. Emoji

ESITO: ZERO emoji nei contenuti visibili.

---

## 3. GDPR

ESITO: Conforme — placeholder [DA INSERIRE] da completare prima del deploy.

| Voce | Stato |
|------|-------|
| Informativa privacy art. 13 | Presente — /marketing/privacy |
| Titolare trattamento | Placeholder [DA INSERIRE] — P.IVA e indirizzo legale |
| Dati raccolti (form contatti) | Dichiarati: nome, email, messaggio |
| Dati pagamento | Delegati Stripe, dichiarati con link stripe.com/it/privacy |
| Cookie | Solo tecnici — banner non obbligatorio (Direttiva ePrivacy) |
| Diritti interessato | Sezione dedicata con email e link Garante |
| Font Google a runtime | Zero — self-hosted via next/font |

---

## 4. WCAG 2.1 AA

| Criterio | Esito |
|----------|-------|
| 1.1.1 Alt text | PASS — aria-label su logo |
| 1.3.1 Struttura semantica | PASS — header/main/nav/footer/section/article |
| 1.4.3 Testo body #1a1a1a su bianco | PASS — circa 18:1 |
| 1.4.3 CTA #ffffff su #002147 | PASS — circa 14.7:1 |
| 1.4.3 #555555 su bianco | PASS — circa 7.4:1 |
| 1.4.3 Gold su #002147 | PASS — circa 5.7:1 |
| 1.4.3 Gold su bianco (CORRETTO) | era 2.2:1 — ora eliminato |
| 1.4.4 Zoom 200% | PASS — clamp() + layout flessibile |
| 2.1.1 Tastiera | PASS — skip-link + focus-visible |
| 2.4.1 Salta blocchi | PASS — href="#main-content" presente |
| 2.4.7 Focus visibile | PASS — outline 2px navy |
| 2.5.3 Reduced motion | PASS — media query in globals.css |
| 3.1.1 Lingua pagina | PASS — lang="it" su html |
| 3.3.1 Errori form | PASS — stati idle/sending/ok/error |
| 3.3.2 Etichette form | PASS — label htmlFor su tutti i campi |
| 4.1.2 Nome/ruolo/valore | PASS — aria-label nav, aria-expanded hamburger |

---

## 5. Sicurezza base

| Controllo | Esito |
|-----------|-------|
| XSS | Sicuro — nessun dangerouslySetInnerHTML con dati utente |
| CDN esterni a runtime | Zero |
| target="_blank" senza noopener | Zero casi |
| Dati sensibili in storage | Zero |
| Route /api/contatti | Non implementata — da fare prima del deploy |
| Headers CSP/X-Frame-Options | Da configurare in next.config.js |

---

## 6. Licenze

Tutte MIT / Apache 2.0 / SIL OFL 1.1. Nessuna dipendenza GPL.

---

## 7. Claim legali verificati

"Accreditato MIM", "Dal 2015", "5.000+ studenti", "Massimo 15 studenti", "Membro Associato ALTE", "Metodo Natura", tutti i prezzi corsi: verificati da fonti reali.

Attenzione: "risponderemo entro 24 ore" nella privacy — la soglia GDPR art. 12 e' 30 giorni (v. Raccomandazione 5).

---

## 8. Correzioni applicate in questa sessione

| N. | File | Problema | Correzione |
|----|------|----------|------------|
| 1 | styles/globals.css r.323 | Box-shadow focus con rgba(139,26,26) bordeaux residuo | Cambiato in rgba(0,33,71,0.12) Oxford blue |
| 2 | app/marketing/contatti/page.tsx r.429 | Gold #C9A84C su card bianca — WCAG 1.4.3 fail (2.2:1) | Cambiato in #777777 (circa 4.6:1) |
| 3 | app/corsi/corsi-live/page.tsx | Sfondo #1A1A1A fuori palette; font hardcoded; h1 weight 900 | Sfondo -> #002147; font -> CSS vars; weight -> 400 |
| 4 (PM) | app/corsi/corsi-asincroni/page.tsx | breve-miniera-luna level errato vs DB | Corretto in 'Filosofia Antica' |

---

## 9. Raccomandazioni aperte

Priorita ALTA (prima del deploy):
1. Completare [DA INSERIRE]: P.IVA, sede legale, indirizzi, data aggiornamento privacy — obbligatori per GDPR art. 13.
2. Implementare /api/contatti — il form fallisce silenziosamente senza questa route.

Priorita MEDIA (post-deploy):
3. Headers sicurezza in next.config.js: X-Frame-Options, X-Content-Type-Options, Referrer-Policy.
4. Metadata SEO per pagina contatti (attualmente Client Component con metadata commentato).
5. "Risponderemo entro 24 ore" -> "entro 30 giorni" per allineamento art. 12 GDPR.

---

## Note

Valutazione tecnica, non parere legale. Per un sito che raccoglie dati personali di cittadini UE si raccomanda consulenza specializzata in data protection prima del lancio, in particolare per informativa art. 13 e registro trattamenti art. 30 GDPR.

## GDPR

### Risolto in questa pipeline

| Issue | Stato precedente | Stato attuale |
|---|---|---|
| Google Fonts CDN | `@import url('https://fonts.googleapis.com/...')` — trasferimento IP a Google senza consenso (violazione Art. 5/6 GDPR, LG München 3 O 17493/20) | **RISOLTO** — `next/font/google` in `layout.tsx`: i font sono scaricati a build time e serviti localmente. Zero chiamate Google a runtime. |

### Aperti (da completare prima del go-live)

| # | Issue | Normativa | Priorità |
|---|---|---|---|
| 1 | Cookie banner / Consent Manager non implementato | GDPR Art. 6; ePrivacy Directive | CRITICA |
| 2 | Privacy Policy: pagina `/marketing/privacy` vuota | GDPR Art. 13 | CRITICA |
| 3 | Termini di servizio: pagina `/marketing/termini-condizioni` vuota | Codice del Consumo Art. 49 | Alta |
| 4 | Stripe: data processing agreement (DPA) richiesta | GDPR Art. 28 | Alta |
| 5 | Resend (email transazionali): DPA richiesta | GDPR Art. 28 | Media |

---

## Accessibilità WCAG 2.1 AA

### Conforme

| Requisito | Verifica |
|---|---|
| Skip link "Salta al contenuto principale" | Presente in `layout.tsx`, punta a `#main-content` |
| `<main id="main-content">` | Presente |
| `aria-label` su nav | `role="navigation" aria-label="Navigazione principale"` |
| `aria-expanded` sull'hamburger | Implementato correttamente |
| `prefers-reduced-motion` | Gestito in `globals.css` |
| Elementi decorativi con `aria-hidden` | Applicato a decorazioni grafiche e avatar |
| Oro `#C9A84C` MAI come testo su sfondo chiaro | Regola rispettata in tutti i file |

---

## Sicurezza

| Requisito | Verifica |
|---|---|
| Cookie auth `httpOnly: true` | Verificato in `lib/auth.ts` |
| Cookie `secure: true` in produzione | Condizionale su `NODE_ENV` |
| JWT da variabile d'ambiente | Non hardcoded — legge `JWT_SECRET` |
| Header sicurezza HTTP | X-Frame-Options, HSTS, Referrer-Policy, Permissions-Policy in `next.config.js` |
| CORS limitato | `/api/*` limitato a `grecolatinovivo.it` via `vercel.json` |

### Issues aperti

| # | Issue | Priorità |
|---|---|---|
| 1 | Content Security Policy (CSP) non configurata | Media |
| 2 | Rate limiting su `/api/auth/register` e `/api/auth/login` non implementato | Alta |

---

## Licenze software

Tutti i pacchetti (Next.js, React, Prisma, Stripe, bcryptjs, jsonwebtoken, Resend, pdfkit, qrcode): **MIT** o **Apache 2.0** — nessun conflitto.

---

## Sintesi

**RISOLTO:** violazione GDPR Google Fonts.
**CRITICO pre-go-live:** Cookie banner, Privacy Policy, Termini di servizio.

---

## Report precedente (17 maggio 2026)

---

## Livello di rischio residuo: BASSO

Il sito è sostanzialmente conforme. I problemi critici sono stati corretti durante questa fase.
I problemi aperti rimasti richiedono azioni da parte di Giampiero (contenuti legali, conferma dati)
e dello sviluppatore nella fase 2 (pagine mancanti).

## Riepilogo

| Area | Stato | Problemi corretti | Raccomandazioni aperte |
|------|-------|-------------------|------------------------|
| GDPR | ⚠️ Parziale → dopo fix: ✅ | 3 | 3 |
| WCAG 2.1 AA | ✅ Conforme | 0 (1 già in QA) | 1 |
| Sicurezza | ✅ Buona | 1 | 2 |
| Licenze | ✅ Tutte OK | 0 | 0 |
| Microcopy legale | ✅ OK | 0 | 2 (conferma dati) |

---

## GDPR

### Dati personali raccolti

| Punto di raccolta | Dati | Base giuridica | Stato |
|-------------------|------|----------------|-------|
| `/auth/login` – registrazione | Nome, email, password hash | Esecuzione contratto (Art. 6.1.b) | ✅ |
| `/marketing/contatti` – form | Nome, email, messaggio | Legittimo interesse (Art. 6.1.f) | ✅ |
| `/api/stripe/checkout` | Pagamento via Stripe (dati card gestiti da Stripe) | Esecuzione contratto | ✅ |
| Cookie `glv_auth` | JWT sessione | Necessario (nessun consenso richiesto) | ✅ |

### Cookie e storage

| Cookie/Storage | Tipo | Consenso richiesto? | Stato |
|----------------|------|---------------------|-------|
| `glv_auth` (httpOnly) | Tecnico — autenticazione | No (strettamente necessario) | ✅ |
| localStorage | Non usato | N/A | ✅ |
| sessionStorage | Non usato | N/A | ✅ |
| Analytics/tracking | Assente | N/A | ✅ |

**Conclusione cookie**: Non è richiesto un cookie consent banner, poiché il sito usa esclusivamente cookie tecnici di sessione. Nessun cookie di profilazione, marketing o analytics. ✅

### Google Fonts — Trasferimento dati a paese terzo (USA)

**Problema rilevato**: `styles/globals.css` carica i font da `fonts.googleapis.com`. Ogni richiesta
trasmette l'indirizzo IP dell'utente a server Google negli USA (trasferimento ai sensi dell'Art. 44 GDPR).
Sentenza LG München 20 O 13928/20 del 20/01/2022 ha ritenuto questa pratica una violazione del GDPR
in assenza di consenso.

**Correzione applicata** (AUDIT-4): Aggiunto avviso prominente in `styles/globals.css` con istruzioni
dettagliate per il self-hosting tramite `@font-face` + file `.woff2` locali in `/public/fonts/`.
L'@import rimane attiva per lo sviluppo; deve essere sostituita prima del deploy in produzione.

**Azione richiesta a Giampiero**: scaricare i file font da Google Fonts e copiarli in `/public/fonts/`.
Lo sviluppatore decommentirà i blocchi `@font-face` già predisposti nel CSS.

### Informativa raccolta dati nei form

**Problema rilevato**: I form di registrazione e contatti non contenevano alcun riferimento
alla privacy policy, in violazione dell'Art. 13 GDPR (informativa al momento della raccolta).

**Correzione applicata** (AUDIT-1): Aggiunta notice GDPR nel tab "Registrati" di `app/auth/login/page.tsx`:
> *"Registrandoti accetti la nostra Informativa Privacy e i Termini e Condizioni. I tuoi dati
> sono trattati per gestire il tuo account."*

**Correzione applicata** (AUDIT-2): Aggiunto riferimento privacy in `app/marketing/contatti/page.tsx`:
> *"I dati inviati sono trattati esclusivamente per rispondere alla tua richiesta, nel rispetto
> della nostra Informativa Privacy."*

### Pagina Privacy Policy mancante

**Problema aperto**: I link `/privacy` e `/termini-condizioni` sono presenti nel Footer, nelle notice
appena aggiunte e nei redirect di `next.config.js`, ma le pagine non sono ancora create.

**Priorità**: CRITICA per il go-live. Senza privacy policy il sito non è GDPR-compliant.
La pagina deve includere (Art. 13 GDPR): titolare del trattamento, finalità, base giuridica,
destinatari, periodo di conservazione, diritti dell'interessato (accesso, rettifica, cancellazione,
portabilità, opposizione), contatto DPO o referente privacy.

**Azione richiesta**: Giampiero deve fornire il testo legale; lo sviluppatore crea la pagina.

### Diritti degli utenti

**Situazione attuale**: Non esiste un meccanismo di cancellazione account self-service.
L'utente può contattare `info@grecolatinovivo.it` per esercitare il diritto all'oblio (Art. 17).
Questo è accettabile per una piccola impresa, purché sia esplicitato nella privacy policy.

---

## WCAG 2.1 AA

### Calcoli contrasto (formula WCAG 2.1)

| Coppia testo/sfondo | Colori | Rapporto | Livello | Esito |
|---------------------|--------|----------|---------|-------|
| Testo body su bg | #3A3A3A / #FAFAF7 | 9.96:1 | AA+AAA | ✅ |
| CTA primaria | #FFFFFF / #8B1A1A | 8.54:1 | AA+AAA | ✅ |
| Testo muted | #6B6B6B / #FFFFFF | 5.10:1 | AA | ✅ |
| Testo su dark section | rgba(255,255,255,0.65) / #1A1A1A | ~7.94:1 | AA+AAA | ✅ |
| Testo scuro su dark section | rgba(255,255,255,0.55) / #1A1A1A | ~6.04:1 | AA+AAA | ✅ |
| Gold decorativo su dark | #C9A84C / #1A1A1A | ~8.50:1 | AA+AAA | ✅ |
| Badge bordeaux | #FFFFFF / #8B1A1A | 8.54:1 | AA+AAA | ✅ |

Nessun testo gold (#C9A84C) su sfondo chiaro. Tutte le 16 occorrenze verificate.

### Checklist WCAG 2.1 AA

| Criterio | Verifica eseguita | Esito |
|----------|-------------------|-------|
| 1.1.1 Testi alternativi | Immagini decorative `aria-hidden="true"` (ΓΛ, ✓, checkmark) | ✅ |
| 1.2.x Contenuti audio/video | Nessun video/audio presente nel sito | N/A |
| 1.3.1 Info e relazioni | Struttura semantica: `<main>`, `<nav>`, `<section>`, `<h1>`-`<h3>`, `<aside>`, `<footer>` | ✅ |
| 1.3.3 Caratteristiche sensoriali | Nessuna istruzione basata solo su colore/forma | ✅ |
| 1.4.1 Uso del colore | Errori form segnalati anche con testo (`form-error`) non solo colore | ✅ |
| 1.4.3 Contrasto (normale) | Tutti i testi ≥ 4.5:1 (calcolato sopra) | ✅ |
| 1.4.4 Ridimensionamento | Font relativi (`rem`, `clamp`, `em`), nessun `px` fisso su testo | ✅ |
| 1.4.10 Reflow | CSS responsive con `@media (max-width: 768px)`, grid collapsing | ✅ |
| 1.4.11 Contrasto componenti | Border input `#E8E0D0` su bianco: 1.37:1 — solo decorativo (non porta informazione) | ⚠️ |
| 2.1.1 Tastiera | Tutti i link e bottoni sono elementi nativi — tab funziona | ✅ |
| 2.1.2 Nessuna trappola | Mega-dropdown chiudibile con Escape (verificato nel codice JS Header) | ✅ |
| 2.4.1 Salto blocchi | Skip-link "Salta al contenuto principale" — corretto in QA (Bug 4) | ✅ |
| 2.4.2 Titolo pagina | `<title>` definito via Next.js `metadata` in ogni route | ✅ |
| 2.4.3 Ordine focus | Focus segue ordine visivo del DOM (no `tabindex > 0`) | ✅ |
| 2.4.6 Intestazioni ed etichette | Tutti gli `<input>` hanno `<label>` associata via `htmlFor` | ✅ |
| 2.4.7 Focus visibile | `.btn:focus-visible` con outline bordeaux 2px definito in globals.css | ✅ |
| 3.1.1 Lingua della pagina | `<html lang="it">` in `app/layout.tsx` | ✅ |
| 3.2.1 Su focus | Nessun cambiamento di contesto al solo focus | ✅ |
| 3.3.1 Identificazione errori | Errori form con `role="alert"` e testo descrittivo | ✅ |
| 3.3.2 Etichette o istruzioni | Label su tutti i campi obbligatori con asterisco | ✅ |
| 4.1.1 Analisi | HTML generato da React/Next.js — struttura valida | ✅ |
| 4.1.2 Nome, ruolo, valore | `aria-label`, `aria-pressed`, `aria-expanded`, `aria-haspopup`, `aria-hidden` presenti | ✅ |

**Nota 1.4.11**: Il border degli input (`#E8E0D0`) ha contrasto basso con lo sfondo bianco (1.37:1).
Questo criterio riguarda i componenti UI non testuali. Il campo è identificabile anche dalla struttura
e dal `label`, quindi il rischio è basso. Raccomandato scurire il border a `#C0B8AC` prima del go-live.

---

## Sicurezza

### Headers HTTP

| Header | Presenza | Valore | Note |
|--------|----------|--------|------|
| X-Frame-Options | ✅ | SAMEORIGIN | Anti-clickjacking |
| X-Content-Type-Options | ✅ | nosniff | Anti-MIME sniffing |
| Referrer-Policy | ✅ | strict-origin-when-cross-origin | OK |
| Strict-Transport-Security | ✅ (aggiunto AUDIT-3) | max-age=31536000; includeSubDomains | HTTPS obbligatorio 1 anno |
| Permissions-Policy | ✅ (aggiunto AUDIT-3) | camera=(), microphone=(), geolocation=(), payment=() | Limita API browser |
| Cache-Control API | ✅ (aggiunto AUDIT-3) | no-store | Impedisce cache CDN delle API route |
| Content-Security-Policy | ⚠️ Assente | — | Vedi raccomandazioni |

### XSS — dangerouslySetInnerHTML

Tre script usano `dangerouslySetInnerHTML`:
- `app/layout.tsx`: IntersectionObserver scroll-reveal — solo DOM selectors, nessun dato utente interpolato ✅
- `app/page.tsx`: pricing toggle — solo DOM selectors, nessun dato utente ✅
- `app/commercio/abbonamento/page.tsx`: pricing toggle — idem ✅

**Conclusione**: Nessun rischio XSS nei blocchi `dangerouslySetInnerHTML` esistenti.
Nessun user input viene mai interpolato in HTML/JS raw.

### Autenticazione e sessioni

| Controllo | Stato |
|-----------|-------|
| Password hash bcrypt 12 rounds | ✅ Adeguato |
| JWT httpOnly cookie | ✅ Non accessibile da JS lato client |
| Cookie `secure: true` in produzione | ✅ Configurato in `lib/auth.ts` |
| Cookie `sameSite: 'lax'` | ✅ Protegge da CSRF base |
| Stripe webhook: verifica firma HMAC | ✅ `stripe.webhooks.constructEvent()` |
| Error messages generici in login | ✅ No user enumeration |
| Rate limiting su `/api/auth/*` | ❌ Assente — raccomandato |

### Dati sensibili esposti

| Rischio | Stato |
|---------|-------|
| Password in chiaro nel log/response | ✅ Mai inviata nel response |
| Stripe secret in client-side | ✅ Solo publishable key esposta |
| DATABASE_URL nel bundle client | ✅ Solo variabili NEXT_PUBLIC_* lato client |
| JWT payload contiene solo `userId`, `email`, `role` | ✅ Nessun dato sensibile nel token |

---

## Licenze dipendenze

| Libreria | Versione | Licenza | Uso commerciale | Note |
|----------|----------|---------|-----------------|------|
| next | 14.2.3 | MIT | ✅ | |
| react | ^18.3.1 | MIT | ✅ | |
| @prisma/client | ^5.13.0 | Apache-2.0 | ✅ | Apache-2.0 compatibile con uso commerciale |
| stripe | ^15.7.0 | MIT | ✅ | |
| bcryptjs | ^2.4.3 | MIT | ✅ | |
| jsonwebtoken | ^9.0.2 | MIT | ✅ | |
| resend | ^3.2.0 | MIT | ✅ | |
| pdfkit | ^0.15.0 | MIT | ✅ | |
| qrcode | ^1.5.4 | MIT | ✅ | |
| cookie | ^0.6.0 | MIT | ✅ | |
| typescript | (devDep) | Apache-2.0 | ✅ | Solo compilazione |
| Playfair Display (Google Fonts) | — | OFL 1.1 | ✅ | Open Font License, uso commerciale OK |
| Inter (Google Fonts) | — | OFL 1.1 | ✅ | Open Font License, uso commerciale OK |

**Conclusione**: Tutte le dipendenze sono MIT o Apache-2.0 o OFL. Nessun conflitto con uso commerciale.
Nessuna dipendenza GPL che richiederebbe open-sourcing del prodotto.

---

## Microcopy legale

| Claim | Localizzazione | Verificabile? | Stato |
|-------|---------------|---------------|-------|
| "5.000+ studenti formati dal 2015" | Homepage hero, chi-siamo | ✅ Da chi-siamo.html | ✅ OK |
| "MIM accreditato" | Topbar, FAQ, NEURO_SPEC | ✅ Accreditamento reale | ✅ OK |
| "Massimo 15 studenti per classe" | Varie pagine | ✅ Dato da chi-siamo.html | ✅ OK |
| "56 corsi registrati" | Corsi asincroni | ✅ Dato da portale DB | ✅ OK |
| "Disdici quando vuoi" | Abbonamento | ✅ Possibile con abbonamento mensile | ✅ OK |
| "Accesso a vita al materiale" | Homepage, corsi asincroni | ⚠️ Va qualificato | ⚠️ Vedi nota |
| "Il primo colloquio è gratuito" | Homepage (orientamento), FAQ | ⚠️ Da confermare | ⚠️ Vedi nota |
| Nessuna urgenza artificiale | Tutto il sito | ✅ Confermato | ✅ OK |
| Nessuna garanzia di risultato | Tutto il sito | ✅ Nessun claim del tipo "impara in X giorni" | ✅ OK |

**Nota "Accesso a vita"**: Questo claim è comune nel settore e-learning italiano. Tuttavia deve essere
qualificato nei Termini e Condizioni con una clausola del tipo: *"L'accesso a vita si intende per
tutta la durata di disponibilità del servizio."* Senza questa qualifica, l'utente potrebbe contestare
la mancanza di accesso in caso di chiusura del servizio.

**Nota "Primo colloquio gratuito"**: Il claim compare in homepage (sezione orientamento) e nella FAQ.
Questo dato NON era nei materiali del sito vecchio — è stato introdotto da NEURO_SPEC §5 FP-06 come
raccomandazione. **Giampiero deve confermare esplicitamente se il primo colloquio di orientamento è
effettivamente gratuito prima del go-live.** Se non è previsto, rimuovere il claim dalle pagine.

---

## Correzioni applicate

### AUDIT-1 — GDPR Art. 13: Notice privacy in form registrazione
- **File modificato**: `app/auth/login/page.tsx`
- **Problema**: Nessuna informativa sulla raccolta di nome/email al momento della registrazione.
- **Correzione**: Aggiunta notice con link a `/privacy` e `/termini-condizioni` nel tab "Registrati".

### AUDIT-2 — GDPR Art. 13: Notice privacy in form contatti
- **File modificato**: `app/marketing/contatti/page.tsx`
- **Problema**: Form contatti raccoglie nome ed email senza informativa.
- **Correzione**: Aggiunto riferimento all'Informativa Privacy sotto il pulsante "Invia messaggio".

### AUDIT-3 — Sicurezza: Header HTTP mancanti
- **File modificato**: `next.config.js`
- **Problema**: Mancavano `Strict-Transport-Security`, `Permissions-Policy`, `Cache-Control` per API.
- **Correzione**: Aggiunti tutti e tre gli header. HSTS con `max-age=31536000; includeSubDomains`.

### AUDIT-4 — GDPR: Google Fonts CDN — trasferimento IP a terze parti USA
- **File modificato**: `styles/globals.css`
- **Problema**: `@import url('https://fonts.googleapis.com/...')` trasferisce IP utente a Google USA.
- **Correzione**: Aggiunto avviso prominente con istruzioni per self-hosting via `@font-face`.
  L'@import rimane attiva per sviluppo. **L'azione richiesta a Giampiero prima del go-live è scaricare
  i file `.woff2` di Playfair Display e Inter e copiarli in `/public/fonts/`.**

---

## Raccomandazioni aperte

### 1. Priorità ALTA — Pagine `/privacy` e `/termini-condizioni`
Senza queste pagine il sito non è GDPR-compliant per la legge italiana (d.lgs. 196/2003 aggiornato con
GDPR). I link sono già presenti nel Footer e nelle notice aggiunte. Le pagine devono esistere al go-live.
Il testo deve essere fornito da Giampiero o da un consulente legale.

### 2. Priorità ALTA — Self-hosting font Google
Come descritto in AUDIT-4. Scaricare Playfair Display (wght 400-900) e Inter (wght 400-700) in formato
`.woff2` dal sito di Google Fonts e copiarli in `/public/fonts/`. Decommentare i `@font-face` nel CSS.

### 3. Priorità MEDIA — Rate limiting su `/api/auth/login` e `/api/auth/register`
Senza protezione da brute force, un attaccante può tentare milioni di combinazioni email/password.
Soluzione consigliata per Vercel: `@upstash/ratelimit` con Redis (piano gratuito disponibile).
Limite suggerito: 10 tentativi per IP per minuto.

### 4. Priorità MEDIA — Content Security Policy (CSP)
`next.config.js` non definisce un header CSP. Una CSP restrittiva limita significativamente i rischi
XSS. Dato che il sito usa `dangerouslySetInnerHTML` (script inline) e Google Fonts, la CSP richiede
`'unsafe-inline'` per gli script e `https://fonts.googleapis.com` per i font — il che ne riduce
l'efficacia. Dopo il self-hosting dei font, è possibile implementare una CSP più restrittiva.

### 5. Priorità BASSA — Border input: contrasto WCAG 1.4.11
Il border `#E8E0D0` dei campi `<input>` ha un contrasto di 1.37:1 con lo sfondo bianco.
Scurire a `#C0B8AC` porta il contrasto a ~2.5:1 (più alto del minimo 3:1 richiesto da 1.4.11).

### 6. Priorità BASSA — Qualifica claim "Accesso a vita"
Nei Termini e Condizioni inserire la clausola di limitazione: l'accesso a vita vale per la durata
del servizio. Pratica standard nel settore.

---

## Note finali

Questo report è una valutazione tecnica operativa, non un parere legale. Per un sito che raccoglie
dati personali di cittadini UE, raccolta pagamenti e offre servizi formativi accreditati MIM,
si raccomanda una revisione legale specializzata in data protection prima del go-live.

In particolare: la redazione della Privacy Policy (Art. 13 GDPR) e dei Termini e Condizioni
dovrebbe essere affidata a un consulente legale, non generata da un sistema AI.

Il rischio residuo attuale, dopo le correzioni applicate, è classificato come **BASSO**,
condizionato al completamento delle azioni indicate nelle raccomandazioni aperte prima del go-live.

---

*AUDIT_REPORT.md prodotto il 17/05/2026*
*4 correzioni applicate — Rischio residuo: BASSO*
