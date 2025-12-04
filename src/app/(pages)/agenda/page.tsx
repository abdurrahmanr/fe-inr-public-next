"use client";

import Renderer from "@/app/_components/countdown";
import heroAgenda from "@/assets/heroAgenda.png";
import { fetcher } from "@/utils/fetcher";
import Image from "next/image";
import Countdown from "react-countdown";
import useSWR from "swr";
import Card from "./_components/card";

const Page = () => {
    const { data, error, isLoading } = useSWR(`/api/agenda`, fetcher);

    return (
        <>
            <div className="my-24 h-fit">
                <p className="text-2xl font-semibold text-secondary">
                    Agenda Inready Workgroup Periode 2023
                </p>
                <div className="mt-[71px] grid grid-cols-12 items-center overflow-hidden rounded-[32px] bg-primary px-0 lg:gap-x-12 lg:px-12 lg:py-12">
                    <div className="col-span-full flex h-56 w-full items-center overflow-hidden lg:col-span-5 lg:h-60 lg:rounded-2xl">
                        <Image
                            src={heroAgenda}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="col-span-full flex w-full flex-col gap-6 p-8 text-justify text-secondary lg:col-span-7 lg:mt-0 lg:p-0">
                        {!isLoading && (
                            <>
                                <p className="text-xl font-semibold uppercase">
                                    {data?.data[0].title}
                                </p>
                                <p className="text-xs">
                                    {data?.data[0].description}
                                </p>
                                <p className="text-[13px]">
                                    Kegiatan Dimulai dalam:
                                </p>
                                {/* <Countdown date={data?.data[0].time ?? 0} renderer={Renderer} /> */}
                            </>
                        )}
                    </div>
                </div>
                <div className="mx-0 mt-40 sm:mx-12 lg:mx-24">
                    <p className="text-[15px] text-yellowSecondary">
                        Agenda yang akan datang
                    </p>
                    <div className="mt-10 grid grid-cols-12 gap-6">
                        <Card data={data} loading={isLoading} error={error} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
