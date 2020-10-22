import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  bg: "secondary",
  color: "white",
  display: "flex",
  alignItems: ["center", "center"],
  minHeight: "0vh",
  px: [5, 8],
  ".innerWrapper": {
    maxWidth: "100rem",
    justifyItems: ["flex-start", "flex-start"],
    justifyContent: ["flex-start", "flex-start"],
    alignItems: ["center", "flex-start"],
    alignContent: ["center", "flex-start"],
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
