// GET /api/eventi
// Lista eventi pubblicati, ordinati per data
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const upcoming = searchParams.get('upcoming') !== 'false' // default: solo eventi futuri

  try {
    const where: Record<string, unknown> = { isPublished: true }
    if (upcoming) {
      where.startsAt = { gte: new Date() }
    }

    const events = await prisma.event.findMany({
      where,
      orderBy: { startsAt: 'asc' },
      include: {
        _count: { select: { tickets: { where: { revokedAt: null } } } },
      },
    })

    return NextResponse.json({ events })
  } catch (err) {
    console.error('[/api/eventi]', err)
    return NextResponse.json({ error: 'Errore del server.' }, { status: 500 })
  }
}
