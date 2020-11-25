/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Text } from "theme-ui";
import { outerWrapperStyles, textStyles } from "./styles";

const Brick: FunctionComponent<{ className?: string; children: string }> = ({
  className,
  children,
}) => {
  return (
    <Box className={className} sx={outerWrapperStyles}>
      <Text sx={textStyles} variant="smallBody">
        {children}
      </Text>
    </Box>
  );
};

export { Brick };
