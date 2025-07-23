import "./../CSS/Contact.css"

function Contact() {
    return (
        <div className="container contact-center">
          <div className="contact-card">
            <h1 className="contact-title">Get In Touch</h1>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="contact-info-icon" aria-label="Email">
                  {/* Email SVG */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.4-.5 7.6 6.2L19.6 6H4.4Zm15.6 2.2-7.4 6.05a1 1 0 0 1-1.25 0L4 7.7V17.5c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V7.7Z" fill="#40ffaa"/></svg>
                </span>
                <a href="mailto:aruhanmalik@gmail.com" className="contact-info-link">aruhanmalik@gmail.com</a>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon" aria-label="LinkedIn">
                  {/* LinkedIn SVG */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-9.5 7.5H7V17h2.5v-6.5ZM8.25 7.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM17 13.25c0-1.52-1.23-2.75-2.75-2.75S11.5 11.73 11.5 13.25V17H14v-3.25c0-.41.34-.75.75-.75s.75.34.75.75V17H17v-3.75Z" fill="#40ffaa"/></svg>
                </span>
                <a href="https://www.linkedin.com/in/ruhan-malik/" className="contact-info-link" target="_blank" rel="noopener noreferrer">linkedin.com/in/ruhan-malik/</a>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon" aria-label="GitHub">
                  {/* GitHub SVG */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1-2.75-.1-.26-.44-1.3.09-2.7 0 0 .83-.27 2.75 1.02A9.38 9.38 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.92-1.29 2.75-1.02 2.75-1.02.53 1.4.19 2.44.09 2.7.62.72 1 1.63 1 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="#40ffaa"/></svg>
                </span>
                <a href="https://github.com/Ruhanmalik" className="contact-info-link" target="_blank" rel="noopener noreferrer">github.com/Ruhanmalik</a>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Contact;