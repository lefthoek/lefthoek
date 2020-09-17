import { SxStyleProp } from "theme-ui";

const outerWrapperStyles: SxStyleProp = {
  alignItems: ["center", "center", "center", "stretch"],
};

const innerWrapperStyles: SxStyleProp = {
  display: "flex",
  justifyContent: "center",
  "> ul": {
    m: [0],
    p: [0],
    maxWidth: "80rem",
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
