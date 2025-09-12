"use client";

import Image from "next/image";
import React from "react";
import Logo from "@/public/CIM-logo.jpg";
import Link from "next/link";

const Nav = () => {
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

  return (
    <nav className="fixed top-0 left-0 w-full flex gap-10 z-40 pr-10">
      <Image src={Logo} alt="Logo" className="w-24 h-20" />
      <header className="flex items-center gap-10 text-lg">
        <Link
          href="/"
          className="xl:text-neutral-400 hover:text-white transition-colors"
        >
          Home
        </Link>
        <Link
          href="/pricing"
          className="xl:text-neutral-400 hover:text-white transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="/contact"
          className="xl:text-neutral-400 hover:text-white transition-colors"
        >
          Contact
        </Link>
      </header>
    </nav>
  );
};

export default Nav;
