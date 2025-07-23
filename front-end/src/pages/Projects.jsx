import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';

function Projects() {
  return (
    <div className="container">
      <h1>Projects</h1>
      <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
        <ScrollStack style={{ flex: 1, minHeight: 0 }}>
          <ScrollStackItem>
            <div className="project-content">
              <h2 className="project-title">Web Novel Reader</h2>
              <h3 className="project-technologies">Technologies: React • Flask • Python • Kokoro TTS • BeautifulSoup • FFmpeg • PyTorch</h3>
              <p className="project-description">
                Developed a sophisticated web application that automatically converts web novels into high-quality audiobooks using AI text-to-speech technology
                featuring intelligent Python web scraping with BeautifulSoup, Kokoro TTS integration with PyTorch for natural speech synthesis, and a responsive 
                React frontend with real-time status polling. Built complete processing pipeline including FFmpeg audio concatenation, modern glassmorphism UI design, 
                and Flask REST API backend, successfully converting full-length novels into professional audiobook format while demonstrating expertise in full-stack development, 
                AI integration, and multimedia processing.
              </p>
            </div>
            <img src="/WNReader.png" className="project-image" alt="Web Novel Reader" />
          </ScrollStackItem>
          <ScrollStackItem>
            <div className="project-content">
              <h2 className="project-title">EPUB to audiobook converter</h2>
              <p className="project-description">This is the second card in the stack</p>
            </div>
          </ScrollStackItem>
          <ScrollStackItem>
            <div className="project-content">
              <h2 className="coming-soon">More Coming Soon...</h2>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </div>
  )
}

export default Projects
