import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color: "primary",
};

export const headingStyles: SxStyleProp = {
    fontSize: ["32px", "42px"],
    py: [5],
    fontFamily: "heading",
    lineHeight: ["34px", "42px"],
};

export const excerptStyles: SxStyleProp = {
    py: 5,
    pb: 8,
    maxWidth: "29rem",
};
