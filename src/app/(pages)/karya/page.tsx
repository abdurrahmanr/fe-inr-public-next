"use client";

import { fetcher } from "@/utils/fetcher";
import { ImageIcon } from "@radix-ui/react-icons";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import useSWR from "swr";
import CardKarya from "./_component.tsx/karya-card";
import KaryaSkeleton from "./_component.tsx/karya-skeleton";

const jenisKarya = ["website", "desain", "mobile"];

const Page = () => {
    const [selectedWork, setSelectedWork] = useState<string>("");
    const [page, setPage] = useState<number>(1);

    const { data: karya, isLoading } = useSWR(
        `/api/works?concentration=${selectedWork}&page=${page}`,
        fetcher,
        {
            keepPreviousData: true,
        }
    );

    const handleTabChange = (value: string) => {
        setSelectedWork(value);
        setPage(1);
    };

    const handlePageChange = ({ selected }: { selected: number }) => {
        setPage(selected + 1);
    };

    return (
        <div className="my-24 flex flex-col items-center text-center">
            <div className="w-11/12 font-semibold uppercase lg:w-[607px]">
                <p className="leading-[26px] text-greyCol">Karya Kami</p>
                <p className="text-2xl leading-[62px] text-secondary">
                    karya terbaik 2023
                </p>
                <p className="font-normal normal-case leading-9 text-greyCol/50">
                    Koleksi karya terbaik yang telah kami selesaikan dengan
                    standar kualitas tinggi.
                </p>
            </div>

            <div className="my-24 grid w-full grid-cols-1 gap-x-11 gap-y-28 md:grid-cols-2 lg:grid-cols-3">
                {isLoading ? (
                    <KaryaSkeleton />
                ) : !karya?.best_works || karya.best_works.length === 0 ? (
                    <div className="col-span-full flex w-full flex-col items-center justify-center text-center text-gray-400">
                        <div className="mb-4 rounded-full bg-gray-100 p-6">
                            <ImageIcon className="w-10 h-10" />
                        </div>
                        <p className="text-lg font-medium">
                            Belum ada karya terbaik
                        </p>
                    </div>
                ) : (
                    karya.best_works.map((data: any, index: number) => (
                        <CardKarya key={index} {...data} />
                    ))
                )}
            </div>

            <div
                className="w-11/12 font-semibold uppercase lg:w-[607px]"
                id="works-section"
            >
                <p className="text-2xl leading-[62px] text-secondary">
                    karya keren lainnya
                </p>
                <p className="font-normal normal-case leading-9 text-greyCol/50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <Tabs.Root
                value={selectedWork}
                onValueChange={handleTabChange}
                className="mt-5 w-full"
            >
                <div className="relative mb-10 flex w-full justify-center">
                    <Tabs.List className="flex justify-center gap-5 self-center">
                        {jenisKarya.map((data, index) => (
                            <Tabs.Trigger
                                key={data}
                                value={(index + 1).toString()}
                                className="rounded bg-[#F2F3F5] px-5 py-2 text-xs capitalize leading-5 text-[#969696] transition-all data-[state=active]:bg-primary/20 data-[state=active]:font-medium data-[state=active]:text-yellowSecondary"
                            >
                                {data}
                            </Tabs.Trigger>
                        ))}
                    </Tabs.List>
                </div>

                <Tabs.Content value={selectedWork} className="w-full">
                    <div className="z-0 my-12 grid w-full grid-cols-1 gap-x-11 gap-y-28 md:grid-cols-2 lg:my-24 lg:grid-cols-3">
                        {isLoading ? (
                            <KaryaSkeleton />
                        ) : karya?.works?.length > 0 ? (
                            karya.works.map((work: any, index: number) => (
                                <CardKarya key={index} {...work} />
                            ))
                        ) : (
                            <div className="col-span-full py-10 text-gray-400">
                                Tidak ada karya yang ditemukan untuk konsentrasi
                                ini.
                            </div>
                        )}
                    </div>
                </Tabs.Content>
            </Tabs.Root>

            {karya?.meta && karya.meta.total_page > 1 && (
                <div className="mt-10 flex justify-center">
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={"..."}
                        pageCount={karya.meta.total_page}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={3}
                        forcePage={page - 1}
                        onPageChange={handlePageChange}
                        containerClassName={"pagination"}
                        pageClassName={"page-item"}
                        activeClassName="active"
                        disabledLinkClassName={
                            "opacity-50 cursor-not-allowed hover:bg-transparent"
                        }
                        className="mx-auto mb-24 mt-12 flex w-fit items-center gap-5"
                    />
                </div>
            )}
        </div>
    );
};

export default Page;
