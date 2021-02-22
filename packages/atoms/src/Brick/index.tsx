/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Text } from "theme-ui";
import { outerWrapperStyles } from "./styles";

const Brick: FunctionComponent<{ className?: string; children: string }> = ({
  className,
  children,
}) => {
  return (
    <Box className={className} sx={outerWrapperStyles}>
      <Text>{children}</Text>
    </Box>
  );
};

export { Brick };
