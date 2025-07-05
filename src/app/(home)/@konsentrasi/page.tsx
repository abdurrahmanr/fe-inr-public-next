import webIcon from "@/assets/icons/web.svg";
import designIcon from "@/assets/icons/design.svg";
import mobileIcon from "@/assets/icons/mobile.svg";
import Image from "next/image";

const concrentations = [
  {
    name: "Website Development",
    icon: webIcon,
    description: "Lorem Ipsum is simply",
  },
  {
    name: "Design",
    icon: designIcon,
    description: "Lorem Ipsum is simply",
  },
  {
    name: "Mobile Development",
    icon: mobileIcon,
    description: "Lorem Ipsum is simply",
  },
];

const Konsentrasi = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-[76px] py-[74px] lg:flex-row">
      {concrentations.map((concrentation) => (
        <div className="flex items-center gap-3" key={concrentation.name}>
          <div
            className={`flex aspect-auto h-16 w-16 items-center justify-center rounded-[10px] bg-primary/30 text-white`}
          >
            <Image
              src={concrentation.icon}
              alt={`${concrentation.name} icon`}
            />
          </div>
          <div className="flex flex-col justify-center gap-[14px]">
            <p className="text-sm font-medium">{concrentation.name}</p>
            <p className="text-xs font-normal text-[#969696]">
              {concrentation.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Konsentrasi;
