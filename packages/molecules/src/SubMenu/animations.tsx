/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  open: { opacity: 1, height: "auto" },
  collapsed: { opacity: 0, height: 0 },
};

const transition = { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] };

export const SlideOpen: FunctionComponent<{ isOpen: boolean }> = ({
  isOpen,
  children,
}) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.section
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={variants}
          transition={transition}
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  );
};
