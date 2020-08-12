import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "flex",
  height: "100vh",
  flexDirection: "row",
  overflowY: "hidden",
};

export const innerWrapperStyles: SxStyleProp = {
  display: "flex",
  width: ["75%", "100%"],
  minHeight: "100vh",
  justifyContent: "flex-start",
  flexDirection: "column",
  overflowY: "scroll",
  bg: "text",
  px: [6, 7],
  py: 7,
};

export const menuButtonStyles: SxStyleProp = {
  display: ["flex", "none"],
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",
  borderRadius: 0,
  bg: "text",
  color: "bg",
  p: 0,
  height: "3rem",
  width: "3rem",
  "&:active, &:focus": {
    outline: "none",
  },
};
