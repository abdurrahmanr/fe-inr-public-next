import Image from "next/image";
import calendarIcon from "@/assets/icons/calendar.svg";

const AgendaSkeleton = () => {
    return (
        <>
            {[...Array(3)].map((_, index) => (
                <div
                    key={index}
                    className="col-span-full rounded-[20px] bg-[#FBF6EA] px-6 py-[30px] sm:col-span-6 lg:col-span-4"
                >
                    <p className="bg-slate-200 w-2/3 h-2"></p>
                    <div className="mt-2 flex flex-col gap-2 text-[10px]">
                        <div className="flex items-center gap-[6px]">
                            <Image src={calendarIcon} alt="" />
                            <p className="mt-px font-light w-1/3 bg-slate-200 h-2"></p>
                        </div>
                        <p className="text-greyCol/50 w-2/3 bg-slate-200 h-2"></p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default AgendaSkeleton;
