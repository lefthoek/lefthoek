import { SxStyleProp } from "theme-ui";

const outerWrapperStyles: SxStyleProp = {
    px: [5, 5, 8, 8],
};

const innerWrapperStyles: SxStyleProp = {
    display: "flex",
    maxWidth: "60rem",
    flexDirection: ["column"],
    h1: {
        textAlign: ["center", "center"],
        mb: [6, 6, 7, 7],
    },
    justifyContent: ["start"],
    alignItems: ["start"],
    p: {
        fontFamily: "monospace",
    },
};

export { innerWrapperStyles, outerWrapperStyles };
