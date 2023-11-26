import template1 from "../../../public/images/img/template1.png";


import AnimatedHeading from "@/components/AnimatedHeading";
import TransitionPageEffect from "@/components/TransitionPageEffect";
import Head from "next/head";
import FeatureProject from "./ProjectComponents/FeatureProject";
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
                    </div>
                </main>
        </>
    );
};

export default Projects
