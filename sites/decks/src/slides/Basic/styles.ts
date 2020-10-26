import { SxStyleProp } from "theme-ui";

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
  ul: {
    display: "flex",
    flexDirection: ["column", "column", "row"],
    width: "100%",
    justifyContent: ["center", "center", "space-around"],
    alignItems: ["center", "center", "center"],
    my: 4,
    listStyle: "none",
    ml: 0,
    pl: 0,
    "li > p": {
      textAlign: "center",
      mb: 2,
    },
    "li > p > strong": {
      color: "secondary",
      fontFamily: "heading",
      fontSize: ["28px", "32px"],
      lineHeight: ["30px", "34px"],
      fontWeight: 900,
      fontStyle: "super-italic",
    },
  },
};

export { outerWrapper };
