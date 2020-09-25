/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Section, CallToAction } from "../../components";
import { outerWrapperStyles, callToActionStyles } from "./styles";

const CallToActionSection: FunctionComponent<{
  title: string;
  takeAway?: string;
}> = ({ title, takeAway }) => {
  return (
    <Section sx={outerWrapperStyles} title={title} takeAway={takeAway}>
      <CallToAction sx={callToActionStyles} />
    </Section>
  );
};

export { CallToActionSection };
