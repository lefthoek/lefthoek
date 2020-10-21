import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: ["flex", "flex", "flex"],
  flexDirection: ["column-reverse", "column-reverse", "row"],
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
  px: [0, 8],
  pb: [5, 5, 0],
  img: {
    borderRadius: ["10px", "10px", "10px", "20px"],
    boxShadow: "simple",
  },
};
