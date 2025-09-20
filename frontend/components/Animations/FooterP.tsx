"use client";

import React from "react";
import { useRef, useEffect } from "react";
import { animate, stagger, useInView } from "framer-motion";
import { splitText } from "motion-plus";

const FooterP = () => {
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
    <p
      className="text-[50px] md:text-[58px] lg:text-7xl xl:text-9xl"
      ref={textRef}
    >
      Coded In Motion
    </p>
  );
};

export default FooterP;
