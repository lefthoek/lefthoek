import { SxStyleProp } from "theme-ui";

const outerWrapperStyles: SxStyleProp = {
  color: "accent",

  h1: {
    fontSize: ["6rem", "9rem"],
    textAlign: "center",
    mb: 0,
    lineHeight: ["6rem", "9rem"],
    "@media screen and (orientation: portrait)": {
      transform: "rotate(90deg)",
    },
  },
};

export { outerWrapperStyles };
