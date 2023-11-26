"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {GithubIcon} from "@/components/Icons";
const WebsiteProject = ({image, link, title, head,repoLink}) => {
    return (
        <article className="h-[90%] mb-[50px] dark:bg-dark dark:border-white relative flex flex-col gap-y-[20px] p-[20px] rounded-2xl bg-light shadow-md border-solid border-[5px] border-black">
            <div className="dark:bg-white left-0 w-[101%]  absolute h-full bg-dark rounded-2xl -z-10 top-2 right-[-10px]"></div>

            {/* top side  */}

            <Link target="_blank" href={link??' '} className="w-1/2 overflow-hidden rounded-2xl w-full">
                <Image
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={image} alt="not Found" className="hover:scale-[1.2] hover:-rotate-1 duration-[0.5s]" />
            </Link>

            {/* bottom side  */}

            <div className="md:pl-[2px] flex flex-col justify-center pl-5 w-full">
                <span className="text-primary dark:text-primaryDark ">{title}</span>
                <Link href={"#"}>
                    <h2 className="font-bold text-3xl  hover:cursor-pointer hover:underline ">{head}</h2>
                </Link>
                <div className="flex items-center justify-between mt-[20px]">
                    <Link target="_blank" href={repoLink??' '} className=" hover:underline text-[20px]">
                        Visit github repo
                    </Link>
                    <Link target="_blank" href={"https://github.com/mo634"} className="">
                        <GithubIcon className={"w-10 mr-[10px]"} />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default WebsiteProject;
