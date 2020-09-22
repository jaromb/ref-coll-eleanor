import React from "react"
import { motion } from "framer-motion"

import { Row, Column, Stats } from "../styled.js"
import leftArrow from "../../images/left-arrow.png"
import rightArrow from "../../images/right-arrow.png"
import Icon from "../../images/assets/logo-vector.svg"
import Image from "../image"

const Desktop = props => (
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
        transition={{ ease: "easeOut", duration: .8, delay: 0.5 }}
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
        transition={{ ease: "easeOut", duration: .8, delay: 0.6 }}
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
      </motion.div>
        <div>
        <Image
          initial={{x: 200, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{ease: "easeOut", duration: .8, delay: .5}}
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
          transition={{ ease: "easeOut", duration: .8, delay: .2 }}
          style={{ width: "996px", position: "absolute", top: "585px" }}
          imageName="carGroupLarge"
        ></Image>
    </div>
    {/* <div id="section-two">
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
                    {props.vehicles[props.vehicleIndex].vehicleMake}
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
                    {props.vehicles[props.vehicleIndex].vehicleModel}
                  </h3>
                  <img
                    src={leftArrow}
                    onClick={() =>
                      props.vehicleIndex !== 0
                        ? props.setVehicleIndex(props.vehicleIndex - 1)
                        : props.setVehicleIndex(props.vehicles.length - 1)
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
                      props.vehicles[props.vehicleIndex + 1]
                        ? props.setVehicleIndex(props.vehicleIndex + 1)
                        : props.setVehicleIndex(0)
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
                      left: "51px",
                      top: "906px"
                    }}
                  />
                  <Stats style={{ left: "136px", top: "898px" }}>
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
                      left: "53px",
                      top: "957px"
                    }}
                  />
                  <Stats style={{ left: "136px", top: "950px" }}>
                    {props.vehicles[props.vehicleIndex].acceleration}
                  </Stats>
                </Row>
              </div>
              <div style={{position: "absolute", 
                  top: "988px", display: "flex", alignItems: "flex-end", height: "149px", width: "388px"}}>
              <Image
                style={{
                  position: "relative",
                  left: "11px",
                }}
                imageName={props.vehicles[props.vehicleIndex].imageName}
              />
              </div>
            </div> */}
    <div id="section-three">
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
    <div id="section-four">
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
          Use Eleanor Trade-In Credits to trade in your vehicle for something
          else in our luxurious inventory. Nothing says “June” like a new car!
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
    <div id="section-five">
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
          Pick your plan, pay the monthly price. That's it. No hidden fees!
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
          That’s right, you’re covered. All Eleanor plans include insurance
          coverage.
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
    <div id="section-six">
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
        “With Eleanor I was able to drive 2 of my dream cars this year! The
        process is always easy and affordable!”
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
          color: "#414A69"
        }}
        onClick={null}
        src={rightArrow}
      ></img>
      <div
        style={{
          position: "absolute",
          width: "414px",
          height: "469px",
          left: "0px",
          top: "4564px",
          background: "#FBC843"
        }}
      ></div>
      <Image
        imageName="touchedMobile"
        style={{
          position: "absolute",
          width: "284.02px",
          height: "400.79px",
          left: "64.99px",
          top: "4632.21px"
        }}
      />
    </div>
    <hr
      style={{
        position: "absolute",
        width: "374px",
        height: "1px",
        left: "20px",
        top: "5093px",
        background: "#F4F4F5"
      }}
    ></hr>
    <Icon
      style={{
        position: "absolute",
        width: "157px",
        height: "13px",
        left: "21px",
        top: "5124px",
        marginBottom: "45px"
      }}
    />
  </div>
)

export default Desktop
