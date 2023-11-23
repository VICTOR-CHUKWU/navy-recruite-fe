'use client'
import React from 'react'
import AppHeader from '../AppHeader'
import { VideoPlayer } from '../shared'
import { useRouter } from 'next/navigation'

const NavyApplication = () => {
    const router = useRouter()
    const navigateToPage = () => {
        router.push(`/join/apply/form`);
    };
    return (
        <div>
            <AppHeader head1={`RECRUITMENT PROCESSES`} heade2={`AN INTENSITY OF PURPOSE REQUIRED`} text={`There are few reputations more storied and none more deserving than that of Marine Corps Recruit Training. The difficulties this process presents to every recruit are as deliberate as they are legendary, as physical, mental and moral toughness are prerequisites to fight among our ranks. During these 13 weeks of intense battles, it is not enough to simply endure, you must prevail. Pushing through surrender’s pull. Pulling together to prevent all from falling apart. Tapping into the purpose that brought you here, to win for the Nation you fight for.`} />
            <VideoPlayer videoSrc='https://www.marines.com/content/dam/marines-v2-assets/ST_Homepage_Header1-Triple.mp4' />

            <div className=' relative container'>
                <div className="container relative my-10 min-h-[20rem]">
                    <div className=' bg-navy-blue w-1/2 flex items-center justify-center flex-col py-10 absolute bottom-0 z-[2] -top-20 text-white'>
                        <h3 className='text-white text-center font-bold text-4xl w-1/2 mx-auto uppercase'>WE MAKE SAILORS</h3>
                        <p className=' w-2/3 mx-auto mt-5'>No recruit earns the Eagle, Globe, and Anchor alone. Becoming a Marine will be only be accomplished with those in your platoon you fight alongside, with the torch that's passed to you by many generations of Marines who built this legacy with willingness and determination, and with the fighting spirit inside you that will stop at nothing to win for our Nation.</p>
                    </div>
                </div>
                <div className=' pl-20 w-1/2 mt-[5rem]'>
                    <h3 className=' text-navy-blue font-bold text-3xl mb-5'>THE BATTLES AHEAD DEMAND THE FIGHT WITHIN</h3>
                    <p>
                        There is no room in our ranks for those who fall behind. Because of this, we constantly and continually take recruits to the brink of exhaustion in ways that test their toughness physically, mentally, and even ethically. To earn our title is to prove you belong alongside our Nation’s elite fighters. Imminent battles that must be won within, and together, include:
                    </p>
                </div>

                <div className=' my-8 mt-14 relative'>
                    <div className=' bg-slate-100 rounded-md w-2/3 px-8 py-10 pr-24'>
                        <h3 className=' text-navy-blue font-bold text-3xl mb-5'>ELIGIBILITY REQUIREMENTS</h3>
                        <p>
                            To even consider an endeavor of this magnitude is admirable, but just as the Marine Corps may not be right for everyone—not just anyone can be a Marine. To enlist as a Marine, you must obtain your high school diploma and be a legal U.S. resident between 17 and 28. To commission as a Marine Officer, you must be a United States citizen between 20 and 28 and have obtained both a high school diploma and a bachelor’s degree. Both enlisted and officer candidates must pass a criminal background check and have no felony convictions. New recruits must pass The Initial Strength Test, or IST, to demonstrate their physical fitness. The IST consists of pull-ups or push-ups, plank pose, and a 1.5-mile timed run.
                        </p>
                        <button onClick={() => navigateToPage()} className=" mt-4 cursor-pointer w-1/2 bg-vivid-red text-white rounded-md h-16 px-4 flex items-center justify-center">Click to start application</button>
                    </div>
                    <div className=' absolute top-1/2 -translate-y-1/2 right-0 rounded-md w-[40%] z-[5]'>
                        <VideoPlayer videoSrc='https://www.marines.com/content/dam/marines-v2-assets/ST_Homepage_Header1-Triple.mp4' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NavyApplication