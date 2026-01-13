"use client";

import { useState } from "react";
import { Fragment } from "react";
import Dropdown from "./_components/dropdown";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import KegiatanCard from "./_components/card";
import ReactPaginate from "react-paginate";

const filters = ["terbaru", "terlama", "relevan"] as const;

export type Filter = typeof filters[number];


const Page = () => {
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState<Filter>("terbaru");

    const { data, isLoading } = useSWR(
        `/api/activity?page=${page}&filter=${filter}`,
        fetcher,
        {
            keepPreviousData: true,
        }
    );

    const handlePageChange = ({ selected }: { selected: number }) => {
        setPage(selected + 1);
    };

    return (
        <div className="w-full">
            <div className="my-12 grid grid-cols-8 gap-x-0 lg:gap-x-12">
                <ul className="order-last col-span-2 hidden flex-col gap-4 lg:inline-flex">
                    <div className="mt-14 flex items-center text-xs text-greyCol">
                        <p className="">
                            Filter <span className="ml-8 mr-2">|</span>
                        </p>
                        <Dropdown
                            activeFilter={filter}
                            lists={filters}
                            setFilter={(val) => {
                                setFilter(val);
                                setPage(1); // Reset ke halaman 1 jika filter berubah
                            }}
                        />
                    </div>
                </ul>

                <div className="col-span-full mt-10 h-fit lg:col-span-6">
                    <p className="text-xs text-greyCol">Periode 2023 - 2024</p>
                    <p className="text-2xl font-medium">
                        Kegiatan Inready Workgroup
                    </p>
                    <div className="mt-16 grid grid-flow-row grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {isLoading
                            ? [...Array(3)].map((_, index) => (
                                <div
                                    key={index}
                                    className="relative flex w-full max-w-[250px] flex-col gap-3 overflow-hidden rounded-2xl"
                                >
                                    <div className="h-[350px] w-full animate-pulse bg-gray-200"></div>
                                </div>
                            ))
                            : data?.data.map((data: any) => (
                                <Fragment key={data.id}>
                                    <KegiatanCard data={data} />
                                </Fragment>
                            ))}
                    </div>
                </div>
            </div>

            {data?.meta && data.meta.total_page > 1 && (
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    pageCount={data.meta.last_page}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageChange}
                    forcePage={page - 1}
                    containerClassName={
                        "mx-auto mb-24 mt-12 flex w-fit items-center gap-2"
                    }
                    pageClassName={"block"}
                    pageLinkClassName={
                        "flex h-8 w-8 items-center justify-center rounded border border-gray-300 hover:bg-gray-100 text-sm"
                    }
                    activeLinkClassName={
                        "!bg-primary !text-white !border-primary"
                    }
                    previousClassName={"block"}
                    previousLinkClassName={
                        "flex h-8 w-8 items-center justify-center rounded border border-gray-300 hover:bg-gray-100 text-sm"
                    }
                    nextClassName={"block"}
                    nextLinkClassName={
                        "flex h-8 w-8 items-center justify-center rounded border border-gray-300 hover:bg-gray-100 text-sm"
                    }
                    breakClassName={"flex h-8 w-8 items-center justify-center"}
                    disabledLinkClassName={"opacity-50 cursor-not-allowed"}
                />
            )}
        </div>
    );
};

export default Page;
