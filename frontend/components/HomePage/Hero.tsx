"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroH1 from "../Animations/HeroH1";

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

const Hero = () => {
  return (
    <section className="relative h-[95dvh] lg:h-screen mt-15 lg:mt-0">
      <div className="h-full relative">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-video-icon lucide-video w-full h-full stroke-[0.3]"
        >
          <motion.path
            variants={icon}
            initial="hidden"
            animate="halfVisible"
            transition={{
              default: { duration: 2, delay: 4.5, ease: "easeInOut" },
            }}
            d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
          />
          <motion.rect
            variants={icon}
            initial="hidden"
            animate="halfVisible"
            transition={{
              default: { duration: 2, delay: 4.5, ease: "easeInOut" },
            }}
            x="2"
            y="6"
            width="14"
            height="12"
            rx="2"
          />
        </motion.svg>
      </div>
      <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center backdrop-brightness-[5%]">
        <div className="absolute top-6 right-4">
          <p className="text-right text-4xl md:text-5xl max-w-lg text-neutral-400">
            Capturing your stories beyond expectations
          </p>
        </div>
        <div>
          <HeroH1 />
        </div>
        <div className="absolute bottom-6 left-4">
          <p className="pr-4 md:max-w-lg text-lg md:text-xl text-neutral-400">
            Every frame holds a story, every moment a heartbeat. Through light,
            motion, and vision, we capture not just what is seen, but what is
            felt—memories that live far beyond the screen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
