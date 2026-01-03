import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import StrukturCard from "@/app/_components/struktur/struktur-card";

interface StrukturList {
    title: string;
    data: any;
    divisi?: boolean;
}

const StrukturList = ({ title, data, divisi }: StrukturList) => {
    return (
        <div className="mt-10 h-full w-full">
            {!divisi ? (
                <>
                    <p className="capitalize text-secondary w-full">{title}</p>
                    <div className="w-full">
                        <div className="mt-10 grid lg:grid-cols-12 gap-x-12 gap-y-6 lg:px-0 w-fit lg:grid-flow-row grid-flow-col">
                            <div className="col-span-full col-start-1 h-full w-full !overflow-hidden">
                                {data && data.length > 0 ? (
                                    <Swiper
                                        className="test h-full w-full select-none"
                                        spaceBetween={24}
                                        slidesPerView={"auto"}
                                        navigation={data?.length > 1}
                                        modules={[Navigation]}
                                        centeredSlides={true}
                                        grabCursor
                                        freeMode={true}
                                        breakpoints={{
                                            1024: {
                                                centeredSlides: false,
                                                slidesOffsetAfter: 250,
                                            },
                                        }}
                                    >
                                        {data?.map(
                                            (profile: any, index: number) => (
                                                <SwiperSlide
                                                    key={index}
                                                    className="h-full !w-fit"
                                                >
                                                    <div
                                                        key={index}
                                                        className=""
                                                    >
                                                        <StrukturCard
                                                            {...profile}
                                                        />
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        )}
                                    </Swiper>
                                ) : (
                                    <div className="col-span-full h-full w-full text-center text-xs text-gray-400 py-10">
                                        <span>Data belum ada</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="mt-14">
                    <p className="mb-8 text-sm text-yellowSecondary">
                        Divisi yang dinaungi oleh {title}
                    </p>
                    {data?.map((division: any, index: number) => {
                        const headOfDivision = division.members.filter(
                            (member: any) => member.is_division_head === 1
                        );
                        const memberOfDivision = division.members.filter(
                            (member: any) => member.is_division_head !== 1
                        );

                        return (
                            <div className="relative" key={index}>
                                <p className="text-xs capitalize text-greyCol">
                                    Divisi {division.name}
                                </p>
                                <div className="grid -ml-[5vw] lg:ml-0 grid-flow-row grid-cols-11 w-full py-10 overflow-hidden  gap-y-10 lg:gap-y-0 -mx-5">
                                    {division.members.length > 0 ? (
                                        <>
                                            {headOfDivision.length > 0 ? (
                                                headOfDivision.map(
                                                    (
                                                        member: any,
                                                        index: number
                                                    ) => (
                                                        <div
                                                            key={index}
                                                            className="col-span-full lg:col-span-2 mx-auto lg:mx-0"
                                                        >
                                                            <StrukturCard
                                                                position="ketua divisi"
                                                                name={
                                                                    member.name
                                                                }
                                                                photo={
                                                                    member.photo
                                                                }
                                                                concentration={
                                                                    member.concentration
                                                                }
                                                            />
                                                        </div>
                                                    )
                                                )
                                            ) : (
                                                <div className="col-span-full lg:col-span-2 text-center text-xs text-gray-400 py-10">
                                                    <span>
                                                        Data ketua divisi belum
                                                        ada
                                                    </span>
                                                </div>
                                            )}

                                            {
                                                <div className="col-span-full col-start-1 h-full w-full lg:col-start-5 !overflow-hidden">
                                                    <Swiper
                                                        className="test h-full w-full select-none"
                                                        spaceBetween={24}
                                                        slidesPerView={"auto"}
                                                        navigation
                                                        modules={[Navigation]}
                                                        centeredSlides={true}
                                                        grabCursor
                                                        freeMode={true}
                                                        breakpoints={{
                                                            1024: {
                                                                centeredSlides:
                                                                    false,
                                                                slidesOffsetAfter: 250,
                                                            },
                                                        }}
                                                    >
                                                        {memberOfDivision.length >
                                                        0 ? (
                                                            memberOfDivision.map(
                                                                (
                                                                    member: any,
                                                                    index: number
                                                                ) => (
                                                                    <SwiperSlide
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="h-full !w-fit"
                                                                    >
                                                                        <StrukturCard
                                                                            {...member}
                                                                        />
                                                                    </SwiperSlide>
                                                                )
                                                            )
                                                        ) : (
                                                            <div className="w-full h-full text-center text-xs text-gray-400 py-10">
                                                                <span>
                                                                    Data belum
                                                                    anggota ada
                                                                </span>
                                                            </div>
                                                        )}
                                                    </Swiper>
                                                </div>
                                            }
                                        </>
                                    ) : (
                                        <div className="col-span-full  text-center text-xs text-gray-400 py-10">
                                            <span>Data belum ada</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default StrukturList;
