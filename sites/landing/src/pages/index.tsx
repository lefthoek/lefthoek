/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Section } from "../components";
import {
  HeroSection,
  FeaturesSection,
  CallToActionSection,
  UniqueSellingPointsSection,
} from "../sections";
import { useViewportScroll } from "framer-motion";
import { Reveal } from "../animations";
import { Container } from "../components";

const DemoSection: FunctionComponent = () => {
  return <Section sx={{ bg: "text", color: "muted" }}>Demo</Section>;
};

const FooterSection: FunctionComponent = () => {
  return (
    <Section
      sx={{
        bg: "text",
        color: "muted",
        minHeight: "20vh",
        maxHeight: "40vh",
      }}
    >
      Footer
    </Section>
  );
};

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
      {false && <DemoSection />}
      <UniqueSellingPointsSection />
      <CallToActionSection />
      <FooterSection />
    </Container>
  );
};

export default LandingPage;
