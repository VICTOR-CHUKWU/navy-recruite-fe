import React, { memo, useCallback } from 'react'
import { navMenuItems } from '@/data'

const _Nav = () => {
    const renderNav = useCallback(
        ({ url, title }: { url: string, title: string }) => {
            return (
                <span className=' nav-menu-item text-lg uppercase cursor-pointer'>{title}</span>
            )
        },
        [],
    )

    return (
        <div className=' bg-transparent py-8 fixed w-full left-0 top-0'>
            <nav className=' container flex items-center justify-between Nav'>
                <p className=' text-red-900 font-bold text-xl'>Logo</p>
                <div className=' flex items-center gap-6'>
                    {navMenuItems.map(renderNav)}
                </div>
            </nav>
        </div>
    )
}

export const Nav = memo(_Nav) 