import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  bg: "text",
  color: "muted",
  flexDirection: "row",
  justifyContent: ["center", "flex-end"],
  minHeight: "0vh",
  px: [4, 6],
  py: [5, 5],
  ".innerWrapper": {
    width: ["30%", "20%", "10%"],
    display: "flex",
    flexDirection: "row",
  },
};

export const iconStyles = {
  fill: "muted",
  width: "100%",
  ml: [2, 3],
  height: "100%",
  "&:hover": {
    fill: "accent",
  },
};
