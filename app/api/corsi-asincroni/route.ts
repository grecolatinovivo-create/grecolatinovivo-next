// GET /api/corsi-asincroni
// Ritorna la lista dei corsi asincroni dal DB condiviso con il portale
// Query params: lang, level, page, limit
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const lang = searchParams.get('lang')
  const level = searchParams.get('level')
  const page = parseInt(searchParams.get('page') ?? '1', 10)
  const limit = parseInt(searchParams.get('limit') ?? '20', 10)

  try {
    const where: Record<string, unknown> = { isActive: true }

    // Filtro lingua (case-insensitive partial match)
    if (lang) {
      where.lang = { contains: lang, mode: 'insensitive' }
    }
    // Filtro livello
    if (level) {
      where.level = { contains: level, mode: 'insensitive' }
    }

    const [courses, total] = await Promise.all([
      prisma.course.findMany({
        where,
        orderBy: { title: 'asc' },
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          slug: true,
          title: true,
          description: true,
          lang: true,
          level: true,
          teacherName: true,
          priceEur: true,
          durationMin: true,
          // Conta solo le lezioni gratuite (anteprima senza login)
          lessons: {
            where: { isFree: true },
            select: { id: true, title: true, durationMin: true },
            orderBy: { sortOrder: 'asc' },
          },
        },
      }),
      prisma.course.count({ where }),
    ])

    return NextResponse.json({ courses, total, page, limit })
  } catch (err) {
    console.error('[/api/corsi-asincroni]', err)
    return NextResponse.json({ error: 'Errore del server.' }, { status: 500 })
  }
}
