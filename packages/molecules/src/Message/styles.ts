import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "grid",
  gridColumnGap: [3],
  gridTemplateColumns: "auto 1fr",
};

export const metaStyles: SxStyleProp = {
  mb: [1],
  ".name": {
    fontWeight: 700,
  },
  ".time": {
    color: (theme) => theme.gradients.midnight[0],
  },
};

export const markdownStyles: SxStyleProp = {
  color: ({ gradients }) => gradients.midnight[1],
  fontWeight: 400,
  a: { color: "text" },
  strong: {
    fontWeight: 500,
  },
  p: { m: 0, mb: 3 },
  '[data-text-transform="uppercase"]': {
    textTransform: "uppercase",
    color: ({ gradients }) => gradients.midnight[2],
  },
  '[data-color="brightGreen"]': {
    color: "accent",
  },
  '[data-color="skyBlue"]': {
    color: "primary",
  },
};
