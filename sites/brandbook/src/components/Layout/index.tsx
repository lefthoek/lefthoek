/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import { Fragment, FunctionComponent, useState } from "react";
import { useAppState } from "hooks";
// todo: aliases
// @ts-ignore
import { useBreakpointIndex } from "@theme-ui/match-media";
import { Global } from "@emotion/core";
import { Sidebar } from "../Sidebar";
import {
  innerWrapperStyles,
  outerWrapperStyles,
  menuButtonStyles,
  sidebarContainerStyles,
} from "./styles";

const Layout: FunctionComponent = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useAppState();
  return (
    <Fragment>
      <Global styles={{ body: { margin: 0 } }} />
      <Box sx={outerWrapperStyles}>
        <Sidebar isSidebarOpen={isSidebarOpen} sx={sidebarContainerStyles} />
        <Container sx={innerWrapperStyles}>
          <button
            sx={menuButtonStyles}
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "Close" : "Open"} Sidebar
          </button>
          {children}
        </Container>
      </Box>
    </Fragment>
  );
};

export { Layout };
