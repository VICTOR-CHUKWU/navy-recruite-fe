import React from "react";
import S from '@/styles/page/home/home.module.scss'

const Header = () => {
    return (
        <div className={`pt-[10rem] ${S.header}`}>
            <div className=" container flex justify-end h-full">
                {/* <h1 className=" text-center leading-none w-full md:w-1/2 mx-auto uppercase font-extrabold text-[6rem] gap-2 text-vivid-red flex flex-col">
                    Defenders
                    <span className="text-slate-300">of our</span>
                    <span className=" text-navy-blue">country</span>
                </h1> */}
                <div className=" mt-[20%] w-full shrink-0 flex items-center justify-between">
                    <p className=" w-80">The bonds we form. The battles we face. See what it means to fight and win as a Nigerian Navy.</p>
                    <div className=" flex items-center gap-9">
                        <button className=" cursor-pointer border-0 bg-vivid-red text-white rounded-md h-11 w-44 flex items-center justify-center">Join Corp</button>
                        <button className=" cursor-pointer border-2 border-blue-900 bg-transparent text-blue-900 rounded-md h-11 w-44 flex items-center justify-center">View Requirements</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
