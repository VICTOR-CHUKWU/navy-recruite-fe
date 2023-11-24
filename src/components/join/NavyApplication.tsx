'use client'
import React, { useCallback, useRef, useState } from 'react'
import { applicationSteps } from '@/data'
import { PersonalDetails, AcademicsDetails } from '../forms'
import { useRouter } from 'next/navigation'

const NavyApplication = () => {
    const [step, setStep] = useState<number>(1)
    const [load, setLoad] = useState<boolean>(false)
    const personalDetailRef = useRef<any>()
    const academicsDetailRef = useRef<any>()
    const renderSteps = useCallback(
        (el: { step: number, name: string }, i: number) => {
            return (
                <button onClick={() => setStep(el.step)} className={`${step === el.step ? 'bg-navy-blue text-white' : 'bg-slate-200 text-black'}  w-full h-11 mb-3 text-left pl-12 outline-none border-0`}>{el.name}</button>
            )
        },
        [step],
    )

    const nextForm = () => {
        setLoad(true)
        if (step === 1) {
            personalDetailRef.current.childMethod()
        } else if (step === 2) {
            academicsDetailRef.current.childMethod()
        } else {
            setStep(step + 1)
        }

        setStep(step + 1)
        setLoad(false)

    }

    return (
        <div className=' pt-[6rem] h-[100vh] flex overflow-y-clip'>

            <div className=' relative w-[30%] xl:w-[20%] h-full shrink-0 overflow-y-clip bg-slate-50 bg-opacity-20'>
                <div className=' h-full py-10 overscroll-y-auto flex flex-col'>
                    {
                        applicationSteps.map(renderSteps)
                    }
                    <div className=' mt-10'>
                        <button onClick={() => nextForm()} className=' w-[80%] mx-auto rounded-md h-16 font-semibold text-lg text-navy-blue bg-yellow-200 flex items-center justify-center cursor-pointer'>Save and Continue</button>
                    </div>
                </div>
            </div>
            <div className=' relative flex-grow overflow-y-clip h-full py-10'>
                <div className=' h-[90%] px-4 overflow-y-auto'>
                    {
                        step === 1 ? (
                            <PersonalDetails ref={personalDetailRef} />
                        )
                            : step === 2 ? (
                                <AcademicsDetails ref={academicsDetailRef} />
                            )
                                : <PersonalDetails ref={personalDetailRef} />
                    }
                </div>
                <div className=' flex items-center justify-center h-[10%] gap-8'>
                    {
                        step > 1 && (
                            <button onClick={() => setStep(step - 1)} className=' w-60 mx-auto rounded-md h-16 font-semibold text-lg text-white bg-vivid-red flex items-center justify-center cursor-pointer'>Previous</button>
                        )
                    }

                    {
                        (step > 1 && step === applicationSteps.length) && (
                            <button className=' w-60 mx-auto rounded-md h-16 font-semibold text-lg text-navy-blue bg-yellow-200 flex items-center justify-center cursor-pointer'>Submit</button>
                        )
                    }
                    {
                        (step > 0 && step < applicationSteps.length) && (
                            <button onClick={() => nextForm()} className=' w-60 mx-auto rounded-md h-16 font-semibold text-lg text-white bg-navy-blue flex items-center justify-center cursor-pointer'>Continue</button>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default NavyApplication

// h-[calc(100vh-6rem)]