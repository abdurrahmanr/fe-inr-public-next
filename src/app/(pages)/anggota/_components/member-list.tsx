"use client";

import StrukturCardSkeleton from "@/app/_components/struktur/struktur-card-skeleton";
import { Tabs } from "radix-ui";
import StrukturCard from "../../profil/struktur-organisasi/_components/card";
import { useState } from "react";
import { fetchWithParams } from "@/utils/fetcher";
import NoData from "@/app/_components/no-data";
import useSWRImmutable from "swr/immutable";

const MemberList = () => {
    const [queryParams, setQueryParams] = useState("");
    const { data: members, isLoading } = useSWRImmutable(
        "/api/member",
        fetchWithParams,
        {
            shouldRetryOnError: false,
        },
    );

    if ((!members || members.data.length === 0) && !isLoading) {
        return <NoData />;
    }
    return (
        <div className="my-7 grid w-full grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-3 lg:grid-cols-4">
            {isLoading
                ? Array.from({ length: 4 }).map((_, index) => (
                      <Tabs.Content
                          className="relative flex justify-center"
                          key={index}
                          value="angkatan pendiri"
                      >
                          <StrukturCardSkeleton key={index} />
                      </Tabs.Content>
                  ))
                : members.data.map((data: any) => (
                      <Tabs.Content
                          className="relative flex justify-center"
                          key={data.name}
                          value="angkatan pendiri"
                      >
                          <StrukturCard {...data} angkatan={true} />
                      </Tabs.Content>
                  ))}
        </div>
    );
};

export default MemberList;
