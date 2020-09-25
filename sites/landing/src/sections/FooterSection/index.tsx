/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Section } from "../../components";
import { LinkedIn, Email } from "./icons";
import { iconStyles, outerWrapperStyles } from "./styles";

const FooterSection: FunctionComponent = () => {
  return (
    <Section sx={outerWrapperStyles}>
      <Email sx={iconStyles} />
      <LinkedIn sx={iconStyles} />
    </Section>
  );
};

export { FooterSection };
