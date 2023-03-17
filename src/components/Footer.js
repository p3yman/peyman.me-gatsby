import React from "react";

const Footer = () => (
  <div className="container sm">
    <div id="footer">
      <div className="copyright">
        {new Date().getFullYear()}. Inspired from a lot of websites and
        developed by copying from tutorials (just kidding{" "}
        <span role="img" aria-label="Grimacing Face">
          😬
        </span>
        ).
        <br />
      </div>
    </div>
  </div>
);

export default Footer;