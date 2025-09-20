"use client";

import React from "react";
import { useRef, useEffect } from "react";
import { animate, stagger, useInView } from "framer-motion";
import { splitText } from "motion-plus";

const ServicesH2 = () => {
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
    <h2 className="text-6xl lg:text-8xl xl:text-9xl w-full" ref={textRef}>
      Services
    </h2>
  );
};

export default ServicesH2;
