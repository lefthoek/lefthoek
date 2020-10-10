import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  overflow: "hidden",
  display: "flex",
  flexDirection: ["column-reverse", "column-reverse", "row"],
  bg: "primary",
  width: "100%",
  height: "100%",
  color: "muted",
  top: 0,
  zIndex: 10,
};

const panelStyles: SxStyleProp = {
  flex: 1,
  overflowY: "visible",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const headingStyles: SxStyleProp = {
  height: ["40vw", "20vw", "20vw", "22vw"],
};

export const leftHeadingStyles: SxStyleProp = {
  ...headingStyles,
  mt: ["-3rem", "-2.6rem", 0],
  ml: [0, 0, "-7rem"],
  mb: [0, "10rem"],
};

export const rightHeadingStyles: SxStyleProp = {
  ...headingStyles,
  mb: ["-3rem", "-2.6rem", 0],
  mr: [0, 0, "-6rem"],
  mt: [0, "10rem"],
};

export const leftPanelStyles: SxStyleProp = {
  ...panelStyles,
  bg: "text",
  flex: [2, 2, 1],
  justifyContent: ["flex-start", "flex-start", "flex-end"],
  alignItems: ["center", "flex-start"],
};

export const rightPanelStyles: SxStyleProp = {
  ...panelStyles,
  justifyContent: ["flex-end", "flex-end", "flex-start"],
  alignItems: ["center", "flex-end"],
  bg: "primary",
};

export const overlayStyles: SxStyleProp = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  py: [6, "10rem"],
  top: 0,
  px: [5, 8],
  left: [0, 0, "55%"],
  right: 0,
  bottom: 0,
};
