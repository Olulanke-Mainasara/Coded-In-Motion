"use client";

import React from "react";
import { useRef, useEffect } from "react";
import { animate, stagger, useInView } from "framer-motion";
import { splitText } from "motion-plus";

const AffirmationH2 = () => {
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
        delay: stagger(0.03),
      }
    );
  }, [isInView]);

  return (
    <h2
      className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-balance text-center"
      ref={textRef}
    >
      Our work blends creativity and precision
    </h2>
  );
};

export default AffirmationH2;
