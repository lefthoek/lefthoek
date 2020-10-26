import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  justifyContent: ["flex-start", "center", "center", "center"],
  overflowY: ["scroll", "none", "none", "none"],
  p: [6, 8, 8, 8],
  h1: {
    mb: [6],
  },
  strong: {
    color: "secondary",
  },
};

export const textStyles: SxStyleProp = {
  textAlign: "center",
  mb: [6],
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
  ".item-2": {
    gridColumn: ["1/3", "2/4", "5/7"],
  },
};
