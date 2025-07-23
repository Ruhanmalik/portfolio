import GradientText from "../components/GradientText";

function Home() {
    return (
      <div className="container" style={{ justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'none' }}>
        <div style={{
          width: '90%',
          maxWidth: '700px',
          background: 'rgba(34, 36, 40, 0.85)',
          borderRadius: '32px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
          padding: '3rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '2rem 0',
        }}>
          <GradientText style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Ruhan Malik</GradientText>
          <h1 style={{
            textAlign: 'center',
            fontWeight: 700,
            fontSize: '2rem',
            letterSpacing: '1px',
            marginBottom: '1.5rem',
            color: '#e0e0e0',
            textShadow: '0 2px 8px rgba(0,0,0,0.12)'
          }}>Welcome to My Portfolio</h1>
          <p style={{
            textAlign: 'center',
            color: '#b0b0b0',
            fontSize: '1.15rem',
            lineHeight: 1.7,
            marginBottom: 0
          }}>
            This is the home page of my portfolio.
          </p>
        </div>
      </div>
    )
}

export default Home;