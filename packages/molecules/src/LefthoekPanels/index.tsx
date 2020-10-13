/** @jsx jsx */
import { FunctionComponent } from "react";
import { MotionValue } from "framer-motion";
import { Background } from "@lefthoek/atoms";
import { jsx, Box, Heading } from "theme-ui";
//@ts-ignore
import { useResponsiveValue } from "@theme-ui/match-media";
import { Slide } from "./animations";
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
  return (
    <Box sx={outerWrapperStyles} className={className}>
      <Background sx={leftPanelStyles}>
        <Slide direction={-1} offset={50} percentageVisible={percentageVisible}>
          <Heading sx={leftHeadingStyles}>Hoek</Heading>
        </Slide>
      </Background>
      <Background sx={rightPanelStyles}>
        <Slide direction={1} offset={-80} percentageVisible={percentageVisible}>
          <Heading sx={rightHeadingStyles}>Left</Heading>
        </Slide>
        {children}
      </Background>
    </Box>
  );
};

export { LefthoekPanels };
