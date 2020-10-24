import { SxStyleProp } from "theme-ui";

const outerWrapper: SxStyleProp = {
  p: 5,
  maxHeight: "100vh",
};

const innerWrapper: SxStyleProp = {
  display: "grid",
  gridGap: [5],
  alignContent: "center",
  maxWidth: ["auto", "50%"],
  alignItems: "start",
  gridTemplateColumns: ["auto", "1fr 1fr"],
};

export { outerWrapper, innerWrapper };
