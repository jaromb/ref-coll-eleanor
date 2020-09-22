import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default props => {
  const MotionImage = styled(motion.custom(Img))`
    
  `
  const data = useStaticQuery(graphql`
    query {
      headerLogo: file(relativePath: { eq: "HeaderLogo.png" }) {
        childImageSharp {
          fixed(width: 225, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      carGroup: file(relativePath: { eq: "car-group.png" }) {
        childImageSharp {
          fixed(width: 414, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      carGroupLarge: file(relativePath: { eq: "car-group-large.png" }) {
        childImageSharp {
          fixed(width: 996, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      rangeRover: file(relativePath: { eq: "2018-Range-Rover-Velgar.png" }) {
        childImageSharp {
          fixed(quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      rangeRoverMobile: file(
        relativePath: { eq: "2018-Range-Rover-Velgar.png" }
      ) {
        childImageSharp {
          fixed(width: 388, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      porscheModel: file(relativePath: { eq: "porsche-model-large.png" }) {
        childImageSharp {
          fixed(quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      porscheModelMobile: file(
        relativePath: { eq: "porsche-model-large.png" }
      ) {
        childImageSharp {
          fixed(width: 388, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      miles: file(relativePath: { eq: "MPG.png" }) {
        childImageSharp {
          fixed(width: 57, height: 22, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      horsepower: file(relativePath: { eq: "HP.png" }) {
        childImageSharp {
          fixed(width: 46, height: 20, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      acceleration: file(relativePath: { eq: "0-60.png" }) {
        childImageSharp {
          fixed(width: 55, height: 23, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mapBackground: file(relativePath: { eq: "map-screenshot.png" }) {
        childImageSharp {
          fixed(width: 510, height: 308, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      delivery: file(relativePath: { eq: "delivery.png" }) {
        childImageSharp {
          fixed(width: 199, height: 430, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      headOnPorscheSmall: file(
        relativePath: { eq: "head-on-prch911-group.png" }
      ) {
        childImageSharp {
          fixed(width: 417, height: 518, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      yourVehiclePhone1: file(relativePath: { eq: "your-vehicle-phone1.png" }) {
        childImageSharp {
          fixed(width: 213, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      yourVehiclePhone2Large: file(
        relativePath: { eq: "your-vehicle-phone2.png" }
      ) {
        childImageSharp {
          fixed(width: 341, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pricing: file(relativePath: { eq: "pricing.png" }) {
        childImageSharp {
          fixed(height: 142, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      insurance: file(relativePath: { eq: "insurance.png" }) {
        childImageSharp {
          fixed(width: 95, height: 128, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      maintenance: file(relativePath: { eq: "maintenance.png" }) {
        childImageSharp {
          fixed(width: 122, height: 122, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      touchedMobile: file(relativePath: { eq: "touched-large.png" }) {
        childImageSharp {
          fixed(width: 284, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      loader: file(relativePath: { eq: "Loader.png" }) {
        childImageSharp {
          fixed(width: 126, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    props.initial ? 
    <motion.div 
    initial={props.initial}
    animate={props.animate}
    transition={props.transition}
    style={{ position: "absolute", top: "0px" }}
    >
      <Img
       alt={props.imageName}
       style={props.style}
       fixed={data[`${props.imageName}`].childImageSharp.fixed}
      />
    </motion.div>
    : 
    <div>
      <Img 
       alt={props.imageName}
       style={props.style}
       fixed={data[`${props.imageName}`].childImageSharp.fixed}
      />
    </div>
  )
}

// export const MotionImage = props => {
//   return (
//     <MotionImageStyle
//       initial={props.initial}
//       animate={props.animate}
//       transition={props.transition}
//       style={props.style}
//       imageName={props.imageName}
//     />
//   )
// }
