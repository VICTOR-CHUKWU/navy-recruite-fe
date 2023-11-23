"use client";
import React, { useEffect, useRef } from "react";
import S from "@/styles/page/home/home.module.scss";
import { useRouter } from "next/navigation";

const HeroSection = () => {
    const router = useRouter()
    const navigateToPage = () => {
        router.push(`/learn`);
    };
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play();
            }
        }, 5000);
    }, []);
    return (
        <div>
            <div className=" bg-navy-blue h-[28rem] w-full relative">
                <div className={` w-full h-full ${S.videoCont}`}>
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            left: 0,
                            top: 0,
                            objectFit: "cover",
                        }}
                    >
                        <source
                            src={`https://www.marines.com/content/dam/marines-v2-assets/ST_Homepage_Header1-Triple.mp4`}
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div>
            <div className={`${S.videoText} py-10 pt-20`}>
                <h2 className=" font-extrabold text-6xl absolute -top-24 left-1/2 -translate-x-1/2 w-1/2 text-center">THE FIGHT FOR THE FUTURE STARTS NOW</h2>
                <p className=" text-lg font-semibold mb-7">SEE HOW SAILORS ADAPT TO THE UNKNOWN</p>
                <button onClick={() => navigateToPage()} className=" cursor-pointer border-2 border-white bg-transparent text-white rounded-md h-11 w-44 flex items-center justify-center">Learn More</button>
            </div>
        </div>
    );
};

export default HeroSection;
