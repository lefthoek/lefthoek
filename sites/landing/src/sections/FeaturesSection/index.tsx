/** @jsx jsx */
import { FunctionComponent, useState } from "react";
import { jsx } from "theme-ui";
import Img from "gatsby-image";
import { Section } from "../../components";
import { FeatureSelector } from "./FeatureSelector";
import { FeatureDetail } from "./FeatureDetail";
//@ts-ignore
import { motion } from "framer-motion";
import { useResponsiveValue } from "@theme-ui/match-media";
import {
  outerWrapperStyles,
  featuresDetailStyles,
  featuresWrapperStyles,
} from "./styles";

type FeaturesSectionProps = {
  title: string;
  takeAway: string;
  images: any;
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
  images,
}) => {
  console.log(images);
  const [selectedText, selectText] = useState(features[0].title);
  const shouldAnimate = useResponsiveValue([true, false]);
  const selectedIndex = features.findIndex(
    ({ title }) => title === selectedText
  );
  const onSelect = ({ title }) => selectText(title);
  return (
    <Section sx={outerWrapperStyles} title={title} takeAway={takeAway}>
      <motion.div
        variants={variants}
        initial="initial"
        transition={{ type: "spring", damping: 15, delay: 0.2 }}
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
      <motion.div
        variants={variants}
        initial="initial"
        transition={{ type: "spring", damping: 15, delay: 0.2 }}
        animate={states[selectedIndex]}
        sx={featuresDetailStyles}
      >
        {features.map(({ title, description }, index) => {
          return (
            <motion.div
              sx={{
                width: "33.333%",
              }}
              animate={{
                opacity: selectedIndex === index ? 1 : 0,
              }}
            >
              <FeatureDetail key={title} text={description}>
                <Img
                  title={title}
                  alt={title}
                  fluid={images[title].childImageSharp.fluid}
                />
              </FeatureDetail>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
};

export { FeaturesSection };
