/** @jsx jsx */
import { FunctionComponent } from "react";
import { MotionValue, useMotionValue } from "framer-motion";
import { Background } from "@lefthoek/atoms";
import { jsx, Box, Heading } from "theme-ui";
//@ts-ignore
import { Slide } from "./animations";
import {
  outerWrapperStyles,
  rightPanelStyles,
  leftPanelStyles,
  rightHeadingStyles,
  leftHeadingStyles,
} from "./styles";

const LefthoekPanels: FunctionComponent<{
  percentageVisible?: MotionValue;
  shouldStart?: boolean;
  className?: string;
}> = ({ percentageVisible, shouldStart, children, className }) => {
  const defaultVisible = useMotionValue("100%");
  const visible = percentageVisible ? percentageVisible : defaultVisible;
  return (
    <Box sx={outerWrapperStyles} className={className}>
      <Background sx={leftPanelStyles}>
        <Slide
          shouldStart={shouldStart}
          direction={-1}
          offset={50}
          percentageVisible={visible}
        >
          <Heading sx={leftHeadingStyles}>Hoek</Heading>
        </Slide>
      </Background>
      <Background sx={rightPanelStyles}>
        <Slide
          shouldStart={shouldStart}
          direction={1}
          offset={-80}
          percentageVisible={visible}
        >
          <Heading sx={rightHeadingStyles}>Left</Heading>
        </Slide>
        {children}
      </Background>
    </Box>
  );
};

export { LefthoekPanels };
