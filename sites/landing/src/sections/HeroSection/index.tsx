/** @jsx jsx */
import { FunctionComponent } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { LefthoekPanels } from "@lefthoek/molecules";
import { jsx, Box, Heading } from "theme-ui";
//@ts-ignore
import { useResponsiveValue } from "@theme-ui/match-media";
import { CallToAction } from "../../components";
import { overlayStyles } from "./styles";

const HeroSection: FunctionComponent<{
  title: string;
  percentageVisible: MotionValue;
  takeAway: string;
  callToAction: string;
  className?: string;
}> = ({ className, title, takeAway, percentageVisible, callToAction }) => {
  const ctaOpacity = useTransform(percentageVisible, [100, 90], [0, 1]);
  const variant = useResponsiveValue(["midnight", "midnight", "skyBlue"]);
  return (
    <LefthoekPanels className={className} percentageVisible={percentageVisible}>
      <motion.div style={{ opacity: ctaOpacity }}>
        <Box sx={overlayStyles}>
          <Heading
            sx={{ mb: 5, maxWidth: ["15rem", "100%"] }}
            variant="abstract"
          >
            {title}
          </Heading>
          <Heading sx={{ mb: 5, maxWidth: "20rem" }} variant="body">
            {takeAway}
          </Heading>
          <CallToAction variant={variant} callToAction={callToAction} />
        </Box>
      </motion.div>
    </LefthoekPanels>
  );
};

export { HeroSection };
