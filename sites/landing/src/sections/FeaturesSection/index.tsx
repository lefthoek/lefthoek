/** @jsx jsx */
import { FunctionComponent, useState } from "react";
import { jsx, Image } from "theme-ui";
import { Section } from "../../components";
import { FeatureSelector } from "./FeatureSelector";
import { FeatureDetail } from "./FeatureDetail";
import { Fade } from "../../animations";
//@ts-ignore
import { motion } from "framer-motion";
import { useResponsiveValue } from "@theme-ui/match-media";
import { outerWrapperStyles, featuresWrapperStyles } from "./styles";

type FeaturesSectionProps = {
  title: string;
  takeAway: string;
  features: { title: string; description: string }[];
};

const states = ["initial", "normal", "last"];
const variants = {
  initial: { x: "33.333%" },
  normal: { x: 0 },
  last: { x: "-33.333%" },
};

const FeaturesSection: FunctionComponent<FeaturesSectionProps> = ({
  title,
  takeAway,
  features,
}) => {
  const [selectedText, selectText] = useState(features[0].title);
  const shouldAnimate = useResponsiveValue([true, false]);
  const selectedIndex = features.findIndex(
    ({ title }) => title === selectedText
  );
  const selectedDescription = features.find(
    ({ title }) => title === selectedText
  ).description;
  const onSelect = ({ title }) => selectText(title);
  return (
    <Section sx={outerWrapperStyles} title={title} takeAway={takeAway}>
      <motion.div
        variants={variants}
        initial="initial"
        animate={shouldAnimate ? states[selectedIndex] : "normal"}
        sx={featuresWrapperStyles}
      >
        {features.map(({ title }) => {
          return (
            <FeatureSelector
              key={title}
              onSelect={onSelect}
              isSelected={title === selectedText}
              title={title}
            ></FeatureSelector>
          );
        })}
      </motion.div>
      <Fade id={selectedText}>
        <FeatureDetail text={selectedDescription}>
          <Image src={`images/${selectedText}.png`} />
        </FeatureDetail>
      </Fade>
    </Section>
  );
};

export { FeaturesSection };
