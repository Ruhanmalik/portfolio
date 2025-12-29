import { useEffect, useRef } from 'react';
import "./../CSS/AboutMe.css";

function AboutMe() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const elements = card.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('fade-in-active');
      }, index * 200);
    });
  }, []);

  return (
    <div className="container aboutme-center">
      <div className="aboutme-card" ref={cardRef}>
        {/* Terminal header */}
        <div className="aboutme-header fade-in">
          <span className="terminal-symbol">&gt;</span>
          <span className="header-text">whoami</span>
        </div>

        {/* Profile section */}
        <div className="profile-section fade-in">
          <div className="profile-image-wrapper">
            <img src="/pfp.jpeg" className="aboutme-pfp" alt="Profile" />
            <div className="image-border"></div>
          </div>

          <div className="profile-info">
            <h2 className="aboutme-name">Ruhan Malik</h2>
            <div className="aboutme-role">
              <span className="role-bracket">[</span>
              <span>Computer Science Student</span>
              <span className="role-bracket">]</span>
            </div>
            <div className="aboutme-location">
              <span className="location-icon">📍</span>
              University of Texas at Dallas
            </div>
          </div>
        </div>

        {/* Bio section */}
        <div className="bio-section fade-in">
          <div className="bio-label">
            <span className="bio-icon">//</span>
            <span>About</span>
          </div>
          <p className="aboutme-text">
            I'm passionate about creating and building unique solutions to my problems or enhancing my hobbies.
            You'll often find me building tools and applications that make my daily life more efficient or simply
            more enjoyable—whether it's automating something I do repeatedly or creating new ways to experience
            the things I love.
          </p>
          <p className="aboutme-text">
            When I'm not coding, you can catch me reading books and stories of all kinds, which led me to several
            projects enhancing my experience with it. I'm always excited to tackle new challenges and explore how
            emerging technologies can solve problems in creative ways.
          </p>
        </div>

        {/* Interests */}
        <div className="interests-section fade-in">
          <div className="bio-label">
            <span className="bio-icon">//</span>
            <span>Interests</span>
          </div>
          <div className="interests-grid">
            {[
              { icon: '💻', text: 'Full-Stack Development' },
              { icon: '🤖', text: 'AI/ML Engineering' },
              { icon: '📚', text: 'Reading & Literature' },
              { icon: '🛠️', text: 'Building Tools' }
            ].map((interest, index) => (
              <div key={index} className="interest-badge">
                <span className="interest-icon">{interest.icon}</span>
                <span className="interest-text">{interest.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
