import { useEffect, useRef } from 'react';
import GradientText from "../components/GradientText";
import './../CSS/Home.css';

function Home() {
    const heroRef = useRef(null);

    useEffect(() => {
      const hero = heroRef.current;
      if (!hero) return;

      // Staggered reveal animation
      const elements = hero.querySelectorAll('.reveal');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('reveal-active');
        }, index * 150);
      });
    }, []);

    return (
      <div className="container home-container">
          <div className="hero-section" ref={heroRef}>
          {/* Terminal-style prefix */}
          <div className="terminal-prefix reveal">
            <span className="prompt">user@portfolio:~$</span>
            <span className="command">cat intro.txt</span>
          </div>

          {/* Main heading */}
          <h1 className="hero-name reveal">
            <GradientText style={{
              fontSize: 'clamp(3rem, 10vw, 5rem)',
              fontWeight: 800,
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              Ruhan Malik
            </GradientText>
          </h1>

          {/* Role badge */}
          <div className="role-badge reveal">
            <span className="bracket">[</span>
            <span className="role-text">Full-Stack Developer • AI Engineer</span>
            <span className="bracket">]</span>
          </div>

          {/* Description */}
          <p className="hero-description reveal">
            Crafting innovative solutions through code, from web applications to AI-powered systems.
            Passionate about turning complex problems into elegant, user-friendly experiences.
          </p>

          {/* Tech stack */}
          <div className="tech-stack reveal">
            {['React', 'Python', 'AI/ML', 'Flask', 'PyTorch', 'Full-Stack'].map((skill, index) => (
              <span key={skill} className="tech-badge" style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="tech-icon">&gt;_</span>
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons reveal">
            <button
              className="btn-primary"
              onClick={() => window.location.href = '/projects'}
            >
              <span className="btn-text">View Projects</span>
              <span className="btn-arrow">→</span>
            </button>

            <button
              className="btn-secondary"
              onClick={() => window.location.href = '/contact'}
            >
              <span className="btn-text">Contact Me</span>
            </button>
          </div>

          {/* Decorative scan line */}
          <div className="scan-line"></div>
        </div>
      </div>
    );
}

export default Home;