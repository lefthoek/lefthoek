/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Heading } from "theme-ui";
import { Section, CallToAction } from "../../components";
import { outerWrapperStyles, callToActionStyles } from "./styles";

const CallToActionSection: FunctionComponent = () => {
  return (
    <Section sx={outerWrapperStyles}>
      <Heading sx={{textAlign: "center"}} variant="display">Start Cutting Corners</Heading>
      <CallToAction sx={callToActionStyles} />
    </Section>
  );
};

export { CallToActionSection };
