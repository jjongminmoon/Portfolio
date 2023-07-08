"use client";

import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const navList = [
  { title: "About Me", path: "b" },
  { title: "Career", path: "c" },
  { title: "Skills", path: "d" },
  { title: "Repository", path: "e" },
  { title: "Projects", path: "f" }
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
      className={`relative px-60 w-full flex justify-between items-center h-16 ${
        scrollPosition > 0 ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Link to="a" spy={true} smooth={true} offset={-60} className="text-xl font-bold">
        <h1>{"MJ's Portfolio"}</h1>
      </Link>
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
