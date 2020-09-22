import React from "react"
import Img from "gatsby-image"

import styled from "styled-components"
import Image from "./image"
import { motion } from "framer-motion"
import { progressPercentage } from "style-value-types"

export const H1Bebas = styled.h1`
  font-family: "Bebas";
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const Stats = styled.p`
  position: absolute;
  width: auto;
  height: 31px;
  font-family: "Bebas";
  font-size: 31px;
  line-height: 36px;
  color: #1b1e28;
`

// const MotionImageStyle = styled(motion.custom(Image))`
//   .motion-image {
//   }
// `

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
