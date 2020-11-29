import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
    py: ["30vh", "40vh"],
    width: "100%",
    height: "100%",
    overflow: "scroll",
};

export const itemStyles: SxStyleProp = {
    color: "background",
    textDecoration: "none",
    display: ["flex"],
    width: "100%",
    py: [6, 6, 8, 8],
    px: [6, 6, "16rem"],
};

export const innerWrapperStyles: SxStyleProp = {
    display: "flex",
    color: ({ gradients }: any) => gradients.midnight[2],
    width: "100%",
    maxWidth: "50rem",
};

export const titleStyles: (args: {
    highlightLevel: "high" | "low" | "off";
}) => SxStyleProp = ({ highlightLevel }) => {
    return {
        userSelect: "none",
        "&:hover": {
            color: ({ gradients }: any) =>
                highlightLevel === "off" ? gradients.midnight[2] : "accent",
        },
        color: ({ gradients }: any) =>
            highlightLevel === "high"
                ? "muted"
                : highlightLevel === "low"
                    ? gradients.midnight[1]
                    : gradients.midnight[2],
    };
};
