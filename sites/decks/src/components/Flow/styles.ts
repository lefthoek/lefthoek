import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
    display: "flex",
    flexDirection: ["column", "row"],
    justifyContent: "center",
    alignItems: "center",
};

export const baseStyles: SxStyleProp = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    p: 4,
    color: "secondary",
    lineHeight: "33px",
};

export const textStyles: SxStyleProp = {
    ...baseStyles,
};

export const arrowStyles: SxStyleProp = {
    ...baseStyles,
    transform: ["rotate(90deg)", "none"],
};
