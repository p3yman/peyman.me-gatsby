import React from "react"

const ExperienceItem = props => (
  <div className="experience-item">
    <div className="title">{props.itemTitle}</div>
    <div className="time">{props.itemTime}</div>
    <div className="desc">{props.itemDesc}</div>
  </div>
)

export default ExperienceItem
