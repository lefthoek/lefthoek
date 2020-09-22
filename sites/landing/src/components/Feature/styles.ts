import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
};

export const selectorStyles: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  p: 4,
  borderBottom: "2px solid black",
  borderColor: "text",
  textAlign: "center",
  my: 4,
};

export const selectionStyles: SxStyleProp = {
  display: ["block", "none"],
};
