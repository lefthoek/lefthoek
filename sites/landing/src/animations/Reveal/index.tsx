/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import {
  useMotionTemplate,
  useTransform,
  motion,
  MotionValue,
} from "framer-motion";
import { outerWrapperStyles, innerWrapperStyles } from "./styles";

const Reveal: FunctionComponent<{ percentageVisible: MotionValue }> = ({
  children,
  percentageVisible,
}) => {
  const y = useTransform(percentageVisible, [100, 0], [0, -100]);
  const vh = useMotionTemplate`${percentageVisible}vh`;
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
