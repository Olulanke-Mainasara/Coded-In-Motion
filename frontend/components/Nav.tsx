"use client";

import Image from "next/image";
import React from "react";
import Logo from "@/public/CIM-logo.jpg";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  // Add a blur background to the nav when the user scrolls
  React.useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (nav) {
        nav.classList.toggle("backdrop-blur-lg", window.scrollY > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (pathname.startsWith("/studio")) {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex gap-10 z-40 pr-4 backdrop-blur-lg`}
    >
      <Link href="/">
        <Image src={Logo} alt="Logo" className="w-24 h-20" />
      </Link>
      <header className="flex items-center gap-10 text-lg">
        <Link
          href="/"
          className="xl:text-neutral-400 hover:text-white transition-colors"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="xl:text-neutral-400 hover:text-white transition-colors"
        >
          Who we are
        </Link>
      </header>
    </nav>
  );
};

export default Nav;
