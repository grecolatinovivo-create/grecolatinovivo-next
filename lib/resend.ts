// Email transazionali via Resend
import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY!)

const FROM = process.env.RESEND_FROM_EMAIL ?? 'noreply@grecolatinovivo.it'
const REPLY_TO = process.env.RESEND_REPLY_TO ?? 'info@grecolatinovivo.it'

// --- EMAIL: Conferma iscrizione corso live ---
export async function sendLiveBookingConfirmation({
  to,
  name,
  courseTitle,
  teacherName,
  sessionDate,
  zoomUrl,
}: {
  to: string
  name: string
  courseTitle: string
  teacherName: string
  sessionDate: string
  zoomUrl?: string
}) {
  return resend.emails.send({
    from: FROM,
    reply_to: REPLY_TO,
    to,
    subject: `${courseTitle} — Iscrizione confermata`,
    html: `
      <p>Gentile ${name},</p>
      <p>la tua iscrizione al corso <strong>${courseTitle}</strong> con ${teacherName} è confermata.</p>
      <p><strong>Prima lezione:</strong> ${sessionDate}</p>
      ${zoomUrl ? `<p><strong>Link Zoom:</strong> <a href="${zoomUrl}">${zoomUrl}</a></p>` : '<p>Il link Zoom ti sarà inviato via email prima della lezione.</p>'}
      <p>Per qualsiasi necessità: <a href="mailto:info@grecolatinovivo.it">info@grecolatinovivo.it</a></p>
      <p>Centro Nazionale di Studi Classici «GrecoLatinoVivo»</p>
    `,
  })
}

// --- EMAIL: Conferma acquisto corso asincrono ---
export async function sendCourseAccessEmail({
  to,
  name,
  courseTitle,
  portalUrl,
}: {
  to: string
  name: string
  courseTitle: string
  portalUrl: string
}) {
  return resend.emails.send({
    from: FROM,
    reply_to: REPLY_TO,
    to,
    subject: `${courseTitle} — Accesso confermato`,
    html: `
      <p>Gentile ${name},</p>
      <p>l'acquisto del corso <strong>${courseTitle}</strong> è avvenuto con successo.</p>
      <p>Puoi iniziare subito: <a href="${portalUrl}">Accedi al portale</a></p>
      <p>Centro Nazionale di Studi Classici «GrecoLatinoVivo»</p>
    `,
  })
}

// --- EMAIL: Biglietto evento (con PDF in allegato) ---
export async function sendEventTicketEmail({
  to,
  name,
  eventTitle,
  eventDate,
  eventLocation,
  ticketCode,
  pdfBuffer,
}: {
  to: string
  name: string
  eventTitle: string
  eventDate: string
  eventLocation: string
  ticketCode: string
  pdfBuffer: Buffer
}) {
  return resend.emails.send({
    from: FROM,
    reply_to: REPLY_TO,
    to,
    subject: `${eventTitle} — Il tuo biglietto è allegato`,
    html: `
      <p>Gentile ${name},</p>
      <p>il tuo biglietto per <strong>${eventTitle}</strong> è allegato a questa email.</p>
      <p><strong>Data:</strong> ${eventDate}<br>
      <strong>Sede:</strong> ${eventLocation}<br>
      <strong>Codice biglietto:</strong> ${ticketCode}</p>
      <p>Mostra il biglietto PDF (o il QR code) all'ingresso dell'evento.</p>
      <p>Centro Nazionale di Studi Classici «GrecoLatinoVivo»</p>
    `,
    attachments: [
      {
        filename: `biglietto-${ticketCode}.pdf`,
        content: pdfBuffer,
      },
    ],
  })
}

// --- EMAIL: Conferma prenotazione tutoraggio ---
export async function sendTutoringConfirmation({
  to,
  name,
  teacherName,
  slotDate,
  durationMin,
}: {
  to: string
  name: string
  teacherName: string
  slotDate: string
  durationMin: number
}) {
  return resend.emails.send({
    from: FROM,
    reply_to: REPLY_TO,
    to,
    subject: `Tutoraggio con ${teacherName} — Appuntamento confermato`,
    html: `
      <p>Gentile ${name},</p>
      <p>il tuo appuntamento di tutoraggio è confermato.</p>
      <p><strong>Docente:</strong> ${teacherName}<br>
      <strong>Data e ora:</strong> ${slotDate}<br>
      <strong>Durata:</strong> ${durationMin} minuti</p>
      <p>Il docente ti contatterà al tuo indirizzo email con il link per il collegamento.</p>
      <p>Per qualsiasi necessità: <a href="mailto:info@grecolatinovivo.it">info@grecolatinovivo.it</a></p>
      <p>Centro Nazionale di Studi Classici «GrecoLatinoVivo»</p>
    `,
  })
}

// --- EMAIL: Form contatti ---
export async function sendContactFormEmail({
  senderName,
  senderEmail,
  subject,
  message,
}: {
  senderName: string
  senderEmail: string
  subject: string
  message: string
}) {
  return resend.emails.send({
    from: FROM,
    replyTo: senderEmail,
    to: 'info@grecolatinovivo.it',
    subject: `[Contatto sito] ${subject}`,
    html: `
      <p><strong>Da:</strong> ${senderName} (${senderEmail})</p>
      <p><strong>Oggetto:</strong> ${subject}</p>
      <hr>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  })
}
