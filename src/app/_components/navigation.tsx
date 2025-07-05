"use client";
import { motion, AnimatePresence } from "motion/react";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { boldNoRuin, toCapitalize } from "@/utils/utils";
import Link from "next/link";
import AccordionComponent from "./accordion";
import { LinkItem, links } from "./constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

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
  const pathname = usePathname();

  useEffect(() => {
    if (show) {
      // Lock scroll
      document.body.classList.add("overflow-hidden");
    } else {
      // Unlock scroll
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up on unmount
    return () => document.body.classList.remove("overflow-hidden");
  }, [show]);

  const linkVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: any) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1, // stagger each link by 0.1s
        duration: 0.3,
        ease: "easeOut",
      },
    }),
    exit: { opacity: 0, x: 50, transition: { duration: 0.2 } },
  };
  return (
    <nav className="h-[80px] fixed bg-white w-full z-50 lg:hidden flex shadow">
      <div className="flex justify-between px-5 sm:px-10 h-full z-50 relative w-full items-center">
        <div className="w-[80px] relative h-[80px]">
          <Link href="/">
            <Image
              src="/inr.png"
              alt="Logo Inready Workgroup"
              className="mx-auto h-[80px] hover:text-black lg:mx-0 w-10"
              fill
            />
          </Link>
        </div>
        <Hamburger
          toggled={show}
          toggle={setShow}
          size={28}
          color="#FFC400"
          rounded
        />
      </div>
      <div
        className={`h-[calc(100vh_-_80px)] justify-center z-0 absolute left-0 flex w-full flex-col gap-6 bg-white text-left shadow transition-all duration-500 lg:hidden ${show ? `opacity-100 top-[75px] flex` : `opacity-0 top-[70px] hidden`}`}
      >
        <AnimatePresence>
          {links.map((link: LinkItem, i) => {
            const isActive =
              pathname.includes(link.url) ||
              (pathname === "/" && link.url === "beranda");

            if (link.type === "link") {
              return (
                <li
                  key={link.url}
                  className={cn(
                    "rounded bg-opacity-0 px-4 py-2 transition duration-200 ease-in-out hover:bg-primary hover:bg-opacity-20 list-none font-semibold text-4xl text-greyCol",
                    isActive && "underline decoration-primary text-secondary",
                  )}
                >
                  <motion.div
                    // key={link.name}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    // variants={linkVariants}
                  >
                    <Link
                      href={link.url === "beranda" ? "/" : `/${link.url}`}
                      title={toCapitalize(link.url)}
                      replace
                      onClick={() => {
                        setShow(!show);
                      }}
                    >
                      {toCapitalize(link.url)}
                      {/* <WordsPullUp text={toCapitalize(link.url)} /> */}
                    </Link>
                  </motion.div>
                </li>
              );
            }

            return (
              <AccordionComponent
                key={link.url}
                title={link.url}
                className={`text-4xl font-semibold text-left pl-4`}
              >
                {link.options.map((option: string) => (
                  <Link
                    key={option}
                    href={`/${link.url}/${option}`}
                    className={`flex justify-center gap-4 py-2 capitalize`}
                    replace
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
        </AnimatePresence>
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
