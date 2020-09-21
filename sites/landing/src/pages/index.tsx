/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Section } from "../components";
import { HeroSection, FeaturesSection } from "../sections";
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

const UniqueSellingPointsSection: FunctionComponent = () => {
  return <Section>Unique Selling Points</Section>;
};

const CallToActionSection: FunctionComponent = () => {
  return (
    <Section
      sx={{
        bg: "primary",
        color: "white",
        minHeight: "20vh",
        maxHeight: "40vh",
      }}
    >
      Call To Action
    </Section>
  );
};
const LandingPage: FunctionComponent = () => {
  const { scrollY } = useViewportScroll();
  return (
    <Container>
      <Reveal scrollY={scrollY}>
        <HeroSection />
      </Reveal>
      <FeaturesSection />
      <DemoSection />
      <UniqueSellingPointsSection />
      <CallToActionSection />
      <FooterSection />
    </Container>
  );
};

export default LandingPage;
