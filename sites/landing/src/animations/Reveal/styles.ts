import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  boxShadow: "0 1px 20px rgba(0,0,0,0.7)",
  overflow: "hidden",
  position: "fixed",
  display: "flex",
  zIndex: 1,
  top: 0,
  width: "100vw",
};

export const innerWrapperStyles: SxStyleProp = {
  position: "absolute",
  top: 0,
  display: "flex",
  height: "100vh",
  left: 0,
  right: 0,
};
