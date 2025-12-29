import "./../CSS/Resume.css"

function Resume() {
  return (
    <div className="container resume-center">
      <div className="resume-card">
        <div className="resume-header">
          <span className="terminal-symbol">&gt;</span>
          <span>cat resume.pdf</span>
        </div>
        <h1 className="resume-title">Resume</h1>
        <iframe
          src="/Ruhan_Malik_Resume.pdf#navpanes=0&view=FitH&zoom=110"
          title="Ruhan Malik Resume"
          className="resume-pdf"
        />
        <a
          href="/Ruhan_Malik_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-download"
        >
          <span>↓</span> Download PDF
        </a>
      </div>
    </div>
  )
}

export default Resume