// POST /api/auth/logout
// Cancella il cookie di autenticazione
import { NextResponse } from 'next/server'
import { COOKIE_NAME, buildCookieOptions } from '@/lib/auth'

export async function POST() {
  const res = NextResponse.json({ ok: true })
  // maxAge: 0 = cancella il cookie immediatamente
  res.cookies.set(COOKIE_NAME, '', { ...buildCookieOptions(0) })
  return res
}
