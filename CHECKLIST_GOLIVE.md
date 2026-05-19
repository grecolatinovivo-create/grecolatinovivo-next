# Checklist Go-Live — GrecoLatinoVivo

## Stato attuale
- Sito: deployment Vercel (dominio temporaneo)
- Stripe: chiavi TEST — funziona ma non incassa soldi reali
- Da fare prima del go-live su grecolatinovivo.it

---

## 1. Variabili d'ambiente Vercel (sostituire con valori live)

| Variabile | Stato | Note |
|-----------|-------|------|
| `STRIPE_SECRET_KEY` | ✅ inserita | **Sostituire con chiave LIVE** (`sk_live_...`) |
| `STRIPE_WEBHOOK_SECRET` | ✅ inserita | **Ricreare il webhook su dominio reale** (vedi §3) |
| `NEXT_PUBLIC_SITE_URL` | ❌ mancante | Aggiungere: `https://grecolatinovivo.it` |

---

## 2. Dominio

- [ ] Puntare `grecolatinovivo.it` a Vercel (DNS → CNAME o A record)
- [ ] Verificare che `portale.grecolatinovivo.it` rimanga invariato (CNAME già su ServerPlan)

---

## 3. Webhook Stripe (da rifare dopo il dominio)

Passaggi:
1. Dashboard Stripe → Developers → Webhooks → **Add endpoint**
2. URL: `https://grecolatinovivo.it/api/stripe/webhook`
3. Evento da ascoltare: `checkout.session.completed`
4. Copiare il **Signing secret** (`whsec_...`)
5. Aggiornare `STRIPE_WEBHOOK_SECRET` su Vercel con il nuovo valore
6. **Redeploy**

---

---

## 5. Email (opzionale al go-live, da aggiungere presto)

| Variabile | Note |
|-----------|------|
| `RESEND_API_KEY` | Chiave API Resend — per invio email post-acquisto |

Senza questa variabile il pagamento funziona, ma l'acquirente **non riceve email** di conferma.

---

## 6. Recensioni corsi

Le pagine corsi mostrano placeholder "In arrivo".
Per aggiungere recensioni reali: aprire `app/corsi/corsi-asincroni/[slug]/page.tsx` e popolare:

```ts
const RECENSIONI_CORSO: Recensione[] = [
  { nome: 'Mario R.', stelle: 5, testo: 'Corso eccellente...', data: 'maggio 2026' },
]
```

---

## 7. Ordine operazioni go-live

1. Aggiungere `NEXT_PUBLIC_SITE_URL` su Vercel
2. Configurare DNS dominio → Vercel
3. Ricreare webhook Stripe su dominio reale
4. Sostituire `STRIPE_SECRET_KEY` con chiave live
5. Aggiornare `STRIPE_WEBHOOK_SECRET` con signing secret del nuovo webhook
6. Redeploy
7. Test pagamento con carta reale (piccolo importo, es. breve-marziale €29)
8. Aggiungere `RESEND_API_KEY` per attivare le email

---

*Aggiornato: maggio 2026*
