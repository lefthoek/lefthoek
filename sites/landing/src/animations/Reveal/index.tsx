/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { useMotionTemplate, useTransform, motion } from "framer-motion";

const Reveal: FunctionComponent<{ scrollY: any }> = ({ children, scrollY }) => {
  const height = useTransform(scrollY, [0, 600], [100, 0]);
  const vh = useMotionTemplate`${height}vh`;
  return (
    <motion.section
      style={{ height: vh }}
      sx={{
        overflow: "hidden",
        position: "fixed",
        display: "flex",
        top: 0,
        width: "100vw",
      }}
    >
      {children}
    </motion.section>
  );
};

export { Reveal };
