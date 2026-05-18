// Istanza Stripe singleton
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
  typescript: true,
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
