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
              <h3 className="project-technologies">Technologies: Electron • FastAPI •PyTorch • CUDA • ebooklib • FFmpeg • Kokoro TTS</h3>
              <p className="project-description">I developed an EPUB to Audiobook Generator that transforms digital books into high-quality audiobooks
                 using AI-powered text-to-speech technology. The application features a modern Electron-based desktop interface built with React,
                  paired with a FastAPI backend that leverages Kokoro TTS and GPU acceleration for efficient processing. What sets this project
                   apart is its performance optimization—I implemented intelligent text chunking and CUDA-accelerated processing that reduced
                    conversion times from 4-6 hours down to just 25 minutes for typical novels. The application handles the complete workflow
                     from EPUB upload and text extraction to real-time progress tracking and final MP3 generation, with features like text editing
                      automatic cleanup, and cross-platform file management. This project demonstrates my ability to build full-stack applications
                       that solve real-world problems while delivering exceptional user experience and performance.
                    </p>
            </div>
            <img src="/epubV2.png" className="project-image" alt="EPUB to audiobook converter" />
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
