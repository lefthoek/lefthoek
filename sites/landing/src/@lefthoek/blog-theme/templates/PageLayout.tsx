/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, SxStyleProp } from "theme-ui";
import { Container } from "../../../components";
import { FooterSection } from "../../../sections";
import { Base } from "@lefthoek/layouts";
// @ts-ignore
import content from "../../../pages/content.yaml";

const footerContainerStyles: SxStyleProp = {
  position: "fixed",
  height: ["9rem", "12rem"],
  bottom: 0,
  left: 0,
  right: 0,
};

const contentStyles: SxStyleProp = {
  mb: ["9rem", "12rem"],
  bg: "muted",
  boxShadow: "0 0px 20px rgba(0,0,0,0.7)",
  zIndex: 1,
};

const PageLayout: FunctionComponent = ({ children }: any) => {
  return (
    <Container siteMeta={content.siteMeta}>
      <Base sx={contentStyles}>{children}</Base>
      <Box sx={footerContainerStyles}>
        <FooterSection />
      </Box>
    </Container>
  );
};

export default PageLayout;
