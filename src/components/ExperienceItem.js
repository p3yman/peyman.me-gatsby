import React from "react"

const ExperienceItem = props => (
  <div className="experience-item">
    <header>
      <div className="title">{props.itemTitle}</div>
      <div className="time">{props.itemTime}</div>
    </header>
    <div className="desc">{props.itemDesc}</div>
  </div>
)

export default ExperienceItem
