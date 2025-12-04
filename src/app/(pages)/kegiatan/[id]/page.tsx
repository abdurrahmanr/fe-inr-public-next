import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: number }>;
}): Promise<Metadata> {
    const id = (await params).id;
    const activity = await fetchActivity({ id });

    return {
        title: activity.title
            .split(" ")
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        description: activity.description,
        openGraph: {
            images: [activity.image],
        },
    };
}

async function fetchActivity({ id }: { id: number }) {
    const res = await fetch(
        `https://be-inr.genbiuinam.org/api/public/activity/show/${id}`,
    );
    const result = await res.json();
    return result.data;
}

export default async function Page({
    params,
}: {
    params: Promise<{ id: number }>;
}) {
    const { id } = await params;
    const activity = await fetchActivity({ id });
    console.log(activity);
    return (
        <div>
            <div className="w-full">
                <div className="mt-20">
                    <p className="text-xs">Tahap Perekrutan</p>

                    <h1 className="mt-2 text-2xl font-semibold">
                        {activity.title}
                    </h1>
                    <h1 className="mt-8 flex flex-col gap-10 text-xs text-greyCol">
                        {activity.description}
                    </h1>
                </div>
                <div className="my-24 w-full text-center">
                    <p className="col-span-full mb-12 font-medium">
                        Dokumentasi
                    </p>
                    <div className="grid grid-cols-1 items-center justify-center gap-x-3 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                        {/* {data?.image.map((data, index) => (
							<div
								className='flex h-[174px] w-full items-center justify-center overflow-hidden rounded-primary border border-black bg-[#FBFAFC]'
								key={index}
							>
								<img
									src={data}
									alt=''
									className='h-1/3 w-1/3'
								/>
							</div>
						))} */}
                        <div className="flex h-[174px] w-full items-center justify-center overflow-hidden rounded-primary border border-black bg-[#FBFAFC] relative">
                            <Image
                                fill
                                src={activity?.image}
                                alt=""
                                className="h-1/3 w-1/3"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
