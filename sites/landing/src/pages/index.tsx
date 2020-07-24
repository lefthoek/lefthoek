/** @jsx jsx */
import { FunctionComponent } from "react";
import { Logo } from "@lefthoek/atoms";
import { jsx, Box } from "theme-ui";

//  #61C591
//  #367975
//
//  #583A4F
//
//  #E88083
//  #E8E6D4
const LandingPage: FunctionComponent = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Logo sx={{ px: "2rem", py: "1rem", fontSize: ["4rem", "4rem", "8rem"] }}>
      Lefthoek
    </Logo>
    <h2> Cutting Corners as a Service</h2>
  </Box>
);

export default LandingPage;
