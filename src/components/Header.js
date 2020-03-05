import React from "react"
import Logo from "./../assets/images/logo.svg"

export default () => (
  <header id="header">
    <div className="container">
      <div id="header-content">
        <div className="logo">
          <img src={Logo} alt="Peyman's Logo" width="40" />
        </div>
        <ul id="menu">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Playlists</a>
          </li>
          <li>
            <a href="#">Newsletter</a>
          </li>
          <li>
            <a href="#">Uses</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#" className="btn">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
)
