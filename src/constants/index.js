import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.jpg";

export const HERO_CONTENT = `I am a passionate Full Stack Developer with a strong focus on building scalable and secure web applications. With expertise in JavaScript, React, and Next.js on the front end, and Node.js, MySQL, and MongoDB on the back end, I thrive on creating seamless and efficient user experiences.
Beyond web development, I’ve built browser extensions like a customizable clock for Chrome and a password manager with encryption functionality, showcasing my ability to develop innovative and practical solutions. My goal is to keep refining my skills, optimize performance, and develop tools that enhance productivity and security.`;

export const ABOUT_TEXT = `I am a dedicated Full Stack Developer with a passion for building efficient, scalable, and user-friendly web applications. I have honed my skills in React, Next.js, Node.js, MySQL, and MongoDB, continuously pushing the boundaries of what’s possible in web development.
My journey started with a deep curiosity about how things work, evolving into a career where I embrace new challenges and technologies. I thrive in collaborative environments, solving complex problems, and delivering high-quality, performance-driven solutions.
Beyond coding, I enjoy exploring emerging technologies, contributing to open-source projects, and developing practical tools like browser extensions that enhance productivity and security.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Mar 2024",
    role: "Full Stack Web Development Intern",
    company: "YHills",
    description: `Developed and maintained MERN stack web applications.Designed responsive web pages with modern UI principles. ntegrated third-party APIs to enhance functionality.`,
    technologies: ["HTML", "CSS", "Javascript", "TailwindCSS", "mongoDB"],
  },
  {
    year: "Oct 2022 - Nov 2022",
    role: "Web Development Intern",
    company: "CodeClause",
    description: `Designed and built a note-taking app with full CRUD functionality. Implemented Markdown support and dark mode for better UX. Utilized React Hooks for state management and performance optimization.`,
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio",
    image: project1,
    description:
      "Welcome to my professional portfolio showcasing my work as a developer. This carefully curated collection demonstrates my technical capabilities, problem-solving approach, and project experience.",
    technologies: [
      "React.js",
      "Framer_Motion",
      "TailwindCSS",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Decentralized Charity Donation System",
    image: project2,
    description:
      "A blockchain-based platform ensuring secure and transparent donations. Implemented smart contracts for Ethereum transactions using Solidity and integrated Web3.js with React for real-time updates.",
    technologies: [
      "Blockchain",
      "Solidity",
      "Ethereum",
      "Web3.js",
      "React.js",
      "Node.js",
    ],
  },
  {
    title: "Password Manager",
    image: project3,
    description:
      "A secure password manager to store, retrieve, and manage user credentials with encryption. Features a clean UI with form validation, smooth animations, and strong error handling.",
    technologies: ["React.js", "TailwindCSS", "JavaScript", "HTML", "CSS"],
  },
  // {
  //   title: "Analog Clock Extension",
  //   image: project3,
  //   description:
  //     "A Chrome extension that replaces the new tab with an elegant analog clock, designed for minimalism with real-time smooth animations.",
  //   technologies: ["HTML", "CSS", "JavaScript", "Chrome Extensions API"],
  // },
  {
    title: "Notes App",
    image: project4,
    description:
      "A full-stack note-taking application with complete CRUD functionality, responsive design, and smart search using MongoDB aggregation queries.",
    technologies: ["React.js", "Express.js", "MongoDB", "Node.js"],
  },
];

export const CONTACT = {
  address: "Pune, Maharashtra",
  phoneNo: "+91 8329981321 ",
  email: "jaykantdemgunde39010@gmail.com",
};
