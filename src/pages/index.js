import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { Frame, Scroll, useCycle } from "framer"

import Mobile from "../components/content/mobile"
import Desktop from "../components/content/desktop"
import LoaderOval from "../images/assets/loader-oval.svg"
import LoaderCrown from "../images/assets/loader-crown.svg"
import LoaderIndicator from "../images/assets/loader-indicator.svg"
import Image from "../components/image"
import SEO from "../components/seo"
import { callbackify } from "util"

const IndexPage = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [vehicleIndex, setVehicleIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  const [vehicles, setVehicles] = useState([
    {
      vehicleMake: "LAND ROVER",
      vehicleModel: "2019 - RANGE ROVER VELAR",
      miles: "25/29",
      horsepower: "247",
      acceleration: "6.4",
      imageName: "rangeRover"
    },
    {
      vehicleMake: "PORSCHE",
      vehicleModel: "2019 - 911 CARRERA S",
      miles: "19/24",
      horsepower: "443",
      acceleration: "3.2",
      imageName: "porscheModel"
    }
  ])

  useEffect(() => {

    const simulateLoading = setTimeout(() => {
      setLoading(false)
  }, 2000);
  

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => { 
      window.removeEventListener("resize", updateDimensions)
      clearTimeout(simulateLoading)
    }
  }, [])

  const updateDimensions = () => {
    let windowWidth = typeof window !== undefined ? window.innerWidth : 0

    setWindowWidth(windowWidth)
  }

  return (
    <div>
      {loading ? (
        
        <div style={{width: "120px", height: "120px", position: "relative", margin: "40vh auto"}}>
          <motion.div initial={{originY: .47, originX: .51}} animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity }}>
            <LoaderOval style={{width: "120px"}}/>
            <LoaderIndicator style={{width: "10px", height: "10px", position: "absolute", left: "-4px", top: "55px"}}/>
          </motion.div>
          <LoaderCrown style={{position: "absolute", left: "35px", top: "45px"}}/>
        </div>
       
      ) : (
        <div>
          <SEO title="Home" />
          {windowWidth < 500 ? (
            <Mobile
              vehicleIndex={vehicleIndex}
              vehicles={vehicles}
              setVehicleIndex={setVehicleIndex}
            />
          ) : (
            <Desktop
              vehicleIndex={vehicleIndex}
              vehicles={vehicles}
              setVehicleIndex={setVehicleIndex}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default IndexPage
