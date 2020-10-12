/** @jsx jsx */
import { FunctionComponent } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Background } from "@lefthoek/atoms";
import { jsx, Box, Heading } from "theme-ui";
//@ts-ignore
import { useResponsiveValue } from "@theme-ui/match-media";
import {
  outerWrapperStyles,
  rightPanelStyles,
  leftPanelStyles,
  rightHeadingStyles,
  leftHeadingStyles,
} from "./styles";

const LefthoekPanels: FunctionComponent<{
  percentageVisible: MotionValue;
  className?: string;
}> = ({ percentageVisible, children, className }) => {
  const leftX = useTransform(percentageVisible, [100, 0], [-75, 500]);
  const hoekX = useTransform(percentageVisible, [100, 0], [50, -525]);
  return (
    <Box sx={outerWrapperStyles} className={className}>
      <Background sx={leftPanelStyles}>
        <motion.div style={{ x: hoekX }}>
          <Heading sx={leftHeadingStyles}>Hoek</Heading>
        </motion.div>
      </Background>
      <Background sx={rightPanelStyles}>
        <motion.div style={{ x: leftX }}>
          <Heading sx={rightHeadingStyles}>Left</Heading>
        </motion.div>
      </Background>
      {children}
    </Box>
  );
};

export { LefthoekPanels };
