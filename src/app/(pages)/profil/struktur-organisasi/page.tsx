"use client";

import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
import StrukturList from "./_components/struktur-list";

const Page = () => {
    const { data: struktur, isLoading } = useSWR(`/api/bpo`, fetcher);

    return (
        <>
            <div className="w-full text-justify">
                <p className="text-left text-2xl font-medium text-secondary">
                    Struktur Organisasi Inready Workgroup
                </p>
                <div className="mt-9 flex flex-col gap-9 text-xs text-greyCol">
                    <p>Periode 2022-2023</p>
                </div>

                {isLoading ? (
                    <div className="mt-8 flex flex-col gap-6 animate-pulse">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="w-full">
                                <div className="h-4 w-1/3 bg-gray-200 rounded mb-4"></div>
                                <div className="h-32 w-full bg-gray-100 rounded-lg border border-gray-200"></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        {struktur && (
                            <>
                                <StrukturList
                                    title={"Pembina Inready Workgroup"}
                                    data={struktur?.pembina}
                                />

                                <StrukturList
                                    title={"Dewan Pertimbangan Organisasi"}
                                    data={struktur?.dpo}
                                />

                                <StrukturList
                                    title={"BPO Inready Workgroup"}
                                    data={struktur?.presidium}
                                />

                                {struktur?.bpo?.map(
                                    (bpo: any, index: number) => (
                                        <StrukturList
                                            key={index}
                                            title={bpo.name}
                                            data={bpo.division}
                                            divisi={true}
                                        />
                                    )
                                )}
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default Page;
