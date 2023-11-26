import Link from "next/link";
import React, {useState} from "react";
import Logo from "./Logo";
import {usePathname} from "next/navigation";
import {GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon} from "./Icons";
import {motion} from "framer-motion";
import ThemeComponent from "./ThemeComponent";
import {useRouter} from "next/router";
import HireMe from "./HireMe";
const BurgerIcon = ({isOpen, setIsOpen}) => {
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <button className="w-[30px] h-[20px]  justify-between flex-col hidden lg:flex" onClick={handleClick}>
            <span
                className={`w-full h-[4px] bg-dark block rounded-sm dark:bg-light duration-500
      ${isOpen ? "rotate-45 translate-y-[10px]" : ""}
    `}
            ></span>
            <span
                className={`w-full h-[4px] bg-dark block rounded-sm dark:bg-light duration-500
      ${isOpen ? "opacity-0" : "opacity-100"}
    `}
            ></span>
            <span
                className={`w-full h-[4px] bg-dark block rounded-sm dark:bg-light duration-500
      ${isOpen ? "-rotate-45 -translate-y-1" : ""}
    `}
            ></span>
        </button>
    );
};

const CustomLink = ({href, cotnent, className = ""}) => {
    const pathname = usePathname();
    return (
        <Link href={href} className={`${className} mr-3 relative group`}>
            {cotnent}
            <span
                className={`
                bg-dark inline-block h-[2px] absolute left-[0] -bottom-1
                group-hover:w-full transition-[1s]
                dark:bg-white
                ${pathname === href ? "w-full" : "w-0"}
                `}
            ></span>
        </Link>
    );
};

const CustomMobileLink = ({href, cotnent, className = "", setIsOpen, isOpen}) => {
    const router = useRouter();
    const {pathname} = router;
    const handleClick = () => {
        router.push(href);
        setIsOpen(!isOpen);
    };
    return (
        <button className={`${className} mr-3 relative group`} onClick={handleClick}>
            {cotnent}
            <span
                className={`
                bg-white inline-block h-[2px] absolute left-[0] -bottom-1
                group-hover:w-full transition-[1s]
                dark:bg-dark
                ${pathname === href ? "w-full" : "w-0"}
                `}
            ></span>
        </button>
    );
};
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className=" fixed top-0 left-0 right-0 z-20 wrapper flex justify-between py-[30px] items-center">
            <BurgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
            <nav className=" lg:hidden">
                <CustomLink href={"/"} cotnent={"Home"} className="" />
                <CustomLink href={"/about"} cotnent={"About"} className="" />
                <CustomLink href={"/projects"} cotnent={"Projects"} className="" />
            </nav>
            {/* render nav in mobile */}
            {isOpen ? (
                <motion.div
                    className=" 
                    fixed   left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-light bg-dark/90
                    p-[20px] w-[50vw] h-[50vh]  justify-center items-center flex-col
                    rounded-md backdrop-blur-lg hidden lg:flex sm:w-[80vw]
                    xs:w-[100%]
                    dark:bg-light dark:text-dark
                    "
                    initial={{opacity: 0, scale: 0, x: "-50%", y: "-50%"}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.2}}
                >
                    <nav className=" flex flex-col justify-center items-center">
                        <CustomMobileLink
                            href={"/"}
                            cotnent={"Home"}
                            className="mt-[10px]"
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                        />
                        <CustomMobileLink
                            href={"/about"}
                            cotnent={"About"}
                            className="mt-[10px]"
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                        />
                        <CustomMobileLink
                            href={"/projects"}
                            cotnent={"Projects"}
                            className="mt-[10px]"
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                        />
                    </nav>
                    <nav className=" flex justify-between items-center mt-[20px]">
                        <motion.a
                            href={"#"}
                            className={" w-6 mr-6"}
                            target="_blank"
                            whileHover={{
                                y: -8,
                            }}
                        >
                            <TwitterIcon />
                        </motion.a>
                        <motion.a
                            href={"#"}
                            className={" w-6 mr-6"}
                            target="_blank"
                            whileHover={{
                                y: -8,
                            }}
                        >
                            <GithubIcon />
                        </motion.a>
                        <motion.a
                            href={"#"}
                            className={"w-6  mr-6"}
                            target="_blank"
                            whileHover={{
                                y: -8,
                            }}
                        >
                            <LinkedInIcon />
                        </motion.a>
                        <ThemeComponent />
                    </nav>
                </motion.div>
            ) : null}
            <h1 className=" lg:w-fit lg:m-auto">
                <Logo />
            </h1>
            <nav className="flex justify-between  lg:hidden">
                <motion.a
                    href={"https://github.com/mo634"}
                    className={" w-6 mr-6"}
                    target="_blank"
                    whileHover={{
                        y: -8,
                    }}
                >
                    <GithubIcon />
                </motion.a>
                <motion.a
                    href={"https://www.linkedin.com/in/mohamed-mostafa-85405a291"}
                    className={"w-6  mr-6"}
                    target="_blank"
                    whileHover={{
                        y: -8,
                    }}
                >
                    <LinkedInIcon />
                </motion.a>
                <ThemeComponent />
            </nav>
        </header>
    );
};

export default NavBar;
