"use client";

import StrukturCardSkeleton from "@/app/_components/struktur/struktur-card-skeleton";
import StrukturCard from "@/app/_components/struktur/struktur-card";
import { fetchWithParams } from "@/utils/fetcher";
import NoData from "@/app/_components/no-data";
import useSWR from "swr";

interface MemberListProps {
    selectedAngkatan: string;
}

const MemberList = ({ selectedAngkatan }: MemberListProps) => {
    const getAngkatanValue = (label: string) => {
        if (label === "angkatan pendiri") return 0;
        return label.replace("angkatan ", "");
    };

    const apiParam = getAngkatanValue(selectedAngkatan);

    const { data: members, isLoading } = useSWR(
        `/api/member?angkatan=${apiParam}`,
        fetchWithParams,
        {
            shouldRetryOnError: false,
        }
    );

    if ((!members || members.data.length === 0) && !isLoading) {
        return <NoData />;
    }

    return (
        <div className="my-7 grid w-full grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-3 lg:grid-cols-4">
            {isLoading
                ? Array.from({ length: 4 }).map((_, index) => (
                      <div key={index} className="relative flex justify-center">
                          <StrukturCardSkeleton />
                      </div>
                  ))
                : members.data.map((data: any, index: number) => (
                      <div key={index} className="relative flex justify-center">
                          <StrukturCard {...data} />
                      </div>
                  ))}
        </div>
    );
};

export default MemberList;
