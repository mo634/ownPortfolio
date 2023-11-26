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

                <Link
                    target="_blank"
                    href={link ?? ''} className="xl:w-[100%]  w-1/2 overflow-hidden rounded-2xl">
                <Image
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={image}
                    alt="not Found"
                    className="hover:scale-[1.2] hover:-rotate-1 duration-[0.5s]"
                />
            </Link>

            {/* right side  */}

</div>
        </article>
    );
};

export default FeatureProject;
