/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Text, AspectImage, Heading } from "theme-ui";
import { figureStyles, statWrapperStyles } from "./styles";

const Stat: FunctionComponent<{
  figure: string;
  imageURL?: string;
  className?: string;
  reference?: string;
  children: string | string[];
}> = ({ figure, className, imageURL, children }) => {
  return (
    <Box as="li" className={className} sx={statWrapperStyles}>
      <Box sx={{ width: "100%" }}>
        <AspectImage src={imageURL} ratio={1 / 1} />
      </Box>
      <Heading sx={figureStyles} variant="display">
        {figure}
      </Heading>
      <Text as="p">{children}</Text>
    </Box>
  );
};

export { Stat };
