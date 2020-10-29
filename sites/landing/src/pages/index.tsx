/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, SxStyleProp } from "theme-ui";
import {
  AboutSection,
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

const callToActionSectionStyles: SxStyleProp = {
  mb: ["9rem", "11rem"],
  boxShadow: "0 1px 20px rgba(0,0,0,0.7)",
};

const footerContainerStyles: SxStyleProp = {
  position: "fixed",
  height: ["9rem", "12rem"],
  bottom: 0,
  left: 0,
  right: 0,
};

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
      <AboutSection {...content.aboutSection}/>
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
