import React, { useCallback } from 'react'
import AppHeader from '../AppHeader'
import Image from 'next/image'
import { VideoPlayer } from '../shared'
import { IFeatureNews, featurenews } from '@/data'

const Requirements = () => {
    const renderFeature = useCallback((item: IFeatureNews, i: number) => {
        return (
            <div key={i} className=" border-[1px] border-slate-100 rounded-md">
                <div className=" w-full h-48 relative">
                    <Image
                        src={item.img}
                        alt={item.header}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className=" flex mt-5 mb-7">
                    <div className=" w-[10%] shrink-0 border-r-2 border-slate-200">
                        <p className="flex flex-col items-center text-xs font-light text-slate-900">{
                            item.date.split('').toReversed().map((e, i) => <span key={i}>{e}</span>)
                        }</p>
                    </div>
                    <div className=" text-center flex-grow px-2">
                        <p className="text-sm  mb-4">{item.source}</p>
                        <h5 className=" font-semibold">{item.header}</h5>
                        <p className=" mt-6 text-sm text-slate-500 overflow-hidden overflow-ellipsis line-clamp-3">{item.text}</p>
                    </div>
                </div>
            </div>
        );
    }, []);
    return (
        <div>
            <AppHeader head1={`GENERAL REQUIREMENTS`} heade2={`A NOBLE PATH. A DEMANDING JOURNEY.`} text={`Perhaps you hear a calling felt inside yourself. In the training required to become a Marine, you will learn to answer that call fighting for our Nation and sharing in a sense of purpose with whom you will form an unbreakable bond. But before you begin this life-defining journey, there are certain general requirements that must be met. This is the first step to take to count yourself among those who fight for our Nation’s common moral cause.`} />
            <VideoPlayer videoSrc='https://www.marines.com/content/dam/marines-v2-assets/ST_Homepage_Header1-Triple.mp4' />
            <div className=' relative container'>
                <div className="container relative my-10 min-h-[20rem]">
                    <div className=' bg-navy-blue w-1/2 flex items-center justify-center flex-col py-10 absolute bottom-0 z-[2] -top-20 text-white'>
                        <h3 className='text-white text-center font-bold text-4xl w-1/2 mx-auto uppercase'>A STANDARD THAT MUST BE MET</h3>
                        <p className=' w-2/3 mx-auto mt-5'>What does it take to fight in the Marine Corps? These are physical, mental, and moral requirements that must be met before you enlist as a Marine or commission as a Marine Officer.</p>
                    </div>
                </div>
                <div className=' pl-20 w-1/2 mt-[5rem]'>
                    <h3 className=' text-navy-blue font-bold text-3xl mb-5'>ELIGIBILITY REQUIREMENTS</h3>
                    <p>
                        To even consider an endeavor of this magnitude is admirable, but just as the Marine Corps may not be right for everyone—not just anyone can be a Marine. To enlist as a Marine, you must obtain your high school diploma and be a legal U.S. resident between 17 and 28. To commission as a Marine Officer, you must be a United States citizen between 20 and 28 and have obtained both a high school diploma and a bachelor’s degree. Both enlisted and officer candidates must pass a criminal background check and have no felony convictions. New recruits must pass The Initial Strength Test, or IST, to demonstrate their physical fitness. The IST consists of pull-ups or push-ups, plank pose, and a 1.5-mile timed run.
                    </p>
                </div>

                <div className=' my-8 mt-14 relative'>
                    <div className=' bg-slate-100 rounded-md w-2/3 px-8 py-10 pr-24'>
                        <h3 className=' text-navy-blue font-bold text-3xl mb-5'>ELIGIBILITY REQUIREMENTS</h3>
                        <p>
                            To even consider an endeavor of this magnitude is admirable, but just as the Marine Corps may not be right for everyone—not just anyone can be a Marine. To enlist as a Marine, you must obtain your high school diploma and be a legal U.S. resident between 17 and 28. To commission as a Marine Officer, you must be a United States citizen between 20 and 28 and have obtained both a high school diploma and a bachelor’s degree. Both enlisted and officer candidates must pass a criminal background check and have no felony convictions. New recruits must pass The Initial Strength Test, or IST, to demonstrate their physical fitness. The IST consists of pull-ups or push-ups, plank pose, and a 1.5-mile timed run.
                        </p>
                    </div>
                    <div className=' absolute top-1/2 -translate-y-1/2 right-0 rounded-md w-[40%] z-[5]'>
                        <VideoPlayer videoSrc='https://www.marines.com/content/dam/marines-v2-assets/ST_Homepage_Header1-Triple.mp4' />
                    </div>
                </div>

                {/* related topic  */}

                <div className=' my-8 mt-20'>
                    <h5 className=' font-semibold text-2xl mb-8'>Related Topics</h5>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {featurenews.map(renderFeature)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Requirements