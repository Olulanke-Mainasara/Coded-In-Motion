"use client";

import React from "react";
import { useRef, useEffect } from "react";
import { animate, stagger, useInView } from "framer-motion";
import { splitText } from "motion-plus";

const WhoWeAreH1 = ({ text }: { text: string }) => {
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
        delay: stagger(0.07),
      }
    );
  }, [isInView]);

  return (
    <h1 className="text-4xl md:text-6xl xl:text-8xl font-bold" ref={textRef}>
      {text}
    </h1>
  );
};

export default WhoWeAreH1;
