/** @jsx jsx */
import { motion } from "framer-motion";
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";

const variants = {
  collapsed: { transform: "translate(-75%)" },
  open: { transform: "translate(0%)" },
};

export const SlideOpen: FunctionComponent<{
  className?: string;
  onClick: () => void;
  isSidebarOpen: boolean;
}> = ({ className, children, onClick, isSidebarOpen }) => {
  return (
    <motion.div
      onClick={onClick}
      className={className}
      animate={isSidebarOpen ? "open" : "collapsed"}
      transition={{ damping: 0 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
