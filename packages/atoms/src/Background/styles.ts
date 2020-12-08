import { Theme } from "@lefthoek/types";
import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: (args: { variant: string }) => SxStyleProp = ({
    variant,
}) => {
    return {
        m: 0,
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        minHeight: "20rem",
        bg: ({ primaryColors }: Theme) => primaryColors[variant],
    };
};
