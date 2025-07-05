"use client";

import { useState } from "react";
// import KegiatanCard from "../../components/kegiatan/Card";
import { Fragment } from "react";
import Dropdown from "./_components/dropdown";

const categories = ["outdoor", "perekrutan", "pembelajaran"];

const filters = ["terbaru", "terlama", "relevan"];

const Page = () => {
  const [filter, setFilter] = useState(filters[0]);

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
              setFilter={setFilter}
            />
          </div>
          <div>
            <p className=" mt-16">Semua tag</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="rounded-3xl border border-greyCol/50 px-5 py-4 capitalize text-greyCol/50"
                >
                  <p className="text-xs">{category}</p>
                </button>
              ))}
            </div>
          </div>
        </ul>
        <div className="col-span-full mt-10 h-fit lg:col-span-6">
          <p className="text-xs text-greyCol">Periode 2023 - 2024</p>
          <p className="text-2xl font-medium">Kegiatan Inready Workgroup</p>
          <div className="mt-16 grid grid-flow-row grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {/* {data?.data.map((data) => ( */}
            {/*   <Fragment key={data.id}> */}
            {/*     <KegiatanCard data={data} /> */}
            {/*   </Fragment> */}
            {/* ))} */}
          </div>
        </div>
      </div>
      {/* <ReactPaginate */}
      {/*   containerClassName={"pagination"} */}
      {/*   pageClassName={"page-item"} */}
      {/*   activeClassName={"active"} */}
      {/*   // onPageChange={(event) => setPage(event.selected)} */}
      {/*   pageCount={data?.meta.total_page} */}
      {/*   breakLabel="..." */}
      {/*   previousLabel="<" */}
      {/*   nextLabel=">" */}
      {/*   className="mx-auto mb-24 mt-12 flex w-fit items-center gap-5" */}
      {/* /> */}
    </div>
  );
};

export default Page;
