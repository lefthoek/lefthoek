/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Heading, Text } from "theme-ui";
import {
  useMotionTemplate,
  useViewportScroll,
  useTransform,
  motion,
} from "framer-motion";

const Section: FunctionComponent<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <Box
      as={motion.section}
      className={className}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: ["start", "start"],
        minHeight: "40vh",
        p: 4,
        color: "text",
        bg: "muted",
      }}
    >
      {children}
    </Box>
  );
};

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

const FeaturesSection: FunctionComponent = () => {
  return <Section>Features</Section>;
};
const UniqueSellingPointsSection: FunctionComponent = () => {
  return <Section>Unique Selling Points</Section>;
};

const HeroSection: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  const { scrollY } = useViewportScroll();
  const height = useTransform(scrollY, [0, 300], [100, 0]);
  const opacity = useTransform(scrollY, [250, 300], [1, 0]);
  const vh = useMotionTemplate`${height}vh`;
  return (
    <motion.section
      style={{ height: vh }}
      className={className}
      sx={{
        boxShadow: "0 1px 20px rgba(0,0,0,0.7)",
        overflow: "hidden",
        position: "fixed",
        bg: "primary",
        display: "flex",
        flexDirection: "column",
        justifyContent: ["center", "center"],
        alignItems: ["start", "start"],
        color: "white",
        top: 0,
        width: "100vw",
      }}
    >
      <motion.div style={{ opacity }} sx={{ p: 6 }}>
        <Heading sx={{ textAlign: "left", mb: 3 }} variant="display">
          Lefthoek
        </Heading>
        <Text sx={{}}> Cutting Corners as a Service</Text>
      </motion.div>
    </motion.section>
  );
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
  return (
    <motion.article
      sx={{
        display: "flex",
        top: 0,
        width: "100vw",
        mt: 300,
        flexDirection: "column",
      }}
    >
      <FeaturesSection />
      <DemoSection />
      <UniqueSellingPointsSection />
      <CallToActionSection />
      <FooterSection />
    </motion.article>
  );
};

const Wrapper: FunctionComponent = () => {
  return (
    <Box>
      <HeroSection />
      <LandingPage />
    </Box>
  );
};

export default Wrapper;
