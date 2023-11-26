import Link from "next/link";
import React from "react";
import {LinkArrow} from "./Icons";

const HomeBtn = () => {
    return (
        <div className=" flex w-[100%] items-center lg:justify-center">
            <Link
                href="/CV.pdf"
                target="_blank"
                className="dark:hover:bg-dark dark:hover:text-light
                dark:hover:border-1 dark:hover:border-white
                dark:bg-light dark:text-dark mr-5 flex rounded-md bg-black px-5 py-2 text-white hover:bg-white hover:text-black border border-solid border-black duration-[0.5s]"
                download={true}
            >
                Resume <LinkArrow className=" w-6 ml-1" />
            </Link>
            <Link href="mailto:mido221gyefue@gmail.com" className="underline">
                Contact
            </Link>
        </div>
    );
};

export default HomeBtn;
