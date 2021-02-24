import {SxStyleProp} from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  p: [6, 8],
  maxHeight: "100vh",
  alignItems: "flex-start",
  overflowY: ["scroll", "none"],
};

export const innerWrapperStyles: SxStyleProp = {
  display: "grid",
  gridGap: [5],
  alignContent: "center",
  justifyContent: ["flex-start"],
  maxWidth: ["auto", "auto", "80%", "60%"],
  alignItems: "start",
  gridTemplateColumns: ["auto", "1fr 1fr"],
};

export const imageWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
export const imageStyles: SxStyleProp = {
  mt: [4],
  mb: [4, 4, 0],
  boxShadow: "simple",
};
