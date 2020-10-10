/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Text, Heading } from "theme-ui";
import { figureStyles, statWrapperStyles } from "./styles";

const Stat: FunctionComponent<{
  figure: string;
  className?: string;
  reference?: string;
  children: string | string[];
}> = ({ figure, className, children }) => {
  return (
    <Box as="li" className={className} sx={statWrapperStyles}>
      <Heading sx={figureStyles} variant="display">
        {figure}
      </Heading>
      <Text as="p">{children}</Text>
    </Box>
  );
};

export { Stat };
