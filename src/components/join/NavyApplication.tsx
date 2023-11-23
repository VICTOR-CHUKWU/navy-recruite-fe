'use client'
import React, { useCallback } from 'react'
import { applicationSteps } from '@/data'
import { useRouter } from 'next/navigation'

const NavyApplication = () => {
    const renderSteps = useCallback(
        (el: string) => {
            return (
                <button className=' bg-slate-200 text-black w-full h-11 mb-3 outline-none border-0'>{el}</button>
            )
        },
        [],
    )

    return (
        <div className=' mt-[6rem] h-[calc(100vh-6rem)] flex overflow-y-clip'>

            <div className=' relative w-[20%] h-full shrink-0 overflow-y-clip bg-slate-50 bg-opacity-20'>
                <div className=' h-full py-10 overscroll-y-auto flex flex-col'>
                    {
                        applicationSteps.map(renderSteps)
                    }
                </div>
            </div>
            <div className=' relative flex-grow'>
            </div>
        </div>
    )
}

export default NavyApplication