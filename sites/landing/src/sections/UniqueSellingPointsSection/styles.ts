import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "flex",
  bg: ["text"],
  color: "muted",
  px: [5, 5, 7],
  alignItems: ["center", "center"],
};

export const listStyles: SxStyleProp = {
  display: ["grid"],
  gridTemplateColumns: ["auto", "repeat(4, 1fr)", "repeat(6, 1fr)"],
  maxWidth: "120rem",
  gridRowGap: [6, 8, 8],
  gridColumnGap: [6, 7, 7, 9],
  justifyContent: "start",
  p: [0],
  m: [0],
  my: [0],
  li: {
    gridColumn: ["span 2"],
  },
  ".stat-3": {
    gridColumn: ["1/3", "3/5", "2/4"],
  },
  ".stat-4": {
    gridColumn: ["1/3", "2/4", "4/6"],
  },
};

export const itemStyles: SxStyleProp = {
  display: "flex",
  flexDirection: ["column"],
  justifyContent: ["flex-start"],
  alignItems: ["center"],
  minWidth: "15rem",
  mb: [8],
  p: {
    maxWidth: "20rem",
    textAlign: "center",
    m: 0,
  },
  h2: {
    color: "secondary",
    mb: [4, 5],
    textAlign: "center",
  },
};
