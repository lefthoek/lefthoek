/** @jsx jsx */
import { useState, FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { AnimateSharedLayout, motion } from "framer-motion";
import { Card, Background } from "@lefthoek/atoms";
import { fullScreenStyles, highlightStyles, cardStyles } from "./styles";

const CardModal: FunctionComponent<{ title: string; variant?: string }> = ({
  title,
  variant = "skyBlue",
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  return (
    <AnimateSharedLayout>
      <motion.div layout sx={isFullScreen ? fullScreenStyles : {}}>
        <Background variant={variant}>
          <Box sx={highlightStyles({ variant })}>
            <Card variant={variant} title={title} />
          </Box>
          <Box variant={variant} sx={cardStyles}>
            <Card
              onClick={() => setIsFullScreen((current) => !current)}
              variant={variant}
              title={title}
            />
          </Box>
        </Background>
      </motion.div>
    </AnimateSharedLayout>
  );
};

export { CardModal };
