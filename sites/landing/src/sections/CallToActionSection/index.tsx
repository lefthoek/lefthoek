/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Heading } from "theme-ui";
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
  callToAction: string;
  takeAway?: string;
}> = ({ title, callToAction }) => {
  return (
    <Section as="footer" sx={outerWrapperStyles}>
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
        <Box sx={iconWrapperStyles}>
          <Email sx={iconStyles} />
          <LinkedIn sx={iconStyles} />
        </Box>
      </Box>
    </Section>
  );
};

export { CallToActionSection };
