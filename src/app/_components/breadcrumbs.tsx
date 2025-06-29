"use client";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  let currentLink = "";

  if (pathname === "/") return;

  const isInteger = (string: string) => {
    const number = +string;
    return number;
  };

  const bread = pathname
    .split("/")
    .filter((bread) => bread != "")
    .map((bread, index, arr) => {
      currentLink += `/${bread}`;

      return (
        <div
          key={bread}
          className={`flex items-center ${
            index + 1 == arr.length
              ? "text-greyCol"
              : "text-greyCol text-opacity-50"
          } gap-2 text-xs hover:text-opacity-100`}
        >
          <ChevronRightIcon className="h-10 w-4 font-bold" />
          <Link className={`font-medium capitalize`} href={currentLink}>
            {isInteger(bread) ? `Detail ${arr[0]}` : bread}
          </Link>
        </div>
      );
    });

  return (
    <div className="flex items-center gap-2 pt-8">
      <Link
        href="/"
        className="flex items-center gap-4 text-xs font-medium text-greyCol text-opacity-50 hover:text-opacity-100"
      >
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 9.99985L9.293 0.706849C9.6835 0.316467 10.3165 0.316467 10.707 0.706849L20 9.99985H18V17.9998C18 18.5521 17.5523 18.9998 17 18.9998H12V11.9998H8V18.9998H3C2.44772 18.9998 2 18.5521 2 17.9998V9.99985H0Z"
            fill="#FFC400"
          />
        </svg>
        Beranda
      </Link>
      {bread}
    </div>
  );
};

export default Breadcrumb;
