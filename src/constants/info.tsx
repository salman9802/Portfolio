import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

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
  PIC: "/L1-rounded.svg",
  EMAIL: "sallu123xx@gmail.com",
};

export const TIMELINE = {
  EXPERIENCE: [
    {
      place: "PeakProSys",
      role: "MERN Stack intern",
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
    url: "https://www.linkedin.com/in/username",
    icon: <FaLinkedin className="size-5 text-[#0A66C2]" />,
  },
  {
    name: "Telegram",
    url: "https://t.me/Storm_Fortress",
    icon: <FaTelegramPlane className="size-5 text-[#0088CC]" />,
  },
];
