import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import GradientText from '../components/GradientText';
import './../CSS/Projects.css'

function Projects() {
  return (
    <div className="container">
      <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1.5rem 0 0.2rem 0' }}>
            <span className="scroll-hint-text">
              Scroll down to see more projects ↓
            </span>
          </div>
        <ScrollStack style={{ flex: 1, minHeight: 0}} itemDistance={40}>
          <ScrollStackItem>
            <div className="project-content">
              <h2 className="project-title">Web Novel Reader</h2>
              <h3 className="project-technologies">Technologies: React • Fask • Python • Kokoro TTS • BeautifulSoup • FFmpeg • PyTorch</h3>
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
              <h3 className="project-technologies">Technologies: PyTorch • CUDA • ebooklib • FFmpeg • Kokoro TTS</h3>
              <p className="project-description">Architected a high-performance EPUB to audiobook conversion system utilizing GPU acceleration with PyTorch and CUDA optimization,
                 achieving 2400% performance improvement over CPU processing and processing 2.4M characters in 19 minutes on RTX 4070. Engineered comprehensive text processing
                  pipeline using ebooklib for EPUB parsing, intelligent chunking algorithms for memory management, Kokoro TTS integration for natural speech synthesis, and FFmpeg
                   multimedia framework for automated MP3 generation with batch processing capabilities, successfully converting full-length novels into professional audiobook format
                    while demonstrating advanced GPU computing, AI integration, and multimedia processing expertise.
                    </p>
            </div>
            <img src="/epub.PNG" className="project-image" alt="EPUB to audiobook converter" />
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
