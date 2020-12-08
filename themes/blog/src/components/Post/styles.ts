import { SxStyleProp } from "theme-ui";

const wrapperStyles: SxStyleProp = {
    bg: "white",
    p: [4, 6],
    display: "flex",
    justifyContent: ["center"],
};

const innerWrapperStyles: SxStyleProp = {
    display: "grid",
    py: 9,
    gridTemplateColumns: "minmax(auto, 52rem)",
};

const textContainerStyles: SxStyleProp = {
    ".footnotes": {
        mt: 8,
    },
};

export { wrapperStyles, innerWrapperStyles, textContainerStyles };
