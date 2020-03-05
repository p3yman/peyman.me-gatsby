import React from "react"

const WorkItem = props => (
  <div className="work-item">
    <header>
      <div className="title">{props.item.title}</div>
      <div className="links">
        <a href={props.item.url}>View Project</a>
        <a href={props.item.source}>Source</a>
      </div>
    </header>
    <div className="desc">{props.item.desc}</div>
    <div className="tags">
      {props.item.tags.forEach(tag => (
        <span className="tag">{tag}</span>
      ))}
    </div>
  </div>
)

export default WorkItem
