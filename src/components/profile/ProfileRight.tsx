import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { motion } from "motion/react";

import { PROFILE } from "../../constants/info";
import Reveal from "../utils/Reveal";

const ProfileRight = () => {
  const [copy, setCopy] = useState<"idle" | "copied" | "failed">("idle");

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
    <motion.div
      // initial={{
      //   x: "20%",
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
      className="flex flex-col items-center gap-2 md:gap-4 lg:w-1/2 lg:gap-6"
    >
      <img
        className="h-64 w-64 rounded-full object-cover object-center lg:h-96 lg:w-96"
        src={PROFILE.PIC}
        alt="Profile Image"
      />
      <Reveal>
        <button
          onClick={handleCopy}
          className="border-theme-text/10 borderf flex items-center justify-center gap-2 px-3 py-1.5"
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

export default ProfileRight;
