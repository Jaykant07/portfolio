import React from "react";
import { motion } from "motion/react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/jaykantProfile.png";
import resumePdf from "../assets/Jaykant_Demgunde_Fullstack_resume.pdf";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ml-4 sm:ml-10 ">
      <div className="flex flex-wrap items-center">
        <div className="w-full sm:w-1/2 ">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl md:text-6xl font-thin tracking-tight lg:mt-13 mt-8"
            >
              Jaykant Demgunde
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl tracking-tight text-transparent mt-4"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl py-4 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              href={resumePdf}
              target="_blank"
              className="relative inline-block mt-2 mb-10 px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700
             after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              View Resume
            </motion.a>
          </div>
        </div>

        <div className="w-full sm:w-1/2 sm:p-8 sm:ml-0 flex items-center justify-center sm:justify-end ">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delaly: 1.5 }}
            className="w-48 h-54 sm:w-56 sm:h-62 rounded-3xl mt-2 sm:mt-6 shadow-lg  p-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  inline-block"
            src={profilePic}
            alt="Jaykant Demgunde"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
