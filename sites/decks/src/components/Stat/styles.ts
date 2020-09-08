import { SxStyleProp } from "theme-ui";

export const statWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: ["column"],
  justifyContent: ["center"],
  alignItems: ["center"],
  minWidth: "15rem",
  mb: [8],
  p: {
    maxWidth: "20rem",
    textAlign: "center",
    m: 0,
  },
};

export const figureStyles: SxStyleProp = {
  color: "secondary",
  mb: [5],
  textAlign: "center",
};
