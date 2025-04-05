import React from "react";
import logo from "../assets/logonobg.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="flex justify-between items-center mb-3 p-1 sm:mb-20 sm:p-6">
      <div className="flex flex-shrink-0 items-center w-3 h-3 sm:w-5 mt-4  sm:ml-10 sm:mt-7 sm:h-5">
        <img src={logo} alt="logo" />
      </div>
      <div className="mt-4 sm:mt-7 flex gap-2 sm:gap-4 justify-center items-center text-2xl sm:text-3xl">
        <a
          href="https://www.linkedin.com/in/jaykant-demgunde/"
          target="_blank"
          className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300 "
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Jaykant07"
          target="_blank"
          className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300 "
        >
          <FaGithub />
        </a>
        {/* <FaInstagram />
        <FaSquareXTwitter /> */}
      </div>
    </nav>
  );
}

export default Navbar;
