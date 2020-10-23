/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import {
  CallToActionSection,
  FooterSection,
  HeroSection,
  FeaturesSection,
  UniqueSellingPointsSection,
} from "../sections";
import { useTransform, useViewportScroll } from "framer-motion";
import { Reveal } from "../animations";
import { Container } from "../components";
// @ts-ignore
import content from "./content.yaml";
import { callToActionSectionStyles, footerContainerStyles } from "./styles";

const LandingPage: FunctionComponent = () => {
  const { scrollY } = useViewportScroll();
  const heroPercentageVisible = useTransform(scrollY, [0, 600], [100, 0]);

  return (
    <Container siteMeta={content.siteMeta}>
      <Reveal percentageVisible={heroPercentageVisible}>
        <HeroSection
          percentageVisible={heroPercentageVisible}
          {...content.heroSection}
        />
      </Reveal>
      <FeaturesSection {...content.featureSection} />
      <UniqueSellingPointsSection {...content.uniqueSellingPointsSection} />
      <CallToActionSection
        sx={callToActionSectionStyles}
        {...content.callToActionSection}
      />
      <Box as="footer" sx={footerContainerStyles}>
        <FooterSection />
      </Box>
    </Container>
  );
};

export default LandingPage;
