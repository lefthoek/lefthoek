import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "flex",
  bg: "muted",
  pl: [0, 0],
  pr: [0, 0],
  pt: [0, 0],
  pb: [0, 0],
  alignItems: ["center", "center"],
  h2: {
    maxWidth: "30rem",
  },
  ".innerWrapper": {
    maxWidth: "100%",
    py: [8, 9, 9],
    px: [6, 6, 7],
    width: "100%",
    height: "100%",
    bg: "accent",
    color: "text",
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
  },
};

export const contentWrapperStyles: SxStyleProp = {
  display: "grid",
  maxWidth: "40rem",
  gridTemplateColumns: ["auto", "1fr"],
};
