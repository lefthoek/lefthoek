import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "flex",
  px: [5, 8],
  alignItems: ["center", "center"],
  ".innerWrapper": {
    maxWidth: "80rem",
  },
};

export const featuresWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: ["column", "column", "row"],
  width: "100%",
  justifyContent: ["space-between", "space-between", "space-between"],
};

export const featureDetailOverrideStyles: SxStyleProp = {
  display: ["block", "block", "none"],
};
