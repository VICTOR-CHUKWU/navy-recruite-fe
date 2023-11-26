import { socialMedia } from "@/data";
import React from "react";
import Image from "next/image";
import { SVGIcon } from "./shared";
import Link from "next/link";

const Footer = () => {
    return (
        <div className=" bg-navy-blue py-5">
            <div className=" container text-white flex justify-between items-center flex-wrap gap-4">
                <Link
                    href={"/"}
                    className={` text-white font-bold text-xl flex items-center gap-1`}
                >
                    <Image src="/img/logo.png" alt="logo" width={50} height={0} />
                    <span className=" text-xs md:text-base">Nigerian Navy</span>
                </Link>

                <p className=" text-white text-sm italic font-light">Nigerian Navy 2023</p>
            </div>
        </div>
    );
};

export default Footer;
