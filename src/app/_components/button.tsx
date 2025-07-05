import Link from "next/link";

const Button = ({
  link,
  title,
  className,
}: {
  link: string;
  title: string;
  className: string;
}) => {
  return (
    <Link href={link} className="w-fit">
      <button
        className={`flex w-fit items-center justify-center rounded-md py-4 text-white hover:bg-gradient-to-r hover:from-[#ffffff4d] hover:to-[#ffffff4d] ${className} cursor-pointer mt-6`}
      >
        {title}
      </button>
    </Link>
  );
};

export default Button;
