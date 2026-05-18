export const dynamic = 'force-dynamic'

// POST /api/stripe/webhook
// Gestisce gli eventi Stripe dopo il pagamento
// maxDuration: 30s (configurato in vercel.json)
// IMPORTANTE: questo endpoint NON richiede autenticazione JWT —
// usa la firma Stripe (STRIPE_WEBHOOK_SECRET)
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/db'
import {
  sendLiveBookingConfirmation,
  sendCourseAccessEmail,
  sendEventTicketEmail,
  sendTutoringConfirmation,
} from '@/lib/resend'
import { generateEventTicketPDF, generateTicketCode } from '@/lib/pdf'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Firma webhook mancante.' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error('[webhook] Firma non valida:', err)
    return NextResponse.json({ error: 'Firma webhook non valida.' }, { status: 400 })
  }

  // Gestisci solo i checkout completati
  if (event.type !== 'checkout.session.completed') {
    return NextResponse.json({ received: true })
  }

  const session = event.data.object as Stripe.Checkout.Session
  const meta = session.metadata ?? {}

  try {
    switch (meta.type) {

      case 'corso_live': {
        const { userId, liveCourseId } = meta
        const user = await prisma.user.findUnique({ where: { id: userId } })
        const course = await prisma.liveCourse.findUnique({
          where: { id: liveCourseId },
          include: { teacher: true, sessions: { orderBy: { sortOrder: 'asc' }, take: 1 } },
        })
        if (!user || !course) break

        await prisma.liveBooking.upsert({
          where: { userId_liveCourseId: { userId, liveCourseId } },
          create: {
            userId,
            liveCourseId,
            stripePaymentId: session.payment_intent as string,
            status: 'confirmed',
          },
          update: { status: 'confirmed' },
        })

        const firstSession = course.sessions[0]
        await sendLiveBookingConfirmation({
          to: user.email,
          name: user.name,
          courseTitle: course.title,
          teacherName: course.teacher.name,
          sessionDate: firstSession
            ? new Date(firstSession.scheduledAt).toLocaleString('it-IT')
            : '[DA INSERIRE]',
          zoomUrl: firstSession?.zoomUrl ?? undefined,
        })
        break
      }

      case 'corso_asincrono': {
        const { userId, courseId } = meta
        const user = await prisma.user.findUnique({ where: { id: userId } })
        const course = await prisma.course.findUnique({ where: { id: courseId } })
        if (!user || !course) break

        await prisma.purchase.upsert({
          where: { stripePaymentId: session.payment_intent as string },
          create: {
            userId,
            courseId,
            stripePaymentId: session.payment_intent as string,
            amountEur: course.priceEur,
          },
          update: {},
        })

        const portaleUrl = process.env.NEXT_PUBLIC_PORTALE_URL ?? 'https://portale.grecolatinovivo.it'
        await sendCourseAccessEmail({
          to: user.email,
          name: user.name,
          courseTitle: course.title,
          portalUrl: `${portaleUrl}/dashboard`,
        })
        break
      }

      case 'biglietto_evento': {
        const { userId, eventId } = meta
        const user = await prisma.user.findUnique({ where: { id: userId } })
        const eventData = await prisma.event.findUnique({ where: { id: eventId } })
        if (!user || !eventData) break

        const ticketCode = generateTicketCode(eventId)

        const ticket = await prisma.eventTicket.upsert({
          where: { userId_eventId: { userId, eventId } },
          create: {
            ticketCode,
            userId,
            eventId,
            stripePaymentId: session.payment_intent as string,
          },
          update: {},
        })

        // Genera PDF biglietto con QR code
        const pdfBuffer = await generateEventTicketPDF({
          ticketCode: ticket.ticketCode,
          eventTitle: eventData.title,
          eventDate: new Date(eventData.startsAt).toLocaleString('it-IT'),
          eventLocation: eventData.location,
          holderName: user.name,
          holderEmail: user.email,
        })

        await sendEventTicketEmail({
          to: user.email,
          name: user.name,
          eventTitle: eventData.title,
          eventDate: new Date(eventData.startsAt).toLocaleString('it-IT'),
          eventLocation: eventData.location,
          ticketCode: ticket.ticketCode,
          pdfBuffer,
        })
        break
      }

      case 'tutoraggio': {
        const { userId, slotId } = meta
        const user = await prisma.user.findUnique({ where: { id: userId } })
        const slot = await prisma.tutoringSlot.findUnique({
          where: { id: slotId },
          include: { teacher: true },
        })
        if (!user || !slot) break

        await prisma.$transaction([
          prisma.tutoringSlot.update({ where: { id: slotId }, data: { isBooked: true } }),
          prisma.tutoringBooking.upsert({
            where: { slotId },
            create: {
              userId,
              slotId,
              stripePaymentId: session.payment_intent as string,
              status: 'confirmed',
            },
            update: { status: 'confirmed' },
          }),
        ])

        await sendTutoringConfirmation({
          to: user.email,
          name: user.name,
          teacherName: slot.teacher.name,
          slotDate: new Date(slot.startAt).toLocaleString('it-IT'),
          durationMin: slot.durationMin,
        })
        break
      }

      default:
        // Abbonamenti — gestiti dal portale (stesso DB, stesso webhook Stripe)
        // Non duplicare la logica qui: il portale ha già il suo webhook handler
        console.log('[webhook] Evento non gestito in questo webhook:', meta.type)
    }

    return NextResponse.json({ received: true })

  } catch (err) {
    console.error('[webhook] Errore elaborazione:', err)
    // Restituisce 200 a Stripe per evitare retry — l'errore è loggato
    return NextResponse.json({ received: true, warning: 'Errore interno elaborazione' })
  }
}

// In App Router il body viene letto via req.text() — nessuna config necessaria.
// (La sintassi `export const config` è Pages Router — non usarla qui.)
// Vercel funzione con maxDuration: 30 configurato in vercel.json
