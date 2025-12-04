const NoData = ({ error }: { error?: any }) => {
    const msg = error || "Tidak ada data yang ditemukan";
    return (
        <div className="p-16">
            <p className="text-gray-500">{msg}</p>
        </div>
    );
};

export default NoData;
