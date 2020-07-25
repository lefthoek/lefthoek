/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { outerWrapper, innerWrapper } from "./styles";
import { Logo } from "@lefthoek/atoms";
import { useDeck } from "gatsby-theme-mdx-deck";

const SlideMeta: FunctionComponent = () => {
  const { index, length } = useDeck();
  const showLogo = index === 0 || index === length - 1;
  return (
    <Box sx={outerWrapper}>
      <Box sx={innerWrapper}>
        <Logo>{showLogo ? "Lefthoek" : `${index}/${length}`}</Logo>
      </Box>
    </Box>
  );
};

export default SlideMeta;
