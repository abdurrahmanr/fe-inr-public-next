const StrukturCardSkeleton = (props: any) => {
    return (
        <div className="grid h-full w-[250px] flex-grow-0 lg:w-[225px] grid-cols-12 overflow-hidden rounded-2xl border border-greyCol/20">
            <div className="col-span-full flex h-[158px] w-full justify-center overflow-visible bg-gray-200 animate-pulse"></div>
            <div className="col-span-full h-full overflow-hidden bg-white px-5 py-3 text-xs capitalize">
                <div className="flex flex-col gap-[6px] text-left">
                    <div className="w-1/3 bg-gray-200 animate-pulse h-3 self-end"></div>
                    <div className="font-semibold bg-gray-200 animate-pulse h-3 w-1/2"></div>
                    <div className="bg-gray-200 animate-pulse h-3 w-1/4"></div>
                    <p className="bg-gray-200 animate-pulse h-3"></p>
                </div>
                <div className="mt-4 flex gap-1">
                    <div className="flex items-center justify-center rounded-full bg-[#F2F4F7] px-[8px] py-[4px]"></div>
                    <div className="flex items-center justify-center rounded-full bg-[#F2F4F7] p-[6px]"></div>
                </div>
            </div>
        </div>
    );
};

export default StrukturCardSkeleton;
