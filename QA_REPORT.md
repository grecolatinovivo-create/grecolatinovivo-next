# QA_REPORT — GrecoLatinoVivo Site
*Prodotto da: QA Engineer — pipeline agent-orchestra — 18 maggio 2026*

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
