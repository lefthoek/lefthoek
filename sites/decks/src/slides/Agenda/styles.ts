import {SxStyleProp} from "theme-ui";

const outerWrapperStyles: SxStyleProp = {
  px: [5, 5, 8, 8],
};

const innerWrapperStyles: SxStyleProp = {
  display: "flex",
  maxWidth: "60rem",
  flexDirection: ["column"],
  h1: {
    mb: 0,
  },
  li: {
    listStylePosition: "outside",
    "::marker": {
      fontSize: ["42px", "58px"],
      lineHeight: ["44px", "62px"],
      fontWeight: 900,
      fontStyle: "super-italic",
      fontFamily: "heading",
      color: "secondary",
    },
    "> p": {
      left: "0rem",
    },
  },
  "> ul": {
    m: [0],
    p: [0],
    textIndent: [0],
    listStyleType: [0],
    display: ["flex"],
    flex: 1,
    justifyContent: ["center", "center"],
    alignItems: ["center", "center"],
    flexDirection: ["column"],
    li: {
      mb: [3],
    },
  },
};

export {innerWrapperStyles, outerWrapperStyles};
