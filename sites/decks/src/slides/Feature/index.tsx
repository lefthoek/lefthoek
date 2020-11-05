/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Image, Text, Box } from "theme-ui";
import { Basic } from "../Basic";
import {
  outerWrapperStyles,
  innerWrapperStyles,
  imageStyles,
  imageWrapperStyles,
} from "./styles";

const Feature: FunctionComponent<{
  before: string;
  after: string;
  index: number;
  variant?: string;
  className?: string;
}> = ({ before, children, after, index, className }) => {
  return (
    <Basic index={index} sx={outerWrapperStyles} className={className}>
      {children}
      <Box sx={innerWrapperStyles}>
        <Box sx={imageWrapperStyles}>
          <Text>Without Lefthoek</Text>
          <Image sx={imageStyles} src={before} />
        </Box>
        <Box sx={imageWrapperStyles}>
          <Text>With Lefthoek</Text>
          <Image sx={imageStyles} src={after} />
        </Box>
      </Box>
    </Basic>
  );
};

export { Feature };
