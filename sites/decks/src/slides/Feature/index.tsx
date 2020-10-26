/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Image, Text, Box } from "theme-ui";
import { Basic } from "../Basic";
import { Fade } from "./animations";
import { outerWrapperStyles, innerWrapperStyles } from "./styles";

const Feature: FunctionComponent<{
  before: string;
  after: string;
  index: number;
  showOverlay: boolean;
  variant?: string;
  className?: string;
}> = ({ before, showOverlay = false, children, after, index, className }) => {
  return (
    <Basic
      variant="midnight"
      index={index}
      sx={outerWrapperStyles}
      className={className}
    >
      {children}
      <Box sx={innerWrapperStyles}>
        <Box sx={{ position: "relative" }}>
          <Image src={before} />
          <Fade showOverlay={showOverlay}>
            <Text variant="display">Before</Text>
          </Fade>
        </Box>
        <Box sx={{ position: "relative" }}>
          <Image src={after} />
          <Fade showOverlay={showOverlay}>
            <Text variant="display">After</Text>
          </Fade>
        </Box>
      </Box>
    </Basic>
  );
};

export { Feature };
