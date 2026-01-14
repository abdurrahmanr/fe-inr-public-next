const KaryaSkeleton = () => {
    return (
        <>
            {[...Array(3)].map((_, index) => (
                <div key={index} className="relative flex justify-center">
                    <div className="h-[400px] w-full animate-pulse rounded-primary bg-gray-200"></div>
                    <div className="absolute -bottom-8 flex h-24 w-3/4 animate-pulse flex-col items-center justify-center gap-2 rounded-2xl bg-gray-300 px-4 py-2 shadow-lg">
                        <div className="h-4 w-3/4 rounded bg-gray-400"></div>
                        <div className="h-3 w-1/2 rounded bg-gray-400"></div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default KaryaSkeleton;
