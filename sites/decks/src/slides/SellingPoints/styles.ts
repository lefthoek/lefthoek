import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  justifyContent: ["flex-start", "flex-start", "center", "center"],
  overflowY: ["scroll", "scroll", "none", "none"],
  p: [6, 8, 8, 8],
  "@media screen and (max-height: 56rem)": {
    justifyContent: "flex-start",
    overflowY: ["scroll", "scroll", "none"],
    p: 6,
  },
};

export const listStyles: SxStyleProp = {
  display: ["grid"],
  maxWidth: "60rem",
  gridTemplateColumns: ["auto", "repeat(4, 1fr)", "repeat(6, 1fr)"],
  gridRowGap: [6, 6],
  gridColumnGap: [6, 7, 8, 9],
  justifyContent: "space-between",
  p: [0],
  m: [0],
  my: [0],
  ".item": {
    gridColumn: ["span 2"],
  },
  ".item-3": {
    gridColumn: ["1/3", "3/5", "2/4"],
  },
  ".item-4": {
    gridColumn: ["1/3", "2/4", "4/6"],
  },
};

