export const dynamic = 'force-dynamic'

// POST /api/stripe/checkout
// Crea una sessione Stripe Checkout per:
//   - corso_live: pagamento singolo iscrizione
//   - corso_asincrono: acquisto accesso permanente
//   - biglietto_evento: acquisto biglietto evento
//   - tutoraggio: prenotazione slot 1:1
//   - abbonamento: subscription Cultura/Linguae/Accademia
import { NextRequest, NextResponse } from 'next/server'
import { stripe, getSubscriptionPriceId } from '@/lib/stripe'
import { prisma } from '@/lib/db'
import { getUserFromRequest } from '@/lib/auth'
import type { CheckoutRequest } from '@/types'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://grecolatinovivo.it'
const PORTALE_URL = process.env.NEXT_PUBLIC_PORTALE_URL ?? 'https://portale.grecolatinovivo.it'

export async function POST(req: NextRequest) {
  try {
    const user = getUserFromRequest(req)
    if (!user) {
      return NextResponse.json({ error: 'Accesso richiesto. Effettua il login per continuare.' }, { status: 401 })
    }

    const body: CheckoutRequest = await req.json()
    const { type, itemId, period } = body

    let session

    switch (type) {

      case 'abbonamento': {
        if (!period) {
          return NextResponse.json({ error: 'Specificare il periodo (monthly/annual).' }, { status: 400 })
        }
        const priceId = getSubscriptionPriceId(itemId, period)
        session = await stripe.checkout.sessions.create({
          mode: 'subscription',
          payment_method_types: ['card'],
          line_items: [{ price: priceId, quantity: 1 }],
          success_url: `${PORTALE_URL}/dashboard?checkout=success&plan=${itemId}`,
          cancel_url: `${APP_URL}/commercio/abbonamento?cancelled=1`,
          metadata: { type, userId: user.userId, plan: itemId, period },
          customer_email: user.email,
        })
        break
      }

      case 'corso_live': {
        const course = await prisma.liveCourse.findUnique({
          where: { id: itemId },
          include: { teacher: true },
        })
        if (!course || !course.isActive) {
          return NextResponse.json({ error: 'Corso non trovato o non disponibile.' }, { status: 404 })
        }
        // Verifica capienza
        const bookingCount = await prisma.liveBooking.count({
          where: { liveCourseId: itemId, status: 'confirmed' },
        })
        if (bookingCount >= course.maxStudents) {
          return NextResponse.json({ error: 'Spiacente, il corso è al completo.' }, { status: 409 })
        }
        // Verifica doppia iscrizione
        const existing = await prisma.liveBooking.findUnique({
          where: { userId_liveCourseId: { userId: user.userId, liveCourseId: itemId } },
        })
        if (existing) {
          return NextResponse.json({ error: 'Sei già iscritto a questo corso.', redirect: `${APP_URL}/commercio/conferma?type=corso_live` }, { status: 409 })
        }
        session = await stripe.checkout.sessions.create({
          mode: 'payment',
          payment_method_types: ['card'],
          line_items: [{
            price_data: {
              currency: 'eur',
              unit_amount: course.priceEur,
              product_data: {
                name: course.title,
                description: `Corso in diretta · ${course.lang} · Livello ${course.level}`,
              },
            },
            quantity: 1,
          }],
          success_url: `${APP_URL}/commercio/conferma?type=corso_live&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${APP_URL}/corsi/corsi-live/${itemId}?cancelled=1`,
          metadata: { type, userId: user.userId, liveCourseId: itemId },
          customer_email: user.email,
        })
        break
      }

      case 'corso_asincrono': {
        const course = await prisma.course.findUnique({ where: { id: itemId } })
        if (!course || !course.isActive) {
          return NextResponse.json({ error: 'Corso non trovato.' }, { status: 404 })
        }
        // Verifica acquisto esistente
        const existing = await prisma.purchase.findFirst({
          where: { userId: user.userId, courseId: itemId },
        })
        if (existing) {
          return NextResponse.json({ error: 'Hai già acquistato questo corso.', redirect: PORTALE_URL }, { status: 409 })
        }
        session = await stripe.checkout.sessions.create({
          mode: 'payment',
          payment_method_types: ['card'],
          line_items: [{
            price_data: {
              currency: 'eur',
              unit_amount: course.priceEur,
              product_data: {
                name: course.title,
                description: `Corso asincrono · ${course.lang} · Livello ${course.level} · Accesso a vita`,
              },
            },
            quantity: 1,
          }],
          success_url: `${APP_URL}/commercio/conferma?type=corso_asincrono&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${APP_URL}/corsi/corsi-asincroni/${course.slug}?cancelled=1`,
          metadata: { type, userId: user.userId, courseId: itemId },
          customer_email: user.email,
        })
        break
      }

      case 'biglietto_evento': {
        const event = await prisma.event.findUnique({ where: { id: itemId } })
        if (!event || !event.isPublished) {
          return NextResponse.json({ error: 'Evento non trovato.' }, { status: 404 })
        }
        // Verifica biglietto esistente
        const existingTicket = await prisma.eventTicket.findUnique({
          where: { userId_eventId: { userId: user.userId, eventId: itemId } },
        })
        if (existingTicket) {
          return NextResponse.json({ error: 'Hai già un biglietto per questo evento.', redirect: `${APP_URL}/commercio/conferma?type=biglietto_evento` }, { status: 409 })
        }
        // Verifica disponibilità posti
        const ticketCount = await prisma.eventTicket.count({ where: { eventId: itemId, revokedAt: null } })
        if (ticketCount >= event.maxTickets) {
          return NextResponse.json({ error: 'Spiacente, i biglietti sono esauriti.' }, { status: 409 })
        }
        session = await stripe.checkout.sessions.create({
          mode: 'payment',
          payment_method_types: ['card'],
          line_items: [{
            price_data: {
              currency: 'eur',
              unit_amount: event.priceEur,
              product_data: {
                name: event.title,
                description: `${event.eventType} · ${event.location}`,
              },
            },
            quantity: 1,
          }],
          success_url: `${APP_URL}/commercio/conferma?type=biglietto_evento&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${APP_URL}/eventi/${itemId}?cancelled=1`,
          metadata: { type, userId: user.userId, eventId: itemId },
          customer_email: user.email,
        })
        break
      }

      case 'tutoraggio': {
        const slot = await prisma.tutoringSlot.findUnique({
          where: { id: itemId },
          include: { teacher: true },
        })
        if (!slot || slot.isBooked) {
          return NextResponse.json({ error: 'Slot non disponibile. Scegline un altro.' }, { status: 409 })
        }
        session = await stripe.checkout.sessions.create({
          mode: 'payment',
          payment_method_types: ['card'],
          line_items: [{
            price_data: {
              currency: 'eur',
              unit_amount: slot.priceEur,
              product_data: {
                name: `Tutoraggio con ${slot.teacher.name}`,
                description: `${slot.durationMin} minuti · ${new Date(slot.startAt).toLocaleDateString('it-IT')}`,
              },
            },
            quantity: 1,
          }],
          success_url: `${APP_URL}/commercio/conferma?type=tutoraggio&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${APP_URL}/corsi/lezioni-individuali?cancelled=1`,
          metadata: { type, userId: user.userId, slotId: itemId },
          customer_email: user.email,
        })
        break
      }

      default:
        return NextResponse.json({ error: 'Tipo di checkout non supportato.' }, { status: 400 })
    }

    return NextResponse.json({ url: session.url })

  } catch (err) {
    console.error('[/api/stripe/checkout]', err)
    return NextResponse.json({ error: 'Il pagamento non è andato a buon fine. Riprova più tardi.' }, { status: 500 })
  }
}
