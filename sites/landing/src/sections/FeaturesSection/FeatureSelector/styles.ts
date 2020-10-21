import { SxStyleProp } from "theme-ui";

export const featureWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  mb: [0, 0, 0],
  "&:last-of-type": {
    mb: 0,
  },
};

export const selectorStyles: SxStyleProp = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  color: "secondary",
  py: 4,
  textAlign: "center",
  mb: 4,
  userSelect: "none",
  "&:hover": {
    fontWeight: 600,
  },
};
