'use client'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { INavMenu, navMenuItems } from '@/data'
import Image from 'next/image';
import Link from "next/link";
const _Nav = () => {
    const [scrolled, setScrolled] = useState(false);



    let lastScrollY = 0;

    const handleScroll: EventListener = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }

        // lastScrollY = currentScrollY;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        // <div className=' relative min-h-[2rem]'>
        <div className={`transition-all duration-200 ${scrolled ? " bg-blue-900 bg-opacity-90 text-white " : " bg-opacity-20 text-navy-blue"
            } py-4 fixed w-full left-0 top-0 z-50`}>
            <span className=' w-full relative'>
                <nav className=' container flex items-center justify-between Nav'>
                    <Link href={'/'} className={` ${scrolled ? 'text-white' : 'text-navy-blue'} font-bold text-xl flex items-center gap-1`}>
                        <Image src='/img/logo.png' alt='logo' width={50} height={0} />
                        <span className=' text-xs md:text-base'>Nigerian Navy</span>
                    </Link>
                    <div className=' flex items-center gap-10'>
                        <div className=" hidden lg:flex contact transition-all duration-300">
                            <a href="tel:+234-903-0143-401" className=" flex items-center transition-all duration-300">
                                <span className=" w-8 h-8 lg:w-14 lg:h-14 rounded-full flex items-center justify-center glass-over">
                                    <span className="material-icons text-yellow-400">call</span>
                                </span>
                                <span className=" ml-1 lg:ml-3">
                                    <p className=" text-sm font-semibold">+234-903-0143-401</p>
                                    <p className="text-sm">Contact Support</p>
                                </span>
                            </a>
                        </div>
                        <Link href='/join/apply' className=' border-none outline-none h-12 w-32 md:w-44 flex items-center justify-center bg-yellow-200 text-slate-800 font-semibold text-lg rounded-md cursor-pointer'>Apply Now</Link>
                    </div>
                </nav>
            </span>
        </div>
        // </div>
    )
}

export const NewNav = memo(_Nav) 