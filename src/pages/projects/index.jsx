import Head from "next/head";
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
                this main
                </main>
        </>
    );
};

export default Projects
