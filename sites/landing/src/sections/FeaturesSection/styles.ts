import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  py: 5,
  px: [5, 8],
};

export const featuresWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: ["column", "row"],
  width: "100%",
  mb: 4,
  justifyContent: ["space-between", "space-between", "space-between"],
};

export const headerWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  alignItems: ["start", "center"],
  my: 4,
  width: "100%",
  h2: {
    mb: 4,
  },
};
