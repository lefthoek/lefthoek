import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  overflow: "hidden",
  bg: "primary",
  color: "muted",
  top: 0,
  zIndex: 10,
  width: "100%",
  flex: 1,
  ".innerWrapper": {
    justifyItems: ["flex-start", "flex-start"],
    justifyContent: ["flex-start", "flex-start"],
    alignItems: ["flex-start", "flex-start"],
    alignContent: ["flex-start", "flex-start"],
  },
  ".headerWrapper": {
    alignItems: ["flex-start", "flex-start"],
  },
};
