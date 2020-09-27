/** @jsx jsx */
import { FunctionComponent, useState } from "react";
import { jsx, Box } from "theme-ui";
import { Section } from "../../components";
import { FeatureSelector } from "./FeatureSelector";
import { FeatureDetail } from "./FeatureDetail";
import { Fade } from "../../animations";
import {
  outerWrapperStyles,
  featureDetailOverrideStyles,
  featuresWrapperStyles,
} from "./styles";

// @ts-ignore
import organize from "./filter.png";
// @ts-ignore
import enhance from "./enhance.png";
// @ts-ignore
import contextualize from "./contextualize.png";
const images = [organize, enhance, contextualize];

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
  const selectedIndex = features.findIndex(
    ({ title }) => title === selectedText
  );
  const selectedImage = images[selectedIndex];
  const onSelect = ({ title }) => selectText(title);
  return (
    <Section sx={outerWrapperStyles} title={title} takeAway={takeAway}>
      <Box sx={featuresWrapperStyles}>
        {features.map(({ title, description }, index) => (
          <FeatureSelector
            onSelect={onSelect}
            isSelected={title === selectedText}
            title={title}
          >
            <FeatureDetail
              image={images[index]}
              sx={featureDetailOverrideStyles}
              text={description}
            />
          </FeatureSelector>
        ))}
      </Box>
      <Fade id={selectedText}>
        <FeatureDetail image={selectedImage} text={selectedDescription} />
      </Fade>
    </Section>
  );
};

export { FeaturesSection };
