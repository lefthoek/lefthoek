import { SxStyleProp } from "theme-ui";

const innerWrapper: SxStyleProp = {
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

export { innerWrapper };
