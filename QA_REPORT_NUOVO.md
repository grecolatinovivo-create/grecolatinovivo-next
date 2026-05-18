# QA Report — grecolatinovivo-site
*Senior QA Engineer & Product Critic — 17 maggio 2026*

---

## Riepilogo

| Metrica | Valore |
|---------|--------|
| File esaminati | 28 |
| Test eseguiti | 47 |
| Bug critici trovati e corretti | 2 |
| Bug medi trovati e corretti | 3 |
| Bug minori trovati e corretti | 0 |
| Problemi aperti (non bloccanti) | 9 |
| Coverage stack: API routes | ✅ 12/12 verificati |
| Coverage stack: pagine frontend | ✅ 10/10 verificate |
| Coverage stack: lib/ + types/ | ✅ 6/6 verificati |
| WCAG 2.1 AA (colori) | ✅ Nessuna violazione |
| ARIA / accessibilità | ✅ OK — 1 fix applicato |

---

## Test funzionali

### REQ-1 — Catalogo corsi asincroni consultabile senza login
**Test**: Pagina `app/corsi/corsi-asincroni/page.tsx` esegue fetch su `/api/corsi-asincroni` senza Authorization header.
**Risultato**: ✅ OK
**Note**: Filtri lang/level inviati come query params; ricerca client-side funzionante. API route lato server non richiede JWT.

### REQ-2 — Catalogo corsi live consultabile senza login
**Test**: `app/corsi/corsi-live/page.tsx` → `/api/corsi-live`, nessun check JWT.
**Risultato**: ✅ OK
**Note**: Empty state presente con messaggio contestuale al posto dei dati mancanti.

### REQ-3 — Checkout con autenticazione obbligatoria
**Test**: `app/api/stripe/checkout/route.ts` verifica JWT prima di creare sessione Stripe.
**Risultato**: ✅ OK
**Note**: Risposta 401 con JSON `{ error: "Devi essere autenticato." }`. Login page preserva `redirect` e `piano` come query param.

### REQ-4 — 4 tipi di checkout gestiti
**Test**: Verifica switch in checkout route: abbonamento, corso_live, corso_asincrono, biglietto_evento, tutoraggio.
**Risultato**: ✅ OK — tutti e 5 i branch implementati.
**Note**: Controllo duplicati per biglietti (`@@unique([userId, eventId])`) e iscrizioni live (`@@unique([userId, liveCourseId])`). Verifica capienza per corsi live (`_count`).

### REQ-5 — Webhook Stripe: logica post-pagamento
**Test**: `app/api/stripe/webhook/route.ts` — verifica firma, switch su `meta.type`.
**Risultato**: ✅ OK
**Note**: Gestisce corso_live (email conferma + Zoom), corso_asincrono (accesso portale), biglietto_evento (PDF + email), tutoraggio ($transaction atomica slot + booking). Abbonamento rimandato al portale (corretto).

### REQ-6 — Generazione PDF biglietti con QR code
**Test**: `lib/pdf.ts` — `generateEventTicketPDF()` restituisce `Promise<Buffer>`.
**Risultato**: ✅ OK
**Note**: Usa pdfkit + qrcode. Codice biglietto formato `GLV-EVT-YYYY-XXXXX`. PDF attachato via Resend con filename `biglietto-[eventId].pdf`.

### REQ-7 — Auth condivisa sito + portale
**Test**: `lib/auth.ts` — cookie `glv_auth`, `domain=.grecolatinovivo.it`, stesso JWT_SECRET.
**Risultato**: ✅ OK
**Note**: `buildCookieOptions()` correttamente imposta httpOnly, secure (in produzione), sameSite: 'lax'. In sviluppo usa `COOKIE_DOMAIN=localhost`.

### REQ-8 — Form contatti (sostituzione contatti.php)
**Test**: `app/api/contatti/route.ts` — valida email, invia via Resend a `info@grecolatinovivo.it`.
**Risultato**: ✅ OK
**Note**: Pagina `app/marketing/contatti/page.tsx` è `'use client'` con stato success/error.

### REQ-9 — Pricing toggle mensile/annuale
**Test**: `app/commercio/abbonamento/page.tsx` + `app/page.tsx` (sezione abbonamento).
**Risultato**: ✅ OK
**Note**: Toggle gestito via `dangerouslySetInnerHTML` script (Server Component, nessun client-side hook). CSS classes `.price-monthly` / `.price-annual` / `.price-period` nascoste/mostrate dal JS.

### REQ-10 — Pagina conferma post-pagamento
**Test**: `app/commercio/conferma/page.tsx` — legge `?type=` da URL, mostra messaggio contestuale.
**Risultato**: ✅ OK
**Note**: `useSearchParams()` correttamente avvolto in `<Suspense>`. Peak-end rule NEURO_SPEC §8.5 rispettata.

### REQ-11 — Pagina 404 custom
**Test**: `app/not-found.tsx` — creata (era mancante).
**Risultato**: ✅ OK dopo fix
**Note**: Vedi Bug 5 → file creato da zero.

### REQ-12 — Prisma schema: relazioni complete
**Test**: Verifica back-relations su User, LiveCourse, TutoringSlot, Event.
**Risultato**: ✅ OK
**Note**: User ha `liveBookings LiveBooking[]`, `tutoringBookings TutoringBooking[]`, `eventTickets EventTicket[]`. LiveCourse ha `bookings LiveBooking[]` necessaria per `_count` query.

---

## Coerenza UX → codice

| Check | Esito | Note |
|-------|-------|------|
| Colore primary #8B1A1A usato correttamente | ✅ | Badge, CTA, link hover |
| Gold #C9A84C SOLO su sfondo scuro | ✅ | Verificato tutte le 16 occorrenze — sempre su #1A1A1A o dark gradient |
| Font Playfair Display per heading | ✅ | Tutti i titoli h1-h3 |
| Font Inter per body | ✅ | Testi, label, badge |
| Sistema spaziatura 8px | ✅ | Valori multipli di 8px nei padding/margin |
| Card: borderRadius 12px | ✅ | Tutti i `.card` e card inline |
| Badge "Il preferito dai docenti MIM" su piano Linguae | ✅ | COUNCIL.md decisione 4 |
| Latino/Greco card 2x width | ✅ | Grid 1fr 1fr separato dalle 3 lingue minori — COUNCIL.md decisione 3 |
| Sezione lingue light (#FAFAF7) | ✅ | `.section` su background --bg |
| Hero sempre dark (#1A1A1A) | ✅ | Tutte le pagine — pattern coerente |
| Microcopy "Inizia il tuo percorso" | ✅ | CTA hero e sezione finale homepage |
| Microcopy "Disdici quando vuoi" | ✅ | Sezione abbonamento homepage e pagina pricing |
| Skeleton loader durante fetch | ✅ | Corsi asincroni e live |
| Empty state descrittivo | ✅ | Corsi live, eventi, corsi asincroni |

## Coerenza NEURO_SPEC → codice

| Check NEURO_SPEC | Esito | Note |
|------------------|-------|------|
| §2.1: ancoraggio prezzo basso (Cultura prima) | ✅ | Ordine card pricing: Cultura → Linguae → Accademia |
| §2.3: prova sociale (5.000+ studenti) | ✅ | Trust bar homepage |
| §2.4: badge Linguae | ✅ | "Il preferito dai docenti MIM" |
| §5 FP-01: 4 percorsi orientamento | ✅ | Sezione "Dove vuoi arrivare?" homepage |
| §5 FP-02: Zero dark pattern (urgenza artificiale) | ✅ | COUNCIL.md decisione 1 rispettato |
| §8.2: scroll reveal con IntersectionObserver | ✅ | Script in layout.tsx con prefers-reduced-motion |
| §8.5: peak-end rule conferma | ✅ | Pagina `/commercio/conferma` |
| Error messages con `role="alert"` | ✅ | Form login, registrazione, contatti |
| Loading state feedback visivo | ✅ | Skeleton + spinner su form submit |

---

## Edge case testati

| Caso | Esito | Note |
|------|-------|------|
| Filtri corsi con zero risultati | ✅ | Empty state descrittivo con suggerimento |
| Evento passato nella pagina eventi | ✅ | API filtra solo `publishedAt: not null`, default solo futuri |
| Doppia iscrizione stesso corso | ✅ | `@@unique` + `upsert` nel webhook |
| Biglietto evento già acquistato | ✅ | Checkout API controlla esistenza prima di creare sessione |
| Capienza corso live esaurita | ✅ | Checkout confronta `_count.bookings` con `maxStudents` |
| Login con credenziali errate | ✅ | Messaggio generico (non rivela quale campo è errato) |
| Register con password < 8 chars | ✅ | Validazione lato server |
| Webhook con firma non valida | ✅ | Risposta 400, log errore |
| `?type=` invalido in conferma | ✅ | Fallback su `MESSAGES.abbonamento` |
| Redirect mobile — grid corsi asincroni | ✅ | Fix Bug 3 — `className="catalog-layout"` + media query |
| Skip-to-content da tastiera | ✅ | Fix Bug 4 — `.visually-hidden:focus` aggiunto |
| Pagina inesistente | ✅ | `not-found.tsx` creato (Fix Bug 5) |

---

## Bug corretti

### Bug 1 — Criticità: Alta ✅ CORRETTO (sessione precedente)
- **Trovato in**: `app/api/stripe/webhook/route.ts` (orig. riga 196)
- **Problema**: `export const config = { api: { bodyParser: false } }` è sintassi Pages Router. In App Router non ha effetto ma causa confusione e potenziale conflitto in future versioni di Next.js.
- **Correzione applicata**: Rimosso il blocco config, aggiunto commento esplicativo. In App Router il body viene letto con `req.text()` direttamente — nessuna config necessaria.

---

### Bug 2 — Criticità: Alta ✅ CORRETTO (sessione precedente)
- **Trovato in**: `app/page.tsx` — funzione `PricingToggle`
- **Problema**: Due `onClick={() => {}}` su pulsanti in un Server Component. React non può serializzare event handlers in Server Components — build failure o hydration error garantiti.
- **Correzione applicata**: Rimossi entrambi gli `onClick`. Il toggle funziona via lo script `dangerouslySetInnerHTML` già presente in fondo al componente.

---

### Bug 3 — Criticità: Media ✅ CORRETTO (sessione precedente)
- **Trovato in**: `app/corsi/corsi-asincroni/page.tsx`, riga 58
- **Problema**: La media query `@media (max-width: 768px) { .catalog-layout { grid-template-columns: 1fr !important; } }` era definita nello `<style>` ma il div target aveva solo stili inline, nessun `className`. Su mobile il layout a 2 colonne (sidebar + griglia) non collassava.
- **Correzione applicata**: Aggiunto `className="catalog-layout"` al div container del grid.

---

### Bug 4 — Criticità: Media ✅ CORRETTO (questa sessione)
- **Trovato in**: `styles/globals.css`, riga 413
- **Problema**: La classe `.visually-hidden` nascondeva il link "Salta al contenuto principale" in modo permanente, senza renderlo visibile quando riceve il focus da tastiera. Il link esiste in `app/layout.tsx` ma era inaccessibile da tastiera — violazione WCAG 2.1 AA §2.4.1 (Bypass Blocks).
- **Correzione applicata**: Aggiunta regola `.visually-hidden:focus` che ripristina dimensioni normali, sfondo bordeaux, colore bianco e z-index 9999. Link ora visibile e utilizzabile da tastiera.

---

### Bug 5 — Criticità: Media ✅ CORRETTO (questa sessione)
- **Trovato in**: `app/` — file mancante
- **Problema**: Nessun file `not-found.tsx`. Next.js App Router senza questo file usa il fallback generico di sistema, non coerente col design del sito.
- **Correzione applicata**: Creato `app/not-found.tsx` con hero dark, numero 404 decorativo semi-trasparente, h1 semantico, due CTA (← home, sfoglia corsi), citazione latina «Errare humanum est». Metadata con `robots: noindex`.

---

## Problemi aperti

| # | Problema | Impatto | Responsabile |
|---|----------|---------|--------------|
| 1 | `app/marketing/metodologia/page.tsx` non creata | Alto — link presenti nel Footer e nel btn chi-siamo | Developer fase 2 |
| 2 | `app/marketing/sedi/page.tsx` non creata | Medio | Developer fase 2 |
| 3 | `app/marketing/faq/page.tsx` non creata | Medio | Developer fase 2 |
| 4 | `app/marketing/staff/page.tsx` non creata — dati docenti `[DA INSERIRE]` | Alto — link in Footer | Giampiero + Developer |
| 5 | `app/marketing/privacy/page.tsx` e `termini-condizioni/page.tsx` non create | Alto — richieste da legge + Footer le linka | Legale + Developer |
| 6 | `app/corsi/corsi-live/[id]/page.tsx` e `corsi-asincroni/[slug]/page.tsx` non create | Alto — link da card corsi non funzionano | Developer fase 2 |
| 7 | `app/eventi/[id]/page.tsx` non creata | Medio | Developer fase 2 |
| 8 | `public/fb.jpg` mancante — OG image punta a file inesistente | Medio — anteprima social non funziona | Giampiero copia da sito vecchio |
| 9 | Prezzi corsi live e tutoraggio `[DA INSERIRE]` nel DB | Alto — campi obbligatori prima del go-live | Giampiero conferma prezzi |

---

## Decisioni Council verificate

| Decisione | Verifica | Esito |
|-----------|----------|-------|
| #1 — Nessuna urgenza artificiale (countdown, "solo 2 posti") | Grep `countdown\|urgenz\|ultimo posto` → 0 match | ✅ |
| #2 — Nessuna gamification | Grep `gamif\|badge-points\|streak` → 0 match | ✅ |
| #3 — Latino/Greco card 2x width | `grid-template-columns: '1fr 1fr'` separato + featured prop | ✅ |
| #4 — Badge Linguae "Il preferito dai docenti MIM" | `abbonamento/page.tsx` riga 88 | ✅ |
| #5 — REGOLA ZERO: zero dati inventati | Grep `\[DA INSERIRE\]` per tutti i dati non confermati | ✅ |
| #6 — Zero emoji nel contenuto professionale | Grep `\p{Emoji}` su tutti i .tsx → 0 match nel contenuto | ✅ |
| #7 — CSS inline + globals.css, zero Tailwind | `package.json` non include tailwindcss | ✅ |
| #8 — Gold #C9A84C mai come testo su sfondo chiaro | 16 occorrenze verificate: tutte su background scuro | ✅ |

---

## Raccomandazioni finali

**1. Priorità immediata prima del go-live**: creare le pagine mancanti elencate nei problemi aperti, in particolare Privacy Policy e Termini e Condizioni (obbligatorie per legge) e le pagine dettaglio corsi (i link dalle card portano a 404).

**2. Seed script per i dati**: predisporre un file `prisma/seed.ts` per inserire i dati reali nel DB in modo ripetibile (corsi live, docenti, eventi, slot tutoraggio, prezzi). Questo riduce il rischio di errori manuali in produzione.

**3. Rate limiting sulle API auth**: le route `/api/auth/login` e `/api/auth/register` non hanno protezione da brute force. Prima del go-live, aggiungere middleware di rate limiting (es. `@upstash/ratelimit` su Vercel Edge).

---

*QA_REPORT_NUOVO.md prodotto il 17/05/2026*
*5 bug corretti — codebase pronta per FASE 6: Audit*
