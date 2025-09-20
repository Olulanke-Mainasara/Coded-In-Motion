"use client";

import React from "react";
import { useRef, useEffect } from "react";
import { animate, stagger, useInView } from "framer-motion";
import { splitText } from "motion-plus";

const HeroH1 = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(textRef, { once: true }); // Trigger animation only once when in view

  useEffect(() => {
    if (!isInView || !textRef.current) return;

    // Animation code
    const { chars } = splitText(textRef.current);
    animate(
      chars,
      { opacity: [0, 1] },
      {
        type: "spring",
        duration: 3,
        bounce: 0,
        delay: stagger(0.07, { startDelay: 4.5 }),
      }
    );
  }, [isInView]);

  return (
    <h1
      className="text-5xl md:text-8xl text-balance lg:text-9xl max-w-4xl text-center"
      ref={textRef}
    >
      Every Code Has Its Motion
    </h1>
  );
};

export default HeroH1;
