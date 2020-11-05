import { SxStyleProp } from "theme-ui";

const outerWrapperStyles: SxStyleProp = {
  alignItems: ["center", "center", "center", "stretch"],
  px: [5, 5, 8, 8],
  h1: {
    mb: [6, 6, 8, 8],
  },
};

const innerWrapperStyles: SxStyleProp = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  "> ul": {
    m: [0],
    p: [0],
    maxWidth: "70rem",
    textIndent: [0],
    listStyleType: [0],
    display: ["flex"],
    flex: 1,
    justifyContent: ["center", "center", "space-between"],
    alignItems: ["center", "center", "flex-start"],
    flexDirection: ["column", "column", "row"],
    li: {
      mb: [6, 7],
    },
  },
};

export { innerWrapperStyles, outerWrapperStyles };
