import { convertDate } from "@/utils/utils";
import CalendarIcon from "@/assets/icons/calendar.svg";
import Image from "next/image";
import { Agenda } from "@/types/api";

const AgendaCard = ({ item }: { item: Agenda }) => {
    return (
        <div key={item.id} className="flex flex-col text-secondary">
            <div className="px-9 py-7">
                <p className="text-[13px]">{item.title}</p>
                <div className="mt-2 flex items-center gap-[6px]">
                    <Image src={CalendarIcon} alt="icon calender" />
                    <p className="mt-px text-[10px] font-light">
                        {convertDate(new Date(item.time))}
                    </p>
                </div>
            </div>
            <span className="h-[2px] w-full bg-[#6D6E76]/[.1]" />
        </div>
    );
};

export default AgendaCard;
