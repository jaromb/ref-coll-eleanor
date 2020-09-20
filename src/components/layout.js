/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Image, { query } from "./image.js"

import Header from "./header"
import "./layout.css"
import "../../public/static/fonts/fonts.css"

const Layout = ({ children }) => {
  
  

  return (
    <>
      {/* <Header></Header> */}
      <div
        style={{
          // margin: `0 auto`,
          // maxWidth: 960,
          // padding: ` 1.0875rem 1.45rem`,
          backgroundColor: "blue"
        }}
      >
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
