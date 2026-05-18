/** @type {import('next').NextConfig} */
const nextConfig = {
  // Immagini da domini esterni autorizzati
  images: {
    domains: ['grecolatinovivo.it', 'portale.grecolatinovivo.it'],
  },
  // Headers di sicurezza globali
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Impedisce clickjacking
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Impedisce MIME sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Referrer controllato: invia solo origin su cross-origin
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // HSTS: forza HTTPS per 1 anno (includeSubDomains coprirà anche portale.grecolatinovivo.it)
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
          // Limita API browser non necessarie (GDPR + sicurezza)
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
        ],
      },
      // Header speciale: le API route non devono essere cached dai CDN
      {
        source: '/api/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' },
        ],
      },
    ]
  },
  // Redirect dal vecchio sito statico (SEO-safe 301)
  async redirects() {
    return [
      { source: '/corsi-online.html', destination: '/corsi/corsi-asincroni', permanent: true },
      { source: '/corsi-latino.html', destination: '/corsi/corsi-asincroni?lang=latino', permanent: true },
      { source: '/corsi-greco.html', destination: '/corsi/corsi-asincroni?lang=greco', permanent: true },
      { source: '/eventi.html', destination: '/eventi', permanent: true },
      { source: '/chi-siamo.html', destination: '/chi-siamo', permanent: true },
      { source: '/contatti.html', destination: '/contatti', permanent: true },
      { source: '/faq.html', destination: '/faq', permanent: true },
      { source: '/staff.html', destination: '/staff', permanent: true },
      { source: '/privacy.html', destination: '/privacy', permanent: true },
      { source: '/termini-condizioni.html', destination: '/termini-condizioni', permanent: true },
      { source: '/metodologia.html', destination: '/metodologia', permanent: true },
      { source: '/sedi.html', destination: '/sedi', permanent: true },
      { source: '/minicorsi.html', destination: '/corsi/minicorsi', permanent: true },
      { source: '/lezioni-individuali.html', destination: '/corsi/lezioni-individuali', permanent: true },
    ]
  },
}

module.exports = nextConfig
