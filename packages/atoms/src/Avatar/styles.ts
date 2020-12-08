import {SxStyleProp} from "theme-ui";

export const outerWrapperStyles: (args: {variant: string}) => SxStyleProp = ({
  variant,
}) => {
  return {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "avatar",
    width: "3rem",
    height: "3rem",
    bg: (theme: any) => {
      return theme.gradients[variant][0];
    },
  };
};
