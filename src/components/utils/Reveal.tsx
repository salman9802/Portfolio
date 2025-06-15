import React from "react";

import { motion, useInView, useAnimation } from "motion/react";

const Reveal: React.FC<
  React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> & {
    width?: "fit-content" | "100%";
    color?: "primary" | "accent";
  }
> = ({ className, children, width = "fit-content", color = "primary" }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      className={className}
      ref={ref}
      style={{ position: "relative", width, overflow: "hidden" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 100, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: `var(--color-${color})`,
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
};

export default Reveal;
