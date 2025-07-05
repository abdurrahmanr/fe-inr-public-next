"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import {
  Navigation,
  Pagination,
  Keyboard,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useSWR from "swr";
import "./hero.css";
import { fetcher } from "@/utils/fetcher";

const Hero = () => {
  const { data: slider, isLoading } = useSWR(
    `https://dummyjson.com/products?limit=3`,
    fetcher,
  );

  return (
    <div className="relative h-[calc(100vh_-_80px)] bg-primary">
      {!isLoading && (
        <Swiper
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          effect={"fade"}
          keyboard={true}
          modules={[Navigation, Pagination, Keyboard, EffectFade, Autoplay]}
          pagination={{
            clickable: true,
            el: ".pagination",
          }}
          slidesPerView={1}
          className="h-full"
        >
          {slider?.products.map((slide: any) => (
            <SwiperSlide
              key={slide.id}
              className="grid grid-cols-2 items-center"
            >
              {({ isActive }) => (
                <>
                  <div className="col-span-full flex h-full w-full items-end lg:col-span-1">
                    <div className="relative h-full lg:h-4/5 w-full overflow-hidden lg:rounded-tl-[63px] after:bg-black/75 after:h-full after:w-full after:block after:absolute after:top-0 lg:after:bg-transparent">
                      <img
                        src={slide.thumbnail}
                        alt=""
                        loading="lazy"
                        className={`${
                          isActive ? "scale-125" : "scale-100"
                        } h-full w-full object-cover transition-transform duration-[5000ms] ease-in-out`}
                      />
                    </div>
                  </div>
                  <div
                    className={`${
                      isActive
                        ? "-translate-y-3 opacity-100 transition-transform duration-1000 ease-in-out"
                        : "opacity-0"
                    } -order-1 col-span-full flex h-full w-full flex-col justify-center gap-7 px-8 lg:px-32 text-xs text-white lg:col-span-1 lg:relative absolute`}
                  >
                    <p>{slide.date}</p>
                    <p
                      className={`text-2xl lg:text-3xl font-bold tracking-[1.2px] text-yellowSecondary`}
                    >
                      {slide.title}
                    </p>
                    <p className="mb-72 lg:mb-0">{slide.description}</p>
                    {/* <Button */}
                    {/*   title={"Selengkapnya"} */}
                    {/*   className="bg-transparent -mt-32 lg:mt-0 text-yellowSecondary lg:text-white px-0 lg:px-6 lg:bg-secondary" */}
                    {/* /> */}
                  </div>
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Hero;
