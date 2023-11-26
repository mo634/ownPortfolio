"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {GithubIcon} from "@/components/Icons";
const FeatureProject = ({image, link,repoLink, title, head, summary}) => {
    return (
        <article className=" mb-[50px] dark:bg-dark dark:border-white  p-[15px] rounded-3xl bg-light shadow-md border-solid border-[5px] border-black">
        <div className="dark:bg-white  w-[101%] h-full bg-dark rounded-3xl -z-10 top-[10px] right-[-10px]"></div>
            <div className="w-fit flex xl:flex-col xl:gap-y-[20px] ">
                
            {/* left side  */}


            {/* right side  */}

</div>
        </article>
    );
};

export default FeatureProject;
