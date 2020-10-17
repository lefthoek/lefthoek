/** @jsx jsx */
import { FunctionComponent, useState } from "react";
import { jsx, Box, Image } from "theme-ui";
import { Section } from "../../components";
import { FeatureSelector } from "./FeatureSelector";
import { FeatureDetail } from "./FeatureDetail";
import { Fade } from "../../animations";
import {
  outerWrapperStyles,
  featureDetailOverrideStyles,
  featuresWrapperStyles,
} from "./styles";

type FeaturesSectionProps = {
  title: string;
  takeAway: string;
  features: { title: string; description: string }[];
};

const FeaturesSection: FunctionComponent<FeaturesSectionProps> = ({
  title,
  takeAway,
  features,
}) => {
  const [selectedText, selectText] = useState(features[0].title);
  const selectedDescription = features.find(
    ({ title }) => title === selectedText
  ).description;
  const onSelect = ({ title }) => selectText(title);
  return (
    <Section sx={outerWrapperStyles} title={title} takeAway={takeAway}>
      <Box sx={featuresWrapperStyles}>
        {features.map(({ title, description }) => (
          <FeatureSelector
            key={title}
            onSelect={onSelect}
            isSelected={title === selectedText}
            title={title}
          >
            <FeatureDetail
              sx={featureDetailOverrideStyles}
              text={description}>
          <Image src="images/onboard.png" />
          </FeatureDetail>
          </FeatureSelector>
        ))}
      </Box>
      <Fade id={selectedText}>
        <FeatureDetail text={selectedDescription}>
          <Image src="images/onboard.png" />
        </FeatureDetail>
      </Fade>
    </Section>
  );
};

export { FeaturesSection };
