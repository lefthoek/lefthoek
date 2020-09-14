import { SxStyleProp } from "theme-ui";

export const fullScreenStyles: SxStyleProp = {
  position: "fixed",
  zIndex: 10000,
  top: 0,
  m: "0 !important",
  bottom: 0,
  left: 0,
  right: 0,
};

const highlightValues = {
  skyBlue: "#AE94FD",
  lobster: "#E39D76",
  brightGreen: "#BCE9D4",
  midnight: "#ADADB8",
};

export const highlightStyles: (args: { variant: string }) => SxStyleProp = ({
  variant,
}) => ({
  gridRow: 1,
  gridColumn: 1,
  bg: highlightValues[variant],
  mixBlendMode: "multiply",
  transform: "scaleX(0.95) translate(0%, 10%)",
  transformOrigin: "top center",
  filter: variant === "brightGreen" ? "blur(15px)" : "blur(30px)",
  borderRadius: "20px",
});

export const cardStyles: SxStyleProp = {
  zIndex: 1,
  gridRow: 1,
  gridColumn: 1,
  borderRadius: "20px",
};
