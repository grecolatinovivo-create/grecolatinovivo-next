// POST /api/auth/register
// Registra un nuovo utente — crea il record nel DB condiviso con il portale
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/db'
import { signToken, buildCookieOptions, COOKIE_NAME } from '@/lib/auth'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, password, name } = body

    if (!email || !password || !name) {
      return NextResponse.json({ error: 'Nome, email e password sono obbligatori.' }, { status: 400 })
    }

    if (password.length < 8) {
      return NextResponse.json({ error: 'La password deve essere di almeno 8 caratteri.' }, { status: 400 })
    }

    // Verifica se l'utente esiste già
    const existing = await prisma.user.findUnique({ where: { email: email.toLowerCase().trim() } })
    if (existing) {
      return NextResponse.json({ error: 'Esiste già un account con questa email. Prova ad accedere.' }, { status: 409 })
    }

    // Hash password (bcrypt 12 rounds)
    const passwordHash = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
      data: {
        email: email.toLowerCase().trim(),
        passwordHash,
        name: name.trim(),
        role: 'student',
      },
    })

    // Login automatico dopo registrazione
    const token = signToken({ userId: user.id, email: user.email, role: user.role })

    const res = NextResponse.json({
      ok: true,
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
    }, { status: 201 })

    res.cookies.set(COOKIE_NAME, token, buildCookieOptions(86400))

    return res
  } catch (err) {
    console.error('[/api/auth/register]', err)
    return NextResponse.json({ error: 'Errore del server. Riprova più tardi.' }, { status: 500 })
  }
}
