// Layout radice — avvolge tutte le pagine
// Font serviti via next/font/google (self-hosted a build time — GDPR compliant)
// COUNCIL.md decisione 2: zero CDN Google a runtime.
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'

// Playfair Display — serif istituzionale per titoli
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair',
})

// Inter — sans-serif per corpo testo, UI, label
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://grecolatinovivo.it'),
  title: {
    default: 'Centro Nazionale di Studi Classici «GrecoLatinoVivo»',
    template: '%s | GrecoLatinoVivo',
  },
  description:
    'Studia Latino, Greco Antico, Egiziano, Ebraico e Sanscrito con i migliori docenti italiani. Corsi live, asincroni, tutoraggio 1:1 e formazione docenti MIM. Dal 2015, accreditato MIM.',
  keywords: [
    'latino', 'greco antico', 'lingue classiche', 'corsi latino',
    'corsi greco', 'metodo natura', 'formazione docenti', 'MIM accreditato',
    'GrecoLatinoVivo', 'studi classici',
  ],
  authors: [{ name: 'Centro Nazionale di Studi Classici «GrecoLatinoVivo»' }],
  creator: 'GrecoLatinoVivo',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://grecolatinovivo.it',
    siteName: 'Centro Nazionale di Studi Classici «GrecoLatinoVivo»',
    title: 'Centro Nazionale di Studi Classici «GrecoLatinoVivo»',
    description: 'Studia le lingue dell\'antichità con i migliori docenti italiani. Dal 2015, accreditato MIM.',
    images: [
      {
        url: '/fb.jpg',
        width: 1200,
        height: 630,
        alt: 'Centro Nazionale di Studi Classici GrecoLatinoVivo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centro Nazionale di Studi Classici «GrecoLatinoVivo»',
    description: 'Studia le lingue dell\'antichità con i migliori docenti italiani.',
    images: ['/fb.jpg'],
  },
  alternates: {
    canonical: 'https://grecolatinovivo.it',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <a href="#main-content" className="visually-hidden" style={{ position: 'absolute' }}>
          Salta al contenuto principale
        </a>
        <Topbar />
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />

        {/* Script scroll-reveal — IntersectionObserver, zero dipendenze */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (!('IntersectionObserver' in window)) return;
                var observer = new IntersectionObserver(function(entries) {
                  entries.forEach(function(e) {
                    if (e.isIntersecting) {
                      e.target.classList.add('visible');
                      observer.unobserve(e.target);
                    }
                  });
                }, { threshold: 0.1 });
                document.querySelectorAll('.reveal').forEach(function(el) {
                  observer.observe(el);
                });
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
