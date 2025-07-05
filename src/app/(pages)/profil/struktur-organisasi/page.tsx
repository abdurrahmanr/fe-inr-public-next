"use client";

import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
import StrukturList from "./_components/struktur-list";
import { pengurus } from "@/app/_components/constants";

const Page = () => {
  const { data: struktur } = useSWR(``, fetcher);

  return (
    <>
      <div className="w-full text-justify">
        <p className="text-left text-2xl font-medium text-secondary">
          Struktur Organisasi Inready Workgroup
        </p>
        <div className="mt-9 flex flex-col gap-9 text-xs text-greyCol">
          <p>Periode 2022-2023</p>
        </div>

        <StrukturList title={"Pembina Inready Workgroup"} data={pengurus} />
        <StrukturList
          title={"BPO Inready Workgroup"}
          data={struktur?.presidium}
        />
        {struktur?.bpo.map((bpo: any, index: number) => (
          <StrukturList
            key={index}
            title={bpo.name}
            data={bpo.division}
            divisi={true}
          />
        ))}
      </div>
    </>
  );
};

export default Page;
