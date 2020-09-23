/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Button, Box, Input } from "theme-ui";
import { outerWrapperStyles } from "./styles";

const CallToAction: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  return (
    <Box className={className} sx={outerWrapperStyles}>
      <Input value={""} placeholder="Enter Email" />
      <Button sx={{ boxShadow: "skyBlue" }} variant="midnight">
        Get Lefthoek
      </Button>
    </Box>
  );
};

export { CallToAction };
