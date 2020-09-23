/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Heading, Text } from "theme-ui";
import { Section, CallToAction } from "../../components";
import { outerWrapperStyles, headingStyles } from "./styles";

const HeroSection: FunctionComponent<{
  title: string;
  takeAway: string;
  className?: string;
}> = ({ className, title, takeAway }) => {
  return (
    <Section className={className} sx={outerWrapperStyles}>
      <Box>
        <Heading sx={headingStyles} variant="display">
          {title}
        </Heading>
        <Text as="p">{takeAway}</Text>
      </Box>
      <CallToAction />
    </Section>
  );
};

export { HeroSection };
