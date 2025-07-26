import React from "react";

import { motion } from "motion/react";
import useTheme from "../hooks/theme";
import Reveal from "./utils/Reveal";
import { PROFILE, SOCIAL } from "../constants/info";
import { IoMdCheckmark } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa";

const HeroLeft: React.FC = () => {
  const { themecls } = useTheme();

  return (
    <motion.div className="flex flex-col gap-2 md:gap-3 lg:w-1/2 lg:gap-6">
      <h1 className="h1 flex flex-wrap gap-4">
        <span className="text-nowrap">👋 Hi, I'm</span>
        <Reveal className="border-primary inline-block border-b-4 pb-2">
          Salman
        </Reveal>
      </h1>
      <p className="my-3 text-lg">
        I'm a full-stack developer skilled in React, Node.js, Typescript,
        Express and MongoDB. I'm passionate about building real-world
        applications that are scalable and efficient.
      </p>

      <div className="bg-theme-text/5 flex w-fit items-center gap-3 rounded-sm px-3 py-1.5">
        <div
          className="bg-primary size-2.5 animate-pulse rounded-full"
          //   style={{
          //     animationDuration: "750ms",
          //   }}
        ></div>
        Open To Work
      </div>

      <div className="mt-4 flex flex-col items-start justify-center gap-4 sm:flex-row lg:self-start">
        <a
          href="SalmanKhanResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-primary hover:outline-primary cursor-pointer rounded-sm px-3 py-1.5 uppercase hover:bg-transparent hover:outline md:px-5 md:py-2.5 ${themecls === "light" ? "text-black" : "text-white"}`}
        >
          Download Resume
        </a>
        {/* <Reveal color="accent"> */}
        <a
          href={SOCIAL.filter((s) => s.name === "Github")[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent border-accent hover:bg-accent hover:text-theme-text flex items-center justify-center gap-2 rounded-sm border px-3 py-1.5 uppercase md:px-5 md:py-2.5"
        >
          <span>View Github</span>
          {SOCIAL.filter((s) => s.name === "Github")[0].icon}
        </a>
        {/* </Reveal> */}
      </div>
    </motion.div>
  );
};

const HeroRight: React.FC = () => {
  const [copy, setCopy] = React.useState<"idle" | "copied" | "failed">("idle");

  const handleCopy = () => {
    try {
      navigator.clipboard
        .writeText(PROFILE.EMAIL)
        .then(() => {
          setCopy("copied");
          setTimeout(() => setCopy("idle"), 3000);
        })
        .catch(() => {
          setCopy("failed");
          setTimeout(() => setCopy("idle"), 3000);
        });
    } catch (error) {
      setCopy("failed");
      setTimeout(() => setCopy("idle"), 3000);
    }
  };

  return (
    <motion.div className="flex flex-col items-center gap-2 md:gap-4 lg:w-1/2 lg:gap-6">
      <img
        className="h-64 w-64 rounded-full object-cover object-center lg:h-96 lg:w-96"
        src={PROFILE.PIC}
        alt="Profile Image"
      />
      <Reveal>
        <button
          onClick={handleCopy}
          className="bg-theme-text/5 flex items-center justify-center gap-2 rounded-md px-3 py-1.5"
        >
          {copy === "failed" ? (
            <span className="text-red-500">Couldn't copy email</span>
          ) : copy === "copied" ? (
            <span className="text-theme-text/70 text-sm">
              Copied to clipboard
            </span>
          ) : (
            <span className="text-theme-text text-xl font-medium">
              {PROFILE.EMAIL}
            </span>
          )}
          {copy === "copied" ? (
            <IoMdCheckmark />
          ) : (
            <FaRegCopy className="text-theme-text/40" />
          )}
        </button>
      </Reveal>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <div className="flex min-h-screen flex-col-reverse items-center justify-center gap-4 md:gap-8 lg:flex-row">
      <HeroLeft />
      {/* <HeroRight /> */}
    </div>
  );
};

export default Hero;
