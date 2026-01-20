"use client";

import heroAgenda from "@/assets/heroAgenda.webp";
import Renderer from "@/app/_components/countdown";
import { fetcher } from "@/utils/fetcher";
import { underlineTitle } from "@/utils/utils";
import Link from "next/link";
import Countdown from "react-countdown";
import useSWR from "swr";
import Image from "next/image";
import AgendaCard from "./_components/agenda-card";
import AgendaCardSkeleton from "./_components/agenda-skeleton";
import { Agenda } from "@/types/api";

const Page = () => {
    const { data, isLoading } = useSWR("/api/home/agenda", fetcher);

    return (
        <div className="h-fit bg-white my-12 mx-5 xl:mx-[156px] 2xl:mx-[348px]">
            <p className={`${underlineTitle} text-xl font-semibold`}>Agenda</p>
            <div className="mt-12 grid grid-cols-12 gap-y-16 md:gap-y-0">
                {data?.data.length === 0 ? (
                    <div className="col-span-full">
                        <p>Tidak ada data yang ditemukan</p>
                    </div>
                ) : isLoading ? (
                    <AgendaCardSkeleton />
                ) : (
                    <>
                        <div className="col-span-full flex flex-col lg:col-span-6">
                            <div className="mt-10 lg:mt-auto lg:my-auto flex justify-center">
                                <div className="h-[409px] w-[338px] overflow-hidden rounded-[20px] bg-primary shadow-xl">
                                    <div className="h-[164px] w-full">
                                        <Image
                                            src={heroAgenda}
                                            alt="Gambar agenda"
                                            loading="lazy"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="my-6 flex w-full flex-col gap-4 px-[42px]">
                                        <p className="text-xl font-semibold uppercase line-clamp-2">
                                            {data?.data[0].title}
                                        </p>
                                        <p className="text-xs text-greyCol">
                                            {data?.data[0].description}
                                        </p>
                                        <div className="flex flex-col gap-6 text-center text-white">
                                            <p className="text-sm">
                                                Kegiatan Dimulai dalam:
                                            </p>
                                            <Countdown
                                                date={data?.data[0].time}
                                                renderer={Renderer}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-full flex flex-col items-center justify-center lg:col-span-6 h-fit">
                            <p className="font-semibold text-yellowsecondary">
                                Agenda yang akan datang
                            </p>
                            <div className="mt-9 flex h-full w-full flex-col rounded-t-[20px] outline-2 outline-[#6D6E76]/[.1] relative">
                                {data ? (
                                    data?.data.map(
                                        (agenda: Agenda, index: number) => (
                                            <AgendaCard
                                                key={index}
                                                item={agenda}
                                            />
                                        ),
                                    )
                                ) : (
                                    <span className="m-auto">
                                        Tidak ada agenda yang ditemukan
                                    </span>
                                )}
                            </div>
                            <div className="-mt-[0.9px] flex h-12 w-full items-center justify-center rounded-b-[20px] bg-primary text-xs">
                                <Link href="/agenda">
                                    Tampilkan lebih banyak
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Page;
