import { SxStyleProp } from "theme-ui";

const outerWrapper: SxStyleProp = {
  p: 5,
  maxHeight: "100vh",
  justifyContent: "flex-start",
  overflowY: ["scroll", "none"],
};

const innerWrapper: SxStyleProp = {
  display: "grid",
  gridGap: [5],
  alignContent: "center",
  maxWidth: ["auto", "60%"],
  alignItems: "start",
  gridTemplateColumns: ["auto", "1fr 1fr"],
};

export { outerWrapper, innerWrapper };
