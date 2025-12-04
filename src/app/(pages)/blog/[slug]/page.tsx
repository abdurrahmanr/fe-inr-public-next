import * as Separator from "@radix-ui/react-separator";
import { ImageIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";
import Editor from "@/app/_components/wysiwyg/editor";
import Image from "next/image";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const slug = (await params).slug;
    const blog = await fetchBlog({ slug });

    return {
        title: blog.title
            .split(" ")
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        description: blog.description,
        openGraph: {
            images: [blog.thumbnail],
        },
    };
}

async function fetchBlog({ slug }: { slug: string }) {
    const res = await fetch(
        `https://be-inr.genbiuinam.org/api/public/blog/show/${slug}`,
    );
    const result = await res.json();
    return result.data;
}

const BlogDetail = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const dataBlogDetail = await fetchBlog({ slug });

    console.info(dataBlogDetail);

    return (
        <>
            <div className="w-full flex flex-col items-center">
                <div className="mt-14 flex h-full w-full flex-col gap-3">
                    <p className="text-sm font-bold capitalize text-yellowSecondary lg:text-[15px]">
                        {dataBlogDetail?.creator}
                    </p>
                    <p className="text-xs text-greyCol">
                        {/* Posted on {dataBlogDetail?.data?.updated_at} */}
                    </p>
                    <h1 className="text-2xl font-bold leading-8 text-black lg:text-3xl lg:leading-[48px]">
                        {dataBlogDetail?.title}
                    </h1>
                    <div>
                        <p className="capitalize">{dataBlogDetail?.category}</p>
                    </div>
                </div>
                <div className="mt-14 w-full h-[508px] flex items-center justify-center bg-[#f4f5f6] relative rounded-2xl overflow-hidden">
                    {dataBlogDetail?.image ? (
                        <Image
                            fill
                            src={dataBlogDetail?.image}
                            alt=""
                            className="h-full w-full object-cover aspect-video"
                        />
                    ) : (
                        <>
                            <ImageIcon className="w-1/3 h-1/3 text-gray-400" />
                            <ImageIcon className="w-1/12 h-1/3 text-gray-400" />
                        </>
                    )}
                </div>
                <div className=" mt-14 flex h-full w-full flex-col gap-3">
                    <p className="text-2xl font-bold leading-8 text-secondary [text-wrap:balance] lg:text-4xl lg:leading-[48px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                    </p>
                    {/* <Editor content={dataBlogDetail.content} /> */}
                    <div
                        className="ql-editor"
                        dangerouslySetInnerHTML={{
                            __html: dataBlogDetail.content,
                        }}
                    ></div>
                    <div className="my-8 flex flex-col gap-6 text-pretty leading-7 text-greyCol indent-[35px]">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Non blandit massa enim nec.
                            Scelerisque viverra mauris in aliquam sem. At risus
                            viverra adipiscing at in tellus. Sociis natoque
                            penatibus et magnis dis parturient montes. Ridiculus
                            mus mauris vitae ultricies leo. Neque egestas congue
                            quisque egestas diam. Risus in hendrerit gravida
                            rutrum quisque non.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Non blandit massa enim nec.
                            Scelerisque viverra mauris in aliquam sem. At risus
                            viverra adipiscing at in tellus. Sociis natoque
                            penatibus et magnis dis parturient montes. Ridiculus
                            mus mauris vitae ultricies leo. Neque egestas congue
                            quisque egestas diam. Risus in hendrerit gravida
                            rutrum quisque non.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Non blandit massa enim nec.
                            Scelerisque viverra mauris in aliquam sem. At risus
                            viverra adipiscing at in tellus. Sociis natoque
                            penatibus et magnis dis parturient montes. Ridiculus
                            mus mauris vitae ultricies leo. Neque egestas congue
                            quisque egestas diam. Risus in hendrerit gravida
                            rutrum quisque non.
                        </p>
                    </div>
                </div>
                <section className="my-24 font-bold text-xl leading-[48px]">
                    <p>Baca selanjutnya</p>
                    <div className="grid grid-cols-3 gap-[42px] mt-9">
                        {[1, 2, 3].map((data) => (
                            <div
                                className="text-xs text-secondary lg:col-span-1 col-span-3"
                                key={data}
                            >
                                <div className="my-5 flex items-center text-greyCol font-medium">
                                    <p>
                                        By{" "}
                                        <span className="text-yellowSecondary">
                                            Admin
                                        </span>
                                    </p>
                                    <Separator.Root
                                        orientation="vertical"
                                        className="w-[1px] h-[9px] mx-2 bg-greyCol"
                                    />
                                    <p>Aug 23, 2022</p>
                                </div>
                                <p className="font-semibold text-sm leading-6">
                                    Keseruan Outdoor Inready Workgroup Periode
                                    2023 di Bissoloro
                                </p>
                                <p className="opacity-70 leading-6 font-normal mt-[14px] text-pretty indent-[35px] line-clamp-3">
                                    Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident.
                                </p>
                            </div>
                        ))}
                    </div>
                    <Separator.Root className="bg-[#6D6E76] h-[1px] mt-14 opacity-30" />
                </section>
            </div>
        </>
    );
};

export default BlogDetail;
