/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, AspectImage } from "theme-ui";
import { selectionWrapper } from "./styles";
import { Markdown } from "../../../components";

const FeatureDetail: FunctionComponent<{
  image: any;
  text: string;
  className?: string;
}> = ({ text, image, className }) => {
  return (
    <Box className={className} sx={selectionWrapper}>
      <Markdown sx={{ flex: 2, mr: [0, 6] }} text={text} />
      <Box sx={{ flex: 3 }}>
        <AspectImage ratio={1 / 1} src={image} />
      </Box>
    </Box>
  );
};

export { FeatureDetail };
