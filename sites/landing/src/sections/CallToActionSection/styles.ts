import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  bg: "secondary",
  color: "white",
  minHeight: "0vh",
  ".innerWrapper": {
    justifyItems: ["flex-start", "flex-start"],
    justifyContent: ["flex-start", "flex-start"],
    alignItems: ["center", "flex-start"],
    alignContent: ["flex-start", "flex-start"],
    py: [0, 8, 8],
  },
  ".headerWrapper": {
    alignItems: ["flex-start", "flex-start"],
  },
};

export const callToActionStyles: SxStyleProp = {
  maxWidth: ["auto", "40rem"],
  mb: 5,
};

export const iconWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: ["row", "column"],
  alignContent: ["center"],
  alignItems: ["center"],
  justifyItems: ["center"],
  width: ["116px", "auto"],
  justifyContent: ["space-between"],
};

export const iconStyles = {
  fill: "muted",
  width: "50px",
  mb: [2, 3],
  height: "50px",
  "&:hover": {
    fill: "accent",
  },
};
