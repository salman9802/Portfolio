import React from "react";
import Reveal from "./utils/Reveal";

const AboutMe = () => {
  return (
    <div className="mx-auto flex min-h-[80vh] flex-col gap-8 lg:w-1/2">
      <h1 className="h1">
        <Reveal className="border-primary border-b-4 pb-2">About Me</Reveal>
      </h1>
      <Reveal className="mb-3 lg:text-xl">
        I recently built Skillswap, a full-stack application where users can
        exchange skills with each other.{" "}
        <strong className="">
          It provides real-time chatting using Socket.IO, responsive UIs in
          React with Tailwind CSS, JWT-based authentication with access &
          refresh tokens for secure session management and TypeScript used
          throughout for strict type safety and maintainability.
        </strong>
      </Reveal>
      <Reveal className="lg:text-xl">
        During my internship at Peakprosys, I built a dental clinic management
        system that improved appointment handling and patient management. I'm
        now looking for opportunities where I can work on scalable, real-world
        applications and grow in a collaborative environment.
      </Reveal>
    </div>
  );
};

export default AboutMe;
