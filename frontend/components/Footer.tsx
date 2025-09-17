"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { client } from "@/sanity/client";
import Image from "next/image";
import MuxVideo from "./MuxVideo";
import { FOOTER_QUERY, options } from "@/lib/queries";

interface FooterMedia {
  playbackId?: string;
  title?: string;
  alt?: string;
  imageUrl?: string;
}

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "none",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "#424141",
  },
  halfVisible: {
    opacity: 1,
    pathLength: 1,
  },
};

const Footer = () => {
  const pathname = usePathname();
  const [footerMedia, setFooterMedia] = React.useState<FooterMedia | null>(
    null
  );

  React.useEffect(() => {
    const fetchFooterMedia = async () => {
      const footerMedia = await client.fetch<FooterMedia>(
        FOOTER_QUERY,
        {},
        options
      );
      setFooterMedia(footerMedia);
    };
    fetchFooterMedia();
  }, []);

  if (pathname.startsWith("/studio")) {
    return null;
  }

  const { playbackId, title, alt, imageUrl } = footerMedia || {};

  return (
    <footer className="md:h-[50dvh] xl:h-[80dvh] flex flex-col md:flex-row gap-4 p-4 pt-0 mt-60">
      <div className="md:w-2/5 xl:w-[30%] h-[50dvh] md:h-full flex items-end overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={alt || title || "Footer image"}
            width={1200}
            height={800}
            className="rounded-lg shadow-md"
          />
        ) : playbackId ? (
          <MuxVideo playbackId={playbackId} title={title} />
        ) : null}
      </div>
      <div className="flex flex-col gap-4 md:w-3/5 xl:w-[70%]">
        <div className="grow relative">
          <div className="w-full h-full hidden md:flex justify-center items-center">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-clapperboard-icon lucide-clapperboard w-96 h-96 lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] stroke-[0.3]"
            >
              <motion.path
                variants={icon}
                initial="hidden"
                whileInView="halfVisible"
                viewport={{ once: true }}
                transition={{
                  default: { duration: 2, delay: 0.5, ease: "easeInOut" },
                }}
                d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"
              />
              <motion.path
                variants={icon}
                initial="hidden"
                whileInView="halfVisible"
                viewport={{ once: true }}
                transition={{
                  default: { duration: 2, delay: 0.5, ease: "easeInOut" },
                }}
                d="m6.2 5.3 3.1 3.9"
              />
              <motion.path
                variants={icon}
                initial="hidden"
                whileInView="halfVisible"
                viewport={{ once: true }}
                transition={{
                  default: { duration: 2, delay: 0.5, ease: "easeInOut" },
                }}
                d="m12.4 3.4 3.1 4"
              />
              <motion.path
                variants={icon}
                initial="hidden"
                whileInView="halfVisible"
                viewport={{ once: true }}
                transition={{
                  default: { duration: 2, delay: 0.5, ease: "easeInOut" },
                }}
                d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
              />
            </motion.svg>
          </div>

          <div className="md:absolute inset-0 flex flex-col justify-center md:gap-4 backdrop-brightness-[5%]">
            <p className="text-3xl xl:text-5xl text-neutral-400">We are</p>
            <p className="text-[50px] md:text-[58px] lg:text-7xl xl:text-9xl">
              Coded In Motion
            </p>
            <p className="text-3xl xl:text-5xl text-neutral-400 text-right">
              ...making moments unforgettable
            </p>
          </div>
        </div>

        <hr />
        <div className="flex flex-col md:flex-row items-center gap-2 justify-between">
          <div className="flex gap-6">
            <Link
              href={
                "https://www.tiktok.com/@coded.in.motion?_t=ZS-8znigyGKFxY&_r=1"
              }
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Tiktok
            </Link>
            <Link
              href={"https://www.instagram.com/codedinmotion/"}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              +234 810 730 2381
            </Link>
            <Link
              href={"mailto:codedinmotion25@gmail.com"}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Email
            </Link>
          </div>
          <p className="text-neutral-400">&copy; 2025 CodedInMotion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
