/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, useThemeUI, AspectRatio, Text } from "theme-ui";
import { chain } from "voca";

const ColorGradient: FunctionComponent<{ color: [string, string] }> = ({
  color: [name, colorValue],
}) => {
  const values = [0.4, 0.6, 0.8, 1];
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {values.map((value) => (
        <AspectRatio
          ratio={value === 1 ? 1 / 1 : 2 / 1}
          sx={{ bg: colorValue, opacity: value }}
        />
      ))}
      <Box sx={{ mt: "1rem" }}>
        <Text variant="smallBody" sx={{ fontSize: [0, 1] }}>
          {chain(name).kebabCase().replaceAll("-", " ").titleCase().value()}
        </Text>
        <Text variant="smallBody" sx={{ fontSize: [0, 1] }}>
          {colorValue}
        </Text>
      </Box>
    </Box>
  );
};

const ColorGradients: FunctionComponent<{ colors: Record<string, string> }> = ({
  colors,
}) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridGap: "2rem",
        gridTemplateColumns: ["repeat(2, 1fr)", "repeat(5, 1fr)"],
      }}
    >
      {Object.entries(colors).map((color) => (
        <ColorGradient color={color} />
      ))}
    </Box>
  );
};

export { ColorGradients };
