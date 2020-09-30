import { SxStyleProp } from "theme-ui";

export const featureWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  mb: [8, 8, 0],
};

export const selectorStyles: SxStyleProp = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  h2: {
    fontWeight: [600, 600, 400],
  },
  color: "secondary",
  py: 4,
  textAlign: "center",
  mb: 4,
  userSelect: "none",
  "&:hover": {
    color: "text",
  },
};

export const selectedStyles: SxStyleProp = {
  ...selectorStyles,
  h2: {
    fontWeight: 600,
  },
};
