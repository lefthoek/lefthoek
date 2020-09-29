/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};
const Fade: FunctionComponent<{ id: string }> = ({ id, children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={id}
        sx={{ width: "100%" }}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export { Fade };
