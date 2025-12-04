import Link from "next/link";
import kegiatanImg from "@/assets/kegiatan.png";
import Image from "next/image";

const KegiatanCard = ({ data }: any) => {
    return (
        <div className="group relative w-full max-w-[250px] overflow-hidden rounded-2xl bg-primary">
            <div className="h-84">
                <Image
                    src={kegiatanImg}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-125"
                />
            </div>
            <div className="absolute inset-0 flex h-full w-full items-end justify-center transition-colors duration-500 group-hover:bg-primary/10 bg-black/50">
                <div className="mb-4 text-white w-full mx-9">
                    <p className="font-semibold">{data.title}</p>
                    <p className="mt-1 text-[10px] leading-4">
                        Tahap Perekrutan
                    </p>
                    <Link
                        href={`./${data.id}`}
                        className="mt-3 block rounded-sm bg-white px-6 py-4 text-sm font-medium leading-none text-yellowsecondary w-fit"
                    >
                        Selengkapnya
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default KegiatanCard;
