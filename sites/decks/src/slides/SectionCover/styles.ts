import { SxStyleProp } from "theme-ui";

const outerWrapperStyles: SxStyleProp = {
  color: "accent",

  h1: {
    fontSize: ["9rem", "12rem", "12rem", "15rem"],
    textAlign: "center",
    mb: 0,
    lineHeight: ["9rem", "12rem", "12rem", "15rem"],

    "@media screen and (orientation: portrait)": {
      transform: "rotate(90deg)",
    },
  },
};

export { outerWrapperStyles };
