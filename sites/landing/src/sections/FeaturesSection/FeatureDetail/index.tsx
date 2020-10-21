/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import {
  outerWrapperStyles,
  imageWrapperStyles,
  textWrapperStyles,
} from "./styles";
import { Markdown } from "../../../components";

const FeatureDetail: FunctionComponent<{
  text: string;
  className?: string;
}> = ({ text, className, children }) => {
  return (
    <Box className={className} sx={outerWrapperStyles}>
      <Markdown sx={textWrapperStyles} text={text} />
      <Box sx={imageWrapperStyles}>{children}</Box>
    </Box>
  );
};

export { FeatureDetail };
