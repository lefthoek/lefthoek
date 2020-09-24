import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "flex",
  py: [8],
  bg: ["white"],
  alignItems: ["center", "center"],
};

export const headerWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  alignItems: ["center", "center"],
  width: "100%",
  mb: 6,
  h2: {
    textAlign: "center",
    mb: 4,
  },
};
export const innerWrapperStyles: SxStyleProp = {
  display: ["grid"],
  gridTemplateColumns: ["auto", "repeat(6, 1fr)"],
  maxWidth: "120rem",
  gridRowGap: [8],
  gridColumnGap: [8],
  justifyContent: "start",
  p: [0],
  m: [0],
  my: [5],
  li: {
    gridColumn: ["span 2"],
  },
  ".stat-3": {
    gridColumn: ["1/3", "2/4"],
  },
  ".stat-4": {
    gridColumn: ["1/3", "4/6"],
  },
};
