# TECH_NOTES — GrecoLatinoVivo Site
*Prodotto da: DEV — pipeline agent-orchestra — 18 maggio 2026*

---

## Stack tecnologico

| Componente | Scelta | Motivazione |
|---|---|---|
| Framework | Next.js 14.2.3 App Router | SSR/SSG ibrido; API routes native; next/font per GDPR |
| Linguaggio | TypeScript 5.4 | Type safety su tutta la codebase |
| Database ORM | Prisma 5.13 + PostgreSQL | Schema condiviso con portale.grecolatinovivo.it |
| Pagamenti | Stripe 15.7 | Checkout, webhook, abbonamenti |
| Email | Resend 3.2 | Conferme iscrizione, biglietti eventi |
| PDF | pdfkit 0.15 | Generazione biglietti e attestati |
| Auth | bcryptjs + jsonwebtoken + cookie httpOnly | Sessione condivisa via cookie `.grecolatinovivo.it` |
| Deploy | Vercel | Preview branch, edge functions, CDN globale |

---

## Design system — cambiamenti rispetto al commit precedente

| Token | Valore vecchio | Valore nuovo | Motivazione |
|---|---|---|---|
| `--primary` | `#8B1A1A` (bordeaux) | `#1B3A6B` (navy) | Stile istituzionale (COUNCIL.md dec. 1) |
| `--primary-dark` | `#6B1313` | `#122B52` | Hover navy scuro |
| `--primary-light` | `rgba(139,26,26,0.07)` | `rgba(27,58,107,0.07)` | Badge background |
| `--bg` | `#FAFAF7` (parchment) | `#FFFFFF` (bianco) | Background pulito istituzionale |
| `--dark` | `#1A1A1A` (quasi-nero) | `#1A2A4A` (navy scuro) | Hero e footer — non più Netflix-black |
| `--light-section` | `#F5F0E8` (beige) | `#F4F6F8` (grigio freddo) | Sezioni alternate istituzionali |
| `--border` | `#E8E0D0` (caldo) | `#DDE3ED` (grigio-blu) | Coerente col navy |
| `--text` | `#3A3A3A` | `#1A2A3A` | Testo freddo, più leggibile su bianco |
| `--text-light` | `#6B6B6B` | `#5A6A7A` | Caption fredda |
| Font loading | Google Fonts CDN | `next/font/google` (self-hosted) | GDPR fix (COUNCIL.md dec. 2) |

---

## Font — migrazione GDPR

**Prima:** `@import url('https://fonts.googleapis.com/...')` in globals.css
**Dopo:** `next/font/google` in `app/layout.tsx`

```typescript
import { Playfair_Display, Inter } from 'next/font/google'
const playfair = Playfair_Display({ variable: '--font-playfair', ... })
const inter = Inter({ variable: '--font-inter', ... })
```

I font vengono scaricati a **build time** e serviti da `/public/_next/static/` — zero chiamate Google a runtime. Conformità GDPR garantita (sentenza LG München 3 O 17493/20).

---

## Componente PricingToggle

**Prima:** `dangerouslySetInnerHTML` con script vanilla JS in `app/page.tsx`
**Dopo:** `components/sections/PricingToggle.tsx` — React client component con `useState`

Il toggle mensile/annuale è ora type-safe, testabile e non dipende da classi CSS globali per la logica funzionale. Ref: QA_REPORT.md fix #1.

---

## Struttura cartelle

```
grecolatinovivo-site/
├── app/
│   ├── api/                    # API routes (NON modificate in questo commit)
│   │   ├── auth/ (login, logout, register)
│   │   ├── corsi-live/
│   │   ├── corsi-asincroni/
│   │   ├── eventi/[id]/biglietto/
│   │   ├── stripe/ (checkout, webhook)
│   │   └── contatti/
│   ├── auth/login/             # Pagina login
│   ├── commercio/              # Abbonamento, conferma pagamento
│   ├── corsi/                  # Corsi live, asincroni, lezioni individuali
│   ├── eventi/                 # Lista eventi + detail
│   ├── marketing/              # Chi siamo, metodologia, staff, sedi, faq, contatti
│   ├── layout.tsx              # Root layout con next/font
│   └── page.tsx                # Homepage
├── components/
│   ├── layout/                 # Header, Footer, Topbar
│   └── sections/               # PricingToggle (nuovo)
├── lib/                        # auth.ts, db.ts, pdf.ts, resend.ts, stripe.ts
├── prisma/schema.prisma
├── styles/globals.css
├── types/index.ts              # Interfaces + PLANS constant
└── vercel.json
```

---

## Avvio locale

```bash
# 1. Installa dipendenze (genera anche il client Prisma via postinstall)
npm install

# 2. Copia le variabili d'ambiente
cp .env.example .env.local
# Compila DATABASE_URL, JWT_SECRET, STRIPE_*, RESEND_API_KEY

# 3. Avvia il dev server
npm run dev
```

## Deploy su Vercel

1. Importa il repo su Vercel
2. Imposta le variabili d'ambiente nel dashboard Vercel
3. Il `postinstall: prisma generate` viene eseguito automaticamente dopo `npm install`
4. Il `buildCommand: npm run build` costruisce il sito

---

## Variabili d'ambiente richieste

```
DATABASE_URL=postgresql://...
JWT_SECRET=...
COOKIE_DOMAIN=.grecolatinovivo.it
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
RESEND_API_KEY=re_...
NEXT_PUBLIC_PORTALE_URL=https://portale.grecolatinovivo.it
```

---

## Problemi aperti (pre-go-live)

| # | Problema | Priorità | Note |
|---|---|---|---|
| 1 | Cookie banner GDPR non implementato | Alta | Necessario prima del deploy in produzione |
| 2 | Privacy Policy e Termini di servizio: pagine vuote | Alta | Contenuto legale [DA INSERIRE] |
| 3 | Docenti Alberto Bibbiani ed Emanuele Viotti: ruoli [DA INSERIRE] | Media | Confermare con Giampiero Marchi |
| 4 | Corsi Sanscrito: numero [DA INSERIRE] | Media | Verificare con il dipartimento |
| 5 | Immagine OG `/fb.jpg` non presente in `/public/` | Media | Aggiungere prima del deploy |
| 6 | Pagine vuote: metodologia, staff, sedi, faq, minicorsi, lezioni-individuali, formazione-docenti | Media | Struttura URL pronta, contenuto mancante |
| 7 | Pagine vuote: corsi-live/[id], corsi-asincroni/[slug], eventi/[id] | Alta | Dynamic routes con dati Prisma |
