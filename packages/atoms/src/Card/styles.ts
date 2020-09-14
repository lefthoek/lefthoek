import { SxStyleProp } from "theme-ui";

const textColor = {
  skyBlue: "#D3FFEB",
  brightGreen: "text",
  midnight: "#C9B7FD",
  lobster: "muted",
};

export const overrideStyles: (args: { variant: string }) => SxStyleProp = ({
  variant,
}) => ({
  color: textColor[variant],
});
