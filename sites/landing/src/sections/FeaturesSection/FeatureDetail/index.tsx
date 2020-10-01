/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, AspectRatio } from "theme-ui";
import {
  outerWrapperStyles,
  imageWrapperStyles,
  textWrapperStyles,
} from "./styles";
import { Markdown } from "../../../components";

const FeatureDetail: FunctionComponent<{
  text: string;
  className?: string;
}> = ({ text, className }) => {
  return (
    <Box className={className} sx={outerWrapperStyles}>
      <Markdown sx={textWrapperStyles} text={text} />
      <Box sx={imageWrapperStyles}>
        <AspectRatio ratio={3 / 2} />
      </Box>
    </Box>
  );
};

export { FeatureDetail };
