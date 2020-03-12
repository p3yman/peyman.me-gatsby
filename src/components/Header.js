import React from "react"
// import { Link } from "gatsby"
import Logo from "./../assets/images/logo.svg"

export default () => (
  <header id="header">
    <div className="container">
      <div id="header-content">
        <div className="logo">
          <img src={Logo} alt="Peyman's Logo" width="40" />
        </div>
        {/* <ul id="menu">
          <li>
            <Link to="/" className="link">
              <span data-hover="About">About</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              <span data-hover="Playlists">Playlists</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              <span data-hover="Newsletter">Newsletter</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              <span data-hover="Uses">Uses</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              <span data-hover="Contact">Contact</span>
            </Link>
          </li>
          <li>
            <a
              href={Resume}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span data-hover="Resume">Resume</span>
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  </header>
)
