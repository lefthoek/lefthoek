/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
//@ts-ignore
import { useResponsiveValue } from "@theme-ui/match-media";
import { motion, MotionValue, useTransform } from "framer-motion";

const variants = {
  initial: ({ range }: { range: number }) => ({ x: range }),
  enter: ({ offset }: { offset: number }) => ({ x: offset }),
};

const Slide: FunctionComponent<{
  direction: number;
  offset: number;
  percentageVisible: MotionValue;
}> = ({ direction, offset, children, percentageVisible }) => {
  const multiplier = useResponsiveValue([-100, 500]);
  const range = offset + direction * multiplier;
  const x = useTransform(percentageVisible, [100, 0], [offset, range]);
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      custom={{ direction, offset, range }}
      style={{ x }}
    >
      {children}
    </motion.div>
  );
};

export { Slide };
