import React, { useCallback } from "react";
import Image from "next/image";
import { IFeatureNews, featurenews } from "@/data";
import { Span } from "next/dist/trace";

const FeaturedArticles = () => {
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
        <div className=" container pt-20 pb-10">
            <div className=" flex justify-center">
                <h3 className="textBorder my-4 font-semibold text-3xl mb-8">Featured Articles</h3>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {featurenews.map(renderFeature)}
            </div>
        </div>
    );
};

export default FeaturedArticles;
