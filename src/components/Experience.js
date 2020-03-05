import React from "react"
import ExperienceItem from "./ExperienceItem"
import experiences from "../configs/experiences"

export default () => (
  <div className="section">
    <div className="title">EXPERIENCE</div>
    <div className="content experiences">
      {experiences.map((item, index) => (
        <ExperienceItem item={item} key={`work-${index}`} />
      ))}
    </div>
  </div>
)
