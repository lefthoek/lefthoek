/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
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

const LandingPage: FunctionComponent = () => {
  const { scrollY } = useViewportScroll();
  const heroPercentageVisible = useTransform(scrollY, [0, 600], [100, 0]);

  return (
    <Container>
      <Reveal percentageVisible={heroPercentageVisible}>
        <HeroSection
          percentageVisible={heroPercentageVisible}
          {...content.heroSection}
        />
      </Reveal>
      <FeaturesSection {...content.featureSection} />
      <UniqueSellingPointsSection {...content.uniqueSellingPointsSection} />
      <CallToActionSection
        sx={{
          mb: ["9rem", "11rem"],
          boxShadow: "0 1px 20px rgba(0,0,0,0.7)",
        }}
        {...content.callToActionSection}
      />
      <div
        sx={{
          zIndex: "-10",
          position: "fixed",
          height: ["9rem", "12rem"],
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <FooterSection />
      </div>
    </Container>
  );
};

export default LandingPage;
