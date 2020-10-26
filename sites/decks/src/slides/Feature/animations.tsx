/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { motion } from "framer-motion";
import { overlayWrapperStyles } from "./styles";

const variants = {
  initial: { opacity: 1 },
  enter: { opacity: 0 },
};

const Fade: FunctionComponent<{ showOverlay: boolean }> = ({
  children,
  showOverlay = false,
}) => {
  return (
    <motion.div
      variants={variants}
      transition={{ delay: 0.5 }}
      initial={showOverlay ? "intial" : "enter"}
      animate="enter"
      sx={overlayWrapperStyles}
    >
      {children}
    </motion.div>
  );
};

export { Fade };
