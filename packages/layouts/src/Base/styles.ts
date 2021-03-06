import {SxStyleProp} from "theme-ui";
import {Theme} from "@lefthoek/types";

export const topBarStyles: SxStyleProp = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  opacity: 0.9,
  py: [5, 5],
  px: [4, 5, 6],
  "&:hover": {
    opacity: 1,
  },
};

export const logoStyles: SxStyleProp = {
  color: ({gradients}: Theme) => gradients.midnight[1],
  display: "block",
};
