import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  bg: "secondary",
  color: "white",
  minHeight: "0vh",
  ".innerWrapper": {
    maxWidth: "100%",
    justifyItems: ["flex-start", "flex-start"],
    justifyContent: ["flex-start", "flex-start"],
    alignItems: ["center", "flex-start"],
    alignContent: ["flex-start", "flex-start"],
  },
  ".headerWrapper": {
    alignItems: ["flex-start", "flex-start"],
    mb: 3,
  },
};

export const innerWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: ["column", "row"],
  justifyContent: "space-between",
  alignItems: ["center", "flex-end"],
  width: "100%",
};

export const callToActionStyles: SxStyleProp = {
  maxWidth: ["auto", "25rem", "40rem"],
  mb: 0,
  input: {
    mb: [5, 5],
  },
};

export const iconWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: ["row", "column"],
  alignContent: ["center"],
  alignItems: ["center"],
  justifyItems: ["center"],
  width: ["116px", "auto"],
  height: ["auto", "116px"],
  mt: [6, 0],
  justifyContent: ["space-between"],
};

export const iconStyles = {
  fill: "muted",
  width: "50px",
  height: "50px",
  "&:hover": {
    fill: "accent",
  },
};
