'use client'
import React, { memo, useCallback, useState } from 'react'
import { navMenuItems } from '@/data'

const _Nav = () => {
    const [isMenu, setIsMenu] = useState(false)
    const renderNav = useCallback(
        ({ url, title }: { url: string, title: string }) => {
            return (
                <span onClick={() => setIsMenu(!isMenu)} className=' nav-menu-item text-base uppercase cursor-pointer'>{title}</span>
            )
        },
        [],
    )

    return (
        <div className=' bg-transparent py-8 fixed w-full left-0 top-0'>
            <nav className=' container flex items-center justify-between Nav'>
                <p className=' text-red-900 font-bold text-xl'>Logo</p>
                <div className=' flex items-center gap-10'>
                    {navMenuItems.map(renderNav)}
                </div>
            </nav>
        </div>
    )
}

export const Nav = memo(_Nav) 