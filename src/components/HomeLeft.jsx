import React from "react";
import Image from "next/image";
import profileImg from "../../public/images/profile/developer-pic-1.png";
const HomeLeft = () => {
    return (
        <div className=" w-1/2 min-h-[100%] flex justify-center items-center flex-col lg:w-[100vw]">
            <div className="h-[80%]">
                <Image
                    src={profileImg}
                    className="h-[100%]"
                    alt="not loaded"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        </div>
    );
};

export default HomeLeft;
