/** @jsx jsx */

import { FunctionComponent } from "react";
import { jsx, Text, Box } from "theme-ui";
import { outerWrapperStyles, textStyles, arrowStyles } from "./styles";

const Flow: FunctionComponent<{
  className?: string;
  input: string;
  blackbox: string;
  output: string;
}> = ({ className, input, blackbox, output }) => {
  return (
    <Box className={className} sx={outerWrapperStyles}>
      <Text variant="abstract" sx={textStyles}>
        {input}
      </Text>
      <Text variant="abstract" sx={arrowStyles}>
        »
      </Text>
      <Text variant="abstract" sx={textStyles}>
        {blackbox}
      </Text>
      <Text variant="abstract" sx={arrowStyles}>
        »
      </Text>
      <Text variant="abstract" sx={textStyles}>
        {output}
      </Text>
    </Box>
  );
};

export { Flow };
