import React, { useState, useEffect } from "react"

import Mobile from "../components/content/mobile"
import Desktop from "../components/content/desktop"
import Loader from "../components/content/loader"

import SEO from "../components/seo"
import "../../public/static/fonts/fonts.css"


const IndexPage = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [[vehicleIndex, clicked], setVehicleIndex] = useState([0, false])
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
        <Loader /> 
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
              clicked={clicked}
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
