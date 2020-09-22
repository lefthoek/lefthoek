/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Text, AspectImage } from "theme-ui";
import { selectionWrapper } from "./styles";

const FeatureDetail: FunctionComponent<{
  image: any;
  text: string[];
  className?: string;
}> = ({ text, image, className }) => {
  return (
    <Box className={className} sx={selectionWrapper}>
      <Box sx={{ flex: 2, mr: [0, 6] }}>
        {text.map((t: string) => (
          <Text as="p">{t}</Text>
        ))}
      </Box>
      <Box sx={{ flex: 3 }}>
        <AspectImage ratio={1 / 1} src={image} />
      </Box>
    </Box>
  );
};

export { FeatureDetail };
