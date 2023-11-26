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

            <div className="md:pl-[5px]  w-1/2 flex flex-col justify-center pl-5 xl:w-[100%]">
                <span className="text-primary dark:text-primaryDark ">{title}</span>
                <Link href={"#"}>
                    <h2 className="font-bold text-3xl  hover:cursor-pointer hover:underline ">{head}</h2>
                </Link>
                    <p className="text-dark/75 my-3 dark:text-light leading-relaxed">{summary}</p>
                    
                {/* icon and btn */}
                <div className="flex items-center gap-x-[20px]">
                    <Link href={"#"} className="">
                        <GithubIcon className={"w-10 mr-[10px]"} />
                    </Link>
                    <Link target="_blank" href={repoLink??' '} className="dark:bg-light dark:text-dark bg-dark py-[5px] px-[10px] text-light rounded-md shadow-md">
                        Visit Project Repo
                    </Link>
                </div>
            </div>

</div>
        </article>
    );
};

export default FeatureProject;
