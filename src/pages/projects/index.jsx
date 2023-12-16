import template1 from "../../../public/images/img/template1.png";
import template2 from "../../../public/images/img/template2.png";
import template3 from "../../../public/images/img/template3.png";
import template4 from "../../../public/images/img/template4.png";
import template5 from "../../../public/images/img/Template5.png";
import prayeTimes from "../../../public/images/img/praye-times.png";
import loginform from "../../../public/images/projects/loginform.png";
import aiSumm from "../../../public/images/img/Ai-summarizer.png";
import sharePrompts from "../../../public/images/img/share_prompts.png";
import mernEstate from "../../../public/images/projects/mernEstate.png";

import AnimatedHeading from "@/components/AnimatedHeading";
import TransitionPageEffect from "@/components/TransitionPageEffect";
import Head from "next/head";
import FeatureProject from "./ProjectComponents/FeatureProject";
import WebsiteProject from "./ProjectComponents/WebsiteProject";
const Projects = () => {
    return (
        <>
            <Head>
                <title>Project Page</title>
                <meta name="description" content="This is Page of My Projects" />
            </Head>
            <TransitionPageEffect />
            <main className=" py-[20px] xl:py-[50px] wrapper flex flex-col justify-center items-center mb-10">
                <AnimatedHeading
                    text="Imagination Trumps Knowledge!"
                    className="animate-heading text-center  xl:text-5xl
            md:text-3xl"
                />
                                <div className="grid grid-cols-12 gap-x-[10px]">
                    {/*start 1st section */}
                    <div className=" col-span-12">
                        <FeatureProject
                            link="https://mo634.github.io/Template1/"
                            repoLink={"https://github.com/mo634/Template1"}
                            image={template1}
                            title={"Template 1 "}
                            head="website template "
                            summary=" designed by using Pure  HTML CSS With FontAwseome "
                        />
                    </div>
                    {/*end 1st section */}


                    {/*start 2nd section */}
                    <div className=" col-span-6 xl:col-span-12 ">
                        <WebsiteProject
                            link="https://mo634.github.io/Template2/"
                            repoLink="https://github.com/mo634/Template2"
                            image={template2}
                            title={"website template "}
                            head=" designed by using Pure  HTML CSS With FontAwseome "
                        />
                    </div>


                    <div className=" col-span-6 xl:col-span-12">
                    <WebsiteProject
                            link="https://mo634.github.io/Template3/"
                            repoLink="https://github.com/mo634/Template3"
                            image={template3}
                            title={"website template "}
                            head=" designed by using Pure  HTML CSS With FontAwseome "
                        />
                    </div>
                    {/*end 2nd section */}

                    {/*start 3rd section */}
                    <div className=" col-span-12">
                    <FeatureProject
                            link="https://mo634.github.io/Template4/"
                            repoLink="https://github.com/mo634/Template4"
                            image={template4}
                            title={"Template 4 "}
                            head="website sss template "
                            summary=" designed by using Pure  HTML CSS With FontAwseome "
                        />
                    </div>
                    {/*end 3rd section */}
                    <div className=" col-span-6 xl:col-span-12">
                        <WebsiteProject
                            link="https://mo634.github.io/template5/"
                            repoLink="https://github.com/mo634/template5"
                            image={template5}
                            title={"Template Website"}
                            head="designed by using pure HTML , CSS , JS "
                        />
                    </div>
                    {/*start 4th section */}
                    <div className=" col-span-6 xl:col-span-12">
                        <WebsiteProject
                            link="https://mo634.github.io/prayer-times/"
                            repoLink="https://github.com/mo634/prayer-times"
                            image={prayeTimes}
                            title={"Preyer Times For Muslims"}
                            head="designed by using react frame work and Material UI"
                        />
                    </div>
                    <div className=" col-span-12">
                        <FeatureProject
                            link="https://mo634.github.io/ai-summarizer/"
                            repoLink={"https://github.com/mo634/ai-summarizer"}
                            image={aiSumm}
                            title={"AI article summarizer "}
                            head="for summarize aricles by providing the link of article "
                            summary=" designed by using react , tailwind css , redux toolkit api query  "
                        />
                    </div>
                    {/*end 4th section */}

                    {/* login project  */}
                    <div className=" col-span-12">
                        <FeatureProject
                            link="https://next-auth-login-iota.vercel.app/"
                            repoLink={"https://github.com/mo634/next-auth-login"}
                            image={loginform}
                            title={"Simple login form  "}
                            head="you can register or login if have already account "
                            summary="designed using mongodb , Next-auth , to handle login , register and user authentication as the user info after register it inserted  to monogdb and then it validate when login to autharize user"
                        />
                    </div>

                    {/* share prompts project */}
                    <div className=" col-span-6 xl:col-span-12">
                        <WebsiteProject
                            link="https://share-pormots-df1gotgq6-mohameds-projects-0371ff98.vercel.app/"
                            repoLink="https://github.com/mo634/share-pormots"
                            image={sharePrompts}
                            title={"AI Article Summarizer"}
                            head="designed by using Next js and tailwind css with help of next-auth for authenticate users 
                            so , you can enter any link of an article and it will provide you summarization
                            "
                        />
                    </div>


                    {/* mern estate app  */}
                    <div className=" col-span-6 xl:col-span-12">
                        <WebsiteProject
                            link="https://mern-estate-x5r6.onrender.com"
                            repoLink="https://github.com/mo634/marketplace-mern"
                            image={mernEstate}
                            title={"MernEstate for house `E-commerce`"}
                            head="mern state for buy , sale ,rent and soo many for house app that designed using react , express ,tailwind, mongodb,firebase for auth and upload image ,redux and jwt ,.. these technologies used 
                            to make full stake website 

                            "
                        />
                    </div>
                    </div>
                </main>
        </>
    );
};

export default Projects
