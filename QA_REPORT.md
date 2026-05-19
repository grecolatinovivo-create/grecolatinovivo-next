# QA_REPORT — GrecoLatinoVivo Site
*Aggiornato: 19 maggio 2026 — QA Engineer · Sessione corsi asincroni*

---

## Sessione 19/05/2026 — Audit flusso corsi asincroni

### Riepilogo sessione

| Metrica | Valore |
|---------|--------|
| File analizzati | 7 |
| Bug critici trovati e corretti | 1 |
| Bug medi trovati e corretti | 1 |
| Miglioramenti aggiunti | 2 |
| Problemi aperti | 2 |

### Causa principale del problema segnalato

**Segnalazione utente: "le card rimandano al portale".**

Le card erano tecnicamente corrette (`href="/corsi/corsi-asincroni/${corso.slug}"`). Il problema era nei CTA della pagina: un pulsante primario (Oxford blue) nella hero con testo "Accedi al portale per iscriverti" portava l'utente al portale abbonamento, facendogli credere che quel fosse il flusso per comprare un corso asincrono.

### Bug #1 — CRITICO: Hero CTA mandava al portale con testo "per iscriverti"

- **File**: `app/corsi/corsi-asincroni/page.tsx` righe 277–284
- **Problema**: `btn-primary` con `href="https://portale.grecolatinovivo.it"` e testo "Accedi al portale **per iscriverti**" nella hero di una pagina di acquisto diretto.
- **Correzione**: Sostituito con `href="#latino"` ("Sfoglia i corsi") + CTA secondario `/abbonamenti` ("Vedi gli abbonamenti").

### Bug #2 — MEDIO: Bottom CTA band con testo "per iscriverti ai corsi"

- **File**: `app/corsi/corsi-asincroni/page.tsx` righe 367–397
- **Problema**: Testo "Accedi al Portale per iscriverti ai corsi" contraddice il modello di acquisto diretto Stripe.
- **Correzione**: Titolo "Preferisci accedere a tutto il catalogo?", testo spiega il portale come alternativa. CTA → `/abbonamenti` + portale come secondario.

### Miglioramento #1 — Banner "pagamento annullato" per ritorno da Stripe

- **File nuovi**: `components/corsi/CancelledBanner.tsx`
- **File modificati**: `app/corsi/corsi-asincroni/[slug]/page.tsx`
- **Motivazione**: `cancel_url` Stripe invia `?cancelled=true` ma non c'era nessun feedback visivo.
- **Soluzione**: Client Component con `useSearchParams()`, `dynamic(..., { ssr: false })` per compatibilità SSG.

### Test funzionali

| Test | Esito |
|------|-------|
| Card catalogo → pagina dettaglio | ✅ OK |
| 56/56 slug coperti in catalog e detail page | ✅ OK |
| `lib/corsi-asincroni-catalog.ts` — 56 corsi | ✅ OK |
| API checkout — verifica prezzo server-side | ✅ OK |
| Webhook `corso_asincrono_guest` | ✅ OK |
| `CheckoutButton` — loading/error state | ✅ OK |
| Pagina conferma — tipi guest gestiti | ✅ OK |
| `next.config.js` — nessun redirect errato | ✅ OK |
| `.btn-card-cta` pointer-events | ✅ OK |
| Pagamento annullato `?cancelled=true` | ✅ RISOLTO |

### Problemi aperti

1. **Email post-acquisto linka al portale senza account** — webhook.ts riga 202. Se l'acquirente non ha un account portale, il link nell'email non funziona. TODO già presente nel codice.
2. **Testo "dal portale" nella sidebar** — `[slug]/page.tsx` riga ~1142. Testo descrittivo leggermente ambiguo, non un link.

### Raccomandazioni

1. Rideploy immediato per applicare le fix.
2. Implementare creazione account automatica prima del go-live completo.
3. Aggiungere le prime recensioni reali in `RECENSIONI_CORSO[]` quando disponibili.

---

## Cosa funziona

### Design system
- CSS custom properties aggiornate correttamente in `globals.css` — nessun hardcode residuo del bordeaux (`#8B1A1A`) nei file aggiornati in questo commit
- Tutti i 7 file con colori bordeaux hardcoded sono stati corretti (30 sostituzioni verificate)
- `next/font/google` integrato in `layout.tsx` — le variabili `--font-playfair` e `--font-inter` sono correttamente esposte come CSS custom properties su `<html>`

### Componenti
- `Header.tsx` — intestazione bianca con nav links corretti; mega-menu mantenuto; hamburger mobile presente
- `Footer.tsx` — navy scuro, 4 colonne, link aggiornati alle URL corrette (`/marketing/chi-siamo` invece di `/chi-siamo`)
- `PricingToggle.tsx` — componente React client con `useState`; elimina `dangerouslySetInnerHTML`; type-safe; prezzi da `PLANS` in `types/index.ts`

### Homepage
- Zero emoji
- Zero dati inventati
- Badge accreditamento con dati reali (MIM, ALTE, 2015)
- Trust bar con 4 metriche verificate (5.000+, 2015, 56 corsi, 5 sedi)
- 4 percorsi con descrizioni accurate e link corretti
- FAQ con 6 domande reali e risposte accurate
- CTA finale coerente con hero

---

## Cosa è stato corretto in questa pipeline

| # | Problema trovato | Correzione applicata |
|---|---|---|
| 1 | `dangerouslySetInnerHTML` per toggle prezzi in `page.tsx` | Refactoring in `PricingToggle.tsx` come `'use client'` con `useState` |
| 2 | Import inutilizzato `{ PLANS }` in `app/page.tsx` dopo refactoring | Rimosso |
| 3 | `dangerouslySetInnerHTML` in `LanguageCard` per descrizione + courses | Sostituito con due `<p>` separati |
| 4 | Google Fonts caricato da CDN esterno (violazione GDPR) | Migrato a `next/font/google` in `layout.tsx` |
| 5 | 30 occorrenze di `#8B1A1A` (bordeaux) in 7 file pagine | Sostituite con `#1B3A6B` (navy) |
| 6 | Link `/chi-siamo` nel Header puntava a URL sbagliata | Corretto in `/marketing/chi-siamo` |
| 7 | Link footer `/staff`, `/metodologia`, `/sedi`, `/faq` errati | Corretti in `/marketing/...` |
| 8 | Sfondo hero e navbar neri Netflix (`#1A1A1A`) | Sostituiti con navy istituzionale (`#1A2A4A`/`#1B3A6B`) |

---

## Problemi aperti (non corretti in questa pipeline)

| # | Problema | Rischio | Note |
|---|---|---|---|
| 1 | Cookie banner GDPR non implementato | Alto — normativo | Da implementare prima del go-live |
| 2 | `scroll-reveal` in `layout.tsx` ancora via `dangerouslySetInnerHTML` | Basso — non funzionale, solo animazione | Accettabile per MVP; potrebbe essere refactorato |
| 3 | Pagine vuote (staff, metodologia, sedi, faq, ecc.) | Medio — UX | Struttura URL corretta, contenuto mancante |
| 4 | Dynamic routes senza implementazione (corsi/[id], eventi/[id]) | Alto — 404 in produzione | Necessitano dati Prisma |
| 5 | `/public/fb.jpg` mancante | Medio — OG image assente | Da aggiungere prima del deploy |
| 6 | Topbar.tsx non verificata in questa pipeline | Basso | Da controllare per occorrenze bordeaux |
| 7 | `app/api/corsi-live/[id]` — cartella presente ma route.ts mancante | Medio | Struttura incompleta |

---

## Verifica contrasti WCAG 2.1 AA

| Combinazione | Rapporto | Esito |
|---|---|---|
| `#1B3A6B` (navy) su `#FFFFFF` (bianco) | 8.6:1 | PASS AAA |
| `#FFFFFF` su `#1B3A6B` (navy) | 8.6:1 | PASS AAA |
| `#1A2A3A` su `#FFFFFF` | ~13:1 | PASS AAA |
| `#5A6A7A` su `#FFFFFF` | ~4.6:1 | PASS AA |
| `#C9A84C` su `#1A2A4A` (navy scuro) | ~5.1:1 | PASS AA |
| `#C9A84C` su `#FFFFFF` (bianco) | ~2.5:1 | FAIL — mai usato come testo su bianco |

Regola applicata: l'oro `#C9A84C` è usato SOLO su sfondi scuri (hero, footer) e mai come testo su sfondo chiaro. Conforme a COUNCIL.md decisione 7.

---

## Checklist pre-go-live

- [ ] Cookie banner GDPR implementato
- [ ] Privacy Policy e Termini di servizio: contenuto legale inserito
- [ ] Ruoli di Alberto Bibbiani ed Emanuele Viotti confermati con Giampiero
- [ ] Numero corsi Sanscrito confermato
- [ ] `/public/fb.jpg` aggiunto
- [ ] Pagine marketing (metodologia, staff, sedi, faq) completate
- [ ] Dynamic routes (corsi/[id], eventi/[id]) implementate con dati Prisma
- [ ] Test su dispositivi mobile (320px, 375px, 768px)
- [ ] Test accessibilità con screen reader (NVDA/VoiceOver)
- [ ] `DATABASE_URL` e tutte le variabili d'ambiente impostate su Vercel
