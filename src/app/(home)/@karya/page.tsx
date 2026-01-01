"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import {
    Navigation,
    Pagination,
    Keyboard,
    Autoplay,
    EffectCreative,
} from "swiper/modules";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import Button from "@/app/_components/button";
import KaryaCardSwiper from "./_components/karya-card";

const Page = () => {
    const { data, isLoading } = useSWR("/api/home/work", fetcher);

    return (
        <div className="grid relative h-fit lg:h-[708px] grid-cols-5 items-center justify-center bg-secondary text-white lg:flex-row py-20">
            <div className="col-span-full w-full lg:col-span-2">
                <div className="flex w-fit flex-col items-center mx-auto lg:items-start lg:px-36">
                    <p className="text-2xl font-bold text-primary">
                        Karya Inready Workgroup
                    </p>
                    <p className="mt-7 text-xs">
                        Dengan Hitam Emas Kita Berkarya
                    </p>
                    <Button
                        title="Selengkapnya"
                        href="/karya"
                        className="bg-primary px-6"
                    />
                </div>
            </div>
            <div className="col-span-full w-full lg:col-span-3 mt-10 lg:mt-0">
                {isLoading ? (
                    <div className="flex h-[350px] lg:h-[582px] items-center justify-center">
                        <span className="animate-pulse">Loading karya...</span>
                    </div>
                ) : (
                    <Swiper
                        loop={true}
                        navigation={true}
                        effect={"creative"}
                        keyboard={true}
                        modules={[
                            Navigation,
                            Pagination,
                            Keyboard,
                            Autoplay,
                            EffectCreative,
                        ]}
                        pagination={{
                            clickable: true,
                            el: ".pagination",
                        }}
                        creativeEffect={{
                            limitProgress: 2,
                            prev: {
                                scale: 0.85,
                                translate: ["-95%", 0, 0],
                                origin: "left top",
                            },
                            next: {
                                scale: 0.85,
                                translate: ["95%", 0, 0],
                                origin: "right top",
                            },
                        }}
                        breakpoints={{
                            1024: {
                                slidesPerView: 2,
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={1}
                        spaceBetween={24}
                        shortSwipes={false}
                        speed={1200}
                        grabCursor
                    >
                        {data?.data.map((data: any) => (
                            <SwiperSlide
                                key={data.id}
                                className="flex !h-[350px] w-[404px] justify-center lg:!h-[582px] relative"
                            >
                                {({ isActive }) => (
                                    <KaryaCardSwiper
                                        isActive={isActive}
                                        item={data}
                                    />
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
                <div className="pagination absolute !bottom-7 lg:!bottom-[75px] !right-[150px] z-10 ms-auto !w-fit text-primary"></div>
            </div>
        </div>
    );
};

export default Page;
