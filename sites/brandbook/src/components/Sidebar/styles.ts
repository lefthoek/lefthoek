import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "flex",
  height: "100vh",
  flexDirection: "row",
  overflowY: "hidden",
};

export const innerWrapperStyles: SxStyleProp = {
  display: "flex",
  width: ["80%", "80%", "100%"],
  minHeight: "100vh",
  justifyContent: "flex-start",
  flexDirection: "column",
  overflowY: "scroll",
  bg: "text",
  px: [6, 7],
  py: 7,
};

export const menuButtonStyles: SxStyleProp = {
  display: ["flex", "flex", "none"],
};
