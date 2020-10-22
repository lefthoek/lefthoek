/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { Section } from "../../components";
import { LinkedIn, Email } from "./icons";
import { iconStyles, iconWrapperStyles, outerWrapperStyles } from "./styles";

const FooterSection: FunctionComponent = () => {
  return (
    <Section sx={outerWrapperStyles}>
      <Box sx={iconWrapperStyles}>
        <Email email="contact@lefthoek.com" sx={iconStyles} />
        <LinkedIn url="https://www.linkedin.com/in/yeehaa/" sx={iconStyles} />
      </Box>
    </Section>
  );
};

export { FooterSection };
