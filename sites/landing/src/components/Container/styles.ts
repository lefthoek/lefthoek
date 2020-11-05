import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "flex",
  top: 0,
  bg: ({ gradients }) => gradients.cipria[0],
  width: "100vw",
  flexDirection: "column",
};
