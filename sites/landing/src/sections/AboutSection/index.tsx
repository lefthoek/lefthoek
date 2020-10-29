/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box} from "theme-ui";
import { Markdown  } from "@lefthoek/molecules"
import { Section } from "../../components";
import {
  outerWrapperStyles,
  contentWrapperStyles,
} from "./styles";

const AboutSection: FunctionComponent<{
  title: string;
  className?: string;
  description: string;
  takeAway?: string;
}> = ({ title, description, takeAway, className }) => {
  return (
    <Section title={title} takeAway={takeAway} className={className} sx={outerWrapperStyles}>
      <Box sx={contentWrapperStyles}>
      <Markdown text={description}/>
        </Box>
    </Section>
  );
};

export { AboutSection };
