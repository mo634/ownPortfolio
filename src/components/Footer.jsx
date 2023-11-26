import React from "react";

const Footer = () => {
    return (
        <footer className="
        lg:flex-col lg:gap-y-3
        dark:border-white w-full flex items-center justify-around py-5  border-t-2 border-black border-solid">
            <div>
                <span>{new Date().getFullYear()}</span>
                &copy; All Rights Reserved
            </div>
            <div className="flex items-center">
                Built With <span className="px-2 text-2xl text-red-600 dark:text-primaryDark">&#9825;</span> by{" "}
                <span className="underline underline-offset-2 ml-1">Mohamed Mostafa</span>
            </div>
            <p className="underline">Say Hello</p>
        </footer>
    );
};

export default Footer;
