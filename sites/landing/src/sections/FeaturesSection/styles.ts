import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "flex",
  overflowX: "hidden",
  bg: "muted",
  alignItems: ["center", "center"],
  ".innerWrapper": {
    maxWidth: "80rem",
  },
};

export const featuresWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: ["row", "row", "row"],
  width: ["150%", "120%", "100%"],
  justifyContent: ["space-between", "space-between", "space-between"],
};

export const featuresDetailStyles: SxStyleProp = {
  display: "flex",
  flexDirection: ["row", "row", "row"],
  width: ["300%", "300%", "300%"],
  justifyContent: ["space-between", "space-between", "space-between"],
};
