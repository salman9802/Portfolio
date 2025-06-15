import React from "react";

import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import ExpressIcon from "../components/icons/ExpressIcon";
import ReactIcon from "../components/icons/ReactIcon";
import NodejsIcon from "../components/icons/NodejsIcon";
import PrismaIcon from "../components/icons/PrismaIcon";
import SocketioIcon from "../components/icons/SocketioIcon";
import TypescriptIcon from "../components/icons/TypescriptIcon";
import TailwindcssIcon from "../components/icons/TailwindcssIcon";
import ReduxtoolkitIcon from "../components/icons/ReduxtoolkitIcon";
import ZodIcon from "../components/icons/ZodIcon";

export const PROFILE = {
  NAME: "Salman",
  PROFESSIONS: [
    "a Software Developer",
    "a Tech geek",
    "a Gamer",
    "a Critical Thinker",
    "a Clean Coder",
  ],
  DESCRIPTION: [
    "I'm a passionate MERN stack developer with a focus on creating dynamic, user-friendly web applications. With expertise in MongoDB, Express.js, React, and Node.js, I build scalable, high-performance solutions tailored to meet client needs. My work emphasizes clean code, responsive design, and seamless user experiences.",
    "From front-end interfaces that engage users to robust back-end systems that handle data efficiently, I combine creativity with technical expertise to deliver full-stack applications that are both functional and intuitive. I take pride in problem-solving and optimizing performance, ensuring that every project not only meets but exceeds expectations.",
  ],
  PIC: "L1-rounded.svg",
  EMAIL: "khansalmanayaz@gmail.com",
};

export const TIMELINE = {
  EXPERIENCE: [
    {
      place: "PeakProSys",
      role: "MERN Stack Intern",
      duration: "Dec 2024 - Mar 2025",
    },
  ],
  EDUCATION: [
    {
      place: "Poona College",
      type: "MSc (Computer Science)",
      duration: "2023 - Current",
    },
    {
      place: "Abeda Inamdar Senior College",
      type: "BSc (Computer Science)",
      duration: "2020 - 2023",
    },
    {
      place: "Rosary Junior College",
      type: "HSC (PCMB)",
      duration: "2018 - 2020",
    },
    {
      place: "Rosary School",
      type: "SSC",
      duration: "2018",
    },
  ],
};

export const SOCIAL = [
  {
    name: "Email",
    url: `mailto:${PROFILE.EMAIL}`,
    icon: <MdAlternateEmail className="text-accent size-5" />,
  },
  {
    name: "Discord",
    url: "https://discord.com/users/deathcome_",
    icon: <FaDiscord className="size-5 text-[#7289DA]" />,
  },
  {
    name: "Github",
    url: "https://github.com/salman9802/",
    icon: <FaGithub className="size-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/salman9802",
    icon: <FaLinkedin className="size-5 text-[#0A66C2]" />,
  },
  {
    name: "Telegram",
    url: "https://t.me/Storm_Fortress",
    icon: <FaTelegramPlane className="size-5 text-[#0088CC]" />,
  },
];

export const YEAR = "2025";

// Icons from: https://devicon.dev/

export const PROJECTS: {
  name: string;
  image: string;
  description: React.ReactNode[];
  technologies: React.ReactNode[];
  githubLink?: string;
  demoLink?: string;
}[] = [
  {
    name: "Skillswap - Trade skills, Build future",
    image: "skillswap-preview-squared.png",
    description: [
      <span>
        A platform where users can offer skills they know (like guitar, coding,
        painting, yoga) and learn skills from others in exchange — no money
        involved, just time.
      </span>,
      <span>
        <b>Features:</b> Typescript (type safety), Filter and search by skills
        and availability, Booking system with calendar integration, Chat system
        (socket.io), Rating system, Dynamic user profiles and secure
        authentication with JWT (access and refresh tokens) etc.
      </span>,
    ],
    technologies: [
      <div className="flex items-center gap-3 rounded-sm bg-neutral-100/10 px-3 py-1.5 font-semibold">
        <ExpressIcon className="size-5" />
        express
      </div>,
      <div className="flex items-center gap-3 rounded-sm bg-neutral-100/10 px-3 py-1.5 font-semibold">
        {/* <img
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
          className="size-5"
        /> */}
        <ReactIcon className="size-5" />
        React
      </div>,
      <div className="flex items-center gap-3 rounded-sm bg-neutral-100/10 px-3 py-1.5 font-semibold">
        {/* <img
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
          className="size-5"
        /> */}
        <NodejsIcon className="size-5" />
        Node.js
      </div>,
      <div className="flex items-center gap-3 rounded-sm bg-neutral-100/10 px-3 py-1.5 font-semibold">
        {/* <img
          src="https://avatars.githubusercontent.com/u/17219288?s=40&v=4"
          className="size-5"
        /> */}
        <PrismaIcon className="size-5 invert-70" />
        Prisma
      </div>,
      <div className="flex items-center gap-3 rounded-sm bg-neutral-100/10 px-3 py-1.5 font-semibold">
        {/* <img src="https://socket.io/images/logo.svg" className="size-5" /> */}
        <SocketioIcon className="size-5" />
        Socket.IO
      </div>,
      <div className="flex items-center gap-3 rounded-sm bg-neutral-100/10 px-3 py-1.5 font-semibold">
        {/* <img
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
          className="size-5"
          /> */}
        <TypescriptIcon className="size-5" />
        Typescript
      </div>,
      <div className="flex items-center gap-3 rounded-sm bg-neutral-100/10 px-3 py-1.5 font-semibold">
        {/* <img
          src="https://avatars.githubusercontent.com/u/67109815"
          className="size-5"
        /> */}
        <TailwindcssIcon className="size-5" />
        Tailwind CSS
      </div>,
      <div className="flex items-center gap-3 rounded-sm bg-neutral-100/10 px-3 py-1.5 font-semibold">
        {/* <img
          src="https://avatars.githubusercontent.com/u/13142323"
          className="size-5"
        /> */}
        <ReduxtoolkitIcon className="size-5" />
        Redux + Redux Toolkit
      </div>,
      <div className="flex items-center gap-3 rounded-sm bg-neutral-100/10 px-3 py-1.5 font-semibold">
        <ZodIcon className="size-5" />
        Zod
      </div>,

      // <div className="rounded-sm bg-blue-100 px-3 py-1.5 font-semibold text-blue-700">
      //   Express
      // </div>,
      // <div className="rounded-sm bg-neutral-100/10 px-3 py-1.5 font-semibold text-white">
      //   Tech #2
      // </div>,
    ],
    githubLink: "",
    demoLink: "",
  },
  // {
  //   name: "Some project name",
  //   image:
  //     "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   description: [
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum excepturi dolores quae minima. Nihil, iste? Quam, obcaecati numquam ad eos iure ab nostrum atque impedit.",
  //   ],
  //   technologies: [
  //     <div className="rounded-sm bg-neutral-100/10 px-3 py-1.5 font-semibold text-white">
  //       Tech #1
  //     </div>,
  //     <div className="rounded-sm bg-neutral-100/10 px-3 py-1.5 font-semibold text-white">
  //       Tech #2
  //     </div>,
  //     <div className="rounded-sm bg-neutral-100/10 px-3 py-1.5 font-semibold text-white">
  //       Tech #3
  //     </div>,
  //   ],
  //   githubLink: "",
  //   demoLink: "",
  // },
];
