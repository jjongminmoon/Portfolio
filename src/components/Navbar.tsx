"use client";

import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { responsive } from "@/app/page";

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
    <section
      className={`px-60 w-full flex justify-between items-center h-16 ${
        scrollPosition > 0 ? "bg-white shadow-md" : "bg-transparent"
      } ${responsive}`}
    >
      <h1 className="text-xl font-bold">{"MJ's Portfolio"}</h1>
      <nav className="flex gap-8 text-neutral-700">
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
  );
}
