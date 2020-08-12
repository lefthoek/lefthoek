import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "grid",
  height: "100vh",
  overflow: "hidden",
  gridTemplateColumns: ["auto", "21rem 3fr"],
};

export const sidebarContainerStyles: SxStyleProp = {
  position: ["absolute", "relative"],
  width: "21rem",
  zIndex: 999,
  overflowY: "scroll",
  maxWidth: "75vw",
};

export const innerWrapperStyles: SxStyleProp = {
  p: 7,
  bg: "background",
  width: "100%",
  overflowY: "scroll",
};

export const menuButtonStyles: SxStyleProp = {
  width: "100%",
  display: ["block", "none"],
};
