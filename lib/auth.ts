// Auth: JWT sign/verify + cookie httpOnly
// Cookie condiviso tra grecolatinovivo.it e portale.grecolatinovivo.it
// via domain=.grecolatinovivo.it (da .env: COOKIE_DOMAIN)
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

// Lazy getter — non lancia al build time se JWT_SECRET non è configurata
function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET
  if (!secret) throw new Error('JWT_SECRET non configurata')
  return secret
}

const COOKIE_NAME = 'glv_auth' // stesso nome del portale
const COOKIE_DOMAIN = process.env.COOKIE_DOMAIN ?? '.grecolatinovivo.it'

export interface JwtPayload {
  userId: string
  email: string
  role: string
  iat?: number
  exp?: number
}

// Crea un JWT firmato (24h di validità)
export function signToken(payload: Omit<JwtPayload, 'iat' | 'exp'>): string {
  return jwt.sign(payload, getJwtSecret(), { expiresIn: '24h' })
}

// Verifica il JWT — ritorna il payload o null se invalido/scaduto
export function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, getJwtSecret()) as JwtPayload
  } catch {
    return null
  }
}

// Legge il token dal cookie (lato server, in Server Components / Route Handlers)
export function getTokenFromCookies(): string | null {
  const cookieStore = cookies()
  return cookieStore.get(COOKIE_NAME)?.value ?? null
}

// Legge e verifica il token — ritorna il payload utente o null
export function getCurrentUser(): JwtPayload | null {
  const token = getTokenFromCookies()
  if (!token) return null
  return verifyToken(token)
}

// Legge il token da una Request (per API routes)
export function getUserFromRequest(req: NextRequest): JwtPayload | null {
  const token = req.cookies.get(COOKIE_NAME)?.value
  if (!token) return null
  return verifyToken(token)
}

// Genera i cookie options per il login
export function buildCookieOptions(maxAge: number = 86400) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    domain: COOKIE_DOMAIN,
    maxAge,
  }
}

// Cookie name esportato per la pulizia al logout
export { COOKIE_NAME }
