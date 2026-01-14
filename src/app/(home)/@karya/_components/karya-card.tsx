import { ImageIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import altArrow from "@/assets/icons/arrow-right.svg";

interface karyaCardParams {
    item: {
        id: string | number;
        title: string;
        concentration: string;
        image: string | null;
    };
    isActive: boolean;
}

const KaryaCardSwiper = ({ item, isActive }: karyaCardParams) => {
    return (
        <div className="relative h-full w-2/3 lg:w-full">
            <div className="flex h-full w-full overflow-hidden justify-center items-center rounded-[20px] bg-[#f4f5f6] relative">
                {item.image == null ? (
                    <ImageIcon className="w-1/3 h-1/3 text-gray-400" />
                ) : (
                    <Image
                        src={item.image}
                        alt=""
                        className="object-cover"
                        fill
                    />
                )}
            </div>
            <div
                className={`${
                    isActive
                        ? "-translate-y-7 translate-x-7 opacity-100"
                        : "opacity-0"
                } absolute bottom-0 left-0 w-2/3 rounded-[10px] bg-white bg-opacity-75 py-6 text-secondary backdrop-blur-[1.5px] transition-all duration-1000 md:w-1/2 lg:w-[217px]`}
            >
                <div className="ml-7 flex flex-col gap-3">
                    <p className="text-xs font-medium text-greyCol">
                        {item.concentration}
                    </p>
                    <p className="text-xs font-semibold">{item.title}</p>
                    <Link
                        href="/karya"
                        className="absolute -bottom-2 -right-6 flex h-12 w-12 items-center justify-center rounded-[10px] bg-primary"
                    >
                        <Image src={altArrow} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default KaryaCardSwiper;
