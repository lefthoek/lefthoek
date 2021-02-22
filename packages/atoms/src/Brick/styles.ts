import {Theme} from "@lefthoek/types";
import {SxStyleProp} from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "flex",
  px: 2,
  py: 5,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  bg: ({gradients}: Theme) => gradients.skyBlue[3],
  fontFamily: "monospace",
  fontSize: "21px",
  lineHeight: "24px",
};
