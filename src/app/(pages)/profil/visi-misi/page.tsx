const Page = () => {
    return (
        <div>
            <div className="flex flex-col gap-20 text-justify text-sm md:text-base">
                <div>
                    <p className="text-left text-2xl font-medium text-secondary">
                        Visi Inready Workgroup
                    </p>
                    <p className="mt-9 text-greyCol indent-[35px]">
                        Menjadikan Inready Workgroup sebagai wadah kolaborasi
                        yang melahirkan talenta profesional dan adaptif di
                        bidang teknologi.
                    </p>
                </div>
                <div>
                    <p className="text-left text-2xl font-medium text-secondary">
                        Misi Inready Workgroup
                    </p>
                    <ul className="mt-9 *:text-greyCol indent-3 list-decimal">
                        <li>
                            Membangun budaya belajar yang mendorong eksplorasi
                            tren teknologi terkini.
                        </li>
                        <li>
                            Mengembangkan soft skill, etika, dan profesionalisme
                            anggota untuk siap terjun ke dunia kerja.
                        </li>
                        <li>
                            Menjadi wadah kolaborasi untuk mengaplikasikan
                            pengetahuan dan menghasilkan karya nyata.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Page;
