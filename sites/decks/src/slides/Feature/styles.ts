import { SxStyleProp } from "theme-ui";

const outerWrapper: SxStyleProp = {
  p: [6, 8],
  maxHeight: "100vh",
  justifyContent: "flex-start",
  overflowY: ["scroll", "none"],
};

const innerWrapper: SxStyleProp = {
  display: "grid",
  gridGap: [5],
  alignContent: "center",
  maxWidth: ["auto", "auto", "80%", "60%"],
  alignItems: "start",
  gridTemplateColumns: ["auto", "1fr 1fr"],
};

export { outerWrapper, innerWrapper };
