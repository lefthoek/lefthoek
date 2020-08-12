import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "grid",
  height: "100vh",
  overflow: "hidden",
  gridTemplateColumns: ["auto", "21rem 3fr"],
};

export const sidebarContainerStyles: SxStyleProp = {
  position: ["absolute", "relative"],
  width: ["100%", "21rem"],
  zIndex: 999,
};

export const innerWrapperStyles: SxStyleProp = {
  py: 7,
  px: [5, 7],
  bg: "background",
  width: "100%",
  overflowY: "scroll",
};

export const menuButtonStyles: SxStyleProp = {
  width: "100%",
  display: ["block", "none"],
};
