/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import { Fragment, FunctionComponent, useState, useEffect } from "react";
import {
  useMotionValue,
  useMotionTemplate,
  animate,
  motion,
  useTransform,
} from "framer-motion";
import { LefthoekPanels } from "@lefthoek/molecules";
// todo: aliases
// @ts-ignore
import { useAppState } from "hooks";
// todo: aliases
// @ts-ignore
import { Global } from "@emotion/core";
import { Sidebar } from "../Sidebar";
import {
  innerWrapperStyles,
  outerWrapperStyles,
  sidebarContainerStyles,
} from "./styles";

const Layout: FunctionComponent = ({ children }) => {
  const { currentDoc } = useAppState();
  const [isCoverVisible] = useState(currentDoc.route === "/");
  const mv = useMotionValue(isCoverVisible ? 100 : 0);
  const invertMV = useTransform(mv, [100, 0], [0, -100]);
  const top = useMotionTemplate`${invertMV}vh`;
  useEffect(() => {
    const controls = animate(mv, 0, {
      delay: 0.5,
    });
    return controls.stop;
  }, []);
  return (
    <Fragment>
      <Global styles={{ body: { margin: 0 } }} />
      <motion.div
        style={{ top }}
        sx={{
          zIndex: 1000,
          position: "fixed",
          left: 0,
          height: "100vh",
          right: 0,
          bottom: 0,
        }}
      >
        <LefthoekPanels percentageVisible={mv} />
      </motion.div>
      <Box sx={outerWrapperStyles}>
        <Sidebar sx={sidebarContainerStyles} />
        <Container sx={innerWrapperStyles}>{children}</Container>
      </Box>
    </Fragment>
  );
};

export { Layout };
