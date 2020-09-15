/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Text } from "theme-ui";
import { chain } from "voca";
import { ColorSwatch } from "./ColorSwatch";
import { captionStyles, gradientStyles, gradientsStyles } from "./styles";

const ColorGradient: FunctionComponent<{ gradient: [string, string[]] }> = ({
  gradient: [name, gradientValues],
}) => {
  return (
    <Box sx={gradientStyles}>
      {gradientValues.map((color, index) => {
        return (
          <ColorSwatch
            color={color}
            ratio={gradientValues.length - 1 === index ? 1 / 1 : 2 / 1}
          />
        );
      })}
      <Box sx={captionStyles}>
        <Text variant="smallBody">
          {chain(name).kebabCase().replaceAll("-", " ").titleCase().value()}
        </Text>
        <Text variant="smallBody">
          {gradientValues[gradientValues.length - 1]}
        </Text>
      </Box>
    </Box>
  );
};

const ColorGradients: FunctionComponent<{
  gradients: Record<string, string[]>;
}> = ({ gradients }) => {
  return (
    <Box sx={gradientsStyles}>
      {Object.entries(gradients).map((gradient) => (
        <ColorGradient gradient={gradient} />
      ))}
    </Box>
  );
};

export { ColorGradients };
