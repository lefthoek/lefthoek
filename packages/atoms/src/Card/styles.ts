import { SxStyleProp } from "theme-ui";

const textColor = {
  skyBlue: "#D3FFEB",
  brightGreen: "text",
  midnight: "#C9B7FD",
  lobster: "muted",
};

const boxShadows = {
  skyBlue: "0px 40px 80px #C9B7FD;",
  brightGreen: "0px 40px 80px rgba(167, 243, 208, 0.8)",
  midnight: "0px 40px 80px rgba(173, 173, 184, 0.6)",
  lobster: "0px 40px 80px #EDBDA4",
};

export const overrideStyles: (args: { variant: string }) => SxStyleProp = ({
  variant,
}) => ({
  color: textColor[variant],
  boxShadow: boxShadows[variant],
});
