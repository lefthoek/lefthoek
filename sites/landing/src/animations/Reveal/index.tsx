/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { useMotionTemplate, useTransform, motion } from "framer-motion";

const Reveal: FunctionComponent<{ scrollY: any }> = ({ children, scrollY }) => {
  const height = useTransform(scrollY, [0, 600], [100, 0]);
  const y = useTransform(scrollY, [0, 600], [0, -100]);
  const vh = useMotionTemplate`${height}vh`;
  const vy = useMotionTemplate`${y}vh`;
  return (
    <motion.section
      style={{ height: vh }}
      sx={{
        boxShadow: "0 1px 20px rgba(0,0,0,0.7)",
        overflow: "hidden",
        position: "fixed",
        display: "flex",
          zIndex:1,
        top: 0,
        width: "100vw",
      }}
    >
      <motion.section
        style={{ y: vy }}
        sx={{
          position: "absolute",
          top: 0,
          display: "flex",
          height: "100vh",
          left: 0,
          right: 0,
        }}
      >
        {children}
      </motion.section>
    </motion.section>
  );
};

export { Reveal };
