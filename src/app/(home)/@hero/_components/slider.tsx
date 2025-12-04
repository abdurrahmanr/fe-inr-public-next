"use client";

import Button from "@/app/_components/button";
import img from "@/assets/kegiatan.png";
import { cn } from "@/utils/cn";
import Image from "next/image";
import {
    Autoplay,
    EffectFade,
    Keyboard,
    Navigation,
    Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function Slider({ slider }: any) {
    return (
        <Swiper
            loop={true}
            navigation={true}
            effect={"fade"}
            autoplay={{
                delay: 50000,
                disableOnInteraction: false,
            }}
            keyboard={true}
            modules={[Navigation, Pagination, Keyboard, EffectFade, Autoplay]}
            pagination={{
                clickable: true,
            }}
            slidesPerView={1}
            className="h-full swiper-hero"
        >
            {slider?.data.map((slide: any, index: number) => (
                <SwiperSlide
                    key={slide.id}
                    className="grid grid-cols-2 items-center"
                >
                    {({ isActive }) => {
                        const scale =
                            (index % 2 === 0) === isActive
                                ? "scale-150 translate-x-10"
                                : "scale-250 -translate-x-10";
                        return (
                            <>
                                <div className="col-span-full flex h-full w-full items-end lg:col-span-1 lg:justify-end">
                                    <div className="lg:min-w-1/2 lg:max-w-1/2 relative h-full lg:h-4/5 w-full overflow-hidden lg:rounded-tl-[63px] after:bg-black/75 after:h-full after:w-full after:block after:absolute after:top-0 after:lg:bg-black/50">
                                        <Image
                                            src={img}
                                            alt=""
                                            fill
                                            className={cn(
                                                scale,
                                                "h-full w-full object-cover transition-transform duration-[5000ms] ease-out",
                                            )}
                                        />
                                    </div>
                                </div>
                                <div
                                    className={`${
                                        isActive
                                            ? "translate-y-0 opacity-100 transition-transform duration-1000 ease-in-out"
                                            : "opacity-0 translate-y-3"
                                    } -order-1 col-span-full flex h-full w-full flex-col justify-center gap-7 px-8 lg:px-32 text-sm text-white lg:col-span-1 absolute z-50 top-0 max-w-200`}
                                >
                                    <p>{slide.date}</p>
                                    <p
                                        className={`text-2xl lg:text-3xl font-bold tracking-[1.2px] text-yellowsecondary`}
                                    >
                                        {slide.title}
                                    </p>
                                    <p className="mb-72 lg:mb-0">
                                        {slide.description}
                                    </p>
                                    <Button
                                        title={"Selengkapnya"}
                                        href={`/blog/${slide.slug}`}
                                        className="bg-transparent -mt-32 lg:mt-0 text-yellowsecondary lg:text-white px-0 lg:px-6 lg:bg-secondary hover:bg-secondary/30"
                                    />
                                </div>
                            </>
                        );
                    }}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
