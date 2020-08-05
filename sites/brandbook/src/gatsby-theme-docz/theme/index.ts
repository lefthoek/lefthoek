// @ts-ignore
import baseTheme from "gatsby-theme-docz/src/theme/index";
import lefthoekTheme from "@lefthoek/ui-theme";
import { merge } from "lodash/fp";

const { props, prism, blockquote } = baseTheme.colors;
export default merge(
  { ...baseTheme, colors: { props, prism, blockquote } },
  lefthoekTheme
);
