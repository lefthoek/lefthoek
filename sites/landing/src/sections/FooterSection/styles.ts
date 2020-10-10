import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  bg: "text",
  color: "muted",
  justifyContent: ["center", "flex-end"],
  minHeight: "0vh",
  px: [4, 6],
  ".innerWrapper": {
    display: "flex",
    flexDirection: ["column", "column", "row"],
  },
};

export const iconStyles = {
  fill: "muted",
  width: "100%",
  height: "100%",
  "&:hover": {
    fill: "accent",
  },
};
