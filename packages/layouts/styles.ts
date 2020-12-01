import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
    py: ["40vh"],
    width: "100%",
    height: "100%",
    overflow: "scroll",
};

export const itemStyles: SxStyleProp = {
    color: "background",
    textDecoration: "none",
    display: ["flex"],
    width: "100%",
    mb: [8, 9],
    px: [4, 8, 9, "16rem"],
};

export const titleStyles: (args: {
    highlightLevel: "high" | "low" | "off";
}) => SxStyleProp = ({ highlightLevel }) => {
    return {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        alignItems: "center",
        width: "100%",
        maxWidth: ["50rem"],
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
