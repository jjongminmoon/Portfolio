"use client";

import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { responsive } from "./ui/responsive";

const navList = [
  { title: "About Me", path: "a" },
  { title: "Career", path: "b" },
  { title: "Skills", path: "c" },
  { title: "Repository", path: "d" },
  { title: "Projects", path: "e" }
];

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <>
      <section
        className={`relative px-60 w-full flex justify-between items-center h-16 sm:justify-center ${
          scrollPosition > 0 ? "bg-white shadow-md sm:shadow-none" : "bg-transparent"
        } ${responsive}`}
      >
        <h1 className="text-xl font-bold">{"MJ's Portfolio"}</h1>
        <nav className="flex gap-8 text-neutral-700 sm:hidden">
          {navList.map((list) => (
            <Link
              className="cursor-pointer"
              key={list.path}
              to={list.path}
              spy={true}
              smooth={true}
              offset={-60}
            >
              {list.title}
            </Link>
          ))}
        </nav>
      </section>
      <nav
        className={`flex justify-center gap-4 text-neutral-700 text-sm md:hidden lg:hidden xl:hidden ${
          scrollPosition > 0 ? "bg-white shadow-md border border-white pb-2" : "bg-transparent"
        }`}
      >
        {navList.map((list) => (
          <Link
            className="cursor-pointer"
            key={list.path}
            to={list.path}
            spy={true}
            smooth={true}
            offset={-60}
          >
            {list.title}
          </Link>
        ))}
      </nav>
    </>
  );
}
