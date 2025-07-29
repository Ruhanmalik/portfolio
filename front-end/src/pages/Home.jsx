import GradientText from "../components/GradientText";

function Home() {
    return (
      <div className="container" style={{ 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh', 
        background: 'none',
        padding: 'clamp(1rem, 4vw, 2rem)',
      }}>
        <div style={{
          width: 'min(90%, 800px)',
          background: 'rgba(34, 36, 40, 0.85)',
          borderRadius: 'clamp(16px, 4vw, 32px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
          padding: 'clamp(2rem, 8vw, 4rem) clamp(1.5rem, 6vw, 3rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 'clamp(1rem, 4vw, 2rem) 0',
          backdropFilter: 'blur(12px)',
        }}>
          <GradientText style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', 
            fontWeight: 800, 
            marginBottom: 'clamp(0.25rem, 2vw, 0.5rem)',
            textAlign: 'center',
          }}>Ruhan Malik</GradientText>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(0.25rem, 2vw, 0.5rem)',
            marginBottom: 'clamp(1rem, 4vw, 1.5rem)',
            color: '#40ffaa',
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            fontWeight: 600,
            textAlign: 'center',
          }}>
            
          </div>

          <p style={{
            textAlign: 'center',
            color: '#e0e0e0',
            fontSize: 'clamp(1.1rem, 3.5vw, 1.4rem)',
            lineHeight: 1.6,
            marginBottom: 'clamp(1.5rem, 5vw, 2rem)',
            fontWeight: 500,
            maxWidth: 'min(600px, 90%)',
          }}>
            Crafting innovative solutions through code, from web applications to AI-powered systems. 
            Passionate about turning complex problems into elegant, user-friendly experiences.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'clamp(0.5rem, 2vw, 1rem)',
            marginBottom: 'clamp(2rem, 6vw, 2.5rem)',
            maxWidth: 'min(600px, 90%)',
          }}>
            {['React', 'Python', 'AI/ML', 'Flask', 'PyTorch', 'Full-Stack'].map((skill) => (
              <span key={skill} style={{
                background: 'rgba(64,255,170,0.1)',
                color: '#40ffaa',
                padding: 'clamp(0.4rem, 2vw, 0.5rem) clamp(0.8rem, 3vw, 1rem)',
                borderRadius: 'clamp(15px, 4vw, 20px)',
                fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
                fontWeight: 600,
                border: '1px solid rgba(64,255,170,0.2)',
                backdropFilter: 'blur(8px)',
                whiteSpace: 'nowrap',
              }}>
                {skill}
              </span>
            ))}
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'clamp(column, 100%, row)',
            gap: 'clamp(1rem, 3vw, 1.5rem)',
            marginTop: 'clamp(0.5rem, 2vw, 1rem)',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <button style={{
              background: 'linear-gradient(135deg, #40ffaa, #4079ff)',
              color: '#232526',
              border: 'none',
              padding: 'clamp(0.6rem, 3vw, 0.8rem) clamp(1.5rem, 6vw, 2rem)',
              borderRadius: 'clamp(20px, 5vw, 25px)',
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(64,255,170,0.3)',
              minWidth: 'clamp(140px, 30vw, 160px)',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(64,255,170,0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(64,255,170,0.3)';
            }}
            onClick={() => window.location.href = '/projects'}>
              View My Work
            </button>
            
            <button style={{
              background: 'transparent',
              color: '#40ffaa',
              border: '2px solid #40ffaa',
              padding: 'clamp(0.6rem, 3vw, 0.8rem) clamp(1.5rem, 6vw, 2rem)',
              borderRadius: 'clamp(20px, 5vw, 25px)',
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minWidth: 'clamp(140px, 30vw, 160px)',
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#40ffaa';
              e.target.style.color = '#232526';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#40ffaa';
            }}
            onClick={() => window.location.href = '/contact'}>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    )
}

export default Home;