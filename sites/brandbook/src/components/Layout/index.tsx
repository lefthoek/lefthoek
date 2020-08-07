/** @jsx jsx */
import { jsx, Box, useThemeUI } from "theme-ui";
import { motion } from "framer-motion";
import { Fragment, FunctionComponent, useState } from "react";
// todo: aliases
// @ts-ignore
import { useMenus } from "hooks";
import { Global } from "@emotion/core";
import { Sidebar } from "../Sidebar";
import {
  innerWrapperStyles,
  outerWrapperStyles,
  menuButtonStyles,
  sidebarContainerStyles,
} from "./styles";

const variants = {
  hidden: { transform: "translate(-100%)" },
  visible: { transform: "translate(0%)" },
};

const Layout: FunctionComponent = ({ children }) => {
  const menus = useMenus();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { theme } = useThemeUI();
  return (
    <Fragment>
      <Global styles={{ body: { margin: 0 } }} />
      <Box sx={outerWrapperStyles}>
        <motion.div
          sx={sidebarContainerStyles}
          animate={isSidebarOpen ? "visible" : "hidden"}
          transition={{ damping: 0 }}
          variants={variants}
        >
          <Sidebar menus={menus} />
        </motion.div>
        <Box sx={innerWrapperStyles}>
          <button
            sx={menuButtonStyles}
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "Close" : "Open"} Sidebar
          </button>
          {children}
        </Box>
      </Box>
    </Fragment>
  );
};

export { Layout };
