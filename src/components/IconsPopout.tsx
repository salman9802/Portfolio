import React from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import ReactIcon from "./icons/ReactIcon";
import TailwindcssIcon from "./icons/TailwindcssIcon";
import JavascriptIcon from "./icons/JavascriptIcon";
import ExpressIcon from "./icons/ExpressIcon";
import TypescriptIcon from "./icons/TypescriptIcon";
import NodejsIcon from "./icons/NodejsIcon";
import useTheme from "../hooks/theme";

const IconsPopout = () => {
  const icons = React.useRef<Record<string, HTMLDivElement | null>>({});

  const { themecls } = useTheme();

  useGSAP(() => {
    // if (icons.current !== null) {
    Object.keys(icons.current).forEach((k) => {
      const ele = icons.current![k];
      gsap.from(ele, {
        top: "50%",
        left: "50%",

        // won't work since tailwindcss class like rotate-* sets a variable which would later
        // be used in transform. gsap can't know the final value for rotation, hence this doesn't work
        // x: "-50%",
        // y: "-50%",
        // rotation: 0,

        opacity: 0,

        duration: 1.8,
        scrollTrigger: {
          trigger: ele,
          start: "top 80%",
          // toggleActions: "play none none none", // What to do on enter, leave, enterBack, and leaveBack
          toggleActions: "restart pause resume pause",
        },
      });
    });
    // }
  }, []);

  return (
    <div className="absolute inset-x-0 top-0 -z-50 h-screen [--icon-size:3rem] md:[--icon-size:6rem]">
      {/* Right side */}
      <ReactIcon
        ref={(el) => {
          icons.current["react"] = el;
        }}
        className="absolute top-[15%] left-[90%] size-[var(--icon-size)] -rotate-[30deg] animate-bounce opacity-75 lg:opacity-100"
      />
      <TailwindcssIcon
        ref={(el) => {
          icons.current["tailwindcss"] = el;
        }}
        className="absolute top-[40%] left-[85%] size-[var(--icon-size)] scale-70 -rotate-12 animate-bounce opacity-55"
      />
      <JavascriptIcon
        ref={(el) => {
          icons.current["js"] = el;
        }}
        className="absolute top-[65%] left-[90%] size-[var(--icon-size)] -rotate-6 animate-bounce opacity-75 lg:opacity-100"
      />

      {/* Left side */}
      <ExpressIcon
        ref={(el) => {
          icons.current["express"] = el;
        }}
        className={`absolute top-[15%] left-[5%] size-[var(--icon-size)] scale-70 rotate-[30deg] animate-bounce opacity-55 ${themecls === "dark" ? "invert-100" : "invert-0"}`}
      />
      <TypescriptIcon
        ref={(el) => {
          icons.current["ts"] = el;
        }}
        className="absolute top-[40%] left-[7.5%] size-[var(--icon-size)] rotate-12 animate-bounce opacity-75 lg:opacity-100"
      />
      <NodejsIcon
        ref={(el) => {
          icons.current["nodejs"] = el;
        }}
        className="absolute top-[65%] left-[5%] size-[var(--icon-size)] scale-70 rotate-6 animate-bounce opacity-55"
      />
    </div>
  );
};

export default IconsPopout;
