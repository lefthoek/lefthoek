import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  p: [6, 8],
  maxHeight: "100vh",
  bg: "midnight",
  color: "muted",
  justifyContent: "flex-start",
  overflowY: ["scroll", "none"],
};

export const innerWrapperStyles: SxStyleProp = {
  display: "grid",
  gridGap: [5],
  alignContent: "center",
  maxWidth: ["auto", "auto", "80%", "60%"],
  alignItems: "start",
  gridTemplateColumns: ["auto", "1fr 1fr"],
};

export const overlayWrapperStyles: SxStyleProp = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  pt: 8,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  bg: "text",
  color: "secondary",
  opacity: 0.9,
};
