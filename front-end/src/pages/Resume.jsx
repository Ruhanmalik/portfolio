function Resume() {
  return (
    <div className="container" style={{ justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'none' }}>
      <div style={{
        width: '90%',
        maxWidth: '900px',
        background: 'rgba(34, 36, 40, 0.85)',
        borderRadius: '32px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
        padding: '2.5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '2rem 0',
      }}>
        <h1 style={{
          textAlign: 'center',
          fontWeight: 700,
          fontSize: '2.5rem',
          letterSpacing: '1px',
          marginBottom: '2rem',
          color: '#e0e0e0',
          textShadow: '0 2px 8px rgba(0,0,0,0.12)'
        }}>Resume</h1>
        <iframe
          src="/Ruhan_Malik_Resume.pdf#navpanes=0&view=FitH&zoom=110"
          title="Ruhan Malik Resume"
          width="100%"
          height="700px"
          style={{
            border: 'none',
            borderRadius: '20px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
            background: '#fff',
            marginBottom: '0.5rem',
            minHeight: '400px',
            maxHeight: '80vh',
          }}
          className="resume-pdf"
        />
        <a
          href="/Ruhan_Malik_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: '1.5rem',
            color: '#40ffaa',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '1.1rem',
            border: '1.5px solid #40ffaa',
            borderRadius: '8px',
            padding: '0.5rem 1.5rem',
            transition: 'background 0.2s, color 0.2s',
            background: 'rgba(64,255,170,0.08)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}
          onMouseOver={e => { e.target.style.background = '#40ffaa'; e.target.style.color = '#232526'; }}
          onMouseOut={e => { e.target.style.background = 'rgba(64,255,170,0.08)'; e.target.style.color = '#40ffaa'; }}
        >
          Download PDF
        </a>
      </div>
    </div>
  )
}

export default Resume