// GET /api/corsi-live
// Lista corsi live attivi con docenti e sessioni future
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const lang = searchParams.get('lang')
  const level = searchParams.get('level')

  try {
    const where: Record<string, unknown> = { isActive: true }
    if (lang) where.lang = { contains: lang, mode: 'insensitive' }
    if (level) where.level = { contains: level, mode: 'insensitive' }

    const courses = await prisma.liveCourse.findMany({
      where,
      include: {
        teacher: true,
        sessions: {
          where: { scheduledAt: { gte: new Date() } },
          orderBy: { scheduledAt: 'asc' },
        },
        _count: { select: { bookings: { where: { status: 'confirmed' } } } },
      },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ courses })
  } catch (err) {
    console.error('[/api/corsi-live]', err)
    return NextResponse.json({ error: 'Errore del server.' }, { status: 500 })
  }
}
