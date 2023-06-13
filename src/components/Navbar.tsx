"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navList = [
  { title: "About Me", path: "/about" },
  { title: "Career", path: "/career" },
  { title: "Skills", path: "/skills" },
  { title: "Projects", path: "/projects" }
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
      className={`w-full flex justify-between items-center h-16 px-60 ${
        scrollPosition > 0 ? "border-b" : null
      }`}
    >
      <h1 className="text-xl font-bold">{"MJ's Portfolio"}</h1>
      <nav className="flex gap-8 text-neutral-700">
        {navList.map((list) => (
          <Link key={list.path} href={list.path}>
            {list.title}
          </Link>
        ))}
      </nav>
    </section>
  );
}
