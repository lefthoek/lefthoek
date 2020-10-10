/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Text } from "theme-ui";
import { outerWrapper, innerWrapper } from "./styles";
import { Logo } from "@lefthoek/atoms";
import { useDeck } from "gatsby-theme-mdx-deck";

const leftZeroPad = (n: number) => `${n < 10 ? "0" : ""}${n}`;

const Index: FunctionComponent<{ index: number; length: number }> = ({
  index,
  length,
}) => {
  return <Text>{`${leftZeroPad(index)}/${leftZeroPad(length)}`}</Text>;
};

const SlideMeta: FunctionComponent = () => {
  const { index, length } = useDeck();
  const showLogo = index === 0 || index === length - 1;
  return (
    <Box sx={outerWrapper}>
      <Box sx={innerWrapper}>
        {showLogo ? (
          <Logo>Lefthoek</Logo>
        ) : (
          <Index index={index} length={length} />
        )}
      </Box>
    </Box>
  );
};

export default SlideMeta;
