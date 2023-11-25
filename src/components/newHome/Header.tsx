'use client'
import React, { useState } from 'react'
import S from '@/styles/page/home/home.module.scss'
import Link from 'next/link';

const Header = () => {
    const [values, setValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    const isAnyValueEmpty = Object.values(values).some((value) => value === "");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleFormInput = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { value, name } = e.target;
        setValue((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    return (
        // <section className=' bg-yellow-200 h-auto mt-20'>
        <div className={`mt-3 w-full bg-white h-full pt-0 ${S.newHead}`} >
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-5 h-full">
                <div className={` w-full lg:w-2/3 h-[30vh] ml-auto md:h-full flex flex-col justify-stretch`}>
                    <h1 className='text-center lg:text-right mt-8 text-navy-blue text-3xl xl:text-6xl font-bold'>SERVING THE BRAVE</h1>
                    <div className=' w-80 mt-auto hidden md:block relative z-[3] h-32 px-10 py-7 rounded-md ml-auto bg-yellow-200'>
                        <p className=' text-sm'>The bonds we form. The battles we face. See what it means to fight and win as a Nigerian Navy.</p>
                    </div>
                </div>
                <div className=' relative z-[3] pl-0 lg:pl-2'>
                    <h4 className=' text-white font-semibold text-xl mb-5 mt-5 text-center lg:text-left'>Join the brave!!</h4>
                    <div className="hidden my-0 md:my-6 lg:flex flex-col items-center gap-4 xl:gap-10">
                        <div className=' w-full shrink-0'>
                            <label className="block mb-2 text-sm font-medium capitalize text-white ">
                                First Name
                            </label>
                            <span className="relative text-white  block h-12">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    onChange={handleFormInput}
                                    value={values.firstName}
                                    className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-white text-sm rounded-lg outline-none block h-full w-full"
                                />
                            </span>
                        </div>
                        <div className=' w-full shrink-0'>
                            <label className="block mb-2 text-sm font-medium capitalize text-white ">
                                Last Name
                            </label>
                            <span className="relative text-white  block h-12">
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    onChange={handleFormInput}
                                    value={values.lastName}
                                    className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-white text-sm rounded-lg outline-none block h-full w-full"
                                />
                            </span>
                        </div>
                        <div className=' w-full shrink-0'>
                            <label className="block mb-2 text-sm font-medium capitalize text-white ">
                                Email
                            </label>
                            <span className="relative text-white  block h-12">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="send@gmail.com"
                                    onChange={handleFormInput}
                                    value={values.email}
                                    className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-white text-sm rounded-lg outline-none block h-full w-full"
                                />
                            </span>
                        </div>
                        <div className=' w-full shrink-0'>
                            <Link href='/join/applicationform' className=' w-full h-16 font-semibold text-lg text-white bg-vivid-red flex items-center justify-center cursor-pointer'>Start Your Application Today</Link>
                        </div>
                    </div>
                    <h4 className='mt-8 text-white text-center lg:text-left font-semibold text-base lg:text-xl'>
                        Already have an account? <Link href='join/apply' className=' text-yellow-200 hover:text-red-500'>Continue Application</Link>.
                    </h4>

                    {/* <div className=' hidden md:block'>
                        <p className=' mb-4 text-sm text-white'>we value your privacy</p>
                        <p className=' text-xs italic text-white'>By submitting this form and providing your contact information, you agree to receive information via electronic means, including email and text messages, phone calls and voice messages about upcoming courses, recruitment events, newsletters, and other resources from American Public University System, Inc., which includes American Military University (AMU) and American Public University (APU), American Public Education, Inc., and Zeta Global, a third-party contractor on behalf of American Public University System, Inc. This consent is not a condition of enrollment or purchase.</p>
                    </div> */}
                </div>
            </div>
        </div>
        // </section>
    )
}

export default Header