// Generazione biglietti PDF con QR code per gli eventi
// Usa pdfkit (già in portale) + qrcode
import PDFDocument from 'pdfkit'
import QRCode from 'qrcode'

interface TicketData {
  ticketCode: string
  eventTitle: string
  eventDate: string
  eventLocation: string
  holderName: string
  holderEmail: string
}

// Genera il buffer PDF del biglietto
export async function generateEventTicketPDF(data: TicketData): Promise<Buffer> {
  // Genera QR code come Data URL
  const qrDataUrl = await QRCode.toDataURL(
    `https://grecolatinovivo.it/api/eventi/verifica?code=${data.ticketCode}`,
    { width: 200, margin: 1 }
  )
  const qrBuffer = Buffer.from(qrDataUrl.split(',')[1], 'base64')

  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'A5', margin: 40 })
    const chunks: Buffer[] = []

    doc.on('data', (chunk) => chunks.push(chunk))
    doc.on('end', () => resolve(Buffer.concat(chunks)))
    doc.on('error', reject)

    // --- Sfondo bordeaux nell'header ---
    doc.rect(0, 0, doc.page.width, 120).fill('#8B1A1A')

    // --- Logo testuale ΓΛ ---
    doc
      .fillColor('#C9A84C')
      .fontSize(28)
      .text('ΓΛ', 40, 30)

    // --- Nome centro ---
    doc
      .fillColor('#FFFFFF')
      .fontSize(10)
      .text('Centro Nazionale di Studi Classici', 80, 35)
      .fontSize(8)
      .text('«GrecoLatinoVivo»', 80, 50)

    // --- Titolo BIGLIETTO ---
    doc
      .fillColor('#C9A84C')
      .fontSize(10)
      .text('BIGLIETTO DI INGRESSO', 80, 72)

    // --- Corpo biglietto ---
    doc.fillColor('#1A1A1A').fontSize(16).text(data.eventTitle, 40, 140, { width: 260 })

    doc.moveDown(0.5)
    doc.fontSize(10).fillColor('#6B6B6B').text('Data', 40)
    doc.fontSize(11).fillColor('#3A3A3A').text(data.eventDate, 40)

    doc.moveDown(0.3)
    doc.fontSize(10).fillColor('#6B6B6B').text('Sede')
    doc.fontSize(11).fillColor('#3A3A3A').text(data.eventLocation, 40)

    doc.moveDown(0.3)
    doc.fontSize(10).fillColor('#6B6B6B').text('Intestatario')
    doc.fontSize(11).fillColor('#3A3A3A').text(data.holderName, 40)
    doc.fontSize(9).fillColor('#6B6B6B').text(data.holderEmail, 40)

    // --- Codice biglietto ---
    doc.moveDown(1)
    doc
      .rect(40, doc.y, 260, 36)
      .fillAndStroke('#F5F0E8', '#E8E0D0')

    doc
      .fillColor('#8B1A1A')
      .fontSize(9)
      .text('CODICE BIGLIETTO', 52, doc.y - 30)
    doc
      .fillColor('#1A1A1A')
      .fontSize(13)
      .font('Courier')
      .text(data.ticketCode, 52, doc.y - 15)

    // --- QR Code (a destra del corpo) ---
    doc.image(qrBuffer, 320, 140, { width: 160 })
    doc
      .font('Helvetica')
      .fontSize(7)
      .fillColor('#6B6B6B')
      .text('Scansiona per verifica', 330, 308, { width: 140, align: 'center' })

    // --- Footer ---
    doc
      .moveTo(0, doc.page.height - 50)
      .lineTo(doc.page.width, doc.page.height - 50)
      .stroke('#E8E0D0')

    doc
      .fillColor('#6B6B6B')
      .fontSize(7)
      .text(
        'grecolatinovivo.it · info@grecolatinovivo.it · +39 345 245 6696',
        40,
        doc.page.height - 35,
        { align: 'center', width: doc.page.width - 80 }
      )

    doc.end()
  })
}

// Genera un codice biglietto univoco: GLV-EVT-YYYY-XXXXX
export function generateTicketCode(eventId: string): string {
  const year = new Date().getFullYear()
  const rand = Math.random().toString(36).substring(2, 7).toUpperCase()
  return `GLV-EVT-${year}-${rand}`
}
