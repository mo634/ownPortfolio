import React from "react";
import OverView from "./aboutComponents/OverView";
import AnimatedHeading from "@/components/AnimatedHeading";
import Skills from "./aboutComponents/Skills";
import Experience from "./aboutComponents/Experience";
import Education from "./aboutComponents/Education";
import Head from "next/head";
import TransitionPageEffect from "@/components/TransitionPageEffect";

const About = () => {
    return (
        <>
            <Head>
                <title>About Page</title>
                <meta name="description" content="About Page to Provide Main Information You Need About Me"/>
            </Head>
            <TransitionPageEffect/>
        <main className="py-[20px] xl:py-[50px]">
                <AnimatedHeading text="Passion Fuels Purpose! " className="animate-heading
            xl:text-5xl
            sm:text-3xl
            md:pb-0
            " />
            <OverView />
            <Skills />
            <Education/>
            </main>
            </>
    );
};

export default About;
