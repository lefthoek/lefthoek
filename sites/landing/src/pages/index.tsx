/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, SxStyleProp } from "theme-ui";
import { graphql } from "gatsby";
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

const effectsWrapperStyles: SxStyleProp = {
  bg: "secondary",
};

const cutCornerStyles: SxStyleProp = {
  clipPath: [
    `polygon(
    0 0%,
    100% 0,
    100% 0,
    100% 0,
    100% calc(100% - 50px),
    0 100%,
    100% 100%,
    0 calc(100% - 0px)
  )`,
    `polygon(
    0 0%,
    100% 0,
    100% 0,
    100% 0,
    100% calc(100% - 100px),
    0 100%,
    100% 100%,
    0 calc(100% - 0px)
  )`,
  ],
};

const contentStyles: SxStyleProp = {
  mb: ["9rem", "12rem"],
  boxShadow: "0 0px 20px rgba(0,0,0,0.7)",
  zIndex: 1,
};

const footerContainerStyles: SxStyleProp = {
  position: "fixed",
  height: ["9rem", "12rem"],
  bottom: 0,
  left: 0,
  right: 0,
};

const CutCornerWrapper: FunctionComponent<{ className?: string }> = ({
  className,
  children,
}) => {
  return (
    <Box className={className} sx={effectsWrapperStyles}>
      <Box sx={cutCornerStyles}>{children}</Box>
    </Box>
  );
};

const LandingPage: FunctionComponent<{ data: any }> = ({ data }) => {
  const { scrollY } = useViewportScroll();
  const scrollMargin = 350;
  const heroPercentageVisible = useTransform(
    scrollY,
    [0, scrollMargin],
    [100, 0]
  );
  return (
    <Container sx={{ mt: scrollMargin }} siteMeta={content.siteMeta}>
      <Reveal percentageVisible={heroPercentageVisible}>
        <HeroSection
          percentageVisible={heroPercentageVisible}
          {...content.heroSection}
        />
      </Reveal>
      <Box sx={contentStyles}>
        <CutCornerWrapper sx={{ bg: "muted" }}>
          <AboutSection {...content.aboutSection} />
        </CutCornerWrapper>
        <FeaturesSection images={data} {...content.featureSection} />
        <CutCornerWrapper>
          <UniqueSellingPointsSection {...content.uniqueSellingPointsSection} />
        </CutCornerWrapper>
        <CallToActionSection {...content.callToActionSection} />
      </Box>
      <Box sx={footerContainerStyles}>
        <FooterSection />
      </Box>
    </Container>
  );
};
export const query = graphql`
  query {
    onboard: file(relativePath: { eq: "images/onboard.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    research: file(relativePath: { eq: "images/research.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    synchronize: file(relativePath: { eq: "images/synchronize.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default LandingPage;
