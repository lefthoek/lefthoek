/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { Section, CallToAction } from "../../components";
import { LinkedIn, Email } from "./icons";
import {
  outerWrapperStyles,
  innerWrapperStyles,
  iconStyles,
  iconWrapperStyles,
  callToActionStyles,
} from "./styles";

const CallToActionSection: FunctionComponent<{
  title: string;
  takeAway?: string;
}> = ({ title, takeAway }) => {
  return (
    <Section sx={outerWrapperStyles} title={title} takeAway={takeAway}>
      <Box sx={innerWrapperStyles}>
        <CallToAction variant="lobster" sx={callToActionStyles} />
        <Box sx={iconWrapperStyles}>
          <Email sx={iconStyles} />
          <LinkedIn sx={iconStyles} />
        </Box>
      </Box>
    </Section>
  );
};

export { CallToActionSection };
