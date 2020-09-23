import React from "react"
import { motion } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default props => {
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
          fixed(width: 718, quality: 100) {
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
          fixed(width: 718, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      porscheDelivery: file(relativePath: { eq: "porsche-model-large.png" }) {
        childImageSharp {
          fixed(width: 499, quality: 100) {
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
          fixed(width: 57, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      horsepower: file(relativePath: { eq: "HP.png" }) {
        childImageSharp {
          fixed(width: 46, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      acceleration: file(relativePath: { eq: "0-60.png" }) {
        childImageSharp {
          fixed(width: 55, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mapBackground: file(relativePath: { eq: "map-screenshot.png" }) {
        childImageSharp {
          fixed(height: 308, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      deliveryMarkerSmall: file(relativePath: { eq: "map-marker.png" }) {
        childImageSharp {
          fixed(width: 29, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      path4Small: file(relativePath: { eq: "path4.png" }) {
        childImageSharp {
          fixed(width: 326, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      homeMarkerSmall: file(relativePath: { eq: "home-marker.png" }) {
        childImageSharp {
          fixed(width: 16, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mapBackgroundLarge: file(relativePath: { eq: "map-large.png" }) {
        childImageSharp {
          fixed(width: 849, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      deliveryMarkerLarge: file(relativePath: { eq: "map-marker.png" }) {
        childImageSharp {
          fixed(width: 48, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      path4Large: file(relativePath: { eq: "path4.png" }) {
        childImageSharp {
          fixed(width: 544, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      homeMarkerLarge: file(relativePath: { eq: "home-marker.png" }) {
        childImageSharp {
          fixed(width: 26, quality: 100) {
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
          fixed(width: 417, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      headOnPorscheLarge: file(
        relativePath: { eq: "head-on-PRCH911-small.png" }
      ) {
        childImageSharp {
          fixed(height: 283, quality: 100) {
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
      yourVehiclePhone1Large: file(relativePath: { eq: "your-vehicle-phone1.png" }) {
        childImageSharp {
          fixed(width: 338, quality: 100) {
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
          fixed(width: 114, quality: 100) {
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
      touchedMobileLarge: file(relativePath: { eq: "touched-large.png" }) {
        childImageSharp {
          fixed(width: 437, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      car1: file(relativePath: { eq: "car1.png" }) {
        childImageSharp {
          fixed(height: 237, quality: 100) {
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
