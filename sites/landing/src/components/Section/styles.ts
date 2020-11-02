import { SxStyleProp } from "theme-ui";

export const effectsWrapperStyles: SxStyleProp = {
  bg: "secondary",
};

export const cutCornerStyles: SxStyleProp = {
  clipPath: [
    `polygon(
    0 0%,
    100% 0,
    100% 0,
    100% 0,
    100% calc(100% - 50px),
    0 100%,
    100% 100%,
    0 calc(100% - 0px)
  )`,
    `polygon(
    0 0%,
    100% 0,
    100% 0,
    100% 0,
    100% calc(100% - 100px),
    0 100%,
    100% 100%,
    0 calc(100% - 0px)
  )`,
  ],
};

export const outerWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  justifyContent: ["center", "center"],
  alignItems: ["start", "start"],
  px: [4, 6, 8],
  py: [8, 9, 9],
  color: "text",
  bg: ({ gradients }) => gradients.cipria[0],
  ".innerWrapper": {
    flexDirection: "column",
    maxWidth: "100rem",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
};

export const headerWrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  alignItems: ["center", "center"],
  width: "100%",
  maxWidth: "40rem",
  mb: [4, 6, 7],
  h2: {
    textAlign: "center",
    mb: 3,
  },
};
