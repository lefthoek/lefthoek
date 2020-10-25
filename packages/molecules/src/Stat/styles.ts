import { SxStyleProp } from "theme-ui";

export const statWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: ["column"],
  justifyContent: ["center"],
  alignItems: ["center"],
  minWidth: "15rem",
  mb: [6, 6, 6, 8],
  p: {
    maxWidth: ["15rem", "15rem", "15rem", "20rem"],
    textAlign: "center",
    m: 0,
  },
  "&:last-of-type": {
    mb: [0, 6, 6, 8],
  },
};

export const figureStyles: SxStyleProp = {
  color: "secondary",
  mb: [3, 5],
  textAlign: "center",
};
