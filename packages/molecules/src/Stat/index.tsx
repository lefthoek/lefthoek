/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Link, Text, Heading } from "theme-ui";
import { figureStyles, referenceStyles, statWrapperStyles } from "./styles";

const Stat: FunctionComponent<{
  figure: string;
  className?: string;
  reference?: string;
  children: string | string[];
}> = ({ figure, reference, className, children }) => {
  return (
    <Box as="li" className={className} sx={statWrapperStyles}>
      <Heading sx={figureStyles} variant="display">
        {figure}
      </Heading>
      <Text as="p">
        {children}
        {reference && (
          <Link target="_blank" sx={referenceStyles} href={reference}>
            *
          </Link>
        )}
      </Text>
    </Box>
  );
};

export { Stat };
