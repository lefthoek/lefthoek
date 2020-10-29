/** @jsx jsx */
import { FunctionComponent, useState, useEffect } from "react";
import { motion, MotionValue } from "framer-motion";
import { LefthoekPanels } from "@lefthoek/molecules";
import { jsx, Box, Heading } from "theme-ui";
//@ts-ignore
import { useResponsiveValue } from "@theme-ui/match-media";
import { CallToAction } from "../../components";
import { overlayStyles, callToActionStyles } from "./styles";

const variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
};

const HeroSection: FunctionComponent<{
  title: string;
  percentageVisible: MotionValue;
  takeAway: string;
  callToAction: string;
  className?: string;
}> = ({ className, title, takeAway, percentageVisible, callToAction }) => {
  const [mounted, setMounted] = useState("notMounted");
  const variant = useResponsiveValue(["midnight", "midnight", "skyBlue"], {
    defaultIndex: 2,
  });
  useEffect(() => {
    setMounted("mounted");
  }, []);
  return (
    <LefthoekPanels className={className} percentageVisible={percentageVisible}>
      <motion.div variants={variants} initial="initial" animate="enter">
        <Box sx={overlayStyles}>
          <Heading
            sx={{ maxWidth: ["15rem", "29rem"] }}
            variant="abstract"
          >
            {title}
          </Heading>
          <CallToAction
            sx={callToActionStyles}
            key={mounted}
            variant={variant}
            callToAction={callToAction}
          />
        </Box>
      </motion.div>
    </LefthoekPanels>
  );
};

export { HeroSection };
