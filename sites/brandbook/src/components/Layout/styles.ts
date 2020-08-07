import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles = {
  display: "grid",
  height: "100vh",
  overflow: "hidden",
  gridTemplateColumns: ["auto", "20rem 3fr"],
};

export const sidebarContainerStyles = {
  position: ["absolute", "relative"],
  width: "20rem",
  maxWidth: "75vw",
};

export const innerWrapperStyles: SxStyleProp = {
  p: 4,
  width: "100%",
  overflowY: "scroll",
};

export const menuButtonStyles = {
  width: "100%",
  display: ["block", "none"],
};

