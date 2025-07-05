"use client";

import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

const Page = () => {
  const { data } = useSWR(``, fetcher);

  return (
    <div className="h-fit text-center flex flex-col gap-3 overflow-hidden">
      <p className="text-greyCol/50 font-semibold text-[13px] leading-[19px]">
        #INREADYWORKGROUP
      </p>
      <p className="text-xl leading-6 font-bold text-yellowSecondary">
        KEGIATAN INREADY WORKGROUP
      </p>
      <div className="grid grid-cols-5 gap-3">
        <div className="col-span-full lg:col-span-2 grid grid-cols-1 gap-3 lg:-ml-14">
          <div className="grid gap-3 grid-flow-col w-fit justify-self-end">
            <div className=" w-full h-full lg:w-[247.956px] lg:h-[345.69px] overflow-hidden rounded-primary">
              <img
                src={data?.data[0].image}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-110 transition-all duration-500 hover:rotate-1"
                alt=""
              />
            </div>
            <div className="self-end w-full h-full lg:h-[282.344px] overflow-hidden rounded-primary">
              <img
                src={data?.data[1].image}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-110 transition-all duration-500 hover:rotate-1"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-3 grid-flow-col w-fit">
            <div className="w-full h-full lg:w-[344.785px] lg:h-[292.298px] overflow-hidden rounded-primary">
              <img
                src={data?.data[2].image}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-110 transition-all duration-500 hover:rotate-1"
                alt=""
              />
            </div>
            <div className="w-full h-full lg:h-[218.997px] overflow-hidden rounded-primary">
              <img
                src={data?.data[3].image}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-110 transition-all duration-500 hover:rotate-1"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 col-span-full w-full flex justify-center">
          <div className="w-2/3 lg:w-full lg:h-[354.739px] self-center overflow-hidden rounded-primary">
            <img
              src={data?.data[4].image}
              loading="lazy"
              className="h-full w-full object-cover hover:scale-110 transition-all duration-500 hover:rotate-1"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-full lg:col-span-2 grid grid-cols-1 gap-3 lg:-mr-16 translate-y-0">
          <div className="grid gap-3 grid-flow-col w-fit">
            <div className="self-end w-full h-full lg:w-[262.435px] lg:h-[314.922px] overflow-hidden rounded-primary">
              <img
                src={data?.data[5].image}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-110 transition-all duration-500 hover:rotate-1"
                alt=""
              />
            </div>
            <div className="self-end w-full h-full lg:w-[384.603px] lg:h-[391.842px] overflow-hidden rounded-primary">
              <img
                src={data?.data[0].image}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-110 transition-all duration-500 hover:rotate-1"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-3 grid-flow-col w-fit">
            <div className="w-full h-full lg:w-[161.081px] lg:h-[218.997px] overflow-hidden rounded-primary">
              <img
                src={data?.data[1].image}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-110 transition-all duration-500 hover:rotate-1"
                alt=""
              />
            </div>
            <div className="w-full h-full lg:w-[233.476px] lg:h-[177.37px] overflow-hidden rounded-primary">
              <img
                src={data?.data[2].image}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-110 transition-all duration-500 hover:rotate-1"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
