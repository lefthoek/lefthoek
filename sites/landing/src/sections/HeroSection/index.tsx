/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Text, Heading } from "theme-ui";
import { Section, CallToAction } from "../../components";
import {
  outerWrapperStyles,
  rightPanelStyles,
  leftPanelStyles,
  rightHeadingStyles,
  leftHeadingStyles,
} from "./styles";

const HeroSection: FunctionComponent<{
  title: string;
  takeAway: string;
  callToAction: string;
  className?: string;
}> = ({ className, title, takeAway, callToAction }) => {
  return (
    <Box sx={outerWrapperStyles} className={className}>
      <Box sx={rightPanelStyles}>
        <Text sx={leftHeadingStyles}>Left</Text>
      </Box>
      <Box sx={leftPanelStyles}>
        <Text sx={rightHeadingStyles}>Hoek</Text>
        <Box>
          <Heading sx={{ mb: 5 }} variant="display">
            {title}
          </Heading>
          <CallToAction callToAction={callToAction} />
        </Box>
      </Box>
    </Box>
  );
};

export { HeroSection };
