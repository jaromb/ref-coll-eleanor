import React from "react"
import { motion } from "framer-motion"

import LoaderOval from "../../images/assets/loader-oval.svg"
import LoaderCrown from "../../images/assets/loader-crown.svg"
import LoaderIndicator from "../../images/assets/loader-indicator.svg"

const Loader = () => 
    <div style={{width: "120px", height: "120px", position: "relative", margin: "40vh auto"}}>
          <motion.div initial={{originY: .476, originX: .502}} animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity }}>
            <LoaderOval style={{width: "120px"}}/>
            <LoaderIndicator style={{width: "10px", height: "10px", position: "absolute", left: "-4px", top: "55px"}}/>
          </motion.div>
          <LoaderCrown style={{position: "absolute", left: "35px", top: "45px"}}/>
        </div>


export default Loader