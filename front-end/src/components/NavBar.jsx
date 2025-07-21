import { Link } from 'react-router-dom'
import './../CSS/NavBar.css'

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-home">
                <Link to="/">Ruhan Malik</Link>
                </li>
                <li className="navbar-item">
                <Link to="/about">About Me</Link>
                </li>
                <li className="navbar-item">
                <Link to="/projects">Projects</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/resume">Resume</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/contact">Contact</Link>
                </li>
                
            </ul>
        </nav>
    )
}

export default NavBar;