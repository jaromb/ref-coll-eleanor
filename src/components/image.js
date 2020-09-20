import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default (props) => {
  const data = useStaticQuery(graphql`
    query {
    headerLogo: file(
      relativePath: {eq: "HeaderLogo.png"}
    ) {
      childImageSharp {
        fixed(width: 225, height: 18, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    carGroup: file(
      relativePath: {eq: "car-group.png"}
    ) {
      childImageSharp {
        fixed(quality:100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    rangeRoverSmall: file(
      relativePath: {eq: "2018-Range-Rover-Velgar.png"}
    ) {
      childImageSharp {
        fixed(quality:100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    miles: file(
      relativePath: {eq: "MPG.png"}
    ) {
      childImageSharp {
        fixed(width:57, height:22, quality:100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    horsepower: file(
      relativePath: {eq: "HP.png"}
    ) {
      childImageSharp {
        fixed(width: 46, height: 20, quality:100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    acceleration: file(
      relativePath: {eq: "0-60.png"}
    ) {
      childImageSharp {
        fixed(width: 55, height: 23, quality:100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mapBackground: file(
      relativePath: {eq: "map-screenshot.png"}
    ) {
      childImageSharp {
        fixed(width: 510, height: 308, quality:100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    delivery: file(
      relativePath: {eq: "delivery.png"}
    ) {
      childImageSharp {
        fixed(width: 199, height: 430, quality:100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    }
    `)

  return <div>
    <Img style={props.style} fixed={data[`${props.imageName}`].childImageSharp.fixed} />
  </div>
  }

