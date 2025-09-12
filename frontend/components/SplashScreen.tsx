"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/public/CIM-logo.jpg";

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        transition: { duration: 0.3, delay: 4.5 },
        transitionEnd: { display: "none" },
      }}
      className="absolute z-50 inset-0 flex items-center justify-center bg-black"
    >
      <div className="relative overflow-hidden h-44 md:h-72">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="flex items-center gap-20 md:gap-28 h-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-8xl md:text-[200px]"
          >
            3
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-8xl md:text-[200px]"
          >
            2
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-8xl md:text-[200px]"
          >
            1
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.315, delay: 2.7, ease: "anticipate" }}
          className="absolute flex h-full top-0 w-full"
        >
          <div className="h-full relative flex items-center justify-center w-full">
            <Image src={Logo} alt="Logo" fill className="object-cover h-full" />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              display: ["none", "block", "none"],
              transition: {
                times: [0, 0.05, 1],
                duration: 0.8,
                delay: 2.4,
              },
            }}
            className="h-full border"
          ></motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
