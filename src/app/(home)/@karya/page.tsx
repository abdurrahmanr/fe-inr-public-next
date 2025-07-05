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
import arrowRight from "../../../assets/icons/arrow-right.svg";
import useSWR from "swr";
import { ImageIcon } from "@radix-ui/react-icons";
import { fetcher } from "@/utils/fetcher";
import Button from "@/app/_components/button";
import Link from "next/link";

const Page = () => {
  const { data } = useSWR(``, fetcher);

  return (
    <div className="grid relative h-fit lg:h-[708px] grid-cols-5 items-center justify-center bg-secondary text-white lg:flex-row py-20">
      <div className="col-span-full w-full lg:col-span-2">
        <div className="flex w-fit flex-col items-center mx-auto lg:items-start lg:px-36">
          <p className="text-2xl font-bold text-primary">
            Karya Inready Workgroup
          </p>
          <p className="mt-7 text-xs">Dengan Hitam Emas Kita Berkarya</p>
          <Button
            title="Selengkapnya"
            link="/karya"
            className="bg-primary px-6"
          />
        </div>
      </div>
      <div className="col-span-full w-full lg:col-span-3 mt-10 lg:mt-0">
        <Swiper
          loop={true}
          navigation={true}
          effect={"creative"}
          keyboard={true}
          modules={[Navigation, Pagination, Keyboard, Autoplay, EffectCreative]}
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
          slidesPerView={1}
          spaceBetween={24}
          shortSwipes={false}
          // autoplay={{
          //     delay: 2500,
          //     disableOnInteraction: false,
          // }}
          speed={1200}
          grabCursor
        >
          {data?.data.map((data: any) => (
            <SwiperSlide
              key={data.id}
              className="flex h-[350px] w-[404px] justify-center lg:h-[582px]"
            >
              {({ isActive }) => (
                <div className="relative h-full w-2/3 lg:w-full">
                  <div className="flex h-full w-full overflow-hidden justify-center items-center rounded-[20px] bg-[#f4f5f6]">
                    {data?.image === null ? (
                      <img
                        src={data.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <ImageIcon className="w-1/3 h-1/3 text-gray-400" />
                    )}
                  </div>
                  <div
                    className={`${
                      isActive
                        ? "-translate-y-7 translate-x-7 opacity-100"
                        : "opacity-0"
                    } absolute bottom-0 left-0 w-2/3 rounded-[10px] bg-white bg-opacity-75 py-6 text-secondary backdrop-blur-[1.5px] transition-all duration-1000 md:w-1/2 lg:w-[217px]`}
                  >
                    <div className="ml-7 flex flex-col gap-3">
                      <p className="text-xs font-medium text-greyCol">
                        {data.concentration}
                      </p>
                      <p className="text-xs font-semibold">{data.title}</p>
                      <Link
                        href="/karya"
                        className="absolute -bottom-2 -right-6 flex h-12 w-12 items-center justify-center rounded-[10px] bg-primary"
                      >
                        <img src={arrowRight} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pagination absolute !bottom-7 lg:!bottom-[75px] !right-[150px] z-10 ms-auto !w-fit text-primary"></div>
      </div>
    </div>
  );
};

export default Page;
