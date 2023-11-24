import React, { forwardRef, useImperativeHandle } from "react";
import { personalDetailFormSchema } from "@/utils";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InlineErr } from "../shared";
import { states } from "@/data";

const PersonalDetails = forwardRef(({
    data,

}: {
    data?: any;
}, ref) => {
    const {
        control,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(personalDetailFormSchema),
        defaultValues: {
            firstName: data?.firstName || "",
            lastName: data?.lastName || "",
            email: data?.email || "",
            state: data?.state || "",
            address: data?.address || "",
            phoneNumber: data?.phoneNumber || "",
        },
    });

    useImperativeHandle(ref, () => ({
        childMethod() {
            onSubmit()
        }
    }))

    const onSubmit = () => {
        console.log("lol");
    };
    return (
        <div>
            <h3 className=" text-center mb-8 font-semibold text-2xl">
                Fill in your Personal Details
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
                    <span>
                        <label className="form-label" htmlFor="firstName">
                            Your First Name
                        </label>
                        <Controller
                            control={control}
                            name="firstName"
                            render={({ field: { onChange, value } }) => (
                                <input
                                    type="text"
                                    id="firstName"
                                    value={value}
                                    onChange={onChange}
                                    className={` border-2 border-blue-900 w-full h-11 rounded-md px-2 text-blue-900 my-2  `}
                                    placeholder="First Name"
                                ></input>
                            )}
                        />
                        <InlineErr err={errors?.firstName?.message} />
                    </span>
                    <span>
                        <label className="form-label" htmlFor="lastName">
                            Your Last Name
                        </label>
                        <Controller
                            control={control}
                            name="lastName"
                            render={({ field: { onChange, value } }) => (
                                <input
                                    type="text"
                                    id="lastName"
                                    value={value}
                                    onChange={onChange}
                                    className={` border-2 border-blue-900 w-full h-11 rounded-md px-2 text-blue-900 my-2  `}
                                    placeholder="Last Name"
                                ></input>
                            )}
                        />
                        <InlineErr err={errors?.lastName?.message} />
                    </span>
                    <span>
                        <label className="form-label" htmlFor="email">
                            Your Email
                        </label>
                        <Controller
                            control={control}
                            name="email"
                            render={({ field: { onChange, value } }) => (
                                <input
                                    type="email"
                                    id="email"
                                    value={value}
                                    onChange={onChange}
                                    className={` border-2 border-blue-900 w-full h-11 rounded-md px-2 text-blue-900 my-2  `}
                                    placeholder="ed@gmail.com"
                                ></input>
                            )}
                        />
                        <InlineErr err={errors?.email?.message} />
                    </span>
                    <span>
                        <label className="form-label" htmlFor="state">
                            Your State of Origin
                        </label>
                        <Controller
                            control={control}
                            name="state"
                            render={({ field: { onChange, value } }) => (
                                <select
                                    id="state"
                                    value={value}
                                    onChange={onChange}
                                    className={` border-2 border-blue-900 w-full h-11 rounded-md px-2 text-blue-900 my-2  `}
                                >
                                    <option>Choose a State</option>
                                    {states.map((el) => (
                                        <option key={el.value} value={el.value}>
                                            {el.text}
                                        </option>
                                    ))}
                                </select>
                            )}
                        />
                        <InlineErr err={errors?.state?.message} />
                    </span>
                    <span>
                        <label className="form-label" htmlFor="phone">
                            Your Phone Number
                        </label>
                        <Controller
                            control={control}
                            name="phoneNumber"
                            render={({ field: { onChange, value } }) => (
                                <input
                                    type="tel"
                                    id="phone"
                                    value={value}
                                    onChange={onChange}
                                    className={` border-2 border-blue-900 w-full h-11 rounded-md px-2 text-blue-900 my-2  `}
                                    placeholder="09089093647"
                                ></input>
                            )}
                        />
                        <InlineErr err={errors?.phoneNumber?.message} />
                    </span>
                    <span>
                        <label className="form-label" htmlFor="address">
                            Your Home Address
                        </label>
                        <Controller
                            control={control}
                            name="address"
                            render={({ field: { onChange, value } }) => (
                                <input
                                    type="tel"
                                    id="address"
                                    value={value}
                                    onChange={onChange}
                                    className={` border-2 border-blue-900 w-full h-11 rounded-md px-2 text-blue-900 my-2  `}
                                    placeholder=""
                                ></input>
                            )}
                        />
                        <InlineErr err={errors?.address?.message} />
                    </span>
                </div>
            </form>
        </div>
    );
});

PersonalDetails.displayName = 'PersonalDetails';
export default PersonalDetails;
