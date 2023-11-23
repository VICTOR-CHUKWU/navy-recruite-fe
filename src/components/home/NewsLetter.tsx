'use client'
import React, { useState } from 'react'

const NewsLetter = () => {
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
        <div className=' container grid grid-cols-1 md:grid-cols-2 gap-8 py-16'>
            <div>
                <h4 className='text-navy-blue font-bold text-4xl mb-3'>
                    ONE TEAM, <span className=' text-vivid-red'>ONE FIGHT</span>
                </h4>
                <p>Subscribe to our Newsletter</p>
            </div>
            <div className=" my-0 md:my-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label className="block mb-2 text-sm font-medium capitalize text-slate-700 ">
                        First Name
                    </label>
                    <span className="relative text-gray-400  block h-12">
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
                    <label className="block mb-2 text-sm font-medium capitalize text-slate-700 ">
                        Last Name
                    </label>
                    <span className="relative text-gray-400  block h-12">
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
                    <label className="block mb-2 text-sm font-medium capitalize text-slate-700 ">
                        Email
                    </label>
                    <span className="relative text-gray-400  block h-12">
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
                    <button className=' w-full h-16 font-semibold text-lg text-white bg-vivid-red flex items-center justify-center cursor-pointer'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter