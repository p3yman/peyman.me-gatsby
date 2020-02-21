import React from "react"

const ExperienceItem = props => (
  <div className="experience-item">
    <header>
      <div className="title">{props.item.title}</div>
      <div className="time">{props.item.time}</div>
    </header>
    <div className="desc">{props.item.desc}</div>
  </div>
)

export default ExperienceItem
