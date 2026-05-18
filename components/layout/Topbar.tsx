// Topbar — barra superiore con contatti e accreditamenti
// Dati reali da chi-siamo.html: tel +39 345 245 6696, info@grecolatinovivo.it
// Accreditamenti: MIM + ALTE (da chi-siamo.html accred-section)
export default function Topbar() {
  return (
    <div
      style={{
        background: '#1A1A1A',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
        fontSize: '0.75rem',
        fontFamily: 'Inter, sans-serif',
        color: 'rgba(255,255,255,0.7)',
        padding: '6px 24px',
        zIndex: 900,
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Accreditamenti — sinistra */}
        <span>
          Accreditato MIM &nbsp;·&nbsp; Membro Associato ALTE
        </span>

        {/* Contatti — destra (solo desktop) */}
        <span className="topbar-contacts">
          <a
            href="tel:+393452456696"
            style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', marginRight: '16px' }}
            aria-label="Chiamaci al +39 345 245 6696"
          >
            +39 345 245 6696
          </a>
          <a
            href="mailto:info@grecolatinovivo.it"
            style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
            aria-label="Scrivici a info@grecolatinovivo.it"
          >
            info@grecolatinovivo.it
          </a>
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .topbar-contacts { display: none; }
        }
      `}</style>
    </div>
  )
}
