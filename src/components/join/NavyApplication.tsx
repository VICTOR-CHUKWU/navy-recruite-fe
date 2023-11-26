'use client'
import React, { useCallback, useRef, useState } from 'react'
import { applicationSteps } from '@/data'
import { PersonalDetails, AcademicsDetails } from '../forms'
import { Loader } from '../shared'

const NavyApplication = () => {
    const [step, setStep] = useState<number>(1)
    const [load, setLoad] = useState<boolean>(false)
    const [personalData, setPersonalData] = useState({})
    const personalDetailRef = useRef<any>()
    const academicsDetailRef = useRef<any>()

    const renderSteps = useCallback(
        (el: { step: number, name: string }, i: number) => {
            return (
                <span key={el.step} className={`relative ${el.step !== applicationSteps.length ? ' flex-grow before:absolute before:h-[2px] before:w-full before:-z-[1] before:top-1/2 before:-translate-y-1/2 before:bg-slate-300' : ''}`}>
                    <button className={`${el.step < step ? 'bg-navy-blue text-white' : el.step > step ? 'bg-slate-200 text-black' : 'bg-yellow-200 text-navy-blue'} rounded-full shrink-0 w-8 h-8 md:w-11 md:h-11 mb-0 lg:mb-3 text-xs md:text-base text-center  pl-0 flex items-center justify-center outline-none border-0`}>{el.step}</button>
                    <span className={`hidden md:flex text-xs text-navy-blue absolute ${el.step > 1 ? ' -left-7' : 'left-0'} ${(el.step % 2 === 0) ? ' -top-5' : '-bottom-4 lg:-bottom-2'}`}>{el.name}</span>
                </span>
            )
        },
        [step],
    )

    const nextForm = async () => {
        setLoad(true)
        try {
            if (step === 1) {
                const data = await personalDetailRef.current.childMethod()
                if (data) {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
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
        <div className=' pt-[8rem] min-h-screen container flex flex-wrap overflow-y-clip'>

            <div className=' relative justify-between flex items-center w-full px-2 lg:px-0 shrink-0'>
                {
                    applicationSteps.map(renderSteps)
                }

            </div>
            <div className=' w-full  relative shrink-0 py-1 pt-3 lg:py-10'>
                {
                    load && (<div className=' h-screen w-full bg-slate-100 bg-opacity-60 fixed top-0 left-0 bottom-0 z-[3] flex items-center justify-center'><Loader /></div>)

                }
                <div className=' '>
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
                <div className=' flex items-center justify-center py-3 gap-8'>
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