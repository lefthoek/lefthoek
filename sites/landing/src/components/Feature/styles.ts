import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
};

export const selectorStyles: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  p: 4,
  borderBottom: "1px solid black",
  borderColor: "text",
  textAlign: "center",
  my: 4,
  userSelect: "none",
  "&:hover": {
    color: "primary",
  },
};

export const selectionStyles: SxStyleProp = {
  display: ["block", "none"],
};

export const selectedStyles: SxStyleProp = {
  ...selectorStyles,
  borderWidth: "3px",
  borderColor: "primary",
  "&:hover": {
    color: "text",
  },
};
