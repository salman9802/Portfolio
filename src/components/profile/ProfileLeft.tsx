import { PROFILE, SOCIAL } from "../../constants/info";

import { motion } from "motion/react";
import Reveal from "../utils/Reveal";

const Info = () => {
  return (
    <motion.div
      // initial={{
      //   x: "-20%",
      //   opacity: 0,
      // }}
      // whileInView={{
      //   x: "0%",
      //   opacity: 1,
      //   transition: {
      //     duration: 1,
      //   },
      // }}
      // viewport={{
      //   once: true,
      //   amount: 0.5,
      // }}
      className="flex h-fit flex-col gap-1 text-center md:gap-2 lg:w-1/2 lg:gap-4 lg:text-left"
    >
      <Reveal>
        <h1 className="h1">
          Hello, I'm <span className="text-primary">{PROFILE.NAME}</span>
        </h1>
      </Reveal>
      <Reveal>
        <h2 className="custom-gradient mx-auto w-fit text-xl md:text-2xl lg:mx-0 lg:text-3xl">
          {PROFILE.PROFESSIONS[0]}
        </h2>
      </Reveal>
      <div className="flex flex-col gap-1">
        {PROFILE.DESCRIPTION.map((prof, i) => (
          <Reveal key={i}>
            <p className="mt-1 text-sm md:mt-1.5 lg:mt-4 lg:text-base">
              {prof}
            </p>
          </Reveal>
        ))}
      </div>
      <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row lg:self-start">
        <a
          href="SalmanKhanResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:outline-primary cursor-pointer rounded-sm px-3 py-1.5 text-white hover:bg-transparent hover:outline md:px-5 md:py-2.5"
        >
          <Reveal>Download Resume</Reveal>
        </a>
        <Reveal color="accent">
          <a
            href={SOCIAL.filter((s) => s.name === "Github")[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent border-accent hover:bg-accent hover:text-theme-text flex items-center justify-center gap-2 rounded-sm border px-3 py-1.5 md:px-5 md:py-2.5"
          >
            <span>View Github</span>
            {SOCIAL.filter((s) => s.name === "Github")[0].icon}
          </a>
        </Reveal>
      </div>
    </motion.div>
  );
};

export default Info;
