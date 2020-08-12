/** @jsx jsx */
import { motion } from "framer-motion";
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";

const variants = {
  hidden: { transform: "translate(-100%)" },
  visible: { transform: "translate(0%)" },
};

export const SlideOpen: FunctionComponent<{
  className?: string;
  isSidebarOpen: boolean;
}> = ({ className, children, isSidebarOpen }) => {
  return (
    <motion.div
      className={className}
      animate={isSidebarOpen ? "visible" : "hidden"}
      transition={{ damping: 0 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
