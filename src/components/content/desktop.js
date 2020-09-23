import React, { useEffect, useState } from "react"
import { motion, useViewportScroll, AnimatePresence } from "framer-motion"

import { Row, Stats } from "../styled.js"
import Oval from "../../images/assets/Oval.svg"
import LeftArrow from "../../images/assets/left-arrow.svg"
import RightArrow from "../../images/assets/right-arrow.svg"
import Icon from "../../images/assets/logo-vector.svg"
import Image from "../image"
import Porsche from "../../images/head-on-PRCH911-small.png"

const Desktop = props => {
  const { scrollY } = useViewportScroll()
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      if (scrollY.current > scrollProgress) {
        setScrollProgress(scrollY.current)
      }
    }

    updateScrollProgress()
    window.addEventListener("scroll", updateScrollProgress)

    return () => {
      window.removeEventListener("scroll", updateScrollProgress)
    }
  })

  const xVariants = {
    enter: clicked => {
      return {
        x: clicked ? 300 : 600,
        opacity: 0,
      }
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: clicked => {
      return {
        x: clicked ? -300 : null,
        opacity: 0
      }
    }
  }

  const yVariants = {
    enter: clicked => {
      return {
        y: clicked ? 200 : 0,
        opacity: 0
      }
    },
    center: clicked => {
      return {
        y: clicked ? 0 : 0,
        opacity: 1
      }
    },
    exit: clicked => {
      return {
        y: clicked ? -200 : null,
        opacity: 0
      }
    }
  }

  return (
    <div id="desktop-content">
      <div id="section-one">
        <motion.div
          initial={{ x: -1600 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          style={{
            width: "100vw",
            maxWidth: "1600px",
            height: "740px",
            backgroundColor: "#fbc843"
          }}
        ></motion.div>

        <Image
          imageName="headerLogo"
          style={{
            position: "absolute",
            left: "101px",
            top: "42px",
            width: "225px"
          }}
        />
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.8, delay: 0.5 }}
          style={{ position: "absolute", top: "0px" }}
        >
          <h1
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              color: "white",
              position: "absolute",
              width: "827px",
              maxHeight: "276px",
              left: "95px",
              top: "179px",
              fontSize: "145px",
              lineHeight: "138px",
              letterSpacing: "-4.10319px"
            }}
          >
            DRIVE A NEW <br></br>CAR EVERY MONTH
          </h1>
        </motion.div>
        <motion.div
          initial={{ y: -110, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.8, delay: 0.6 }}
          style={{ position: "absolute", top: "0px" }}
        >
          <Row
            style={{
              position: "absolute",
              width: "232px",
              height: "108px",
              left: "99px",
              top: "416px"
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
            <RightArrow
              style={{
                position: "absolute",
                right: "0%",
                top: "calc(50% - 11.31px/2)",
                width: "28.66px",
                height: "11.31px",
                color: "#414A69",
                cursor: "pointer"
              }}
              onClick={null}
            />
          </Row>
        </motion.div>
        <div>
          <Image
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8, delay: 0.5 }}
            imageName="yourVehiclePhone2Large"
            style={{
              position: "absolute",
              width: "341px",
              height: "730.43px",
              left: "1081px",
              top: "108.57px"
            }}
          />
        </div>
        <Image
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 0.8, delay: 0.2 }}
          style={{ width: "996px", position: "absolute", top: "585px" }}
          imageName="carGroupLarge"
        ></Image>
      </div>
      {scrollProgress > 700 ? (
        <div id="section-two">
          <motion.h1
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }}
            style={{
              position: "absolute",
              width: "546px",
              height: "196px",
              left: "786px",
              top: "1199px",
              fontSize: "95px",
              fontWeight: 300,
              lineHeight: "98px",
              letterSpacing: "-0.458235px",
              color: "#2B3144"
            }}
          >
            SELECT A VEHICLE FROM YOUR PHONE.
          </motion.h1>
          <motion.p
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
            exit={{ y: -200, opacity: 0 }}
            style={{
              position: "absolute",
              width: "456px",
              height: "78px",
              left: "789px",
              top: "1422px",
              fontSize: "16px",
              lineHeight: "26px",
              letterSpacing: "-0.470588px",
              color: "#000000"
            }}
          >
            Select from a wide range of luxury vehicles in our inventory. Drive
            it for a month, trade it the next for something else you have always
            wanted to own.
          </motion.p>
          <div>
            <motion.div
              initial={{ x: 524, width: 0 }}
              animate={{ x: 0, width: 524 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "absolute",
                width: "524px",
                height: "661px",
                left: "101px",
                top: "1078px",
                background: "#FBC843"
              }}
            ></motion.div>
            <LeftArrow
              onClick={() =>
                props.vehicleIndex !== 0
                  ? props.setVehicleIndex([props.vehicleIndex - 1, true])
                  : props.setVehicleIndex([props.vehicles.length - 1, true])
              }
              style={{
                position: "absolute",
                width: "29px",
                height: "11px",
                left: "501.5px",
                top: "1123px",
                color: "#414A69",
                cursor: "pointer"
              }}
            />
            <RightArrow
              onClick={() =>
                props.vehicles[props.vehicleIndex + 1]
                  ? props.setVehicleIndex([props.vehicleIndex + 1, true])
                  : props.setVehicleIndex([0, true])
              }
              style={{
                position: "absolute",
                width: "29px",
                height: "11px",
                left: "551.5px",
                top: "1123px",
                color: "#414A69",
                cursor: "pointer"
              }}
            />
            <AnimatePresence custom={props.clicked}>
              <motion.div
                style={{ position: "absolute", top: "0px" }}
                key={props.vehicleIndex}
                initial="enter"
                animate="center"
                transition={{ duration: 0.8, delay: 0.3 }}
                custom={props.clicked}
                variants={yVariants}
                exit="exit"
              >
                <Row>
                  <h2
                    style={{
                      position: "absolute",
                      width: "238px",
                      height: "64px",
                      left: "230px",
                      top: "1259px",
                      fontSize: "64px",
                      fontWeight: 300,
                      lineHeight: "75px",
                      color: "black"
                    }}
                  >
                    {props.vehicles[props.vehicleIndex].vehicleMake}
                  </h2>
                  <h3
                    style={{
                      position: "absolute",
                      width: "142px",
                      height: "20px",
                      left: "230px",
                      top: "1326px",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "17px",
                      lineHeight: "20px",
                      color: "#4B5168"
                    }}
                  >
                    {props.vehicles[props.vehicleIndex].vehicleModel}
                  </h3>
                </Row>
                <Row>
                  <Image
                    imageName="miles"
                    style={{
                      position: "absolute",
                      width: "57px",
                      height: "22px",
                      left: "229.5px",
                      top: "1415px"
                    }}
                  />
                  <Stats style={{ left: "316px", top: "1408px" }}>
                    {props.vehicles[props.vehicleIndex].miles}
                  </Stats>
                </Row>
                <Row>
                  <Image
                    imageName="horsepower"
                    style={{
                      position: "absolute",
                      width: "46px",
                      height: "20px",
                      left: "231px",
                      top: "1468px"
                    }}
                  />
                  <Stats style={{ left: "316px", top: "1460px" }}>
                    {props.vehicles[props.vehicleIndex].horsepower}
                  </Stats>
                </Row>
                <Row>
                  <Image
                    imageName="acceleration"
                    style={{
                      position: "absolute",
                      width: "55px",
                      height: "23px",
                      left: "233px",
                      top: "1519px"
                    }}
                  />
                  <Stats style={{ left: "316px", top: "1512px" }}>
                    {props.vehicles[props.vehicleIndex].acceleration}
                  </Stats>
                </Row>
              </motion.div>
            </AnimatePresence>
          </div>
          <AnimatePresence custom={props.clicked}>
            <motion.div
              key={props.vehicleIndex}
              initial="enter"
              animate="center"
              transition={{ duration: 0.8, delay: 0.3 }}
              custom={props.clicked}
              variants={xVariants}
              exit="exit"
              style={{
                position: "absolute",
                top: "1547px",
                display: "flex",
                alignItems: "flex-end",
                height: "276px",
                width: "718px"
              }}
            >
              <Image
                style={{
                  position: "relative",
                  left: "192px",
                  bottom: "0px"
                }}
                imageName={props.vehicles[props.vehicleIndex].imageName}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      ) : null}
      {scrollProgress > 1600 ? (
        <div id="section-three">
          <div>
            <motion.h1
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", delay: 0.1, duration: 0.6 }}
              style={{
                position: "absolute",
                width: "546px",
                height: "196px",
                left: "101px",
                top: "2176px",
                fontSize: "95px",
                fontWeight: 300,
                lineHeight: "98px",
                letterSpacing: "-0.458235px",
                color: "#2B3144"
              }}
            >
              DELIVERED TO YOUR DOOR.
            </motion.h1>
            <motion.p
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut",delay: 0.6, duration: 0.7 }}
              style={{
                position: "absolute",
                width: "338px",
                height: "78px",
                left: "101px",
                top: "2399px",
                fontSize: "16px",
                lineHeight: "26px",
                letterSpacing: "-0.470588px",
                color: "#000000"
              }}
            >
              Eleanor works with your schedule to have a white-glove delivery
              service deliver your new vehicle right to your door.
            </motion.p>
          </div>
          <div id="map"
          style={{maxWidth: "1600px"}}>
            <Image
              imageName="mapBackgroundLarge"
              initial={{x: 849}}
              animate={{x: 0}}
              transition={{duration: .8}}
              style={{
                position: "absolute",
                width: "849px",
                height: "513px",
                left: "650px",
                top: "2100px",
                zIndex: 0
              }}
            />
            {/* <div
              style={{position: "absolute", top: "2100px", left: "1500px", opacity: 1, zIndex: 3, height: "513px", maxWidth: "100%", minWidth: "100px"}}
            ></div> */}
          <div id="map-illustrations">
              <Image
                initial={{x: 849}}
                animate={{x: 0}}
                transition={{duration: .8}}
                imageName="deliveryMarkerLarge"
                style={{
                  position: "absolute",
                  width: "49px",
                  height: "104px",
                  left: "1376px",
                  top: "2173px",
                  zIndex: 2
                }}
              />
              <Image
                initial={{x: 849}}
                animate={{x: 0}}
                transition={{duration: .8}}
                imageName="path4Large"
                style={{
                  position: "absolute",
                  width: "544px",
                  height: "101px",
                  left: "854px",
                  top: "2171px",
                  zIndex: 1
                }}
              />
              <Image
                initial={{x: 849}}
                animate={{x: 0}}
                transition={{duration: .8}}
                imageName="homeMarkerLarge"
                style={{
                  position: "absolute",
                  width: "26px",
                  height: "26px",
                  left: "842px",
                  top: "2200px",
                  zIndex: 2
                }}
              />
          </div>
            <Image
              initial={{y: -200, opacity: 0, zIndex: 4}}
              animate={{y: 0, opacity: 1}}
              transition={{delay: .8, duration: .5}}
              imageName="delivery"
              style={{
                position: "absolute",
                width: "331px",
                height: "716px",
                left: "990px",
                top: "1999px",
                zIndex: 4
              }}
            />
            <motion.div
              initial={{y: -200, opacity: 0, zIndex: 3}}
              animate={{y: 0, opacity: .24}}
              transition={{delay: .8, duration: .5}}
              style={{
                position: "absolute",
                width: "320px",
                height: "700px",
                left: "953px",
                top: "2045px",
                background: "#000000",
                mixBlendMode: "normal",
                opacity: "0.24",
                filter: "blur(111.45px)",
                borderRadius: "4px",
                zIndex: 3
              }}
            ></motion.div>
          <div>
          </div>
            <Image
              initial={{x: -200, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{delay: .6, duration: .9}}
              imageName="porscheDelivery"
              style={{
                position: "absolute",
                width: "499px",
                height: "143px",
                left: "429px",
                top: "2502px",
                transform: "scaleX(-1)"
              }}
            />
          </div>
        </div>
      ) : null}
      {scrollProgress > 2550 ? (
        <div id="section-four">
          <div>
            <motion.h1
              initial={{y: -200, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{delay: 1, duration: .5}}
              style={{
                position: "absolute",
                width: "544px",
                height: "196px",
                left: "826px",
                top: "3206px",
                fontSize: "95px",
                fontWeight: 300,
                lineHeight: "98px",
                letterSpacing: "-0.458235px",
                color: "#2B3144"
              }}
            >
              TRADE IN YOUR CAR EVERY MONTH.
            </motion.h1>
            <motion.p
              initial={{y: -200, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{delay: 1.2, duration: .5}}
              style={{
                position: "absolute",
                width: "397px",
                height: "78px",
                left: "826px",
                top: "3429px",
                fontSize: "16px",
                lineHeight: "26px",
                letterSpacing: "-0.470588px",
                color: "#000000"
              }}
            >
              Use Eleanor Trade-In Credits to trade in your vehicle for
              something else in our luxurious inventory. Nothing says “June”
              like a new car!
            </motion.p>
            <motion.div
              initial={{x: -200, zIndex: 0}}
              animate={{x: 0}}
              transition={{duration: .5}}
              style={{
                position: "absolute",
                width: "488px",
                height: "823px",
                left: "100px",
                top: "2930px",
                background: "#FBC843",
                zIndex: 0
              }}
            ></motion.div>
            <motion.img
              initial={{x: -200,  zIndex: 1}}
              animate={{x: 0}}
              transition={{duration: .5}}
              src={Porsche}
              style={{
                height: "283px",
                position: "absolute",
                left: "40px",
                top: "3218px",
                zIndex: 1
              }}
            />
            <Image
              initial={{y: -20, zIndex: 3, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: .5, delay: .5}}
              imageName="yourVehiclePhone1"
              style={{
                position: "absolute",
                width: "338px",
                height: "725px",
                left: "392px",
                top: "2982px",
                zIndex: 3
              }}
            />
            <div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: .5, delay: .5}}
              style={{
                position: "absolute",
                width: "320px",
                height: "700px",
                left: "453px",
                top: "3029px",
                background: "#000000",
                mixBlendMode: "normal",
                opacity: "0.22",
                filter: "blur(111.45px)",
                borderRadius: "35px",
                zIndex: 2
              }}
            ></div>
          </div>
        </div>
      ) : null}
      {scrollProgress > 3450 ? (
        <div id="section-five">
          <motion.div
            id="pricing"
            initial={{y: -30, opacity: 0}}
            animate={{Y: 0, opacity: 1}}
            transition={{duration: .5}}
            style={{
              width: "453px",
              height: "453px",
              position: "absolute",
              top: "3963px",
              left: "101px",
              background: "#F5F5F7",
              display: "flex",
              alignItems: "center"
            }}
          >
            <Image
              imageName="pricing"
              style={{ position: "absolute", left: "170px", top: "95px" }}
            />
            <h1
              style={{
                position: "absolute",
                height: "88px",
                left: "98px",
                top: "249px",
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
                left: "98px",
                top: "325px",
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "-0.411765px",
                color: "#000000"
              }}
            >
              Pick your plan, pay the monthly price. That's it. No hidden fees!
            </p>
          </motion.div>
          <motion.div
            id="insurance"
            initial={{y: -30, opacity: 0}}
            animate={{Y: 0, opacity: 1}}
            transition={{duration: .5, delay: .4}}
            style={{
              width: "453px",
              height: "453px",
              position: "absolute",
              top: "3963px",
              left: "574px",
              background: "#F5F5F7"
            }}
          >
            <Image
              imageName="insurance"
              style={{
                position: "absolute",
                width: "95px",
                height: "128px",
                left: "179px",
                top: "87px"
              }}
            />
            <Oval
              style={{ position: "absolute", left: "187.79px", top: "227px" }}
            />
            <h1
              style={{
                position: "absolute",
                width: "306px",
                height: "88px",
                left: "74px",
                top: "249px",
                fontSize: "34px",
                fontWeight: 300,
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
                left: "74px",
                top: "325px",
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "-0.411765px",
                color: "#000000"
              }}
            >
              That’s right, you’re covered. All Eleanor plans include insurance
              coverage.
            </p>
          </motion.div>
          <motion.div
            id="maintenance"
            initial={{y: -30, opacity: 0}}
            animate={{Y: 0, opacity: 1}}
            transition={{duration: .5, delay: .8}}
            style={{
              width: "453px",
              height: "453px",
              position: "absolute",
              top: "3963px",
              left: "1047px",
              background: "#F5F5F7"
            }}
          >
            <Image
              imageName="maintenance"
              style={{
                position: "absolute",
                width: "122px",
                height: "122px",
                left: "163px",
                top: "91px"
              }}
            />
            <Oval
              style={{ position: "absolute", left: "192.79px", top: "225.6px" }}
            />
            <h1
              style={{
                position: "absolute",
                width: "266px",
                height: "88px",
                left: "98px",
                top: "249px",
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
                left: "98px",
                top: "325px",
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "-0.411765px",
                color: "#000000"
              }}
            >
              Leave it us. Don’t worry about maintaining your vehicle. Eleanor
              covers that as well.
            </p>
          </motion.div>
        </div>
      ) : null}
      {scrollProgress > 4300 ? (
        <div id="section-six">
          <motion.div
          style={{position: "absolute", top: "0px"}}
          initial={{y: -40, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: .5, delay: .7}}
          >
          <h1
            style={{
              position: "absolute",
              width: "608px",
              height: "176px",
              left: "836px",
              top: "4737px",
              fontSize: "93px",
              fontWeight: 300,
              lineHeight: "88px",
              letterSpacing: "-.448588px",
              color: "#2B3144"
            }}
          >
            CUSTOMERS WITH THAT NEW CAR SMELL
          </h1>
          <p
            style={{
              position: "absolute",
              width: "397px",
              height: "52px",
              left: "840px",
              top: "4948px",
              fontSize: "16px",
              lineHeight: "26px",
              letterSpacing: "-0.470588px",
              color: "#000000"
            }}
          >
            “With Eleanor I was able to drive 2 of my dream cars this year! The
            process is always easy and affordable!”
          </p>
          <p
            style={{
              position: "absolute",
              width: "187px",
              height: "26px",
              left: "843px",
              top: "5019px",
              fontSize: "12px",
              fontWeight: 900,
              lineHeight: "26px",
              letterSpacing: "-.352941px",
              color: "#000000"
            }}
          >
            Alex Bateman, &nbsp; Interface Designer
          </p>
          <hr
            style={{
              position: "absolute",
              width: "608px",
              height: "4px",
              left: "836px",
              top: "5086px",
              color: "#F4F4F5"
            }}
          ></hr>
          <p
            style={{
              position: "absolute",
              height: "108px",
              width: "194px",
              left: "836px",
              top: "5131px",
              fontSize: "16px",
              fontWeight: 900,
              lineHeight: "54px",
              letterSpacing: "-0.470588px",
              color: "#414A69"
            }}
          >
            Available On the App
          </p>
          <RightArrow
            style={{
              position: "absolute",
              top: "5153px",
              left: "1053.77px",
              width: "28.66px",
              height: "11.31px",
              color: "#414A69",
              cursor: "pointer"
            }}
            onClick={null}
          />
          </motion.div>
          <motion.div
            initial={{x: -101, width: 0}}
            animate={{x: 0, width: 637}}
            transition={{duration: .5}}
            style={{
              position: "absolute",
              width: "637px",
              height: "722px",
              left: "101px",
              top: "4646px",
              background: "#FBC843"
            }}
          ></motion.div>
          <Image
            imageName="touchedMobileLarge"
            initial={{x: -40, opacity: 0}}
            animate={{x: 0, opacity: 1}} 
            transition={{duration: .5, delay: .4}}
            style={{
              position: "absolute",
              width: "437px",
              height: "617px",
              left: "181px",
              top: "4751px"
            }}
          />
          <Image
            imageName="car1"
            initial={{x: -70, opacity: 0}}
            animate={{x: 0, opacity: 1}} 
            transition={{duration: .5, delay: .4}}
            style={{
              position: "absolute",
              height: "237px",
              left: "283px",
              top: "5250px"
            }}
          />
        </div>
      ) : null}
      <hr
        style={{
          position: "absolute",
          width: "1399px",
          height: "1px",
          left: "101px",
          top: "5564px",
          background: "#F4F4F5"
        }}
      ></hr>
      <Icon
        style={{
          position: "absolute",
          width: "157px",
          height: "13px",
          left: "101px",
          top: "5595px",
          marginBottom: "118px"
        }}
      />
      <p
        style={{
          position: "absolute",
          height: "15px",
          top: "5602px",
          left: "1238px",
          fontSize: "11px",
          lineHeight: "13px",
          letterSpacing: "-.323529px",
          color: "#4F5874"
        }}
      >
        About Us
      </p>
      <p
        style={{
          position: "absolute",
          height: "15px",
          top: "5602px",
          left: "1348px",
          fontSize: "11px",
          lineHeight: "13px",
          letterSpacing: "-.323529px",
          color: "#4F5874"
        }}
      >
        Terms of Use
      </p>
      <p
        style={{
          position: "absolute",
          height: "15px",
          top: "5602px",
          left: "1478px",
          fontSize: "11px",
          lineHeight: "13px",
          letterSpacing: "-.323529px",
          color: "#4F5874"
        }}
      >
        FAQ
      </p>
    </div>
  )
}

export default Desktop
