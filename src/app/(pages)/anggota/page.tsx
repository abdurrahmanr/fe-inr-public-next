import { fetchWithParams } from "@/utils/fetcher";
import * as Tabs from "@radix-ui/react-tabs";
// import StrukturCard from "../../components/profile/StrukturCard";
import useSWR from "swr";
import StrukturCard from "../profil/struktur-organisasi/_components/card";
import StrukturCardSkeleton from "@/app/_components/struktur/struktur-card-skeleton";
import MemberList from "./_components/member-list";

const angkatan = [
    "angkatan pendiri",
    "angkatan 1",
    "angkatan 2",
    "angkatan 3",
    "angkatan 4",
    "angkatan 5",
    "angkatan 6",
    "angkatan 7",
    "angkatan 8",
    "angkatan 9",
    "angkatan 10",
];

const Page = () => {
    return (
        <>
            <div className="my-24 flex w-full flex-col items-center text-center">
                <div className="w-11/12 font-semibold lg:w-[607px]">
                    <p className="uppercase leading-[26px] text-greyCol">
                        ANGGOTA KAMI
                    </p>
                    <p className="text-2xl capitalize leading-10 lg:leading-[62px] text-secondary">
                        Anggota Inready Workgroup{" "}
                    </p>
                    <p className="font-normal normal-case leading-9 text-greyCol/50">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered in some form,
                        by injected humour
                    </p>
                </div>

                <Tabs.Root
                    defaultValue={angkatan[0]}
                    className="relative z-0 mt-11 w-full"
                >
                    <div className="relative flex w-full overflow-x-auto">
                        <Tabs.List className="flex flex-shrink-0 justify-center gap-5">
                            {angkatan.map((data) => (
                                <Tabs.Trigger
                                    key={data}
                                    value={data}
                                    className="cursor-pointer rounded bg-[#F2F3F5] px-5 py-2 text-xs capitalize leading-5 text-[#969696] data-[state=active]:bg-primary/20 data-[state=active]:font-medium data-[state=active]:text-yellowSecondary"
                                >
                                    {data}
                                </Tabs.Trigger>
                            ))}
                        </Tabs.List>
                    </div>
                    <MemberList />
                </Tabs.Root>
                {/* <ReactPaginate */}
                {/*   containerClassName={"pagination"} */}
                {/*   pageClassName={"page-item"} */}
                {/*   activeClassName={"active"} */}
                {/*   // onPageChange={(event) => setPage(event.selected)} */}
                {/*   pageCount={members?.meta.total_page} */}
                {/*   breakLabel="..." */}
                {/*   previousLabel="<" */}
                {/*   nextLabel=">" */}
                {/*   onPageChange={(e) => setQueryParams(`?page=${e.selected + 1}`)} */}
                {/*   // onPageActive={(event) => console.log(event)} */}
                {/*   // onClick={(event) => { console.log(event) }} */}
                {/*   className="mx-auto mb-24 mt-12 flex w-fit items-center gap-5" */}
                {/* /> */}
            </div>
        </>
    );
};

export default Page;
