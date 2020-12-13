import {SxStyleProp} from "theme-ui";

export const itemStyles: SxStyleProp = {
  textDecoration: "none",
  display: ["flex"],
  width: "100%",
  py: [5, 6, 7, 7],
};

export const titleStyles: (args: {
  highlightLevel: "high" | "low" | "off";
  variant: "skyBlue" | "midnight";
}) => SxStyleProp = ({variant = "skyBlue", highlightLevel}) => {
  return {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    alignItems: "center",
    width: "100%",
    maxWidth: ["50rem"],
    userSelect: "none",
    "&:hover": {
      color: ({gradients}: any) =>
        highlightLevel === "off" ? gradients[variant][2] : "accent",
    },
    color: ({gradients}: any) =>
      highlightLevel === "high"
        ? "muted"
        : highlightLevel === "low"
          ? gradients[variant][1]
          : gradients[variant][2],
  };
};
