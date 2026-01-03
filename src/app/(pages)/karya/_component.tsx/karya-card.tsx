import Image from "next/image";
import placeholderImage from "@/assets/icons/imagePlaceholder.svg";

interface PropParams {
    image: string;
    title: string;
    name: string;
    concentration: string;
}

const CardKarya = (props: PropParams) => {
    return (
        <div className="relative flex justify-center">
            <div className="relative h-[400px] w-full overflow-hidden rounded-primary">
                <Image
                    src={props?.image || placeholderImage}
                    alt={props?.title || "Work Image"}
                    loading="lazy"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="absolute -bottom-8 flex flex-col gap-1 overflow-hidden rounded-2xl bg-white px-10 py-4 w-[85%] capitalize leading-5 text-greyCol shadow-[0_35px_60px_-15px_rgba(171,190,209,0.4)]">
                <p className="text-sm font-semibold truncate">{props.title}</p>
                <p className="text-xs text-gray-500">oleh: {props.name}</p>
                <p className="text-xs font-semibold leading-7 text-yellowSecondary">
                    {props.concentration}
                </p>
            </div>
        </div>
    );
};

export default CardKarya;
