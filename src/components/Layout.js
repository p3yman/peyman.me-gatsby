import React from "react"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = props => (
  <div>
    <SEO />
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout
