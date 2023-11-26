import React from "react";
import AnimatedHeading from "./AnimatedHeading";
import HomeBtn from "./HomeBtn";

const HomeRight = () => {
    return (
        <div className="w-1/2 flex items-center lg:w-[80vw]">
            <div className="pl-[10%] pr-[10%]h-[80%] w-full flex flex-col  items-center justify-around">
                <AnimatedHeading
                    className=" lg:text-4xl sm:text-3xl text-5xl w-[100%] m-auto lg:text-center"
                    text="Turning Vision Into Reality With Code And Design. "
                />
                <p className="my-5 w-[100%] lg:text-center">
                    As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                    Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                </p>
                
                <HomeBtn />
            </div>
        </div>
    );
};

export default HomeRight;
