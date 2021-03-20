import {SxStyleProp} from "theme-ui";

const outerWrapper: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  alignItems: ["center", "center", "center", "center"],
  justifyContent: ["center", "center"],
  color: "text",
  px: [6, 8],
  py: [8],
  h1: {
    textAlign: ["center", "center"],
    mb: [6, 6, 7, 7],
  },
  p: {
    maxWidth: "25rem",
    lineHeight: ["25px", "28px"],
    my: 0,
    textAlign: ["center", "center"],
  },
  ul: {},
  img: {
    maxHeight: "70vw",
    width: "auto",
    position: "relative",
    left: 0,
    right: 0,
    mt: [0],
    zIndex: 1,
  },
};

export {outerWrapper};
