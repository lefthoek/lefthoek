/** @jsx jsx */
import { FunctionComponent, useState, useEffect } from "react";
import { MotionValue } from "framer-motion";
import { LefthoekPanels } from "@lefthoek/molecules";
import { jsx, Box, Heading } from "theme-ui";
//@ts-ignore
import { useResponsiveValue } from "@theme-ui/match-media";
import { CallToAction } from "../../components";
import { overlayStyles, titleStyles, callToActionStyles } from "./styles";

const HeroSection: FunctionComponent<{
  title: string;
  percentageVisible: MotionValue;
  takeAway: string;
  callToAction: string;
  className?: string;
}> = ({ className, title, percentageVisible, callToAction }) => {
  const [mounted, setMounted] = useState("notMounted");
  const variant = useResponsiveValue(["midnight", "midnight", "skyBlue"], {
    defaultIndex: 2,
  });
  useEffect(() => {
    setMounted("mounted");
  }, []);
  return (
    <LefthoekPanels className={className} percentageVisible={percentageVisible}>
      <Box sx={overlayStyles}>
        <Heading sx={titleStyles} variant="abstract">
          {title}
        </Heading>
        <CallToAction
          sx={callToActionStyles}
          key={mounted}
          variant={variant}
          callToAction={callToAction}
        />
      </Box>
    </LefthoekPanels>
  );
};

export { HeroSection };
