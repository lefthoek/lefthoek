import { SxStyleProp } from "theme-ui";

const wrapperStyles: SxStyleProp = {
    bg: "white",
};

const innerWrapperStyles: SxStyleProp = {
    display: "grid",
    gridTemplateColumns: "minmax(auto, 60rem)",
    justifyContent: "center",
    justifyItems: "bottom",
};

const textContainerStyles: SxStyleProp = {
    p: [4, 4],
    ".footnotes": {
        mt: 8,
    },
};

export { wrapperStyles, innerWrapperStyles, textContainerStyles };
