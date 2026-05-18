# Centro Nazionale di Studi Classici «GrecoLatinoVivo»
## Sito Istituzionale — Documentazione di Progetto

**Versione documento:** 1.0  
**Data:** 18 maggio 2026  
**Repository:** grecolatinovivo-site (separato da portale-glv)  
**URL produzione:** https://grecolatinovivo.it  
**URL portale studenti:** https://portale.grecolatinovivo.it

---

## 1. Obiettivo del Sito

Il sito `grecolatinovivo.it` è il sito istituzionale del Centro Nazionale di Studi Classici «GrecoLatinoVivo», fondato a Firenze nel 2015, accreditato MIM (Ministero Istruzione e Merito) e Membro Associato ALTE (Association of Language Testers in Europe).

Il sito svolge quattro funzioni principali:

1. **Vetrina istituzionale** — presenta il Centro, la sua storia, la metodologia, i docenti e le sedi.
2. **Catalogo formativo** — espone l'offerta di 56 corsi asincroni, corsi in diretta, tutoraggio individuale, minicorsi tematici e formazione docenti MIM.
3. **Commercio** — gestisce l'acquisto diretto di corsi live, biglietti per eventi e sessioni di tutoraggio tramite Stripe, e il flusso di abbonamento verso il portale.
4. **Agenda eventi** — pubblica e consente l'iscrizione a convegni, seminari, edizioni del Biduum Latinitatis e workshop.

### Utenti target

| Segmento | Descrizione |
|---|---|
| Studenti adulti | Chi vuole studiare una lingua classica da zero o riprendere gli studi |
| Liceali e universitari | Studenti che cercano supporto nelle lingue classiche curriculari |
| Docenti | Insegnanti che necessitano di formazione MIM accreditata |
| Accademici | Ricercatori e appassionati di filologia, storia antica, epigrafia |
| Genitori | Famiglie che cercano percorsi strutturati per figli in difficoltà (BES/DSA) |

---

## 2. Identità del Centro

| Dato | Valore |
|---|---|
| Nome | Centro Nazionale di Studi Classici «GrecoLatinoVivo» |
| Fondazione | 2015, Firenze |
| Accreditamento | MIM (Ministero Istruzione e Merito) |
| Affiliazione | Membro Associato ALTE |
| Studenti formati | 5.000+ |
| Dipartimenti | 6 |
| Sedi | Firenze (principale), Milano, Torino, Parma, Pordenone |
| Studenti per classe | max 15 |
| Livelli | A1–C2 QCER |
| Corso base | 72h (equivalente biennio liceale) |
| Corsi disponibili | 56 |
| Telefono | +39 345 245 6696 |
| Email | info@grecolatinovivo.it |

### Lingue insegnate

| Lingua | Corsi | Livelli |
|---|---|---|
| Latino | 7 | A1.1–B1.3 |
| Greco Antico | 7 | A1.1–B1.3 |
| Egiziano Antico | 3 | [DA INSERIRE] |
| Ebraico Biblico | 3 | [DA INSERIRE] |
| Sanscrito | [DA INSERIRE] | [DA INSERIRE] |

### Metodo

Metodo Natura — approccio contestuale-induttivo ispirato a Hans Henning Ørberg. La lingua è presentata in contesto d'uso reale, privilegiando comprensione e produzione rispetto all'analisi grammaticale astratta.

### Docenti noti

| Nome | Ruolo |
|---|---|
| Giampiero Marchi | Direttore, responsabile dipartimento Latino |
| Ilaria Cariddi | Responsabile dipartimento Greco Antico |
| Alberto Bibbiani | [DA INSERIRE] |
| Emanuele Viotti | [DA INSERIRE] |

---

## 3. Stack Tecnologico

| Componente | Tecnologia | Versione |
|---|---|---|
| Framework | Next.js App Router | 14.2.3 |
| Linguaggio | TypeScript | 5.x |
| ORM | Prisma | 5.13.0 |
| Database | Neon PostgreSQL | — |
| Pagamenti | Stripe | 15.7.0 |
| Email | Resend | 3.2.0 |
| Auth | JWT (jsonwebtoken) + bcryptjs | 9.0.2 / 2.4.3 |
| PDF | pdfkit + qrcode | 0.15.0 / 1.5.4 |
| CSS | CSS custom properties (no Tailwind, no CSS Modules) | — |
| Deploy | Vercel | — |

**Nota:** il portale `portale.grecolatinovivo.it` usa Next.js Pages Router (legacy). I due progetti sono repository separati e non condividono codice, ma condividono lo stesso database Neon PostgreSQL e lo stesso cookie di autenticazione (`glv_auth`, `domain=.grecolatinovivo.it`).

---

## 4. Struttura Cartelle

```
grecolatinovivo-site/
├── app/                              ← App Router Next.js 14
│   ├── layout.tsx                    ← Root layout: Topbar + Header + Footer
│   ├── page.tsx                      ← Homepage (/)
│   │
│   ├── marketing/                    ← Pagine istituzionali (statiche o SSR)
│   │   ├── chi-siamo/page.tsx        ← /chi-siamo
│   │   ├── metodologia/page.tsx      ← /metodologia  [DA CREARE]
│   │   ├── sedi/page.tsx             ← /sedi          [DA CREARE]
│   │   ├── staff/page.tsx            ← /staff         [DA CREARE]
│   │   ├── faq/page.tsx              ← /faq           [DA CREARE]
│   │   ├── privacy/page.tsx          ← /privacy       [DA CREARE — testo legale DA INSERIRE]
│   │   ├── termini-condizioni/       ← /termini-condizioni [DA CREARE — testo legale DA INSERIRE]
│   │   │   └── page.tsx
│   │   └── contatti/page.tsx         ← /contatti
│   │
│   ├── corsi/                        ← Offerta formativa
│   │   ├── corsi-asincroni/
│   │   │   ├── page.tsx              ← /corsi/corsi-asincroni (catalogo, filtro lato client)
│   │   │   └── [slug]/page.tsx       ← /corsi/corsi-asincroni/[slug] [DA CREARE]
│   │   ├── corsi-live/
│   │   │   ├── page.tsx              ← /corsi/corsi-live (catalogo live)
│   │   │   └── [id]/page.tsx         ← /corsi/corsi-live/[id] [DA CREARE]
│   │   ├── lezioni-individuali/
│   │   │   └── page.tsx              ← /corsi/lezioni-individuali [DA CREARE]
│   │   ├── minicorsi/page.tsx        ← /corsi/minicorsi [DA CREARE]
│   │   └── formazione-docenti/       ← /corsi/formazione-docenti [DA CREARE]
│   │       └── page.tsx
│   │
│   ├── eventi/
│   │   ├── page.tsx                  ← /eventi (lista eventi)
│   │   └── [id]/page.tsx             ← /eventi/[id] [DA CREARE]
│   │
│   ├── commercio/
│   │   ├── abbonamento/page.tsx      ← /commercio/abbonamento (pricing 3 piani)
│   │   └── conferma/page.tsx         ← /commercio/conferma (post-pagamento)
│   │
│   ├── auth/
│   │   └── login/page.tsx            ← /auth/login (login + registrazione inline)
│   │
│   └── api/                          ← API Routes (server-side)
│       ├── auth/
│       │   ├── login/route.ts
│       │   ├── register/route.ts
│       │   └── logout/route.ts
│       ├── stripe/
│       │   ├── checkout/route.ts     ← Crea Stripe Checkout Session
│       │   └── webhook/route.ts      ← Gestisce eventi Stripe (maxDuration: 30)
│       ├── corsi-live/route.ts
│       ├── corsi-asincroni/route.ts
│       ├── eventi/
│       │   ├── route.ts
│       │   └── [id]/
│       │       └── biglietto/route.ts ← Genera biglietto PDF + QR (maxDuration: 30)
│       ├── contatti/route.ts
│       └── config/
│           └── abbonamento/route.ts
│
├── components/
│   └── layout/
│       ├── Topbar.tsx                ← Banda superiore: contatti + link portale
│       ├── Header.tsx                ← Navbar sticky con mega-menu
│       └── Footer.tsx                ← Footer 4 colonne su sfondo #1A1A1A
│       (← ui/ e sections/ da aggiungere in fase 2)
│
├── lib/
│   ├── db.ts                         ← PrismaClient singleton (evita connessioni multiple)
│   ├── auth.ts                       ← JWT sign/verify, cookie helpers, middleware
│   ├── stripe.ts                     ← Stripe instance, price ID helper, checkout builder
│   ├── resend.ts                     ← Template email (conferma, biglietto, tutoraggio)
│   └── pdf.ts                        ← Generazione biglietti PDF con QR code (pdfkit)
│
├── prisma/
│   └── schema.prisma                 ← Schema ESTESO: tabelle portale + 7 nuove tabelle
│
├── styles/
│   └── globals.css                   ← Design system via CSS custom properties :root
│
├── types/
│   └── index.ts                      ← Interfacce TypeScript, costante PLANS, utility
│
├── public/
│   └── fb.jpg                        ← OG image 1200×630 [DA COPIARE dal sito precedente]
│
├── .env.example                      ← Template variabili d'ambiente
├── vercel.json                       ← maxDuration per webhook e PDF, headers
├── next.config.js                    ← Redirects 301 dal vecchio sito statico (SEO)
└── tsconfig.json
```

---

## 5. Percorsi Principali del Sito e Loro Logica

### Percorso 1 — Scoperta istituzionale
**Flusso:** `/` → `/chi-siamo` → `/metodologia` → `/staff` → `/sedi`

Percorso tipico dell'utente che valuta l'affidabilità del Centro prima di iscriversi. Tutte le pagine sono statiche (nessuna richiesta DB), con SSR per i metadata. L'accreditamento MIM e i dati numerici (5.000+ studenti, 6 dipartimenti) sono i principali elementi di fiducia.

### Percorso 2 — Scelta e acquisto del corso
**Flusso:** `/corsi/corsi-asincroni` (o `/corsi/corsi-live`) → `/corsi/[tipo]/[slug|id]` → `/auth/login` → Stripe Checkout → `/commercio/conferma`

Il catalogo asincrono (56 corsi) è filtrato lato client per lingua e livello. Il catalogo live interroga il DB per disponibilità e posti. L'acquisto richiede autenticazione; se l'utente non è loggato viene reindirizzato al login con `redirect` param. Il webhook Stripe (`/api/stripe/webhook`) crea il record di acquisto e invia l'email di conferma tramite Resend.

### Percorso 3 — Abbonamento al portale
**Flusso:** `/commercio/abbonamento` → Stripe Checkout (subscription) → `portale.grecolatinovivo.it/dashboard`

La pagina abbonamento presenta i tre piani (Cultura, Linguae, Accademia) con toggle mensile/annuale. Il checkout Stripe crea una subscription. L'abbonamento viene gestito interamente dal portale; il sito principale funge da landing page commerciale.

### Percorso 4 — Partecipazione agli eventi
**Flusso:** `/eventi` → `/eventi/[id]` → Stripe Checkout (biglietto) → `/commercio/conferma` → email con biglietto PDF allegato

Gli eventi con `isPublished: true` sono visibili nel calendario. Il biglietto PDF generato con pdfkit include un QR code univoco (`GLV-EVT-YYYY-XXXXX`) per la verifica all'ingresso. Gli eventi gratuiti (`priceEur: 0`) saltano il checkout Stripe.

---

## 6. Elenco Pagine da Implementare

| URL canonico | File | Stato | Note |
|---|---|---|---|
| `/` | `app/page.tsx` | [DA VERIFICARE] | Homepage con 5 sezioni |
| `/chi-siamo` | `app/marketing/chi-siamo/page.tsx` | Esistente | |
| `/metodologia` | `app/marketing/metodologia/page.tsx` | [DA CREARE] | Metodo Natura, Ørberg |
| `/sedi` | `app/marketing/sedi/page.tsx` | [DA CREARE] | 5 sedi + mappe [DA INSERIRE] |
| `/staff` | `app/marketing/staff/page.tsx` | [DA CREARE] | Tutti i docenti [DA INSERIRE] |
| `/faq` | `app/marketing/faq/page.tsx` | [DA CREARE] | |
| `/contatti` | `app/marketing/contatti/page.tsx` | Esistente | |
| `/privacy` | `app/marketing/privacy/page.tsx` | [DA CREARE] | Testo legale [DA INSERIRE] |
| `/termini-condizioni` | `app/marketing/termini-condizioni/page.tsx` | [DA CREARE] | Testo legale [DA INSERIRE] |
| `/corsi/corsi-asincroni` | `app/corsi/corsi-asincroni/page.tsx` | Esistente | |
| `/corsi/corsi-asincroni/[slug]` | `app/corsi/corsi-asincroni/[slug]/page.tsx` | [DA CREARE] | |
| `/corsi/corsi-live` | `app/corsi/corsi-live/page.tsx` | Esistente | Dati DB [DA INSERIRE] |
| `/corsi/corsi-live/[id]` | `app/corsi/corsi-live/[id]/page.tsx` | [DA CREARE] | |
| `/corsi/lezioni-individuali` | `app/corsi/lezioni-individuali/page.tsx` | [DA CREARE] | Prezzi [DA INSERIRE] |
| `/corsi/minicorsi` | `app/corsi/minicorsi/page.tsx` | [DA CREARE] | |
| `/corsi/formazione-docenti` | `app/corsi/formazione-docenti/page.tsx` | [DA CREARE] | |
| `/eventi` | `app/eventi/page.tsx` | Esistente | Calendario [DA INSERIRE] |
| `/eventi/[id]` | `app/eventi/[id]/page.tsx` | [DA CREARE] | |
| `/commercio/abbonamento` | `app/commercio/abbonamento/page.tsx` | Esistente | |
| `/commercio/conferma` | `app/commercio/conferma/page.tsx` | Esistente | |
| `/auth/login` | `app/auth/login/page.tsx` | [DA VERIFICARE] | |

---

## 7. Schema Database

Il file `prisma/schema.prisma` estende lo schema del portale aggiungendo 7 nuove tabelle:

| Tabella | Descrizione |
|---|---|
| `Teacher` | Anagrafica docenti centralizzata |
| `LiveCourse` | Corsi in diretta con posti limitati (max 15) |
| `LiveSession` | Singole lezioni pianificate di un corso live |
| `LiveBooking` | Iscrizioni ai corsi live (pagamento Stripe) |
| `TutoringSlot` | Slot disponibili per tutoraggio 1:1 |
| `TutoringBooking` | Prenotazioni tutoraggio con link Zoom |
| `Event` | Convegni, seminari, Biduum, workshop |
| `EventTicket` | Biglietti con codice univoco e QR code |

Le tabelle portale (`User`, `Course`, `Lesson`, `Subscription`, `Purchase`, `LessonProgress`, `Certificate`, `AdminLog`) sono replicate nello schema per le relazioni ma **non devono essere ricreate** con `db push` se il DB è già in uso. Verificare prima con `prisma studio`.

---

## 8. Dipendenze Principali

| Libreria | Versione | Licenza | Uso |
|---|---|---|---|
| next | 14.2.3 | MIT | Framework |
| react | ^18.3.1 | MIT | UI |
| @prisma/client | ^5.13.0 | Apache-2.0 | ORM |
| stripe | ^15.7.0 | MIT | Pagamenti |
| bcryptjs | ^2.4.3 | MIT | Hash password |
| jsonwebtoken | ^9.0.2 | MIT | Auth JWT |
| resend | ^3.2.0 | MIT | Email transazionali |
| pdfkit | ^0.15.0 | MIT | PDF biglietti eventi |
| qrcode | ^1.5.4 | MIT | QR code biglietti |
| cookie | ^0.6.0 | MIT | Parsing cookie |

---

## 9. Come Avviare in Locale

```bash
# 1. Clonare il repository
git clone [DA INSERIRE — URL repository GitHub]
cd grecolatinovivo-site

# 2. Installare le dipendenze
npm install

# 3. Configurare le variabili d'ambiente
cp .env.example .env
# Compilare .env (vedere Sezione 10)

# 4. Generare il Prisma Client
npx prisma generate

# 5. Applicare le nuove tabelle al DB
# ATTENZIONE: fare backup del DB Neon prima se è già in uso in produzione
npx prisma db push

# 6. Avviare il server di sviluppo (porta 3001 per non collidere col portale su 3000)
npm run dev -- --port 3001
# → http://localhost:3001

# 7. (Opzionale) Ascoltare gli eventi Stripe in sviluppo
stripe listen --forward-to localhost:3001/api/stripe/webhook
```

### Build produzione

```bash
npm run build
npm run start
```

---

## 10. Variabili d'Ambiente

Copiare `.env.example` in `.env` e compilare tutti i campi. Il file `.env` non deve mai essere committato su Git.

### Database

```
DATABASE_URL="postgresql://user:password@ep-xxx.eu-central-1.aws.neon.tech/neondb?sslmode=require"
```

Stesso database Neon PostgreSQL del portale. In sviluppo locale è possibile usare una istanza Neon separata oppure PostgreSQL locale.

### Auth

```
JWT_SECRET="[DA INSERIRE — stringa random min 32 caratteri, es: openssl rand -hex 32]"
COOKIE_DOMAIN=".grecolatinovivo.it"
# In sviluppo locale: COOKIE_DOMAIN="localhost"
```

Il `JWT_SECRET` deve essere identico a quello configurato nel portale, per condividere l'autenticazione tramite cookie `glv_auth` con `domain=.grecolatinovivo.it`.

### Stripe

```
STRIPE_SECRET_KEY="sk_live_[DA INSERIRE]"
STRIPE_WEBHOOK_SECRET="whsec_[DA INSERIRE]"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_[DA INSERIRE]"

STRIPE_PRICE_CULTURA_MONTHLY="price_[DA INSERIRE]"
STRIPE_PRICE_CULTURA_ANNUAL="price_[DA INSERIRE]"
STRIPE_PRICE_LINGUAE_MONTHLY="price_[DA INSERIRE]"
STRIPE_PRICE_LINGUAE_ANNUAL="price_[DA INSERIRE]"
STRIPE_PRICE_ACCADEMIA_MONTHLY="price_[DA INSERIRE]"
STRIPE_PRICE_ACCADEMIA_ANNUAL="price_[DA INSERIRE]"
```

In sviluppo usare le chiavi `sk_test_` / `pk_test_`. Il webhook Stripe deve essere configurato come endpoint separato nella Stripe Dashboard (l'altro endpoint è già configurato per il portale).

### Email

```
RESEND_API_KEY="re_[DA INSERIRE]"
RESEND_FROM_EMAIL="noreply@grecolatinovivo.it"
RESEND_REPLY_TO="info@grecolatinovivo.it"
```

### App

```
NEXT_PUBLIC_APP_URL="https://grecolatinovivo.it"
NEXT_PUBLIC_PORTALE_URL="https://portale.grecolatinovivo.it"
# In sviluppo: NEXT_PUBLIC_APP_URL="http://localhost:3001"
```

---

## 11. Deploy su Vercel

```bash
# 1. Creare un nuovo progetto Vercel dal repository GitHub
#    (repository separato da portale-glv)

# 2. Impostare tutte le variabili d'ambiente nella dashboard Vercel
#    (Environment: Production, Preview, Development)

# 3. Impostare il dominio personalizzato: grecolatinovivo.it

# 4. Aggiungere endpoint webhook nella Stripe Dashboard:
#    URL: https://grecolatinovivo.it/api/stripe/webhook
#    Evento: checkout.session.completed

# 5. Prima del go-live: backup Neon DB, poi eseguire:
#    npx prisma db push
```

Il file `vercel.json` imposta `maxDuration: 30` per le API route `/api/stripe/webhook` e `/api/eventi/[id]/biglietto` (il default Vercel di 10s è insufficiente per pdfkit e per la generazione dei QR code).

---

## 12. Decisioni Architetturali Rilevanti

**App Router vs Pages Router.** Il portale usa Pages Router (legacy). Il sito principale usa App Router (Next.js 14). I due progetti sono completamente separati: nessuna condivisione di codice, stesse credenziali DB e Auth.

**CSS inline, nessun framework CSS.** Per coerenza con il portale (decisione del Council). Il design system è definito in `styles/globals.css` tramite custom properties `:root`. Ogni componente React porta il suo blocco `<style>` JSX per regole specifiche. Nessun Tailwind, nessun CSS Modules.

**Schema Prisma condiviso.** Lo schema include tutte le tabelle (portale + nuove) per abilitare le relazioni cross-table (es. `LiveBooking → User`). Il comando `db push` aggiunge solo le tabelle mancanti. Non modificare mai le tabelle portale da questo schema.

**Auth condivisa.** Cookie `glv_auth` httpOnly con `domain=.grecolatinovivo.it`. Il JWT_SECRET deve essere identico in entrambi i progetti. In sviluppo locale impostare `COOKIE_DOMAIN=localhost`.

**Stripe webhook separato.** Il sito principale gestisce: `corso_live`, `corso_asincrono`, `biglietto_evento`, `tutoraggio`. Il portale gestisce: `abbonamento` (subscription). Configurare due endpoint separati nella Stripe Dashboard.

**Redirects SEO.** `next.config.js` contiene redirect 301 da tutti gli URL `.html` del vecchio sito statico verso le nuove route. Questo preserva il posizionamento SEO acquisito.

---

## 13. Limitazioni Note (da Risolvere Prima del Go-Live)

| Limitazione | Priorità | Responsabile |
|---|---|---|
| Dati docenti incompleti (ruoli Bibbiani, Viotti; bio; foto) | Alta | Giampiero Marchi |
| Calendario corsi live 2025/2026 vuoto nel DB | Alta | Giampiero Marchi |
| Calendario eventi 2025/2026 vuoto nel DB | Alta | Giampiero Marchi |
| Prezzi tutoraggio 1:1 non definiti | Alta | Giampiero Marchi |
| Prezzi corsi live non definiti | Alta | Giampiero Marchi |
| Numero corsi Sanscrito da confermare | Alta | Giampiero Marchi |
| OG image `/public/fb.jpg` da copiare dal sito precedente | Bassa | Developer |
| Pagine marketing mancanti (metodologia, sedi, faq, staff) | Media | Developer |
| Testi privacy policy e termini di servizio | Alta | Legale |
| Mappe sedi da integrare | Media | Developer |
