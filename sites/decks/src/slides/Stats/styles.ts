import { SxStyleProp } from "theme-ui";

const outerWrapperStyles: SxStyleProp = {
  alignItems: ["center", "center", "center", "stretch"],
  h1: {
    mb: [5, 6, 6, 9],
  },
};

const innerWrapperStyles: SxStyleProp = {
  display: "flex",
  justifyContent: "center",
  "> ul": {
    m: [0],
    p: [0],
    maxWidth: "75rem",
    textIndent: [0],
    listStyleType: [0],
    display: ["flex"],
    flex: 1,
    justifyContent: ["center", "center", "center", "space-between"],
    alignItems: ["center", "center", "center", "flex-start"],
    flexDirection: ["column", "column", "column", "row"],
  },
};

export { innerWrapperStyles, outerWrapperStyles };
