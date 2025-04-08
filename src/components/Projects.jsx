import React from "react";
import { motion } from "motion/react";
import { PROJECTS } from "../constants";
import { FiExternalLink } from "react-icons/fi";

function Projects() {
  return (
    <div className="border-b border-neutral-800 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-2xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-4 sm:mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:justify-center sm:gap-5"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full sm:w-1/3 flex justify-center"
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded shadow-md"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="flex items-center mb-2 flex-wrap gap-2">
                <h6 className="font-semibold">{project.title}</h6>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-md text-white text-xs sm:text-sm  transition flex items-center gap-1"
                  >
                    <FiExternalLink size={14} />
                  </a>
                )}
              </div>

              <p className="mb-4 text-neutral-400">{project.description}</p>

              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block mr-1 sm:mr-2 mt-2 sm:mt-4 rounded-lg bg-purple-900/20 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-purple-700"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
