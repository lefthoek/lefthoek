import {SxStyleProp} from "theme-ui";

const outerWrapper: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  alignItems: ["center", "center", "center", "center"],
  justifyContent: ["center", "center"],
  px: [6, 8],
  py: [8],
  h1: {
    textAlign: ["center", "center"],
    mb: [6, 6, 7, 7],
  },
  blockquote: {
    margin: 0,
    mb: "1rem",
    maxWidth: "40rem",
    p: {
      fontSize: ["34px", "42px"],
      lineHeight: ["36px", "44px"],
    },
  },
  p: {
    color: "primary",
    fontWeight: 400,
    my: 0,
    textAlign: "center",
    width: "100%",
  },
  ul: {},
};

export {outerWrapper};
