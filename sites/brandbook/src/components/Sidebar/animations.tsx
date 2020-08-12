/** @jsx jsx */
import { motion } from "framer-motion";
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";

const variants = {
  collapsed: { transform: "translate(-80%)" },
  open: { transform: "translate(0%)" },
};

export const SlideOpen: FunctionComponent<{
  className?: string;
  isSidebarOpen: boolean;
}> = ({ className, children, isSidebarOpen }) => {
  return (
    <motion.div
      className={className}
      animate={isSidebarOpen ? "open" : "collapsed"}
      transition={{ damping: 0 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
