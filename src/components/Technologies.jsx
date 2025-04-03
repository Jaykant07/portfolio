import React from "react";
import { motion } from "motion/react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg"; // C++
import { SiC } from "react-icons/si"; // C
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import { animate } from "motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-2xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiC className="text-5xl sm:text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <CgCPlusPlus className="text-5xl sm:text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-5xl sm:text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-5xl sm:text-7xl text-teal-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-5xl sm:text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-5xl sm:text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.9)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-5xl sm:text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
