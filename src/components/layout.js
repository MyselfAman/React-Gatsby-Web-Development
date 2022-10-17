/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Footer from "./Reuseable/Footer"
import Navbar from "./Reuseable/Navbar"
import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({children}) =>(
  <>
    <Navbar/>
    {children} 
    <Footer/>
  </>
)
// u can pass as many components inside this children it's a reserve keyword
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
