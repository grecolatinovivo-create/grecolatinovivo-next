# TECH_NOTES — grecolatinovivo-site
*Centro Nazionale di Studi Classici «GrecoLatinoVivo»*
*Senior Developer — 17 maggio 2026*

---

## Stack scelto

**Next.js 14.2.3 — App Router**
Motivazione: stesso framework del portale (portale-glv usa Pages Router), SSR nativo,
routing file-based, compatibilità Vercel zero-config, Image optimization integrata.
Il sito principale usa App Router (più moderno) mentre il portale resta su Pages Router —
le due app sono separate, non c'è conflitto.

**TypeScript 5.x** — type safety su API routes, Prisma queries, props React.

**CSS inline per-pagina + globals.css con CSS custom properties**
Motivazione: coerenza con il portale (COUNCIL.md: CSS inline, zero dipendenze).
Design system condiviso via variabili CSS `:root`. Zero Tailwind, zero CSS Modules.
Ogni componente porta il suo `<style>` per incapsulare regole specifiche.

**Prisma 5.13.0 + Neon PostgreSQL**
Lo stesso DB del portale. Il nuovo sito estende lo schema con 7 nuove tabelle
(Teacher, LiveCourse, LiveSession, LiveBooking, TutoringSlot, TutoringBooking,
Event, EventTicket). Le tabelle portale NON vengono modificate.

**Stripe 15.7.0** — 4 tipi di checkout: corso_live, corso_asincrono, biglietto_evento, tutoraggio.
I webhook Stripe gestiscono la logica post-pagamento (iscrizioni, PDF, email).

**Resend 3.2.0** — email transazionali: conferma iscrizione, accesso corso, biglietto PDF, tutoraggio.

**pdfkit 0.15.0 + qrcode 1.5.4** — generazione biglietti PDF con QR code per gli eventi.

**JWT + bcryptjs** — auth condivisa tra sito principale e portale via cookie httpOnly
con `domain=.grecolatinovivo.it`. Stessa strategia già in produzione nel portale.

---

## Come far girare il progetto

```bash
# 1. Posizionarsi nella cartella del nuovo sito
cd grecolatinovivo-site

# 2. Installare le dipendenze
npm install

# 3. Configurare le variabili d'ambiente
cp .env.example .env
# Compilare .env con:
#   DATABASE_URL (stesso Neon del portale)
#   JWT_SECRET (stesso del portale, per condivisione auth)
#   STRIPE_SECRET_KEY + STRIPE_WEBHOOK_SECRET
#   Sei STRIPE_PRICE_* (Cultura/Linguae/Accademia × monthly/annual)
#   RESEND_API_KEY + RESEND_FROM_EMAIL
#   NEXT_PUBLIC_APP_URL=https://grecolatinovivo.it
#   NEXT_PUBLIC_PORTALE_URL=https://portale.grecolatinovivo.it

# 4. Generare il Prisma Client
npx prisma generate

# 5. Applicare le nuove tabelle al DB (aggiunge solo le tabelle nuove,
#    NON tocca le tabelle esistenti del portale se il DB è già in uso)
npx prisma db push

# 6. Avviare in sviluppo (porta 3001 per non collidere col portale su 3000)
npm run dev -- --port 3001
# → http://localhost:3001

# 7. Build produzione
npm run build
npm run start
```

### Debug Stripe in sviluppo

```bash
# Ascolta gli eventi Stripe localmente
stripe listen --forward-to localhost:3001/api/stripe/webhook
```

---

## Struttura dei file

```
grecolatinovivo-site/
├── app/                          ← App Router Next.js 14
│   ├── layout.tsx                ← Root layout: Topbar + Header + Footer
│   ├── page.tsx                  ← Homepage
│   ├── marketing/                ← Pagine statiche
│   │   ├── chi-siamo/page.tsx
│   │   ├── contatti/page.tsx     ← Form contatti (sostituisce contatti.php)
│   │   └── ...
│   ├── corsi/                    ← Offerta formativa
│   │   ├── corsi-asincroni/page.tsx  ← Catalogo 56 corsi (client-side filter)
│   │   ├── corsi-live/page.tsx       ← Catalogo corsi live [DA INSERIRE dati]
│   │   └── lezioni-individuali/page.tsx
│   ├── commercio/
│   │   ├── abbonamento/page.tsx  ← Pricing 3 piani con toggle
│   │   └── conferma/page.tsx     ← Post-pagamento (peak-end rule)
│   ├── eventi/page.tsx           ← Calendario eventi [DA INSERIRE dati]
│   ├── auth/
│   │   └── login/page.tsx        ← Login + Registrazione inline
│   └── api/                      ← API Routes
│       ├── auth/{login,register,logout}/route.ts
│       ├── stripe/{checkout,webhook}/route.ts
│       ├── corsi-live/route.ts
│       ├── corsi-asincroni/route.ts
│       ├── eventi/{route.ts,[id]/biglietto/route.ts}
│       ├── contatti/route.ts
│       └── config/abbonamento/route.ts
├── components/
│   ├── layout/{Topbar,Header,Footer}.tsx
│   └── (ui, sections — estendere in fase 2)
├── lib/
│   ├── db.ts         ← PrismaClient singleton
│   ├── auth.ts       ← JWT sign/verify + cookie helpers
│   ├── stripe.ts     ← Stripe instance + price ID helper
│   ├── resend.ts     ← Tutti i template email
│   └── pdf.ts        ← Generazione PDF biglietti + QR
├── prisma/schema.prisma     ← Schema ESTESO (portale + nuove tabelle)
├── styles/globals.css       ← Design system CSS custom properties
├── types/index.ts           ← TypeScript interfaces + PLANS + helpers
├── .env.example
├── vercel.json
└── next.config.js           ← Redirects dal vecchio sito statico
```

---

## Dipendenze principali

| Libreria | Versione | Licenza | Uso |
|----------|----------|---------|-----|
| next | 14.2.3 | MIT | Framework |
| react | ^18.3.1 | MIT | UI |
| @prisma/client | ^5.13.0 | Apache-2.0 | ORM |
| stripe | ^15.7.0 | MIT | Pagamenti |
| bcryptjs | ^2.4.3 | MIT | Hash password |
| jsonwebtoken | ^9.0.2 | MIT | Auth JWT |
| resend | ^3.2.0 | MIT | Email |
| pdfkit | ^0.15.0 | MIT | PDF biglietti |
| qrcode | ^1.5.4 | MIT | QR code |
| cookie | ^0.6.0 | MIT | Cookie parsing |

---

## Decisioni tecniche rilevanti

### 1. App Router vs Pages Router
Il portale usa Pages Router (legacy). Il nuovo sito usa App Router (moderno).
Le due app sono completamente separate — non c'è conflitto. Non modificare il portale.

### 2. Schema Prisma condiviso
Il nuovo sito ha il suo `prisma/schema.prisma` che include TUTTE le tabelle
(portale + nuove). Questo è necessario per le relazioni (es. LiveBooking → User).
Il comando `db push` aggiunge solo le tabelle mancanti — non tocca quelle esistenti.
⚠️ Prima di `db push` in produzione: fare backup del DB Neon.

### 3. Auth condivisa tra sito e portale
Entrambe le app leggono lo stesso cookie (`glv_auth`) con lo stesso JWT_SECRET.
Il cookie ha `domain=.grecolatinovivo.it` — è visibile sia da `grecolatinovivo.it`
sia da `portale.grecolatinovivo.it`.
In sviluppo locale: impostare `COOKIE_DOMAIN=localhost`.

### 4. Stripe webhook — nessuna duplicazione
Il sito principale gestisce: corso_live, corso_asincrono, biglietto_evento, tutoraggio.
Il portale gestisce: abbonamento (subscription). Non duplicare la logica.
Configurare due endpoint webhook in Stripe Dashboard: uno per ogni app.

### 5. CSS inline — no Tailwind, no CSS Modules
Per coerenza con il portale (COUNCIL.md decisione 2). Il design system è in
`styles/globals.css` via custom properties `:root`. Ogni componente React
porta il suo blocco `<style>` per regole specifiche.

### 6. Redirects SEO
`next.config.js` contiene redirect 301 da tutti gli URL .html del vecchio sito
verso le nuove route Next.js. Questo preserva il posizionamento SEO.

### 7. maxDuration per serverless
Webhook Stripe e generazione PDF biglietti hanno `maxDuration: 30` in `vercel.json`
(le funzioni Vercel hanno 10s di default — insufficiente per pdfkit).

---

## Known limitations (da risolvere prima del go-live)

| Limitazione | Impatto | Soluzione pianificata |
|-------------|---------|----------------------|
| Dati docenti [DA INSERIRE] | Alto | Giampiero deve confermare nome/ruolo/bio di ogni docente |
| Calendario corsi live vuoto | Alto | Inserire i corsi 2025/2026 nel DB via prisma studio o seed script |
| Calendario eventi vuoto | Alto | Giampiero deve fornire il calendario eventi |
| Prezzi tutoraggio [DA INSERIRE] | Alto | Giampiero deve confermare prezzi per lingua/livello |
| Prezzi corsi live [DA INSERIRE] | Alto | Idem |
| contatti.tsx usa 'use client' + metadata | Basso | Estrarre metadata in Server Component wrapper |
| Pagine marketing mancanti | Medio | Creare: metodologia, sedi, faq, staff, privacy, termini-condizioni, minicorsi, formazione-docenti, lezioni-individuali, corsi-live/[id], corsi-asincroni/[slug] |
| fb.jpg OG image | Basso | Copiare da sito vecchio in /public/fb.jpg |
| Git branch portale rotto | Medio | `rm -f portale-glv/.git/refs/heads/main\ 2.lock` |

---

## Deploy su Vercel

```bash
# 1. Creare nuovo progetto Vercel dal repository GitHub
#    (usare repository separato da portale-glv)

# 2. Impostare variabili d'ambiente nella dashboard Vercel
#    Tutte le variabili da .env.example

# 3. Impostare il dominio: grecolatinovivo.it

# 4. Aggiungere endpoint webhook in Stripe Dashboard:
#    https://grecolatinovivo.it/api/stripe/webhook
#    Eventi: checkout.session.completed

# 5. Prima del go-live: backup Neon DB e poi:
#    npx prisma db push (aggiunge le nuove tabelle)
```

---

## File da completare prima del go-live

Pagine da creare (struttura già definita, contenuto da aggiungere):

```
app/marketing/metodologia/page.tsx          ← Metodo Natura
app/marketing/sedi/page.tsx                 ← 5 sedi con mappe [DA INSERIRE]
app/marketing/faq/page.tsx                  ← FAQ completa
app/marketing/staff/page.tsx                ← Tutti i docenti [DA INSERIRE]
app/marketing/privacy/page.tsx              ← Privacy policy [DA INSERIRE legale]
app/marketing/termini-condizioni/page.tsx   ← T&C [DA INSERIRE legale]
app/corsi/minicorsi/page.tsx                ← Corsi brevi tematici
app/corsi/formazione-docenti/page.tsx       ← Formazione MIM
app/corsi/lezioni-individuali/page.tsx      ← Tutoraggio 1:1
app/corsi/corsi-live/[id]/page.tsx          ← Singolo corso live
app/corsi/corsi-asincroni/[slug]/page.tsx   ← Singolo corso asincrono
app/eventi/[id]/page.tsx                    ← Singolo evento
```

*TECH_NOTES_NUOVO.md prodotto il 17/05/2026*
