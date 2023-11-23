import { INavMenuItem } from '@/data';
import React, { memo } from 'react'
import Link from "next/link";

const _navSubMenu = ({ isMenu, subNav, baseUrl }: {
    isMenu: boolean, subNav: {
        [key: string]: INavMenuItem[];
    }, baseUrl: string
}) => {
    const gridCount = Object.keys(subNav).length
    return (
        <div className={`dropdown ${isMenu ? "show" : ""}`}>
            <div className={` drop-inner grid mb-6 mt-4 `}
                style={{ gridTemplateColumns: `repeat(${gridCount}, minmax(0, 1fr))` }}
            >
                {
                    Object.keys(subNav).map((el, i) => (
                        <div key={i}>
                            <h5 className=' font-semibold text-lg mb-7'>{el}</h5>
                            <div className=' flex flex-col gap-3'>
                                {
                                    subNav[el].map((e, i) => (

                                        <Link key={i} href={`${baseUrl}/${e.url}`} className=' text-sm font-light transition-all duration-200 hover:text-orange-300'>{e.title}</Link>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export const NavSubMenu = memo(_navSubMenu)