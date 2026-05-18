// GET /api/eventi/[id]/biglietto
// Scarica il PDF del biglietto per l'utente autenticato
// maxDuration: 30s (configurato in vercel.json)
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUserFromRequest } from '@/lib/auth'
import { generateEventTicketPDF } from '@/lib/pdf'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const user = getUserFromRequest(req)
  if (!user) {
    return NextResponse.json({ error: 'Accesso richiesto.' }, { status: 401 })
  }

  try {
    const ticket = await prisma.eventTicket.findUnique({
      where: { userId_eventId: { userId: user.userId, eventId: params.id } },
      include: { event: true },
    })

    if (!ticket || ticket.revokedAt) {
      return NextResponse.json({ error: 'Biglietto non trovato.' }, { status: 404 })
    }

    const userData = await prisma.user.findUnique({ where: { id: user.userId } })
    if (!userData) {
      return NextResponse.json({ error: 'Utente non trovato.' }, { status: 404 })
    }

    const pdfBuffer = await generateEventTicketPDF({
      ticketCode: ticket.ticketCode,
      eventTitle: ticket.event.title,
      eventDate: new Date(ticket.event.startsAt).toLocaleString('it-IT'),
      eventLocation: ticket.event.location,
      holderName: userData.name,
      holderEmail: userData.email,
    })

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="biglietto-${ticket.ticketCode}.pdf"`,
        'Content-Length': pdfBuffer.length.toString(),
      },
    })
  } catch (err) {
    console.error('[/api/eventi/biglietto]', err)
    return NextResponse.json({ error: 'Errore generazione biglietto.' }, { status: 500 })
  }
}
