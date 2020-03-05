import React from "react"

export default () => (
  <div className="container">
    <span className="menu-lines">
      {[1, 2, 3, 4, 5].forEach(i => (
        <span className="Hi" key={i.toString()}>
          <span></span>
        </span>
      ))}
    </span>
  </div>
)
