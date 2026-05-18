export const dynamic = 'force-dynamic'

// POST /api/auth/login
// Autentica l'utente con email + password
// Condivide il JWT cookie con il portale via domain=.grecolatinovivo.it
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/db'
import { signToken, buildCookieOptions, COOKIE_NAME } from '@/lib/auth'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ error: 'Email e password sono obbligatori.' }, { status: 400 })
    }

    // Cerca l'utente nel DB condiviso con il portale
    const user = await prisma.user.findUnique({ where: { email: email.toLowerCase().trim() } })
    if (!user) {
      // Messaggio volutamente generico — non rivela se l'email esiste
      return NextResponse.json({ error: 'Email o password non corretti. Hai dimenticato la password?' }, { status: 401 })
    }

    const passwordOk = await bcrypt.compare(password, user.passwordHash)
    if (!passwordOk) {
      return NextResponse.json({ error: 'Email o password non corretti. Hai dimenticato la password?' }, { status: 401 })
    }

    // Genera JWT (24h)
    const token = signToken({ userId: user.id, email: user.email, role: user.role })

    // Risposta con cookie httpOnly condiviso con il portale
    const res = NextResponse.json({
      ok: true,
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
    })

    res.cookies.set(COOKIE_NAME, token, buildCookieOptions(86400))

    return res
  } catch (err) {
    console.error('[/api/auth/login]', err)
    return NextResponse.json({ error: 'Errore del server. Riprova più tardi.' }, { status: 500 })
  }
}
