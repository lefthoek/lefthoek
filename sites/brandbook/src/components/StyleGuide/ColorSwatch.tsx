/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Text,AspectRatio } from "theme-ui";
import { swatchStyles } from "./styles";

const ColorSwatch: FunctionComponent<{
  className?: string;
  isLarge?: boolean;
  ratio?: number;
  color: string;
}> = ({ className, isLarge = true, color, ratio = 1 / 1, children }) => {
  return (
    <Box className={className}>
      <AspectRatio ratio={ratio} sx={swatchStyles({ color, isLarge })}>
        <Text>{children}</Text>
      </AspectRatio>
    </Box>
  );
};

export { ColorSwatch };
