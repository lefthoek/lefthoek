/** @jsx jsx */
import { FunctionComponent } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { jsx, Box, Heading } from "theme-ui";
import { CallToAction } from "../../components";
import { Left, Hoek } from "./LeftHoek";
import {
  overlayStyles,
  outerWrapperStyles,
  rightPanelStyles,
  leftPanelStyles,
  rightHeadingStyles,
  leftHeadingStyles,
} from "./styles";

const HeroSection: FunctionComponent<{
  title: string;
  percentageVisible: MotionValue;
  takeAway: string;
  callToAction: string;
  className?: string;
}> = ({ className, title, takeAway, percentageVisible, callToAction }) => {
  const leftX = useTransform(percentageVisible, [100, 0], [-75, 500]);
  const hoekX = useTransform(percentageVisible, [100, 0], [50, -525]);
  const ctaOpacity = useTransform(percentageVisible, [100, 90], [0, 1]);
  return (
    <Box sx={outerWrapperStyles} className={className}>
      <Box sx={leftPanelStyles}>
        <motion.div style={{ x: hoekX }} sx={{ zIndex: 100 }}>
          <Hoek sx={leftHeadingStyles} />
        </motion.div>
      </Box>
      <Box sx={rightPanelStyles}>
        <motion.div style={{ x: leftX }} sx={{ zIndex: 100 }}>
          <Left sx={rightHeadingStyles} />
        </motion.div>
      </Box>
      <motion.div style={{ opacity: ctaOpacity }}>
        <Box sx={overlayStyles}>
          <Heading sx={{ mb: 5 }} variant="abstract">
            {title}
          </Heading>
          <Heading sx={{ mb: 5, maxWidth: "20rem" }} variant="body">
            {takeAway}
          </Heading>
          <CallToAction callToAction={callToAction} />
        </Box>
      </motion.div>
    </Box>
  );
};

export { HeroSection };
