/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Image from "./image.js"

// import Header from "./header"
import "./layout.css"
// import "../../public/static/fonts/fonts.css"

import "../../static/fonts/fonts.css"



const Layout = ({ children }) => {
  
  

  return (
    <>
      <div>
        <Image style={{}}/>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
