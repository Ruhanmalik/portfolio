import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';

function Projects() {
  return (
    <div className="container">
      <h1>Projects</h1>
      <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
        <ScrollStack style={{ flex: 1, minHeight: 0 }}>
          <ScrollStackItem>
            <h2>Web Novel Reader</h2>
            <p>This is the first card in the stack</p>
            <img src="/WNReader.png" className="project-image"></img>
          </ScrollStackItem>
          <ScrollStackItem>
            <h2>EPUB to audiobook converter</h2>
            <p>This is the second card in the stack</p>
          </ScrollStackItem>
          <ScrollStackItem>
            <h2>More Coming Soon</h2>
          </ScrollStackItem>
        </ScrollStack>
      </div>
      <p>This is the projects page. Add your project information here.</p>
    </div>
  )
}

export default Projects
