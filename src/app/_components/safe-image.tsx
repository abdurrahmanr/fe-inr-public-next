import Image, { ImageProps } from "next/image";
import fallbackImage from "@/assets/kegiatan.png";

const SafeImage = ({
    src,
    ...rest
}: Omit<ImageProps, "src"> & { src?: string | null }) => {
    const finalSrc = src && src !== "" ? src : fallbackImage;
    return <Image src={finalSrc} {...rest} />;
};

export default SafeImage;
