import { SxStyleProp } from "theme-ui";

export const overrideStyles: (args: { variant: string }) => SxStyleProp = ({
  variant,
}) => {
  return {
    color: variant === "brightGreen" ? "text" : "muted",
    boxShadow: "simple",
  };
};

