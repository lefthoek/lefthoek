/** @jsx jsx */
import { FunctionComponent } from "react";
import { Input } from "@lefthoek/atoms";
import { jsx, Button, Box } from "theme-ui";
import { outerWrapperStyles, inputStyles, buttonStyles } from "./styles";

const CallToAction: FunctionComponent<{
  className?: string;
  callToAction: string;
  variant?: string;
}> = ({ className, callToAction, variant = "midnight" }) => {
  const buttonsVariants = {
    midnight: "skyBlue",
    lobster: "midnight",
  };
  return (
    <Box className={className} sx={outerWrapperStyles}>
      <Input sx={inputStyles} variant={variant} placeholder="Enter Email" />
      <Button sx={buttonStyles} variant={buttonsVariants[variant]}>
        {callToAction}
      </Button>
    </Box>
  );
};

export { CallToAction };
