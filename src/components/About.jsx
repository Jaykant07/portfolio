import React from "react";
import { motion } from "motion/react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

function About() {
  return (
    <div className="border-b border-neutral-800 pb-20">
      <h1 className="my-20 text-center text-2xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 p-4 lg:p-8"
        >
          <div className="flex items-center justify-center ">
            <img
              className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-full max-w-[400px] rounded-3xl object-cover"
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
