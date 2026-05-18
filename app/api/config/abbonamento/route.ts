export const dynamic = 'force-dynamic'

// GET /api/config/abbonamento
// Restituisce i Price ID Stripe per i 3 piani abbonamento
// Usato dal frontend per avviare il checkout con il priceId corretto
// (pattern identico a /api/config/prices del portale)
import { NextResponse } from 'next/server'

export async function GET() {
  const plans = ['cultura', 'linguae', 'accademia']
  const periods = ['monthly', 'annual']

  const config: Record<string, string | null> = {}
  for (const plan of plans) {
    for (const period of periods) {
      const key = `STRIPE_PRICE_${plan.toUpperCase()}_${period.toUpperCase()}`
      config[`${plan}_${period}`] = process.env[key] ?? null
    }
  }

  // Non esporre i Price ID mancanti in produzione — solo segnalare OK/MISSING
  const status = Object.entries(config).reduce((acc, [k, v]) => {
    acc[k] = v ? 'configured' : 'MISSING'
    return acc
  }, {} as Record<string, string>)

  return NextResponse.json({ status })
}
