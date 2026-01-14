import fbLogo from "@/assets/icons/fb.svg";
import igLogo from "@/assets/icons/ig.svg";
import { ImageIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

interface props {
    photo: string;
    name: string;
    profession?: string;
    concentration?: string;
    position?: string;
    angkatan?: number;
    is_division_head?: boolean;
    fb?: string;
    ig?: string;
}

const StrukturCard = (props: props) => {
    // const proxiedImage = `/api/image-proxy?url=${encodeURIComponent(
    //     "https://be-inr.genbiuinam.org/storage/syahid.jpg"
    // )}`;

    const getStatusLabel = () => {
        if (props.position) {
            return props.position;
        }

        if (props.angkatan) {
            return <span>Angkatan {props.angkatan}</span>;
        }

        if (props.profession) {
            return "Dosen";
        }

        if (!props.is_division_head) {
            return "Anggota";
        }
    };

    return (
        <div className="grid h-full w-[250px] flex-grow-0 lg:w-[225px] grid-cols-12 overflow-hidden rounded-2xl border border-greyCol/20">
            <div className="col-span-full flex h-[158px] w-full justify-center overflow-visible bg-gray-200 relative">
                {props.photo === null ? (
                    <div className="h-full w-full bg-gray-300 flex justify-center items-center">
                        <ImageIcon className="w-1/3 h-1/3 text-gray-400" />
                    </div>
                ) : (
                    <Image
                        src={props.photo}
                        alt="Gambar Pengurus"
                        unoptimized
                        fill
                        className="h-full w-1/2 object-cover object-center"
                    />
                )}
            </div>
            <div className="col-span-full h-full overflow-hidden bg-white px-5 py-3 text-xs capitalize">
                <div className="flex flex-col gap-[6px] text-left">
                    <p className="text-right text-[10px]">{getStatusLabel()}</p>
                    <p className="font-semibold">
                        {props?.name || "Nama tidak diketahui"}
                    </p>
                    <p className="">
                        {props?.profession ||
                            props?.concentration ||
                            "Konsentrasi tidak diketahui"}
                    </p>
                    <p className="text-justify text-[10px] leading-3 tracking-tighter text-greyCol/50">
                        There are many variations of passages of Lorem Ipsum
                        available
                    </p>
                </div>
                <div className="mt-4 flex gap-1">
                    {props?.ig && (
                        <div className="flex items-center justify-center rounded-full bg-[#F2F4F7] px-[8px] py-[4px]">
                            <Link
                                href={`https://www.instagram.com/${props.ig}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image src={igLogo} alt="" />
                            </Link>
                        </div>
                    )}
                    {props?.fb && (
                        <div className="flex items-center justify-center rounded-full bg-[#F2F4F7] p-[6px]">
                            <Link
                                href={`/${props.fb}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image src={fbLogo} alt="" />
                            </Link>
                        </div>
                    )}
                    {/* <div className='flex items-center justify-center rounded-full bg-[#F2F4F7] px-[8px] py-[4px]'>
                        <Link
                            to='https://www.twitter.com'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img src={twitterLogo} alt='' />
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default StrukturCard;
