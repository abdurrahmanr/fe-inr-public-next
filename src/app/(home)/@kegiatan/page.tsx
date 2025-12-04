"use client";

import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
import fallbackImage from "@/assets/kegiatan.png";
import Image from "next/image";
import SafeImage from "@/app/_components/safe-image";
import { cn } from "@/utils/cn";

const imageLayout = [
    // Group 1 (left column top)
    {
        index: 0,
        wrapper:
            "w-full h-full lg:w-[247.956px] lg:h-[345.69px] overflow-hidden rounded-2xl relative",
    },
    {
        index: 1,
        wrapper:
            "self-end w-full h-full lg:h-[282.344px] lg:w-96 overflow-hidden rounded-2xl relative",
    },
    // Group 2 (left column bottom)
    {
        index: 2,
        wrapper:
            "w-full h-full lg:w-[344.785px] lg:h-[292.298px] overflow-hidden rounded-2xl relative",
    },
    {
        index: 3,
        wrapper:
            "w-full h-full lg:h-[218.997px] lg:w-[311px] overflow-hidden rounded-2xl relative",
    },
    // Group 3 (middle column)
    {
        index: 4,
        wrapper:
            "w-2/3 lg:w-100 lg:h-[354.739px] self-center overflow-hidden rounded-primary relative",
        outerWrapper: "lg:col-span-1 col-span-full w-full flex justify-center",
    },
    // Group 4 (right column top)
    {
        index: 5,
        wrapper:
            "self-end w-full h-full lg:w-[262.435px] lg:h-[314.922px] overflow-hidden rounded-primary relative",
    },
    {
        index: 6,
        wrapper:
            "self-end w-full h-full lg:w-[384.603px] lg:h-[391.842px] overflow-hidden rounded-primary relative",
    },
    // Group 5 (right column bottom)
    {
        index: 7,
        wrapper:
            "w-full h-full lg:w-[161.081px] lg:h-[218.997px] overflow-hidden rounded-primary relative",
    },
    {
        index: 8,
        wrapper:
            "w-full h-full lg:w-[233.476px] lg:h-[177.37px] overflow-hidden rounded-primary relative",
    },
];

const Page = () => {
    const { data, isLoading } = useSWR("/api/home/gallery", fetcher);

    const renderImage = (index: number, wrapper: string) => {
        return (
            <div key={index} className={cn(wrapper, "transition-all")}>
                {isLoading ? (
                    <div className="bg-gray-200 h-full w-full animate-pulse opacity-1"></div>
                ) : (
                    <SafeImage
                        src={data?.data?.[index]?.image}
                        fill
                        unoptimized
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-110 transition-all duration-500 hover:rotate-1"
                        alt=""
                    />
                )}
            </div>
        );
    };

    return (
        <div className="h-fit text-center flex flex-col gap-3 overflow-hidden">
            <p className="text-greyCol/50 font-semibold text-[13px] leading-[19px]">
                #INREADYWORKGROUP
            </p>
            <p className="text-xl leading-6 font-bold text-yellowsecondary">
                KEGIATAN INREADY WORKGROUP
            </p>
            <div className="grid grid-cols-5 gap-3">
                <div className="col-span-full lg:col-span-2 grid grid-cols-1 gap-3 lg:-ml-14">
                    <div className="grid gap-3 grid-flow-col w-fit justify-self-end">
                        {renderImage(0, imageLayout[0].wrapper)}
                        {renderImage(1, imageLayout[1].wrapper)}
                    </div>
                    <div className="grid gap-3 grid-flow-col w-fit justify-self-end">
                        {renderImage(2, imageLayout[2].wrapper)}
                        {renderImage(3, imageLayout[3].wrapper)}
                    </div>
                </div>

                {/* Middle Column */}
                <div className={imageLayout[4].outerWrapper ?? ""}>
                    {renderImage(4, imageLayout[4].wrapper)}
                </div>

                {/* Right Column */}
                <div className="col-span-full lg:col-span-2 grid grid-cols-1 gap-3 lg:-mr-16 translate-y-0">
                    <div className="grid gap-3 grid-flow-col w-fit">
                        {renderImage(5, imageLayout[5].wrapper)}
                        {renderImage(6, imageLayout[6].wrapper)}
                    </div>
                    <div className="grid gap-3 grid-flow-col w-fit">
                        {renderImage(7, imageLayout[7].wrapper)}
                        {renderImage(8, imageLayout[8].wrapper)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
