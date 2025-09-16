import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-texts">
          <strong>Sagar Singh</strong>
        </div>

        <div className="nav-items">
          <ul>
            <li>
              <Link to="header" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="skill" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="education" smooth={true} duration={500}>
                Education
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
            <li className="Resume">
              <a
                href="https://drive.google.com/file/d/1NrQtGWI25Y2EkzarejyfTj__Edbxg2gn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
