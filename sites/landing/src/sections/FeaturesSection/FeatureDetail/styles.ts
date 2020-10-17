import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: ["none", "none", "flex"],
  flexDirection: ["column", "column", "row"],
  zIndex: 0,
  h1: {
    mt: 0,
  },
  p: {
    mb: 5,
  },
};

export const textWrapperStyles = {
  flex: 2,
  mr: [0, 6],
  py: [0, 2],
};

export const imageWrapperStyles: SxStyleProp = {
  flex: 3,
  px: 8,
};

