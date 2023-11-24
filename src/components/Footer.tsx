import { socialMedia } from '@/data'
import React from 'react'
import { SVGIcon } from './shared'

const Footer = () => {
    return (
        <div className=' bg-navy-blue py-10'>
            <div className=' container text-white flex justify-between flex-wrap gap-4'>
                <div className=' w-full md:w-[75%] shrink-0'>
                    <div className="flex items-center gap-40 text-sm md:text-base">
                        <div className=' flex flex-col gap-10'>
                            <span>REQUEST INFORMATION</span>
                            <span>LOCATIONS</span>
                        </div>
                        <div className=' flex flex-col gap-10'>
                            <span>COVID-19 RESPONSE</span>
                            <span>COMMUNITY GUIDELINES</span>
                        </div>
                    </div>
                    <div className=' flex items-center gap-6 mt-16 text-sm md:text-base flex-wrap'>
                        <span>SAILORS.MIL</span>
                        <span>PRIVACY POLICY</span>
                        <span>
                            COOKIES SETTINGS</span>
                        <span>
                            TERMS OF USE</span>
                        <span>SAILORS.MIL</span>
                    </div>
                </div>
                <div className=' flex-grow flex flex-col gap-10'>
                    <div className=' flex items-center gap-5'>
                        {
                            socialMedia.map((el) => (<a key={el.link} href={el.link} target="__blank" className=" text-white w-8"><SVGIcon name={el.icon} size="small" /></a>))
                        }
                    </div>
                    <div>
                        <p className=' text-white'>© 2021 U.S. MARINE CORPS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer