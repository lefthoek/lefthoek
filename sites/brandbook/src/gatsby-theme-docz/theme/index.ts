// @ts-ignore
import baseTheme from "gatsby-theme-docz/src/theme/index";
import lefthoekTheme from "@lefthoek/ui-theme";
import { merge } from "lodash/fp";

const theme = merge(baseTheme, lefthoekTheme);
export default theme;
