import React from "react"
import Resume from "./../assets/files/Peyman-Eskandari-Resume.pdf"

export default () => (
  <div id="hero">
    <div className="container">
      <h1>
        Hi, I’m <b>Peyman</b>, a front-end {`<developer />`} focused on building
        products that are beautiful from the inside out.
      </h1>
      <div className="actions">
        <a href="mailto:peyman.eskandari@gmail.com" className="btn">
          Say hi
        </a>
        <a
          href={Resume}
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span data-hover="Resume">Resume</span>
        </a>
      </div>
    </div>
  </div>
)
