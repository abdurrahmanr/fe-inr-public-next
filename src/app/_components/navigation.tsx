"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { boldNoRuin, toCapitalize } from "@/utils/utils";
import Link from "next/link";
import AccordionComponent from "./accordion";
import { LinkItem, links } from "./constants";
import Image from "next/image";
import { usePathname } from "next/navigation";

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu.Root
      className="fixed z-20 hidden lg:flex h-[80px] w-full items-center justify-between bg-white px-5 shadow sm:px-10 xl:px-[156px] 2xl:px-[348px]"
      orientation="vertical"
    >
      <div className="w-full">
        <NavigationMenu.List className="relative z-10 flex min-w-max items-center lg:justify-between">
          <NavigationMenu.Item className="w-[80px] h-[80px] relative">
            <Link href="/">
              <Image
                src="/inr.png"
                alt="Logo Inready Workgroup"
                className="mx-auto h-[80px] hover:text-black lg:mx-0"
                fill
              />
            </Link>
          </NavigationMenu.Item>

          {/* Nav Desktop */}
          <div className="items-center gap-4 text-sm flex">
            {links.map((link: LinkItem) => {
              const isActive =
                pathname.includes(link.url) ||
                (pathname === "/" && link.url === "beranda");

              if (link.type === "link") {
                return (
                  <NavigationMenu.Item
                    key={link.url}
                    className="rounded bg-opacity-0 px-4 py-2 transition duration-500 ease-in-out hover:bg-primary/20 capitalize"
                  >
                    <Link
                      className={`${isActive ? "font-semibold" : "text-greyCol"}`}
                      href={link.url === "beranda" ? "/" : `/${link.url}`}
                      replace
                    >
                      {link.url}
                    </Link>
                  </NavigationMenu.Item>
                );
              }

              // Dropdown Nav
              return (
                <NavigationMenu.Item key={link.url}>
                  <NavigationMenu.Trigger
                    className={`group flex items-center rounded px-4 py-2 capitalize data-[state=open]:bg-primary/20 data-[state=open]:font-semibold data-[state=open]:text-black ${pathname.includes(link.url) ? "font-semibold" : "text-greyCol"}`}
                    title={link.url}
                  >
                    <p className={`${boldNoRuin}`} title={link.url}>
                      {link.url}
                    </p>
                    <TriangleDownIcon
                      className="transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                      aria-hidden
                    />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="absolute -ms-[50px] mt-4 flex animate-dropDownOut flex-col rounded-[7px] bg-white shadow  outline-1 outline-[#D1D5DB] data-[state=open]:animate-dropDown overflow-hidden">
                    {link.options.map((option: string) => {
                      const isActive = pathname.includes(option);
                      return (
                        <Link
                          key={option}
                          href={`/${link.url}/${option}`}
                          className={`px-6 py-4 capitalize hover:bg-primary/20 hover:font-semibold ${boldNoRuin} ${isActive && "font-semibold bg-primary/20"}`}
                          replace
                        >
                          {option}
                        </Link>
                      );
                    })}
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              );
            })}
          </div>
        </NavigationMenu.List>
      </div>
    </NavigationMenu.Root>
  );
};

const MobileNav = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="h-[80px] fixed bg-white w-full z-50 lg:hidden flex">
      <div className="flex justify-between px-5 sm:px-10 h-full z-50 relative w-full items-center">
        <Link href="/">
          <img
            src="/inr.png"
            alt="Logo Inready Workgroup"
            className="h-[80px] hover:text-black"
          />
        </Link>
        <Hamburger
          toggled={show}
          toggle={setShow}
          size={28}
          color="#FFC400"
          rounded
        />
      </div>
      <div
        className={`z-0 absolute left-0 flex w-full flex-col gap-4 bg-white text-center shadow transition-all duration-500 lg:hidden ${show ? `opacity-100 top-[75px]` : `opacity-0 -top-[1000px]`}`}
      >
        {links.map((link: LinkItem) => {
          if (link.type === "link") {
            return (
              <li
                key={link.url}
                className="rounded bg-opacity-0 px-4 py-2 transition duration-200 ease-in-out hover:bg-primary hover:bg-opacity-20 list-none"
              >
                <Link
                  href={link.url === "beranda" ? "/" : link.url}
                  title={toCapitalize(link.url)}
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  {toCapitalize(link.url)}
                </Link>
              </li>
            );
          }

          return (
            <AccordionComponent key={link.url} title={link.url} className={``}>
              {link.options.map((option: string) => (
                <Link
                  key={option}
                  href={`${link.url}/${option}`}
                  className={`flex justify-center gap-4 py-2 capitalize`}
                  title={option}
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  {option}
                </Link>
              ))}
            </AccordionComponent>
          );
        })}
      </div>
    </nav>
  );
};

const Nav = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

export default Nav;
