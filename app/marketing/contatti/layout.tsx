// layout.tsx — Server Component per il metadata della pagina Contatti
// La page.tsx usa 'use client' (useState per il form) e non può esportare metadata.
// Questo layout risolve il problema: metadata qui, logica client in page.tsx.
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contatti — Centro Nazionale di Studi Classici GrecoLatinoVivo',
  description:
    'Contattaci per informazioni su corsi, iscrizioni, collaborazioni e formazione docenti. Sede principale a Firenze, presenti anche a Milano, Torino, Parma e Pordenone.',
  alternates: { canonical: 'https://grecolatinovivo.it/contatti' },
  openGraph: {
    title: 'Contatti — GrecoLatinoVivo',
    description: 'Contattaci per informazioni su corsi e iscrizioni.',
    url: 'https://grecolatinovivo.it/contatti',
  },
}

export default function ContattiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
