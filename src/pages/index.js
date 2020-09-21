import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { Frame, Scroll, useCycle } from "framer"
import { Row, Column, Stats } from "../components/styled.js"
import leftArrow from "../images/left-arrow.png"
import rightArrow from "../images/right-arrow.png"
import Icon from "../images/assets/logo-vector.svg"

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
                color: "white",
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
            DRIVE A NEW <br></br>CAR EVERY MONTH
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
                onClick={null}
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
              <Image
                imageName="mapBackground"
                style={{
                  position: "absolute",
                  width: "510px",
                  height: "308.08px",
                  left: "-88px",
                  top: "1468.65px",
                  backgroundImage: "true"
                }}
              />
              <Image
                imageName="delivery"
                style={{
                  position: "absolute",
                  width: "198.6px",
                  height: "429.98px",
                  left: "116px",
                  top: "1408px",
                  backgroundImage: "true"
                }}
              />
            </div>
          </div>
          <div id="section3">
            <div>
              <h1
                style={{
                  position: "absolute",
                  width: "258px",
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
                Use Eleanor Trade-In Credits to trade in your vehicle for
                something else in our luxurious inventory. Nothing says “June”
                like a new car!
              </p>

              {/* <div style={{position: "absolute", width: "307.51px", height: "518px", left: "-6.08px", top: "2188px", background: "#FBC843"}}>
              </div> */}
              <Image
                imageName="headOnPorscheSmall"
                style={{
                  position: "absolute",
                  width: "417.15px",
                  height: "518px",
                  left: "-6.08px",
                  top: "2188px",
                  zIndex: 0
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: "201.94px",
                  height: "441.73px",
                  left: "216.06px",
                  top: "2249.27px",
                  background: "#000000",
                  mixBlendMode: "normal",
                  opacity: "0.22",
                  filter: "blur(70.3302px)",
                  borderRadius: "22.0867px",
                  zIndex: 1
                }}
              ></div>
              <Image
                imageName="yourVehiclePhone1"
                style={{
                  position: "absolute",
                  width: "213.29px",
                  height: "457.51px",
                  left: "177.57px",
                  top: "2219.61px",
                  zIndex: 2
                }}
              />
            </div>
          </div>
          <div id="section4">
            <div
              id="pricing"
              style={{
                width: "453px",
                height: "453px",
                position: "absolute",
                top: "2805px",
                left: "-19.5px",
                background: "#F5F5F7",
                display: "flex",
                alignItems: "center"
              }}
            >
              <Image
                imageName="pricing"
                style={{ position: "absolute", left: "180px", top: "95px" }}
              />
              <h1
                style={{
                  position: "absolute",
                  height: "88px",
                  left: "21.63%",
                  top: "calc(50% - 88px/2 + 66.5px",
                  fontSize: "34px",
                  fontWeight: "300",
                  lineHeight: "88px",
                  letterSpacing: "-0.164px",
                  color: "#2B3144"
                }}
              >
                SIMPLE MONTHLY PRICING
              </h1>
              <p
                style={{
                  position: "absolute",
                  width: "258px",
                  height: "42px",
                  left: "21.63%",
                  top: "71.74%",
                  bottom: "18.98%",
                  fontSize: "14px",
                  lineHeight: "21px",
                  letterSpacing: "-0.411765px",
                  color: "#000000"
                }}
              >
                Pick your plan, pay the monthly price. That's it. No hidden
                fees!
              </p>
            </div>
            <div
              id="insurance"
              style={{
                width: "453px",
                height: "453px",
                position: "absolute",
                top: "3268px",
                left: "-19.5px",
                background: "#F5F5F7"
              }}
            >
              <Image
                imageName="insurance"
                style={{
                  position: "absolute",
                  width: "95px",
                  height: "128px",
                  left: "190px",
                  top: "95px"
                }}
              />
              <h1
                style={{
                  position: "absolute",
                  width: "306px",
                  height: "88px",
                  left: "18%",
                  top: "calc(50% - 88px/2 + 66.5px",
                  fontSize: "34px",
                  fontWeight: "300",
                  lineHeight: "88px",
                  letterSpacing: "-0.164px",
                  color: "#2B3144"
                }}
              >
                VEHICLE INSURANCE INCLUDED
              </h1>
              <p
                style={{
                  position: "absolute",
                  width: "316px",
                  left: "18%",
                  top: "71.74%",
                  bottom: "18.98%",
                  fontSize: "14px",
                  lineHeight: "21px",
                  letterSpacing: "-0.411765px",
                  color: "#000000"
                }}
              >
                That’s right, you’re covered. All Eleanor plans include
                insurance coverage.
              </p>
            </div>
            <div
              id="maintenance"
              style={{
                width: "453px",
                height: "453px",
                position: "absolute",
                top: "3731px",
                left: "-19.5px",
                background: "#F5F5F7"
              }}
            >
              <Image
                imageName="maintenance"
                style={{
                  position: "absolute",
                  width: "122px",
                  height: "122px",
                  left: "39%",
                  top: "95px"
                }}
              />
              <h1
                style={{
                  position: "absolute",
                  width: "266px",
                  height: "88px",
                  left: "21.63%",
                  right: "21.19%",
                  top: "calc(50% - 88px/2 + 66.5px",
                  fontSize: "34px",
                  fontWeight: 300,
                  lineHeight: "88px",
                  letterSpacing: "-0.164px",
                  color: "#2B3144"
                }}
              >
                MAINTENANCE IS COVERED
              </h1>
              <p
                style={{
                  position: "absolute",
                  width: "273px",
                  height: "42px",
                  left: "21.63%",
                  right: "21.41%",
                  top: "71.74%",
                  fontSize: "14px",
                  lineHeight: "21px",
                  letterSpacing: "-0.411765px",
                  color: "#000000"
                }}
              >
                Leave it us. Don’t worry about maintaining your vehicle. Eleanor
                covers that as well.
              </p>
            </div>
          </div>
          <div id="section5">
            <h1
              style={{
                position: "absolute",
                width: "375px",
                height: "96px",
                left: "20px",
                top: "4251px",
                fontSize: "45px",
                fontWeight: 300,
                lineHeight: "48px",
                letterSpacing: "-.217059px",
                color: "#2B3144"
              }}
            >
              CUSTOMERS WITH THAT NEW CAR SMELL
            </h1>
            <p
              style={{
                position: "absolute",
                width: "370px",
                height: "78px",
                left: "24px",
                top: "4357px",
                fontSize: "16px",
                lineHeight: "26px",
                letterSpacing: "-0.470588px",
                color: "#000000"
              }}
            >
              “With Eleanor I was able to drive 2 of my dream cars this year!
              The process is always easy and affordable!”
            </p>
            <p
              style={{
                position: "absolute",
                width: "187px",
                height: "26px",
                left: "27px",
                top: "4440px",
                fontSize: "12px",
                fontWeight: 900,
                lineHeight: "26px",
                letterSpacing: "-.352941px",
                color: "#000000"
              }}
            >
              Alex Bateman, Interface Designer
            </p>
            <hr
              style={{
                position: "absolute",
                width: "374px",
                height: "4px",
                left: "20px",
                top: "4487px",
                color: "#F4F4F5"
              }}
            ></hr>  
              <p
                style={{
                  position: "absolute",
                  height: "100px",
                  left: "20px",
                  top: "4500px",
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
                  top: "4522px",
                  left: "223.34px",
                  width: "28.66px",
                  height: "11.31px",
                  color: "#414A69",
                }}
                onClick={null}
                src={rightArrow}
              ></img>
              <div style={{position: "absolute", width: "414px", height: "469px", left: "0px", top: "4564px", background: "#FBC843"}}></div>
              <Image imageName="touchedMobile" style={{position: "absolute", width: "284.02px", height: "400.79px", left: "64.99px", top: "4632.21px"}}/>
          </div>
          <hr style={{position: "absolute", width: "374px", height: "1px", left: "20px", top: "5093px", background: "#F4F4F5"}}></hr>
          <Icon style={{ position: "absolute", width: "157px", height: "13px", left: "21px", top: "5124px", marginBottom: "45px"}}/>  
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
