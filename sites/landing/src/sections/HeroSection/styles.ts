import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  overflow: "hidden",
  display: "flex",
  flexDirection: ["column", "row"],
  bg: "primary",
  width: "100%",
  height: "100%",
  color: "muted",
  top: 0,
  zIndex: 10,
};

const panelStyles: SxStyleProp = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  p: [5],
  pb: [9],
};

const headingStyles: SxStyleProp = {
  fontFamily: "heading",
  fontWeight: 400,
  position: "absolute",
  fontSize: ["40vw", "20vw"],
  lineHeight: ["40vw", "20vw"],
  mx: "-2rem",
};

export const rightHeadingStyles: SxStyleProp = {
  ...headingStyles,
  color: "accent",
  top: 0,
  right: 0,
};
export const leftHeadingStyles: SxStyleProp = {
  ...headingStyles,
  color: "muted",
  left: 0,
  bottom: 0,
};

export const rightPanelStyles: SxStyleProp = {
  ...panelStyles,
  bg: "text",
};

export const leftPanelStyles: SxStyleProp = {
  ...panelStyles,
  flex: [3, 1],
  bg: "primary",
};
