import { SxStyleProp } from "theme-ui";

const wrapperStyles: SxStyleProp = {
    display: "flex",
    justifyContent: ["center"],
};

const innerWrapperStyles: SxStyleProp = {
    display: "grid",
    p: [5, 6],
    py: [9, 9],
    gridTemplateColumns: "minmax(auto, 52rem)",
};

const textContainerStyles: SxStyleProp = {
    ".footnotes": {
        mt: 8,
    },
    "> p:first-of-type:first-letter": {
        fontSize: ["4.8rem", "5.4rem"],
        lineHeight: ["4.8rem", "5rem"],
        fontFamily: "heading",
        float: "left",
        mr: 3,
    },
};

export { wrapperStyles, innerWrapperStyles, textContainerStyles };
