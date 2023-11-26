'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const AuthPage = () => {
    const router = useRouter()

    const [values, setValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    const [currentView, setCurrentView] = useState('register');

    const toggleView = () => {
        setCurrentView(currentView === 'register' ? 'login' : 'register');
    };
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
    const navigateToPage = () => {
        router.push(`/join/applicationform`);
    };
    return (
        <div className=' pt-[10rem]'>
            <div className="container relative h-[50rem]">
                <h4 className=' capitalize text-navy-blue text-xl font-semibold'>Welcome to the Nigerian Navy recruitment portal</h4>
                <p className=' text-base mt-2'>For new users please create an account</p>
                <div className={` ${currentView === 'login' ? ' -rotate-180 opacity-0 -z-[1] ' : ' rotate-0 z-[1] opacity-100 '} delay-300 transition-all duration-700 w-[22rem] md:w-[30rem] mx-auto my-20 rounded-md shadow-md bg-navy-blue py-10 px-2 md:px-8 absolute top-10 left-1/2 -translate-x-1/2`}>
                    <div className=" my-0 md:my-6 flex flex-col items-center gap-5">
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
                                    className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block h-full w-full"
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
                                    className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block h-full w-full"
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
                                    className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block h-full w-full"
                                />
                            </span>
                        </div>
                        <div className=' w-full shrink-0'>
                            <button onClick={() => navigateToPage()} className=' w-1/2 mx-auto rounded-md h-16 font-semibold text-lg text-white bg-vivid-red flex items-center justify-center cursor-pointer'>Create Account</button>
                        </div>
                        <p className=' text-white italic text-sm my-2 w-full shrink-0'>Existing user? <span className=' text-yellow-200 cursor-pointer' onClick={toggleView}>Login</span></p>
                    </div>
                </div>
                <div className={` ${currentView === 'register' ? ' -rotate-180 opacity-0 -z-[1] ' : ' rotate-0 z-[1] opacity-100 '} delay-300 absolute top-10 left-1/2 -translate-x-1/2 transition-all duration-700 w-[22rem] md:w-[30rem] mx-auto my-20 rounded-md shadow-md bg-navy-blue py-10 px-2 md:px-8`}>
                    <div className=" my-0 md:my-6 flex flex-col items-center gap-5">
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
                                    className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block h-full w-full"
                                />
                            </span>
                        </div>
                        {/* <div className=' w-full shrink-0'>
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
                                    className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block h-full w-full"
                                />
                            </span>
                        </div> */}
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
                                    className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block h-full w-full"
                                />
                            </span>
                        </div>
                        <div className=' w-full shrink-0'>
                            <button onClick={() => navigateToPage()} className=' w-1/2 mx-auto rounded-md h-16 font-semibold text-lg text-white bg-vivid-red flex items-center justify-center cursor-pointer'>Login</button>
                        </div>
                        <p className=' text-white italic text-sm my-2 w-full shrink-0'>New user? <span className=' text-yellow-200 cursor-pointer' onClick={toggleView}>Register</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage