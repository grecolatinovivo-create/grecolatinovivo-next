// TypeScript interfaces per il sito GLV

// --- AUTH ---
export interface AuthUser {
  userId: string
  email: string
  role: string
}

// --- CORSI ASINCRONI (dal portale DB) ---
export interface AsyncCourse {
  id: string
  slug: string
  title: string
  description: string
  lang: string
  level: string
  teacherName: string
  priceEur: number // centesimi
  durationMin: number
  isActive: boolean
  lessons?: AsyncLesson[]
}

export interface AsyncLesson {
  id: string
  courseId: string
  title: string
  videoUrl?: string
  sortOrder: number
  isFree: boolean
  durationMin: number
}

// --- CORSI LIVE ---
export interface LiveCourse {
  id: string
  slug: string
  title: string
  description: string
  lang: string
  level: string
  priceEur: number // centesimi
  maxStudents: number
  isActive: boolean
  teacher: Teacher
  sessions: LiveSession[]
  _count?: { bookings: number }
}

export interface LiveSession {
  id: string
  liveCourseId: string
  title: string
  scheduledAt: string // ISO string
  durationMin: number
  zoomUrl?: string
  sortOrder: number
}

// --- DOCENTI ---
export interface Teacher {
  id: string
  slug: string
  name: string     // [DA INSERIRE — confermare con Giampiero]
  title: string
  role: string
  dept: string
  deptCode: string
  bio: string
  photoUrl?: string
  isActive: boolean
}

// --- TUTORAGGIO ---
export interface TutoringSlot {
  id: string
  teacherId: string
  startAt: string // ISO string
  durationMin: number
  priceEur: number // centesimi
  isBooked: boolean
  teacher?: Teacher
}

// --- EVENTI ---
export interface Event {
  id: string
  slug: string
  title: string
  description: string
  eventType: 'convegno' | 'seminario' | 'biduum' | 'giornata-studio' | 'workshop'
  location: string
  startsAt: string // ISO string
  endsAt: string   // ISO string
  priceEur: number // centesimi (0 = gratuito)
  maxTickets: number
  isPublished: boolean
  _count?: { tickets: number }
}

export interface EventTicket {
  id: string
  ticketCode: string
  userId: string
  eventId: string
  stripePaymentId: string
  issuedAt: string
  revokedAt?: string
  event?: Event
}

// --- STRIPE CHECKOUT ---
export type CheckoutType = 'corso_live' | 'corso_asincrono' | 'biglietto_evento' | 'tutoraggio' | 'abbonamento'

export interface CheckoutRequest {
  type: CheckoutType
  itemId: string        // id del corso/evento/slot/piano
  period?: 'monthly' | 'annual' // solo per abbonamento
  successUrl?: string
  cancelUrl?: string
}

// --- ABBONAMENTO ---
export interface PlanInfo {
  id: 'cultura' | 'linguae' | 'accademia'
  name: string
  subtitle: string
  priceMonthly: number // euro
  priceAnnual: number  // euro
  features: string[]
  isFeatured: boolean
  badge?: string
}

// Prezzi da README_NUOVO.md §0 (da portale README.md)
export const PLANS: PlanInfo[] = [
  {
    id: 'cultura',
    name: 'Cultura',
    subtitle: 'Per iniziare il percorso',
    priceMonthly: 5.90,
    priceAnnual: 49,
    features: [
      'Accesso al portale abbonamento',
      'Catalogo corsi base',
      'Community di studio',
    ],
    isFeatured: false,
  },
  {
    id: 'linguae',
    name: 'Linguae',
    subtitle: 'Per gli studiosi seri',
    priceMonthly: 12.90,
    priceAnnual: 99,
    features: [
      'Tutto del piano Cultura',
      'Accesso completo a tutti i corsi',
      'Materiali scaricabili',
      'Attestati di completamento',
    ],
    isFeatured: true,
    badge: 'Il preferito dai docenti MIM', // NEURO_SPEC: prova sociale specifica
  },
  {
    id: 'accademia',
    name: 'Accademia',
    subtitle: 'Per la formazione avanzata',
    priceMonthly: 19.90,
    priceAnnual: 179,
    features: [
      'Tutto del piano Linguae',
      'Corsi di formazione docenti MIM',
      'Percorsi personalizzati',
      'Accesso anticipato ai nuovi corsi',
    ],
    isFeatured: false,
  },
]

// --- UTILITÀ ---
export function formatEur(cents: number): string {
  return (cents / 100).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })
}

export function langBadgeLabel(lang: string): string {
  const map: Record<string, string> = {
    latino: 'LATINO',
    greco: 'GRECO ANTICO',
    egiziano: 'EGIZIANO',
    ebraico: 'EBRAICO BIBLICO',
    sanscrito: 'SANSCRITO',
    didattica: 'DIDATTICA',
  }
  return map[lang.toLowerCase()] ?? lang.toUpperCase()
}
