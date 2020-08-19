/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Text } from "theme-ui";
import { chain } from "voca";
import { ColorSwatch } from "./ColorSwatch";
import { captionStyles, gradientStyles, gradientsStyles } from "./styles";

const ColorGradient: FunctionComponent<{ color: [string, string] }> = ({
  color: [name, colorValue],
}) => {
  const values = [0.4, 0.6, 0.8, 1];
  return (
    <Box sx={gradientStyles}>
      {values.map((opacity) => (
        <ColorSwatch
          color={colorValue}
          sx={{ opacity }}
          ratio={opacity === 1 ? 1 / 1 : 2 / 1}
        />
      ))}
      <Box sx={captionStyles}>
        <Text variant="smallBody">
          {chain(name).kebabCase().replaceAll("-", " ").titleCase().value()}
        </Text>
        <Text variant="smallBody">{colorValue}</Text>
      </Box>
    </Box>
  );
};

const ColorGradients: FunctionComponent<{ colors: Record<string, string> }> = ({
  colors,
}) => {
  return (
    <Box sx={gradientsStyles}>
      {Object.entries(colors).map((color) => (
        <ColorGradient color={color} />
      ))}
    </Box>
  );
};

export { ColorGradients };
