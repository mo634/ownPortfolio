"use client";
import {motion} from "framer-motion";
const InfoSection = ({title, Date, Info}) => {
    return (
        <motion.div
            className="p-[20px] mb-10 shadow-md w-[100%] dark:shadow-[#00BCD4] flex flex-col gap-y-[10px] "
            initial={{y: 50}}
            whileInView={{y: 0}}
            transition={{duration: 0.5, type: "spring"}}
        >
            <p className=" text-dark/75 dark:text-light/75">{title}</p>
            <p className="font-bold text-xl">{Date}</p>
            <p className="text-dark/90  dark:text-light/75">{Info}</p>
        </motion.div>
    );
};
const Education = () => {
    return (
        <main className="  flex items-center flex-col wrapper min-h-screen my-10">
            <h1 className="font-bold text-8xl w-fit mt-[100px] mb-[100px]">Education</h1>

            <div className="w-[80%] ">
                <div className="relative">
                    <div className="dark:bg-primaryDark h-full absolute  -left-[10%] top-[0%] w-[5px] bg-dark"></div>
                    <div>
                        <InfoSection
                            title={"Student Science In Computer Science"}
                            Date={"start in  2019   grduated in  2023"}
                            Info={
                                "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
                            }
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Education;
