import {Theme} from "@lefthoek/types";
import {SxStyleProp} from "theme-ui";

export const outerWrapperStyles = {};

export const logoStyles: ({variant}: {variant?: string}) => SxStyleProp = ({
  variant = "skyBlue",
}) => {
  return {
    fill: ({gradients}: Theme) => gradients[variant][3],
    "&:hover": {
      fill: ({gradients}: Theme) => gradients["cipria"][3],
    },
  };
};
