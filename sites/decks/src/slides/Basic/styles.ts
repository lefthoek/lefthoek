import { SxStyleProp } from "theme-ui";

const outerWrapper: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  alignItems: ["center", "center", "center", "center"],
  justifyContent: ["center", "center"],
  color: "text",
  px: [6, 8],
  py: [5, 8],
  h1: {
    textAlign: ["center", "center"],
    mb: [5, 6, 6, 9],
  },
  p: {
    lineHeight: ["25px", "28px"],
    textAlign: ["center", "center"],
  },
};

export { outerWrapper };
