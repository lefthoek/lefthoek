import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  bg: ({ gradients }) => gradients.lobster[0],
  color: "muted",
  justifyContent: ["center", "center"],
  alignItems: ["center", "center"],
  px: [5, 5, 7],
  py: [6, 6, 6],
  ".innerWrapper": {
    maxWidth: "100rem",
    display: "flex",
    alignItems: ["flex-end"],
    justifyContent: ["flex-end"],
    flexDirection: ["column", "column", "row"],
  },
};

export const iconWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: ["row"],
  alignContent: ["center"],
  alignItems: ["center"],
  justifyItems: ["center"],
  width: ["14rem"],
  height: ["auto", "7rem"],
  justifyContent: ["space-between"],
};

export const iconStyles = {
  fill: "secondary",
  width: "50px",
  height: "50px",
  "&:hover": {
    fill: "text",
  },
};
