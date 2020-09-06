/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box, Text, Heading } from "theme-ui";
import { figureStyles, statWrapperStyles } from "./styles";
import { titleCase } from "voca";

const Stat: FunctionComponent<{
  figure: string;
  reference: string;
  children: ReactNodeArray[];
  slideData: any;
}> = ({ figure, reference, children }) => {
  return (
    <Box as="li" sx={statWrapperStyles}>
      <Heading sx={figureStyles} variant="display">
        {titleCase(figure)}
      </Heading>
      <Text as="p">{children}</Text>
    </Box>
  );
};

export default Stat;
