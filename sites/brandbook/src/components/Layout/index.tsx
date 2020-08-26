/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import { Fragment, FunctionComponent } from "react";
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
  return (
    <Fragment>
      <Global styles={{ body: { margin: 0 } }} />
      <Box sx={outerWrapperStyles}>
        <Sidebar sx={sidebarContainerStyles} />
        <Container sx={innerWrapperStyles}>{children}</Container>
      </Box>
    </Fragment>
  );
};

export { Layout };
