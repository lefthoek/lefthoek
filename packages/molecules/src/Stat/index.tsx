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
      <Link target="_blank" sx={referenceStyles} href={reference}>
        <Heading
          sx={{
            ...figureStyles,
            "&:hover": {
              color: reference ? "primary" : "secondary",
            },
          }}
          variant="display"
        >
          {figure}
        </Heading>
        <Text as="p">{children}</Text>
      </Link>
    </Box>
  );
};

export { Stat };
