"use client";
import React, {useEffect, useRef} from "react";
import prof_img from "../../../../public/images/profile/myImage.jpg";
import Image from "next/image";
import {useInView, useMotionValue, useSpring} from "framer-motion";
const Increamenter = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once: true});
    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);
    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);
    return <p ref={ref} className="inline-block"></p>;
};
const OverView = () => {
    return (
        <main className=" wrapper md:w-[100%] md:px-[40px] sm:text-sm  place-content-center grid grid-cols-8 gap-5">
            {/* 1st col */}
            <div className=" col-span-3  2xl:col-span-4 lg:col-span-8">
                <h1 className="mb-3 font-bold text-xl text-dark/75 dark:text-light">BIOGRAPHY</h1>
                <p className=" dark:text-light text-dark leading-[1.7] w-full">
                Hello, I'm Mohammed Mustafa Mohammed Ahmed, a web developer specializing in developing dynamic web applications and designing attractive user interfaces. I have extensive experience in web development using various programming languages such as HTML, CSS, JavaScript, and frameworks like React.
                </p>
                <p className="my-3  text-dark leading-[1.7] w-full dark:text-light">
                web applications, while adhering to the highest quality standards and best practices in web development. I am familiar with user experience optimization techniques and website performance improvement, and I ensure the compatibility of the website with different browsers and devices.
                </p>
                <p className=" text-dark leading-[1.7] w-full dark:text-light">
                If you are looking for a professional and creative web developer to turn your vision into a digital reality, I am here to help. Contact me today to discuss your project and start working together.
                </p>
            </div>

            {/* 2nd col */}
            <div className=" lg:col-span-8 2xl:col-span-4 h-fit relative col-span-3 border-2 bg-white dark:bg-black dark:border-white border-dark p-10 rounded-2xl">
                <div className="absolute  h-full w-full bg-dark top-0 -right-3 -z-10 rounded-3xl dark:bg-light"></div>
                <Image
                    src={prof_img}
                    alt="Profile Image"
                    className="h-max rounded-2xl"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* 3th col */}
            <div className=" 2xl:col-span-8 2xl:flex-row 2xl:justify-center col-span-2 flex gap-[40px] flex-col text-right p-10">
                <div>
                    <h1 className=" text-5xl font-bold sm:text-3xl">
                        <Increamenter value={"5"} />+
                    </h1>
                    <p className="text-dark/75 dark:text-light">Satisfied Clients</p>
                </div>
                <div>
                    <h1 className=" text-5xl font-bold sm:text-3xl">
                        <Increamenter value={"12"} />+
                    </h1>
                    <p className="text-dark/75 dark:text-light">Projects Completed on GitHub</p>
                </div>
                <div>
                    <h1 className=" text-5xl font-bold sm:text-3xl">
                        <Increamenter value={"2"} />+
                    </h1>
                    <p className="text-dark/75 dark:text-light">Years Of Experience</p>
                </div>
            </div>
        </main>
    );
};

export default OverView;
