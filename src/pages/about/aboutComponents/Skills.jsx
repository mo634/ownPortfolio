import AnimatedHeading from "@/components/AnimatedHeading";
import React from "react";
import Image from "next/image";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHtml5, faMdb, faNeos, faNode, faNodeJs, faReact
} from "@fortawesome/free-brands-svg-icons";
import {faCss3} from "@fortawesome/free-brands-svg-icons";
import {faJs} from "@fortawesome/free-brands-svg-icons";
import {fa} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {motion} from "framer-motion";
import SkillIcon from "./SkillIcon";
import { faT } from "@fortawesome/free-solid-svg-icons";
const Skills = () => {
    return (
        <main className=" wrapper">
            <AnimatedHeading
                text="skills"
                className="animate-heading xl:text-5xl
            sm:text-3xl"
            />
            <div className="lg:grid-cols-2 sm:grid-cols-1 grid grid-cols-4 place-items-center gap-[30px]">
                {/* 1st col */}
                <SkillIcon icon={faHtml5} text="html" />
                {/* 2nd col */}
                <SkillIcon icon={faCss3} text="css" />
                {/* 3th col */}
                <SkillIcon icon={faJs} text="Java Script" />
                <SkillIcon icon={faT} text="Type Script"/>
                <SkillIcon icon={faT} text="Tailwind CSS"/>
                <SkillIcon icon={faReact} text="React" />
                <SkillIcon icon={faNodeJs} text="Node js" />


                <SkillIcon icon={""}  text="Express js" insteadLogo="EX" />


                <SkillIcon icon={faMdb} text="Mongo Data Base" />
                <SkillIcon icon={faNeos} text="Next JS" />
                <SkillIcon icon={faGithub} text="github" />
            </div>
        </main>
    );
};

export default Skills;
