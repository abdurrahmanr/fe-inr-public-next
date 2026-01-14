import calendarIcon from "@/assets/icons/calendar.svg";
import { Agenda } from "@/types/api";
import Image from "next/image";

const AgendaCard = ({ data }: { data: Agenda }) => {
    return (
        <div
            key={data.id}
            className="col-span-full rounded-[20px] bg-[#FBF6EA] px-6 py-[30px] sm:col-span-6 lg:col-span-4"
        >
            <p className="text-[13px] font-semibold leading-6">{data.title}</p>
            <div className="mt-2 flex flex-col gap-2 text-[10px]">
                <div className="flex items-center gap-[6px]">
                    <Image src={calendarIcon} alt="" />
                    <p className="mt-px font-light">{data.time}</p>
                </div>
                <p className="text-greyCol/50">{data.description}</p>
            </div>
        </div>
    );
};

export default AgendaCard;
