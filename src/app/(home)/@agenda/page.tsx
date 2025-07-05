"use client";

import heroAgenda from "@/assets/heroAgenda.png";
import Renderer from "@/app/_components/countdown";
import { fetcher } from "@/utils/fetcher";
import { underlineTitle } from "@/utils/utils";
import Link from "next/link";
import Countdown from "react-countdown";
import useSWR from "swr";
import Image from "next/image";

const Page = () => {
  const { data, isLoading } = useSWR("https://dummyjson.com/posts", fetcher);

  return (
    <div className="h-fit bg-white  max-w-6xl mx-auto my-12">
      <p className={`${underlineTitle} text-xl font-semibold`}>Agenda</p>
      <div className="mt-12  grid grid-cols-12">
        <div className="col-span-full flex flex-col lg:col-span-6">
          <div className="mt-10 lg:mt-auto lg:my-auto flex justify-center">
            {!isLoading && (
              <div className="h-[409px] w-[338px] overflow-hidden rounded-[20px] bg-primary shadow-xl">
                <div className="h-[164px] w-full">
                  <Image
                    src={heroAgenda}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="my-6 flex w-full flex-col gap-4 px-[42px]">
                  <p className="text-xl font-semibold uppercase">
                    {/* {data?.data[0].title} */}
                  </p>
                  <p className="text-xs text-greyCol">
                    {/* {data?.data[0].description} */}
                  </p>
                  <div className="flex flex-col gap-6 text-center text-white">
                    <p className="text-sm">Kegiatan Dimulai dalam:</p>
                    {/* <Countdown date={data?.data[0].time} renderer={Renderer} /> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-full flex flex-col items-center justify-center lg:col-span-6">
          <p className="font-semibold text-yellowsecondary">
            Agenda yang akan datang
          </p>
          <div className="mt-9 flex h-full w-full flex-col rounded-t-[20px] outline-2 outline-[#6D6E76]/[.1]">
            {/* {data?.data.map((data: any) => ( */}
            {/*   <div key={data.id} className="flex flex-col text-secondary"> */}
            {/*     <div className="px-9 py-7"> */}
            {/*       <p className="text-[13px]">{data.title}</p> */}
            {/*       <div className="mt-2 flex items-center gap-[6px]"> */}
            {/*         {/* <img src={calendarIcon} alt="" /> */}
            {/*         <p className="mt-px text-[10px] font-light"> */}
            {/*           {/* {convertDate(data.time)} */}
            {/*         </p> */}
            {/*       </div> */}
            {/*     </div> */}
            {/*     <span className="h-[2px] w-full bg-[#6D6E76]/[.1]" /> */}
            {/*   </div> */}
            {/* ))} */}
          </div>
          <div className="-mt-[0.9px] flex h-12 w-full items-center justify-center rounded-b-[20px] bg-primary text-xs">
            <Link href="/agenda">Tampilkan lebih banyak</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
