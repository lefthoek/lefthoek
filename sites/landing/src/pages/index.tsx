/** @jsx jsx */
import { FunctionComponent } from "react";
import { Logo } from "@lefthoek/atoms";
import { jsx, Box } from "theme-ui";

const LandingPage: FunctionComponent = () => (
  <Box
    sx={{
      display: "flex",
      bg: "primary",
      color: "muted",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Logo>Lefthoek</Logo>
    <h2>Cutting Corners as a Service</h2>
  </Box>
);

export default LandingPage;
