"use client";

import heroAbout from "@/assets/img/heroAbout.jpeg";
import { underlineTitle } from "@/utils/utils";
import Image from "next/image";
import { motion } from "motion/react";
import Button from "@/app/_components/button";

const Page = () => {
  return (
    <div className="my-36 flex w-full flex-col items-center justify-center">
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <div className="w-full overflow-hidden rounded-[20px] shadow-xl lg:w-full">
          <Image
            src={heroAbout}
            alt=""
            loading="lazy"
            className="h-full w-full"
          />
        </div>
      </motion.div>

      <div className="mt-[91px] flex w-full flex-col items-center gap-[60px] lg:flex-row">
        <p className="text-2xl font-bold leading-[38px] text-primary">
          Apa itu Inready Workgroup?
        </p>
        <div className="flex flex-col">
          <p className={`text-xl font-semibold ${underlineTitle}`}>
            Tentang Inready Workgroup
          </p>
          <p className="mt-7 text-justify text-sm md:text-sm leading-5 text-greyCol">
            Inready Workgroup merupakan salah satu organisasi yang ada di
            Universitas Islam Negeri Alauddin Makassar yang didirikan pada tahun
            2007, bertujuan untuk mengembangkan wawasan dan kemampuan baik itu
            dalam bidang IT maupun keorganisasian anggotanya....
          </p>
          <Button
            title="Selengkapnya"
            link="/profil/tentang"
            className="bg-primary px-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
