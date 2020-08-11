import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles = {
  display: "grid",
  height: "100vh",
  overflow: "hidden",
  gridTemplateColumns: ["auto", "21rem 3fr"],
};

export const sidebarContainerStyles = {
  position: ["absolute", "relative"],
  width: "21rem",
  overflowY: "scroll",
  maxWidth: "75vw",
};

export const innerWrapperStyles: SxStyleProp = {
  p: 7,
  bg: "background",
  width: "100%",
  overflowY: "scroll",
};

export const menuButtonStyles = {
  width: "100%",
  display: ["block", "none"],
};

