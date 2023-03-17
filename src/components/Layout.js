import React from "react"
import Seo from "../components/SEO"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = props => (
  <div>
    <Seo />
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout;
