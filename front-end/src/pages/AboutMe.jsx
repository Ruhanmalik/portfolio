import "./../CSS/AboutMe.css"

function AboutMe() {
  return (
    <div className="container aboutme-center">
      <div className="aboutme-card">
        <img src="/pfp.jpeg" className="aboutme-pfp" alt="Profile" />
        <p className="aboutme-text">
        Hello! I am a computer science student at the University of Texas at Dallas. I am passionate about creating and building unique solutions to my problems or enhancing my hobbies.
         You'll often find me building tools and applications that make my daily life more efficient or simply more enjoyable—whether it's automating something I do repeatedly 
         or creating new ways to experience the things I love. When I am not coding you can catch me reading books and stories of all kinds, which led me do several projects enhancing my experience
         with it. I'm always excited to tackle new challenges and explore how emerging technologies can solve problems in creative ways.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
