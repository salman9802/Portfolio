import { TIMELINE } from "../constants/info";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <motion.div
      initial={{
        y: "20%",
        opacity: 0,
      }}
      whileInView={{
        y: "0%",
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      className="mt-20 flex min-h-screen flex-col gap-8 sm:mt-0"
    >
      <h1 className="h1">
        <span className="text-primary">Education</span> +{" "}
        <span className="text-accent">Experience</span>
      </h1>
      <div className="mx-auto my-8 flex flex-col gap-4 md:w-3/4">
        {/* Experience */}
        <div className="border-l-accent bg-theme-text/5 flex flex-col gap-4 border-l-2 p-4 sm:flex-row lg:gap-8 lg:p-6">
          <span className="text-accent text-lg md:text-xl lg:text-2xl">
            Experience
          </span>
          <div className="flex grow flex-col gap-2">
            {TIMELINE.EXPERIENCE.map((exp, i) => (
              <div
                key={i}
                className="border-l-accent bg-theme-text/5 flex grow items-center justify-between gap-2 border-l p-2 lg:p-4"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-semibold md:text-xl">
                    {exp.place}
                  </span>
                  <span className="text-theme-text/70 text-sm md:text-base">
                    {exp.role}
                  </span>
                </div>
                <div className="text-xs font-semibold sm:text-sm md:text-base">
                  {exp.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Education */}
        <div className="border-l-primary bg-theme-text/5 flex flex-col gap-4 border-l-2 p-4 sm:flex-row lg:gap-8 lg:p-6">
          <span className="text-primary text-lg md:text-xl lg:text-2xl">
            Education
          </span>
          <div className="flex grow flex-col gap-2">
            {TIMELINE.EDUCATION.map((exp, i) => (
              <div
                key={i}
                className="border-l-primary bg-theme-text/5 flex items-center justify-between gap-2 border-l p-2 lg:p-4"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-semibold md:text-xl">
                    {exp.place}
                  </span>
                  <span className="text-theme-text/70 text-sm md:text-base">
                    {exp.type}
                  </span>
                </div>
                <div className="text-xs font-semibold text-nowrap sm:text-sm md:text-base">
                  {exp.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
