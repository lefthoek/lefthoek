/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { useMotionTemplate, useTransform, motion } from "framer-motion";
import { outerWrapperStyles, innerWrapperStyles } from "./styles";

const Reveal: FunctionComponent<{ scrollY: any }> = ({ children, scrollY }) => {
  const height = useTransform(scrollY, [0, 600], [100, 0]);
  const y = useTransform(scrollY, [0, 600], [0, -100]);
  const vh = useMotionTemplate`${height}vh`;
  const vy = useMotionTemplate`${y}vh`;
  return (
    <motion.div style={{ height: vh }} sx={outerWrapperStyles}>
      <motion.div style={{ y: vy }} sx={innerWrapperStyles}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export { Reveal };
