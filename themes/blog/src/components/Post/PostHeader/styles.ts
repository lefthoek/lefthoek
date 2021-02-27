import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color: "text",
    mb: 4,
};

export const headingStyles: SxStyleProp = {
    fontFamily: "monospace",
    fontSize: ["21px", "26px"],
    lineHeight: "62px",
    letterSpacing: "0.2rem",
};

export const excerptStyles: SxStyleProp = {
    py: 5,
    pb: 8,
    maxWidth: "29rem",
};
