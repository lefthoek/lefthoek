/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Button, Box, Input } from "theme-ui";
import { outerWrapperStyles, inputStyles, buttonStyles } from "./styles";

const CallToAction: FunctionComponent<{
  className?: string;
  callToAction: string;
  variant?: string;
}> = ({ className, callToAction, variant = "skyBlue" }) => {
  return (
    <Box className={className} sx={outerWrapperStyles}>
      <Input
        sx={inputStyles}
        variant={variant}
        value={""}
        placeholder="Enter Email"
      />
      <Button sx={buttonStyles} variant="midnight">
        {callToAction}
      </Button>
    </Box>
  );
};

export { CallToAction };
