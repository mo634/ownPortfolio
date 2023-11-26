import React from "react";
import LightImg from "../../public/images/svgs/miscellaneous_icons_1.svg";
import Image from "next/image";
const LightImage = () => {
    return <div className="absolute right-2 bottom-[100px]">
        <Image src={LightImg} className=" md:opacity-0 w-[80px] opacity-[0.5]" alt="not loaded"/>
    </div>;
};

export default LightImage;
