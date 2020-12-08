import { Theme } from "@lefthoek/types";
import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
    display: "flex",
    px: 2,
    py: 5,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    bg: ({ gradients }: Theme) => gradients.skyBlue[0],
    border: "4px solid black",
    borderColor: "primary",
};

export const textStyles: SxStyleProp = {
    fontFamily: "monospace",
    color: "text",
};
