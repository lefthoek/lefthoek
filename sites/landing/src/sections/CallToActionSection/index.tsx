/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Heading } from "theme-ui";
import { Section, CallToAction } from "../../components";
import {
  outerWrapperStyles,
  innerWrapperStyles,
  callToActionStyles,
} from "./styles";

const CallToActionSection: FunctionComponent<{
  title: string;
  className?: string;
  callToAction: string;
  takeAway?: string;
}> = ({ title, className, callToAction }) => {
  return (
    <Section className={className} sx={outerWrapperStyles}>
      <Heading
        sx={{ mb: 5, alignSelf: "flex-start", maxWidth: ["25rem"] }}
        variant="abstract"
      >
        {title}
      </Heading>
      <Box sx={innerWrapperStyles}>
        <CallToAction
          callToAction={callToAction}
          variant="lobster"
          sx={callToActionStyles}
        />
      </Box>
    </Section>
  );
};

export { CallToActionSection };
