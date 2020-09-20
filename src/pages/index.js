import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { Frame, Scroll, useCycle } from "framer"
import { createGlobalStyle } from "styled-components"
import { Row, Column, Stats } from "../components/styled.js"
import leftArrow from "../images/left-arrow.png"
import rightArrow from "../images/right-arrow.png"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { callbackify } from "util"

const IndexPage = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [vehicleIndex, setVehicleIndex] = useState(0)

  const [vehicles, setVehicles] = useState([
    {
      vehicleStyle: "LAND ROVER",
      vehicleModel: "2019 - RANGE ROVER VELAR",
      miles: "25/29",
      horsepower: "247",
      acceleration: "6.4",
      imageName: "rangeRoverSmall"
    },
    {
      vehicleStyle: "LAND ROVER 2",
      vehicleModel: "2019 - RANGE ROVER VELAR",
      miles: "25/29",
      horsepower: "247",
      acceleration: "6.4",
      imageName: "rangeRoverSmall"
    }
  ])

  useEffect(() => {
    console.log("vehicles - " + vehicles)
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  })

  const updateDimensions = () => {
    let windowWidth = typeof window !== undefined ? window.innerWidth : 0

    setWindowWidth(windowWidth)
  }

  return (
    <div>
      <div>
        {/* <Layout> */}
        <SEO title="Home" />
        <div>
          <div
            id="section-one"
            style={{
              width: "414px",
              height: "340px",
              backgroundColor: "#fbc843"
            }}
          >
            <Image
              imageName="headerLogo"
              style={{ color: "#ffffff", left: "19px", top: "42px" }}
            />
            <h1
              style={{
                fontStyle: "normal",
                fontWeight: "normal",
                color: "#FFFFFF",
                position: "absolute",
                width: "282px",
                maxHeight: "104px",
                left: "19px",
                top: "100px",
                fontSize: "53px",
                lineHeight: "52px",
                letterSpacing: "-1.49979px"
              }}
            >
              DRIVE A NEW <br></br> CAR EVERY MONTH.
            </h1>
            <Row
              style={{
                position: "absolute",
                width: "232px",
                height: "54px",
                left: "20px",
                top: "199px"
              }}
            >
              <p
                style={{
                  position: "absolute",
                  height: "108px",
                  left: "0%",
                  right: "16.38%",
                  top: "calc(50% - 108px/2 + 27px)",
                  fontSize: "16px",
                  fontWeight: 900,
                  lineHeight: "54px",
                  letterSpacing: "-0.470588px",
                  color: "#414A69"
                }}
              >
                Available On the App
              </p>
              <img
                style={{
                  position: "absolute",
                  right: "0%",
                  top: "calc(50% - 11.31px/2)",
                  width: "28.66px",
                  height: "11.31px",
                  color: "#414A69"
                }}
                src={rightArrow}
              ></img>
            </Row>
            <div id="car-group">
              <Image
                style={{ width: "414px", position: "absolute", top: "271px" }}
                imageName="carGroup"
              ></Image>
            </div>
          </div>
          <div id="section-two">
            <h1
              style={{
                position: "absolute",
                width: "328px",
                height: "96px",
                left: "20px",
                top: "509px",
                fontSize: "45px",
                fontWeight: 300,
                lineHeight: "48px",
                letterSpacing: "-0.217059px",
                color: "#2B3144"
              }}
            >
              SELECT A VEHICLE FROM YOUR PHONE.
            </h1>
            <p
              style={{
                position: "absolute",
                width: "375px",
                height: "78px",
                left: "19px",
                top: "614px",
                fontSize: "16px",
                lineHeight: "26px",
                letterSpacing: "-0.470588px",
                color: "#000000"
              }}
            >
              Select from a wide range of luxury vehicles in our inventory.
              Drive it for a month, trade it the next for something else you
              have always wanted to own.
            </p>
            <div>
              <div
                style={{
                  position: "absolute",
                  width: "374px",
                  height: "340px",
                  left: "20px",
                  top: "715px",
                  background: "#FBC843"
                }}
              ></div>
              <Row>
                <h2
                  style={{
                    position: "absolute",
                    width: "auto",
                    height: "40px",
                    left: "50px",
                    top: "753px",
                    fontSize: "40px",
                    lineHeight: "47px",
                    color: "black"
                  }}
                >
                  {vehicles[vehicleIndex].vehicleStyle}
                </h2>
                <h3
                  style={{
                    position: "absolute",
                    width: "auto",
                    height: "20px",
                    left: "50px",
                    top: "797px",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "17px",
                    lineHeight: "20px",
                    color: "#4B5168"
                  }}
                >
                  {vehicles[vehicleIndex].vehicleModel}
                </h3>
                <img
                  src={leftArrow}
                  onClick={() =>
                    vehicleIndex !== 0
                      ? setVehicleIndex(vehicleIndex - 1)
                      : setVehicleIndex(vehicles.length - 1)
                  }
                  style={{
                    position: "absolute",
                    width: "29px",
                    height: "11px",
                    left: "266px",
                    top: "767px",
                    color: "#414A69"
                  }}
                />
                <img
                  src={rightArrow}
                  onClick={() =>
                    vehicles[vehicleIndex + 1]
                      ? setVehicleIndex(vehicleIndex + 1)
                      : setVehicleIndex(0)
                  }
                  style={{
                    position: "absolute",
                    width: "29px",
                    height: "11px",
                    left: "316px",
                    top: "767px",
                    color: "#414A69"
                  }}
                />
              </Row>
              <Row>
                <Image
                  imageName="miles"
                  style={{
                    position: "absolute",
                    width: "57px",
                    height: "22px",
                    left: "50px",
                    top: "853px"
                  }}
                />
                <Stats style={{ left: "136px", top: "846px" }}>
                  {vehicles[vehicleIndex].miles}
                </Stats>
              </Row>
              <Row>
                <Image
                  imageName="horsepower"
                  style={{
                    position: "absolute",
                    width: "46px",
                    height: "20px",
                    left: "51px",
                    top: "906px"
                  }}
                />
                <Stats style={{ left: "136px", top: "898px" }}>
                  {vehicles[vehicleIndex].horsepower}
                </Stats>
              </Row>
              <Row>
                <Image
                  imageName="acceleration"
                  style={{
                    position: "absolute",
                    width: "55px",
                    height: "23px",
                    left: "53px",
                    top: "957px"
                  }}
                />
                <Stats style={{ left: "136px", top: "950px" }}>
                  {vehicles[vehicleIndex].acceleration}
                </Stats>
              </Row>
            </div>
            <Image
              style={{
                position: "absolute",
                width: "388px",
                height: "149px",
                left: "11px",
                top: "988px"
              }}
              imageName={vehicles[vehicleIndex].imageName}
            />
          </div>
          <div id="section3">
          <div>
            <h1
              style={{
                position: "absolute",
                width: "auto",
                height: "48px",
                left: "20px",
                top: "1251px",
                fontSize: "45px",
                fontWeight: 300,
                lineHeight: "48px",
                letterSpacing: "-0.217059px",
                color: "#2B3144"
              }}
            >
              DELIVERED TO YOUR DOOR.
            </h1>
            <p
              style={{
                position: "absolute",
                width: "375px",
                height: "78px",
                left: "19px",
                top: "1308px",
                fontSize: "16px",
                lineHeight: "26px",
                letterSpacing: "-0.470588px",
                color: "#000000"
              }}
            >
              Eleanor works with your schedule to have a white-glove delivery
              service deliver your new vehicle right to your door.
            </p>
          </div>
            <div id="map">
              <Image imageName="mapBackground" style={{position: "absolute", width: "510px", height: "308.08px", left: "-88px", top: "1468.65px", backgroundImage: "true"}}/>
              <Image imageName="delivery" style={{position: "absolute", width: "198.6px", height: "429.98px", left: "116px", top: "1408px", backgroundImage: "true"}}/>
            </div>
        </div>
        <div id="section3">
          <h1 style={{
                position: "absolute",
                width: "auto",
                height: "96px",
                left: "20px",
                top: "1979px",
                fontSize: "45px",
                fontWeight: 300,
                lineHeight: "48px",
                letterSpacing: "-0.217059px",
                color: "#2B3144"
              }}
            >
              TRADE IN YOUR CAR EVERY MONTH.
            </h1>
            <p
              style={{
                position: "absolute",
                width: "375px",
                height: "78px",
                left: "19px",
                top: "2085px",
                fontSize: "16px",
                lineHeight: "26px",
                letterSpacing: "-0.470588px",
                color: "#000000"
              }}
            >
              Use Eleanor Trade-In Credits to trade in your vehicle for something else in our luxurious inventory.  Nothing says “June” like a new car!
            </p>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            type: "Inertia",
            stiffness: 260,
            damping: 40
          }}
        ></motion.div>
        {/* </Layout> */}
        {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
      </div>
    </div>
  )
}

export default IndexPage
