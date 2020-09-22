import { SxStyleProp } from "theme-ui";

export const outerWrapper: SxStyleProp = {
  py: 5,
};

export const featuresWrapper: SxStyleProp = {
  display: "flex",
  flexDirection: ["column", "row"],
  width: "100%",
  mb: 4,
  justifyContent: ["space-between", "space-between", "space-between"],
};

export const headerWrapper: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  alignItems: ["start", "center"],
  my: 4,
  width: "100%",
  h2: {
    mb: 4,
  },
};

export const selectionWrapper: SxStyleProp = {
  display: ["none", "flex"],
  width: "50%",
};
