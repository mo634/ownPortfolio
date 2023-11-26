
import React from "react";
import {motion} from "framer-motion";
import Link from "next/link";
const MotionLink = motion(Link);
const Logo = () => {
    return (
        <MotionLink
            href={"/"}
            className=" dark:border-white dark:border-solid dark:border-2 bg-dark text-light h-16 w-16 rounded-full flex justify-center items-center text-4xl"
            whileHover={
                {
                    opacity: 0.8,
                    scale: 1.1,
                    transition: {
                        duration:1
                    }
                }
            }
        >
            M
        </MotionLink>
    );
};

export default Logo;
