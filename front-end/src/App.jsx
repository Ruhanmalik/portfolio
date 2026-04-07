import { useEffect } from 'react';
import './CSS/App.css';
import './CSS/Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'Web Novel Reader',
    tech: 'React • Flask • Python • Kokoro TTS • BeautifulSoup • FFmpeg • PyTorch',
    description:
      'A sophisticated web application that automatically converts web novels into high-quality audiobooks using AI text-to-speech. Features intelligent web scraping with BeautifulSoup, Kokoro TTS with PyTorch for natural speech synthesis, and a React frontend with real-time status polling.',
    image: '/WNReader.png',
  },
  {
    id: 2,
    title: 'EPUB to Audiobook Converter',
    tech: 'Electron • FastAPI • PyTorch • CUDA • ebooklib • FFmpeg • Kokoro TTS',
    description:
      'A desktop app converting EPUB files to high-quality audiobooks with GPU acceleration, reducing conversion time from ~6 hours to just 25 minutes. Features a modern Electron interface with FastAPI backend and real-time progress tracking.',
    image: '/epubV2.png',
  },
  {
    id: 3,
    title: 'Productivity Tracker',
    tech: 'Next.js • Supabase',
    description:
      'A full-stack productivity web app for managing events and tasks with a sleek dark-themed calendar interface. Built with Next.js and Supabase for authentication and real-time data persistence, supporting the full event lifecycle.',
    image: '/calendar.png',
  },
];

const skills = [
  { name: 'Python', level: 92 },
  { name: 'React', level: 88 },
  { name: 'FastAPI', level: 85 },
  { name: 'Full-Stack', level: 83 },
  { name: 'AI / ML', level: 80 },
  { name: 'Next.js', level: 78 },
];

function NavBar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="pf-navbar">
      <div className="pf-logo" onClick={() => scrollTo('home')}>RM</div>
      <ul className="pf-nav-links">
        {[
          ['home', 'Home'],
          ['about', 'About'],
          ['skills', 'Skills'],
          ['projects', 'Projects'],
          ['contact', 'Contact'],
        ].map(([id, label]) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="pf-nav-link"
              onClick={(e) => { e.preventDefault(); scrollTo(id); }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="/Ruhan_Malik_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="pf-resume-btn"
      >
        Resume
      </a>
    </nav>
  );
}

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.pf-section');
    const navLinks = document.querySelectorAll('.pf-nav-link');

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pf-section--visible');
            const id = entry.target.id;
            navLinks.forEach((link) => {
              link.classList.toggle(
                'pf-nav-link--active',
                link.getAttribute('href') === `#${id}`
              );
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((s) => sectionObserver.observe(s));

    // Skill bars animate when skills section enters view
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    const skillsSection = document.getElementById('skills');

    const skillObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          skillBars.forEach((bar) => {
            bar.style.width = bar.getAttribute('data-level') + '%';
          });
          skillObserver.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (skillsSection) skillObserver.observe(skillsSection);

    return () => {
      sectionObserver.disconnect();
      skillObserver.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <NavBar />

      {/* ── HERO ─────────────────────────────────────── */}
      <section id="home" className="pf-section pf-section--visible hero-section">
        <div className="section-inner hero-inner">
          <div className="hero-text">
            <p className="hero-hello">HELLO!</p>
            <h1 className="hero-heading">
              I'm <span className="name-gradient">Ruhan Malik</span>
            </h1>
            <p className="hero-role">Full-Stack Developer • AI Engineer</p>
            <p className="hero-desc">
              Crafting innovative solutions through code, from web applications to AI-powered
              systems. Passionate about turning complex problems into elegant, user-friendly
              experiences.
            </p>
            <div className="hero-actions">
              <button className="btn-blue" onClick={() => scrollTo('contact')}>
                Let's talk
              </button>
              <button className="btn-outline" onClick={() => scrollTo('projects')}>
                View Projects →
              </button>
            </div>
            <div className="hero-socials">
              <a
                href="https://www.linkedin.com/in/ruhan-malik/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-9.5 7.5H7V17h2.5v-6.5ZM8.25 7.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM17 13.25c0-1.52-1.23-2.75-2.75-2.75S11.5 11.73 11.5 13.25V17H14v-3.25c0-.41.34-.75.75-.75s.75.34.75.75V17H17v-3.75Z" />
                </svg>
              </a>
              <a
                href="https://github.com/Ruhanmalik"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1-2.75-.1-.26-.44-1.3.09-2.7 0 0 .83-.27 2.75 1.02A9.38 9.38 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.92-1.29 2.75-1.02 2.75-1.02.53 1.4.19 2.44.09 2.7.62.72 1 1.63 1 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>
              <a
                href="mailto:aruhanmalik@gmail.com"
                className="social-btn"
                aria-label="Email"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.4-.5 7.6 6.2L19.6 6H4.4Zm15.6 2.2-7.4 6.05a1 1 0 0 1-1.25 0L4 7.7V17.5c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V7.7Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="hero-img-glow"></div>
            <img src="/pfp.jpeg" alt="Ruhan Malik" className="hero-pfp" />
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────── */}
      <section id="about" className="pf-section about-section">
        <div className="section-inner">
          <h2 className="section-title">About <span className="accent">Me</span></h2>
          <div className="about-inner">
            <div className="about-image-wrap">
              <div className="about-img-glow"></div>
              <img src="/pfp.jpeg" alt="Ruhan Malik" className="about-pfp" />
            </div>
            <div className="about-body">
              <h3 className="about-name">Ruhan Malik</h3>
              <p className="about-role">Full-Stack Developer • AI Engineer</p>
              <p className="about-location">📍 University of Texas at Dallas</p>
              <p className="about-text">
                I'm passionate about creating and building unique solutions to my problems or
                enhancing my hobbies. You'll often find me building tools and applications that
                make my daily life more efficient or simply more enjoyable — whether that's
                automating repetitive tasks or creating new ways to experience the things I love.
              </p>
              <p className="about-text">
                When I'm not coding, you can catch me reading books and stories of all kinds,
                which led me to several projects enhancing my reading experience. I'm always
                excited to tackle new challenges and explore how emerging technologies can solve
                problems in creative ways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────── */}
      <section id="skills" className="pf-section skills-section">
        <div className="section-inner">
          <h2 className="section-title">My <span className="accent">Skills</span></h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-pct">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    data-level={skill.level}
                    style={{ width: 0 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────── */}
      <section id="projects" className="pf-section projects-section">
        <div className="section-inner">
          <h2 className="section-title">My <span className="accent">Projects</span></h2>
          <div className="projects-grid">
            {projects.map((p) => (
              <div key={p.id} className="project-card">
                <div className="project-img-wrap">
                  <img src={p.image} alt={p.title} className="project-img" />
                </div>
                <div className="project-info">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-tech">{p.tech}</p>
                  <p className="project-desc">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────── */}
      <section id="contact" className="pf-section contact-section">
        <div className="section-inner contact-inner">
          <h2 className="section-title">Get In <span className="accent">Touch</span></h2>
          <p className="contact-subtitle">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
          <div className="contact-links">
            <a href="mailto:aruhanmalik@gmail.com" className="contact-item">
              <span className="contact-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.4-.5 7.6 6.2L19.6 6H4.4Zm15.6 2.2-7.4 6.05a1 1 0 0 1-1.25 0L4 7.7V17.5c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V7.7Z" />
                </svg>
              </span>
              <span>aruhanmalik@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ruhan-malik/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-9.5 7.5H7V17h2.5v-6.5ZM8.25 7.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM17 13.25c0-1.52-1.23-2.75-2.75-2.75S11.5 11.73 11.5 13.25V17H14v-3.25c0-.41.34-.75.75-.75s.75.34.75.75V17H17v-3.75Z" />
                </svg>
              </span>
              <span>linkedin.com/in/ruhan-malik/</span>
            </a>
            <a
              href="https://github.com/Ruhanmalik"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1-2.75-.1-.26-.44-1.3.09-2.7 0 0 .83-.27 2.75 1.02A9.38 9.38 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.92-1.29 2.75-1.02 2.75-1.02.53 1.4.19 2.44.09 2.7.62.72 1 1.63 1 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                </svg>
              </span>
              <span>github.com/Ruhanmalik</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="pf-footer">
        <p>© {new Date().getFullYear()} Ruhan Malik. Built with React.</p>
      </footer>
    </>
  );
}

export default App;
