import "./../CSS/AboutMe.css"

function AboutMe() {
  return (
    <div className="container aboutme-center">
      <div className="aboutme-card">
        <h1 className="aboutme-title">About Me</h1>
        <img src="/pfp.jpeg" className="aboutme-pfp" alt="Profile" />
        <p className="aboutme-text">
          Hello! I am a computer science student at the University of Texas at Dallas I am passionate about creating and building unique solution to my problems or enhancing my hobbies.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
