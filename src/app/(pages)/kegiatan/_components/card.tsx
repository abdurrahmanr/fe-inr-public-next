import Link from "next/link";
import Image from "next/image";

const KegiatanCard = ({ data }: any) => {
    return (
        <div className="group relative w-full max-w-[250px] overflow-hidden rounded-2xl bg-primary">
            <div className="h-84">
                <Image
                    src={data.flayer_image}
                    alt="Gambar kegiatan"
                    loading="lazy"
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-125"
                />
            </div>
            <div className="absolute inset-0 flex h-full w-full items-end justify-center transition-colors duration-500 group-hover:bg-primary/10 bg-black/50">
                <div className="mb-4 text-white w-full mx-9">
                    <p className="font-semibold line-clamp-3">{data.title}</p>
                    <div
                        className="mt-1 text-[10px] leading-4 line-clamp-2"
                        dangerouslySetInnerHTML={{
                            __html: data.description,
                        }}
                    />
                    <Link
                        href={`/kegiatan/${data.id}`}
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
