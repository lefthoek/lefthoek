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
  minHeight: 0,
  display: "flex",
  py: [0, 0, "4rem", "10rem"],
  flexDirection: "column",
  justifyContent: "center",
};

const headingStyles: SxStyleProp = {
  fontSize: ["9rem", "12rem", "14rem", "21rem"],
  lineHeight: ["6.25rem", "8.375rem", "10.5rem", "15.5rem"],
};

export const leftHeadingStyles: SxStyleProp = {
  ...headingStyles,
};

export const rightHeadingStyles: SxStyleProp = {
  color: "accent",
  ...headingStyles,
};

export const leftPanelStyles: SxStyleProp = {
  ...panelStyles,
  bg: "text",
  flex: [2, 2, 1],
  ml: [0, "-5rem", "-5rem"],
  justifyContent: ["flex-start", "flex-start", "flex-end"],
  alignItems: ["center", "flex-start"],
};

export const rightPanelStyles: SxStyleProp = {
  ...panelStyles,
  justifyContent: ["flex-end", "flex-end", "flex-start"],
  alignItems: ["center", "flex-end"],
  mr: [0, "-5rem", "-5rem"],
  bg: "primary",
};

