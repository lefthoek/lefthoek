import { SxStyleProp } from "theme-ui";

export const featureWrapperStyles: SxStyleProp = {
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
  mb: 4,
  userSelect: "none",
  "&:hover": {
    color: "primary",
  },
};

export const selectedStyles: SxStyleProp = {
  ...selectorStyles,
  borderWidth: ["1px", "3px"],
  borderColor: ["text", "primary"],
  "&:hover": {
    color: "text",
  },
};
