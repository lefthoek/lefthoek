import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "flex",
  px: [5, 8],
  alignItems: ["center", "center"],
};

export const featuresWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: ["column", "column", "row"],
  width: "100%",
  mb: 4,
  justifyContent: ["space-between", "space-between", "space-between"],
};

export const featureDetailOverrideStyles: SxStyleProp = {
  display: ["block", "block", "none"],
};
