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
        <Logo
          sx={{
            fontSize: showLogo ? [4, 5, 6] : [1, 2, 3],
            py: showLogo ? 2 : 1,
            px: showLogo ? 3 : 2,
          }}
        >
          {showLogo
            ? "Lefthoek"
            : `${index < 10 ? 0 : ""}${index}/${length < 10 ? 0 : ""}${length}`}
        </Logo>
      </Box>
    </Box>
  );
};

export default SlideMeta;
