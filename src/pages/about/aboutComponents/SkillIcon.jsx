import React from 'react'
import { motion } from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const SkillIcon = ({icon,text}) => {
return (
    <>
        <motion.div
            className=" lg:col-span-1 col-span-1 dark:bg-[#333] w-fit rounded-md p-[20px] shadow-sm dark:shadow-[#2196F3] shadow-black/60 cursor-pointer"
            transition={{duration:.5}}
            whileHover={{
                    scale:1.1
                }}
                >
                
            <FontAwesomeIcon icon={icon} className=" dark:text-[#0079ff]  w-[200px] h-[200px] " />
            <p className=' m-auto w-fit text-2xl capitalize mt-[10px]'>{text}</p>
        </motion.div>
    </>
)
}

export default SkillIcon