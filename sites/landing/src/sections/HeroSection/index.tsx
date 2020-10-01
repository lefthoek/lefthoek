/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Section, CallToAction } from "../../components";
import { outerWrapperStyles } from "./styles";

const HeroSection: FunctionComponent<{
  title: string;
  takeAway: string;
  callToAction: string;
  className?: string;
}> = ({ className, title, takeAway, callToAction }) => {
  return (
    <Section
      className={className}
      sx={outerWrapperStyles}
      title={title}
      takeAway={takeAway}
    >
      <CallToAction callToAction={callToAction} />
    </Section>
  );
};

export { HeroSection };
