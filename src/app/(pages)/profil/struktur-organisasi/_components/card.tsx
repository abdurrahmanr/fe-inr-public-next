import pengurus from "@/assets/img/pengurus.png";
import fbLogo from "@/assets/icons/fb.svg";
import igLogo from "@/assets/icons/ig.svg";
import Image from "next/image";
import Link from "next/link";

const StrukturCard = (props: any) => {
  return (
    <div className="grid h-full w-[250px] flex-grow-0 lg:w-[225px] grid-cols-12 overflow-hidden rounded-2xl border border-greyCol/20">
      <div className="col-span-full flex h-[158px] w-full justify-center overflow-visible bg-primary">
        <Image
          src={pengurus}
          alt=""
          loading="lazy"
          className="h-full w-1/2 object-cover"
        />
      </div>
      <div className="col-span-full h-full overflow-hidden bg-white px-5 py-3 text-xs capitalize">
        <div className="flex flex-col gap-[6px] text-left">
          <p className="text-right text-[10px]">
            {props?.position || props?.angkatan || "Pembina"}
          </p>
          <p className="font-semibold">{props?.name || "Test"}</p>
          <p className="">{props?.concentration || "Test"}</p>
          <p className="text-justify text-[10px] leading-3 tracking-tighter text-greyCol/50">
            There are many variations of passages of Lorem Ipsum available
          </p>
        </div>
        <div className="mt-4 flex gap-1">
          <div className="flex items-center justify-center rounded-full bg-[#F2F4F7] px-[8px] py-[4px]">
            <Link
              href={`/${props.ig}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={igLogo} alt="" />
            </Link>
          </div>
          {/* <div className='flex items-center justify-center rounded-full bg-[#F2F4F7] px-[8px] py-[4px]'>
						<Link
							to='https://www.twitter.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img src={twitterLogo} alt='' />
						</Link>
					</div> */}
          <div className="flex items-center justify-center rounded-full bg-[#F2F4F7] p-[6px]">
            <Link
              href={`/${props.fb}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fbLogo} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrukturCard;
