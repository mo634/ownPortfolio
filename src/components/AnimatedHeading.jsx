"use client"
import React from "react";
import { motion } from "framer-motion";

const quoteAnimation = {
  initial: {
  },
  animate: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1, 
    },
  },
};

const singleWordAnimation = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const AnimatedHeading = ({ text ,className=""}) => {
  return (
    <div className="my-5 w-full">
      <motion.h1
        className={className}
        variants={quoteAnimation}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={singleWordAnimation}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedHeading;