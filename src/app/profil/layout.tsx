"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { links } from "../_components/constants";
import { boldNoRuin } from "@/utils/utils";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const struktur = pathname.includes("struktur-organisasi");
  return (
    <div
      className={`${struktur ? "grid-cols-11" : "grid-cols-12"} grid  gap-x-0`}
    >
      <div className="col-span-full mt-20 lg:col-span-9">{children}</div>
      <div
        className={`${struktur ? "lg:col-span-2" : "lg:col-span-3"} col-span-full hidden text-secondary lg:block`}
      >
        <div className="ms-auto w-fit">
          <p className="text-xl font-medium">Profile</p>
          <div className="mt-10 flex flex-col gap-9">
            {links[1]?.type === "dropdown" &&
              links[1]?.options?.map((data: string) => (
                <Link
                  href={data}
                  key={data}
                  className={`${
                    pathname.match(data) ? "font-medium" : "text-greyCol"
                  } text-sm capitalize ${boldNoRuin}`}
                >
                  {data === "struktur-organisasi"
                    ? data
                    : data + " Inready workgroup"}
                </Link>
              ))}
          </div>
        </div>
      </div>
      <div
        className={`${
          struktur ? "hidden" : ""
        } -sm:mx-10 col-span-full -mx-5 h-full xl:-mx-[156px] 2xl:-mx-[348px]`}
      >
        {/* <Carousel /> */}
      </div>
    </div>
  );
};

export default Layout;
