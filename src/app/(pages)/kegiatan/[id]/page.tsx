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
        `https://be-inready.obiwannn.web.id/api/public/activity/show/${id}`
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
    return (
        <div>
            <div className="w-full">
                <div className="mt-20">
                    <p className="text-xs">Tahap Perekrutan</p>
                    <h1 className="mt-2 text-2xl font-semibold">
                        {activity.title}
                    </h1>
                    <div
                        className="mt-8 flex flex-col gap-10 text-xs text-greyCol"
                        dangerouslySetInnerHTML={{
                            __html: activity.description,
                        }}
                    />
                </div>
                <div className="my-16 w-full text-center">
                    <p className="col-span-full mb-12 font-medium">
                        Dokumentasi
                    </p>
                    <div className="grid grid-cols-1 items-center justify-center gap-x-3 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                        {!activity
                            ? [...Array(3)].map((_, index) => (
                                  <div
                                      key={index}
                                      className="h-[174px] w-full animate-pulse rounded-primary bg-gray-200"
                                  >
                                      <div className="flex h-full w-full items-center justify-center text-gray-300">
                                          <svg
                                              className="h-10 w-10"
                                              fill="currentColor"
                                              viewBox="0 0 24 24"
                                          >
                                              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                                          </svg>
                                      </div>
                                  </div>
                              ))
                            : activity?.flayer_image.map(
                                  (data: any, index: number) => (
                                      <div
                                          className="relative flex h-[174px] w-full items-center justify-center overflow-hidden rounded-primary border border-black bg-[#FBFAFC]"
                                          key={index}
                                      >
                                          <Image
                                              src={data}
                                              alt="Gambar kegiatan"
                                              fill
                                              className="object-cover"
                                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                          />
                                      </div>
                                  )
                              )}
                    </div>
                </div>
            </div>
        </div>
    );
}
