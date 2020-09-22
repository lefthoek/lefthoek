/** @jsx jsx */
import { FunctionComponent, useState } from "react";
import { jsx, Heading, Box, Text } from "theme-ui";
import { Feature, Section } from "../../components";
import {
  outerWrapper,
  featuresWrapper,
  headerWrapper,
  selectionWrapper,
} from "./styles";
import { texts } from "./sampleCopy";

const FeaturesSection: FunctionComponent = () => {
  const [selectedText, selectText] = useState("filter");
  const onSelect = ({ title }) => selectText(title);
  return (
    <Section sx={outerWrapper}>
      <Box sx={headerWrapper}>
        <Heading variant="display">An Amazing Slogan</Heading>
        <Heading as="h3" variant="abstract">
          Something Even Better
        </Heading>
      </Box>
      <Box sx={featuresWrapper}>
        {Object.entries(texts).map(([title, text]) => {
          return (
            <Feature
              onSelect={onSelect}
              isSelected={title === selectedText}
              title={title}
              text={text}
            >
              <Text>{texts[selectedText]}</Text>
            </Feature>
          );
        })}
      </Box>
      <Box sx={selectionWrapper}>
        <Text as="p">{texts[selectedText]}</Text>
      </Box>
    </Section>
  );
};

export { FeaturesSection };
