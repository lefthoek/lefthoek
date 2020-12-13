import {SxStyleProp} from "theme-ui";

export const canvasStyles: SxStyleProp = {
  display: ["flex", "grid"],
  flexDirection: ["column"],
  gridTemplateColumns: "repeat(10, 1fr)",
  gridTemplateRow: "repeat(3, 10rem)",
  p: 2,
  m: 0,
  mb: 5,
  gridGap: 2,

  ".personalia, .company": {
    gridColumn: "span 5",
  },
  ".responsibilities, .information": {
    gridRow: "span 2",
    gridColumn: "span 2",
  },
};

export const cardStyles: SxStyleProp = {
  bg: "muted",
  gridColumn: "span 3",
  p: 4,
  m: 0,
};
