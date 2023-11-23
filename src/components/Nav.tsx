'use client'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { INavMenu, navMenuItems } from '@/data'
import Image from 'next/image';
import Link from "next/link";
import { NavSubMenu } from './shared'

const _Nav = () => {
    const [menuStates, setMenuStates] = useState<number | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef<HTMLSpanElement>(null);
    const handleMenuClick = (index: number) => {
        if (menuStates === index) {
            setMenuStates(null);
        } else {
            setMenuStates(index);
        }
    };

    const renderNav = useCallback(
        (Item: INavMenu, i: number) => {
            const isMenuOpen = i === menuStates;
            return (
                <span key={i} className='' ref={dropdownRef}>
                    <span onClick={() => handleMenuClick(i)} className=' nav-menu-item text-sm xl:text-base uppercase cursor-pointer'>{Item.title}</span>
                    <NavSubMenu isMenu={isMenuOpen} subNav={Item.subNav} baseUrl={Item.url} />

                </span>
            )
        },
        [menuStates],
    )
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

    // const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    //     console.log('lol');

    //     if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
    //         setMenuStates(null);
    //     }
    // };

    return (
        <div className=' relative min-h-[2rem] bg-blue-900 bg-opacity-10'>
            <div className={`transition-all duration-200 ${scrolled ? " bg-blue-900 bg-opacity-90 text-white " : " bg-opacity-20 text-navy-blue"
                } py-8 fixed w-full left-0 top-0 z-50`}>
                <span className=' w-full relative'>
                    <nav className=' container flex items-center justify-between Nav'>
                        <Link href={'/'} className=' text-red-900 font-bold text-xl'>
                            <Image src='/img/logo.png' alt='logo' width={50} height={50} />
                        </Link>
                        <div className=' flex items-center gap-10'>
                            {navMenuItems.map(renderNav)}
                        </div>
                    </nav>
                </span>
            </div>
        </div>
    )
}

export const Nav = memo(_Nav) 