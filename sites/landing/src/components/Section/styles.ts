import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  justifyContent: ["center", "center"],
  alignItems: ["start", "start"],
  minHeight: "40vh",
  p: [4, 6, 8],
  color: "text",
  bg: "muted",
  ".innerWrapper": {
    flexDirection: "column",
    maxWidth: "100rem",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
};

export const headerWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  alignItems: ["center", "center"],
  width: "100%",
  mb: 6,
  h2: {
    textAlign: "center",
    mb: 3,
  },
};
