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
            <div className="container">
                <h4 className=' capitalize text-navy-blue text-xl font-semibold'>Welcome to Nigerian Navy application page</h4>
                <p className=' text-base mt-2'>For new users please create an account</p>

                <div className=' w-2/3 mx-auto my-20 rounded-md shadow-md bg-navy-blue py-10 px-8'>
                    <div className=" my-0 md:my-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
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
                        <div>
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
                        <div className='col-span-1 md:col-span-2'>
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
                        <div className='col-span-1 md:col-span-2'>
                            <button onClick={() => navigateToPage()} className=' w-1/2 mx-auto rounded-md h-16 font-semibold text-lg text-white bg-vivid-red flex items-center justify-center cursor-pointer'>Create Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage