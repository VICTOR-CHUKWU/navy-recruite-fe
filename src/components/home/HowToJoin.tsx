"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import S from "@/styles/page/home/home.module.scss";

const HowToJoin = () => {
    let aboutUsRef = useRef<HTMLDivElement>(null);
    const [focused, setFocused] = React.useState(false);

    if (aboutUsRef.current) {
        aboutUsRef.current.onfocus = () => {
            setFocused(true);
        };
        aboutUsRef.current.onblur = () => {
            setFocused(false);
        };
    }

    useEffect(() => {
        let options = {
            root: document,
            rootMargin: "0px",
            threshold: 1.0,
        };

        let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // console.log(entry, 'entry');

                const isFixed = entry.target.classList.contains("sticky");
                console.log(isFixed, "is fixed");

                if (entry.isIntersecting && !isFixed && focused) {
                    console.log("999999");
                    entry.target.classList.add("sticky");
                    // @ts-ignore
                    entry.target.style.top = entry.boundingClientRect.top + "px";
                    console.log(entry.boundingClientRect.top);
                } else {
                    console.log("egbamiii");

                    entry.target.classList.remove("sticky");
                }
            });
        }, options);
        // @ts-ignore
        observer.observe(aboutUsRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div id="about" className=" relative">
            <div ref={aboutUsRef} className={` pt-20 pb-10 ${S.Join}`}>
                <div className={`${S.JoinInner}`}></div>
                <div className={`${S.JoinInner} py-10 flex flex-col items-center`}>
                    <h4 className="text-white font-extrabold text-5xl xl:text-7xl my-10 text-center uppercase">
                        LIFE IN THE NIGERIAN NAVY
                    </h4>
                    <p className=" text-white font-semibold text-lg mb-10 capitalize text-center">
                        The Marine Corps is more than a career path. It is a life path. The
                        day one becomes a Marine brings purpose to every day that follows.
                    </p>
                    <div className=" h-[70vh] w-full flex items-center gap-6 justify-center">
                        <div className=" w-[15rem] h-[15rem] xl:w-[25rem] xl:h-[25rem] rounded-full border-[4px] border-white bg-transparent relative flex flex-col items-center justify-center">
                            <span className="material-icons text-white mat-big">
                                flag
                            </span>
                            <button className=" border-0 bg-transparent font-semibold flex items-center transition-all duration-300 hover:translate-x-2 outline-none text-white cursor-pointer">
                                <span className="material-icons text-white mr-2">
                                    double_arrow
                                </span>
                                Life in Navy
                            </button>
                        </div>
                        <div className=" w-[15rem] h-[15rem] xl:w-[25rem] xl:h-[25rem] rounded-full border-[4px] border-white bg-transparent relative flex flex-col items-center justify-center">
                            <span className="material-icons text-white mat-big">
                                military_tech
                            </span>
                            <button className=" border-0 bg-transparent font-semibold flex items-center transition-all duration-300 hover:translate-x-2 outline-none text-white cursor-pointer">
                                <span className="material-icons text-white mr-2">
                                    double_arrow
                                </span>
                                Roles in Navy
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${S.JoinInner} py-10 flex flex-col items-center`}>
                    <h4 className="text-white font-extrabold text-5xl xl:text-7xl my-5 xl:my-10 text-center uppercase">
                        BECOMING A SAILOR
                    </h4>
                    <p className=" text-white font-semibold text-lg mb-10 capitalize text-center">
                        Finding purpose and your place in a common cause. What you truly
                        long for is discovered by fighting for it. This is where the battle
                        begins.
                    </p>
                    <div className="h-[70vh] w-full flex items-center justify-center relative">
                        <div className="w-[15rem] h-[15rem] xl:w-[25rem] xl:h-[25rem] rounded-full absolute top-1/2 transform -translate-y-1/2 -translate-x-[41%] border-[4px] border-white bg-transparent flex flex-col items-center justify-center">
                            <span className="material-icons mat-big text-white">
                                emoji_events
                            </span>
                            <button className="border-0 bg-transparent flex items-center font-semibold transition-all duration-300 hover:translate-x-2 outline-none text-white cursor-pointer">
                                <span className="material-icons text-white mr-2">double_arrow</span>
                                Sailor Mindset
                            </button>
                        </div>
                        <div className="w-[15rem] h-[15rem] xl:w-[25rem] xl:h-[25rem] rounded-full border-[4px] border-white bg-transparent absolute top-1/2 transform -translate-y-1/2 translate-x-[46%] flex flex-col items-center justify-center">
                            <span className="material-icons text-white mat-big">
                                sports_martial_arts
                            </span>
                            <button className="border-0 bg-transparent flex items-center transition-all duration-300 hover:translate-x-2 outline-none font-semibold text-white cursor-pointer">
                                <span className="material-icons text-white mr-2">double_arrow</span>
                                Physical Fitness
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-16">
                        <button className=" cursor-pointer border-2 border-white bg-transparent capitalize font-semibold text-white rounded-md h-14 w-44 flex items-center justify-center">Process to join</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToJoin;
