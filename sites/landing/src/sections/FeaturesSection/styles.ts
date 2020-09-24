import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "flex",
  py: 5,
  px: [5, 8],
  alignItems: ["center", "center"],
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
  alignItems: ["center", "center"],
  my: 4,
  width: "100%",
  h2: {
    textAlign: "center",
    mb: 4,
  },
};
