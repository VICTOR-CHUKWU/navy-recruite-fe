'use client'
import { insights } from '@/data'
import React, { useCallback } from 'react'

const Insight = () => {
    const renderInsights = useCallback(
        (item: { head: string, text: string }, i: number) => {
            return (
                <div key={i} className=' w-[48%] md:w-[30%] lg:w-[20%] shrink-0 flex flex-col gap-2'>
                    <h4 className=' text-navy-blue font-extrabold  text-base xl:text-2xl'>{item.head}</h4>
                    <p className='text-sm xl:text-base text-left'>{item.text}</p>
                </div>
            )
        },
        [],
    )

    return (
        <div className=' bg-slate-50 my-10 py-10'>
            <div className="container flex justify-between flex-wrap gap-2">
                {
                    insights.map(renderInsights)
                }
            </div>
        </div>
    )
}

export default Insight