"use client";
import {motion} from "framer-motion";
const InfoSection = ({position, company, timeInfo, workInfo}) => {
    return (
        <motion.div
            className="p-[20px] mb-10 shadow-md w-[100%] dark:shadow-[#00BCD4;]"
            initial={{y: 50}}
            whileInView={{y: 0}}
            transition={{duration: 0.5, type: "spring"}}
        >
            <p className="font-bold text-xl">
                {position} <span className="text-primary dark:text-primaryDark">{company}</span>
            </p>
            <p className=" text-dark/75 dark:text-light/75">{timeInfo}</p>
            <p className="text-dark/90  dark:text-light/75">{workInfo}</p>
        </motion.div>
    );
};
const Experience = () => {
    return (
        <main className="  flex items-center flex-col wrapper min-h-screen my-10">
            <h1 className="font-bold text-8xl w-fit mt-[100px] mb-[100px] xl:text-5xl
            sm:text-3xl">Experience</h1>

            <div className="w-[80%] ">
                <div className="relative">
                    <div className="dark:bg-primaryDark h-full absolute  -left-[10%] top-[0%] w-[5px] bg-dark"></div>
                    <div>
                        <InfoSection
                            position={"Software Engineer "}
                            company={"@Google"}
                            timeInfo={"2022-Present | Mountain View, CA"}
                            workInfo={
                                "Worked on a team responsible for developing newfeatures for Google's \
                                search engine, including improving the accuracy and relevance of search results and\
                                developing new tools for data analysis and visualization."
                            }
                        ></InfoSection>
                        <InfoSection
                            position={"Software Engineer "}
                            company={"@Google"}
                            timeInfo={"2022-Present | Mountain View, CA"}
                            workInfo={
                                "Worked on a team responsible for developing newfeatures for Google's \
            search engine, including improving the accuracy and relevance of search results and\
            developing new tools for data analysis and visualization."
                            }
                        />

                        <InfoSection
                            position={"Software Engineer "}
                            company={"@Google"}
                            timeInfo={"2022-Present | Mountain View, CA"}
                            workInfo={
                                "Worked on a team responsible for developing newfeatures for Google's \
            search engine, including improving the accuracy and relevance of search results and\
            developing new tools for data analysis and visualization."
                            }
                        />
                        <InfoSection
                            position={"Software Engineer "}
                            company={"@Google"}
                            timeInfo={"2022-Present | Mountain View, CA"}
                            workInfo={
                                "Worked on a team responsible for developing newfeatures for Google's \
            search engine, including improving the accuracy and relevance of search results and\
            developing new tools for data analysis and visualization."
                            }
                        />
                        <InfoSection
                            position={"Software Engineer "}
                            company={"@Google"}
                            timeInfo={"2022-Present | Mountain View, CA"}
                            workInfo={
                                "Worked on a team responsible for developing newfeatures for Google's \
            search engine, including improving the accuracy and relevance of search results and\
            developing new tools for data analysis and visualization."
                            }
                        />
                    </div>
                </div>
                </div>
                
        </main>
    );
};

export default Experience;
