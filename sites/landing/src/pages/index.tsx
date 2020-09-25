/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import {
  CallToActionSection,
  HeroSection,
  FeaturesSection,
  FooterSection,
  UniqueSellingPointsSection,
} from "../sections";
import { useViewportScroll } from "framer-motion";
import { Reveal } from "../animations";
import { Container } from "../components";
// @ts-ignore
import content from "./content.yaml";

const LandingPage: FunctionComponent = () => {
  const { scrollY } = useViewportScroll();
  return (
    <Container>
      <Reveal scrollY={scrollY}>
        <HeroSection {...content.heroSection} />
      </Reveal>
      <FeaturesSection {...content.featureSection} />
      <UniqueSellingPointsSection {...content.uniqueSellingPointsSection} />
      <CallToActionSection {...content.callToActionSection} />
      <FooterSection />
    </Container>
  );
};

export default LandingPage;
