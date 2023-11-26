import Footer from "@/components/Footer";
import HireMe from "@/components/HireMe";
import HomeLeft from "@/components/HomeLeft";
import HomeRight from "@/components/HomeRight";
import LightImage from "@/components/LightImage";
import TransitionPageEffect from "@/components/TransitionPageEffect";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
export default function Home() {

  return (
    <>
      <Head>
        <title>Mohamed Mostafa</title>
      </Head>
      <TransitionPageEffect />
      <main>
        <section
          className="
    wrapper flex py-[20px] calc-class lg:flex-col lg:justify-center lg:items-center lg:pt-[120px]
    lg:pb-[60px]
    lg:w-[100vw]
    "
        >
          <HomeLeft />
          <HomeRight />
        </section>
        <HireMe />
        <LightImage />
      </main>
    </>
  );
}
