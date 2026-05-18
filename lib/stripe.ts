// Istanza Stripe — lazy singleton, non crasha al build se STRIPE_SECRET_KEY non è configurata
import Stripe from 'stripe'

let _stripe: Stripe | null = null

export function getStripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY
    if (!key) throw new Error('STRIPE_SECRET_KEY non configurata')
    _stripe = new Stripe(key, {
      apiVersion: '2024-04-10',
      typescript: true,
    })
  }
  return _stripe
}

// Alias per retrocompatibilità — usa un Proxy così l'accesso a stripe.xxx
// chiama getStripe() solo a runtime, non al momento dell'import
export const stripe: Stripe = new Proxy({} as Stripe, {
  get(_target, prop) {
    return (getStripe() as unknown as Record<string | symbol, unknown>)[prop]
  },
})

// Tipi di checkout gestiti dal sito principale
export type CheckoutType = 'corso_live' | 'corso_asincrono' | 'biglietto_evento' | 'tutoraggio' | 'abbonamento'

// Prezzi abbonamento dal .env (identici al portale per condivisione)
export function getSubscriptionPriceId(plan: string, period: 'monthly' | 'annual'): string {
  const key = `STRIPE_PRICE_${plan.toUpperCase()}_${period.toUpperCase()}`
  const priceId = process.env[key]
  if (!priceId) throw new Error(`Price ID mancante per ${key}`)
  return priceId
}
