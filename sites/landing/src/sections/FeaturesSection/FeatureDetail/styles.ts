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
};

export const imageWrapperStyles: SxStyleProp = {
  flex: 3,
  bg: "muted",
  border: "1px solid",
  borderColor: ({ gradients }) => gradients.midnight[0],
  "&:hover": {
    bg: ({ gradients }) => gradients.lobster[0],
  },
};

