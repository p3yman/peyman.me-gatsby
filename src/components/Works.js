import React from "react"
import WorkItem from "./WorkItem"
import works from "../configs/works"

const Works = () => (
  <div className="section">
    <div className="title">WORKS</div>
    <div className="content works">
      {works.map((item, index) => (
        <WorkItem item={item} key={`work-${index}`} />
      ))}
    </div>
  </div>
);

export default Works;