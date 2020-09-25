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

const LandingPage: FunctionComponent = () => {
  const { scrollY } = useViewportScroll();
  const heroSection = {
    title: "Lefthoek",
    takeAway: "Cutting Corners as a Service",
  };
  return (
    <Container>
      <Reveal scrollY={scrollY}>
        <HeroSection {...heroSection} />
      </Reveal>
      <FeaturesSection />
      <UniqueSellingPointsSection />
      <CallToActionSection />
      <FooterSection />
    </Container>
  );
};

export default LandingPage;
