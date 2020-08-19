import { SxStyleProp } from "theme-ui";

export const wrapperStyles = {
  display: "grid",
  gridTemplateRows: "auto 1fr",
  gridRowGap: [8],
  maxWidth: "1024px",
};

export const sectionStyles = {
  display: "grid",
  gridTemplateRows: "auto 1fr",
  gridRowGap: [7],
  h1: {
    color: "primary",
    borderBottom: "1px solid lightgray",
    borderColor: "muted",
    pb: 2,
  },
};

export const lineStyles = {
  display: "grid",
  gridRowGap: [3],
};

export const gradientsStyles: SxStyleProp = {
  display: ["grid"],
  gridGap: [7],
  gridTemplateColumns: ["repeat(2, 1fr)", "repeat(5, 1fr)"],
};

export const gradientStyles: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
};

export const captionStyles = {
  mt: "1rem",
  fontSize: [0, 1],
};

export const paletteStyles = {
  display: "grid",
  width: "100%",
  gridTemplateColumns: ["repeat(2, 1fr)", "repeat(6, 1fr)"],
  gridGap: ["2rem"],
  gridTemplateRows: ["repeat(6, 1fr)", "repeat(2, 1fr)"],
  "> .color-0": {
    gridRow: ["1/3", "1/3"],
    gridColumn: ["1/3", "1/3"],
    color: "secondary",
    fontSize: 2,
  },
  "> .color-1": {
    gridColumn: ["1/3", "3/5"],
    gridRow: ["3/5", "1/3"],
    color: "muted",
    fontSize: 2,
  },
  ">  .color-2": {
    gridColumn: ["1/2", "5/6"],
    gridRow: ["5/6", "1/2"],
    color: "primary",
    fontSize: "10px",
    lineHeight: "14px",
  },
  "> .color-3": {
    gridColumn: ["2/3", "5/6"],
    gridRow: ["5/6", "2/3"],
    color: "accent",
    fontSize: "10px",
    lineHeight: "14px",
  },
  "> .color-4": {
    gridColumn: ["1/2", "6/7"],
    gridRow: ["6/7", "1/2"],
    color: "text",
    fontSize: "10px",
    lineHeight: "14px",
  },
};

export const swatchStyles: (args: {
  color: string;
  isLarge: boolean;
}) => SxStyleProp = ({ color, isLarge = false }) => {
  return {
    bg: color,
    display: "flex",
    alignItems: "flex-end",
    px: isLarge ? "1rem" : "0.5rem",
    py: isLarge ? "0.5rem" : "0.375rem",
  };
};
