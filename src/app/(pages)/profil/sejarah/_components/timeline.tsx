const sejarah = [
    {
        judul: "Deklarasi INFINITY",
        deskripsi:
            "Pembentukan resmi study club “INFINITY – Information Technology Students Community” lengkap dengan logo/lambang, AD/ART, visi–misi, dan ikrar.",
        tahun: 2007,
    },
    {
        judul: "Angkatan Pertama",
        deskripsi:
            "Angkatan 2008 bergabung; kegiatan rutin dan program pembelajaran mulai berjalan terstruktur.",
        tahun: 2008,
    },
    {
        judul: "Angkatan Kedua.",
        deskripsi:
            "Regenerasi berlanjut; kapasitas dan jangkauan program diperluas.",
        tahun: 2009,
    },
    {
        judul: "Angkatan Ketiga.",
        deskripsi:
            "Masa keemasan Infinity; beragam kegiatan tahunan menjadikan Infinity penopang jurusan TI UIN Makassar dan meningkatkan kompetensi anggota.",
        tahun: 2010,
    },
    {
        judul: "Rekonstruksi Menjadi INREADY WORKGROUP",
        deskripsi:
            "Perubahan dari INFINITY CORPORATION ke INREADY WORKGROUP untuk memperluas mandat dari pengembangan keilmuan ke akses peluang kerja dan jejaring profesional berkelanjutan.",
        tahun: "28 Mei (Mubes IV)",
    },
];

const Timeline = () => {
    return (
        <div>
            {sejarah.map((data, index) => (
                <div key={index} className="group grid grid-cols-12">
                    <div className="col-span-full grid w-full grid-cols-11">
                        <div className="relative order-last col-span-8 flex h-full w-full flex-col justify-center gap-3 rounded-[10px] bg-black px-6 py-6 capitalize text-white shadow-lg group-even:bg-primary md:col-span-5 md:group-odd:order-first md:group-even:order-last">
                            <p className="text-left font-semibold text-sm group-even:text-secondary">
                                {data.judul}
                            </p>
                            <p className="text-xs group-even:text-secondary">
                                {data.deskripsi}
                            </p>
                            <div className="absolute -left-3 m-auto h-0 w-0 rotate-180 border-b-[14px] border-l-[25px] border-t-[14px] border-b-transparent border-t-transparent group-odd:border-l-black group-even:border-l-primary md:group-odd:-right-3 md:group-odd:left-auto md:group-odd:rotate-0"></div>
                        </div>
                        <div className="relative col-span-1 flex items-end justify-center">
                            <div className="h-full w-1 bg-black group-first:h-1/2 group-first:bg-primary"></div>
                            <div className="absolute h-6 w-6 self-center rounded-full bg-white text-center outline-1 outline-black group-first:outline-primary"></div>
                        </div>
                        <div className="col-span-1 w-1 md:hidden"></div>
                        <div className="flex -rotate-90 items-center group-odd:order-first group-odd:justify-start group-even:order-first md:col-span-5 md:rotate-0 md:group-odd:order-3 md:group-even:justify-end">
                            <p>{data.tahun}</p>
                        </div>
                    </div>
                    <div className="col-span-full grid w-full grid-cols-11">
                        <div className="h-10 md:col-span-5"></div>
                        <div className="relative col-span-1 flex items-end justify-center ">
                            <div className="h-full w-1 bg-black group-first:bg-primary"></div>
                        </div>
                        <div className="col-span-9 h-10  md:col-span-5"></div>
                    </div>
                </div>
            ))}
            <div className="grid h-20 grid-cols-11">
                <div className="relative col-start-2 flex h-full items-end justify-center md:col-span-full">
                    <div className="h-full w-1 bg-black group-first:bg-primary"></div>
                    <div className="absolute h-6 w-6 self-end rounded-full bg-primary text-center  outline-1 outline-primary group-first:outline-primary"></div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
