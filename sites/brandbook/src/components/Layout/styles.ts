import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "grid",
  height: "100vh",
  overflow: "hidden",
  gridTemplateColumns: ["auto", "auto", "21rem 3fr"],
};

export const sidebarContainerStyles: SxStyleProp = {
  position: ["absolute", "absolute", "relative"],
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: ["auto", "24rem", "21rem"],
  zIndex: 999,
};

export const innerWrapperStyles: SxStyleProp = {
  py: [8, 7],
  px: [5, 7],
  bg: "background",
  width: "100%",
  overflowY: "scroll",
};

export const menuButtonStyles: SxStyleProp = {
  width: "100%",
  display: ["block", "block", "none"],
};
