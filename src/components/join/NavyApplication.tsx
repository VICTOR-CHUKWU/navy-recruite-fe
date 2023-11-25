'use client'
import React, { useCallback, useRef, useState } from 'react'
import { applicationSteps } from '@/data'
import { PersonalDetails, AcademicsDetails } from '../forms'
import { useRouter } from 'next/navigation'
import { isAnyKeyEmpty } from '@/utils'

const NavyApplication = () => {
    const [step, setStep] = useState<number>(1)
    const [load, setLoad] = useState<boolean>(false)
    const [personalData, setPersonalData] = useState({})
    const personalDetailRef = useRef<any>()
    const academicsDetailRef = useRef<any>()
    const renderSteps = useCallback(
        (el: { step: number, name: string }, i: number) => {
            return (
                <button key={el.step} className={`${step === el.step ? 'bg-navy-blue text-white' : 'bg-slate-200 text-black'} w-[30%] shrink-0  lg:w-full h-8 md:h-11 mb-0 lg:mb-3 text-xs md:text-base text-center lg:text-left pl-0 lg:pl-12 outline-none border-0`}>{el.name}</button>
            )
        },
        [step],
    )

    const nextForm = async () => {
        setLoad(true)
        try {
            if (step === 1) {

                await personalDetailRef.current.childMethod()
                console.log(personalData, 'ref data');
                if (isAnyKeyEmpty(personalData)) {
                    setStep(step + 1)
                }

            } else if (step === 2) {
                academicsDetailRef.current.childMethod()
            } else {
                setStep(step + 1)
            }
        } catch (error) {
            console.log(error);

        } finally {
            setLoad(false)
        }



    }

    return (
        <div className=' pt-[6rem] h-[100vh] flex flex-wrap overflow-y-clip'>

            <div className=' relative w-full px-2 lg:px-0  lg:w-[30%] xl:w-[20%] h-36 md:h-52 lg:h-full shrink-0 overflow-y-clip bg-slate-50 bg-opacity-20'>
                <div className=' h-full py-2 lg:py-10 overscroll-y-auto gap-2 lg:gap-0 flex lg:flex-col flex-wrap'>
                    {
                        applicationSteps.map(renderSteps)
                    }
                    <div className=' w-full shrink-0 mt-2 lg:mt-10'>
                        <button onClick={() => nextForm()} className='w-[30%] md:w-[50%] lg:w-[80%] mx-auto rounded-md h-10 md:h-16 font-semibold text-xs md:text-lg text-navy-blue bg-yellow-200 flex items-center justify-center cursor-pointer'>Save and Continue</button>
                    </div>
                </div>
            </div>
            <div className=' w-full lg:w-[70%] xl:w-[80%] relative shrink-0 overflow-y-clip py-1 h-[60vh] md:h-[70vh] lg:h-full lg:py-10'>
                <div className=' h-[90%] px-4 overflow-y-auto'>
                    {
                        step === 1 ? (
                            <PersonalDetails ref={personalDetailRef} data={personalData} callBack={(data: any) => {
                                console.log(data, 'dattatatata');
                                setPersonalData(data)
                            }} />
                        )
                            : step === 2 ? (
                                <AcademicsDetails ref={academicsDetailRef} />
                            )
                                : <PersonalDetails ref={personalDetailRef} callBack={(data: any) => setPersonalData(data)} />
                    }
                </div>
                <div className=' flex items-center justify-center h-[10%] gap-8'>
                    {
                        step > 1 && (
                            <button onClick={() => setStep(step - 1)} className=' w-32 text-sm  md:w-60 h-12 mx-auto rounded-md md:h-16 font-semibold md:text-lg text-white bg-vivid-red flex items-center justify-center cursor-pointer'>Previous</button>
                        )
                    }

                    {
                        (step > 1 && step === applicationSteps.length) && (
                            <button className=' w-32 text-sm  md:w-60 h-12 mx-auto rounded-md md:h-16 font-semibold md:text-lg text-navy-blue bg-yellow-200 flex items-center justify-center cursor-pointer'>Submit</button>
                        )
                    }
                    {
                        (step > 0 && step < applicationSteps.length) && (
                            <button onClick={() => nextForm()} className=' w-32 text-sm  md:w-60 h-12 mx-auto rounded-md md:h-16 font-semibold md:text-lg text-white bg-navy-blue flex items-center justify-center cursor-pointer'>Continue</button>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default NavyApplication

// h-[calc(100vh-6rem)]