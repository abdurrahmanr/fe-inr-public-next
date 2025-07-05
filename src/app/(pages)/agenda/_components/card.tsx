import { Fragment } from "react";
import calendarIcon from "@/assets/icons/calendar.svg";

const Card = ({ loading, error, data }: any) => {
  if (error) return <p>error</p>;

  if (loading) {
    return (
      <div className="col-span-full rounded-[20px] bg-[#FBF6EA] px-6 py-[30px] sm:col-span-6 lg:col-span-4">
        <p className=" bg-slate-200 w-2/3 h-2"></p>
        <div className="mt-2 flex flex-col gap-2 text-[10px]">
          <div className="flex items-center gap-[6px]">
            <img src={calendarIcon} alt="" />
            <p className="mt-px font-light w-1/3 bg-slate-200 h-2"></p>
          </div>
          <p className="text-greyCol/50 w-2/3 bg-slate-200 h-2"></p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* {data.data.map((data: any) => ( */}
      {/*   <Fragment key={data.id}> */}
      {/*     <div className="col-span-full rounded-[20px] bg-[#FBF6EA] px-6 py-[30px] sm:col-span-6 lg:col-span-4"> */}
      {/*       <p className="text-[13px] font-semibold leading-6">{data.title}</p> */}
      {/*       <div className="mt-2 flex flex-col gap-2 text-[10px]"> */}
      {/*         <div className="flex items-center gap-[6px]"> */}
      {/*           <img src={calendarIcon} alt="" /> */}
      {/*           <p className="mt-px font-light">{data.time}</p> */}
      {/*         </div> */}
      {/*         <p className="text-greyCol/50">{data.description}</p> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*   </Fragment> */}
      {/* ))} */}
    </>
  );
};

export default Card;
