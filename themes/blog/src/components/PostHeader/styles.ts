import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
    color: "background",
    textDecoration: "none",
    display: ["flex"],
    width: "100%",
    p: [6, 6, 8, 8],
    justifyItems: "center",
    justifyContent: "center",
    alignItems: "center",
};

export const innerWrapperStyles: SxStyleProp = {
    display: "flex",
    color: ({ gradients }: any) => gradients.midnight[2],
    width: "100%",
    maxWidth: "64rem",
};
