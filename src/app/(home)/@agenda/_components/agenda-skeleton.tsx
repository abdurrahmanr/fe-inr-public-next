const AgendaSkeleton = () => {
    return (
        <>
            <div className="col-span-full flex flex-col lg:col-span-6">
                <div className="mt-10 lg:mt-auto lg:my-auto flex justify-center">
                    <div className="h-[409px] w-[338px] rounded-[20px] bg-gray-200 animate-pulse shadow-sm" />
                </div>
            </div>
            <div className="col-span-full flex flex-col items-center justify-center lg:col-span-6">
                <div className="mt-9 flex h-full w-full flex-col rounded-t-[20px] outline-2 outline-[#6D6E76]/[.1]">
                    <div className="flex flex-col gap-4 w-full">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="h-24 w-full bg-gray-100 animate-pulse rounded-lg"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AgendaSkeleton;
