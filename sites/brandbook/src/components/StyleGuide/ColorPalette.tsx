/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { ColorSwatch } from "./ColorSwatch";
import { paletteStyles } from "./styles";

const ColorPalette: FunctionComponent<{ colors: Record<string, string> }> = ({
  colors,
}) => {
  return (
    <Box sx={paletteStyles}>
      {Object.values(colors).map((color, index) => (
        <ColorSwatch
          className={`color-${index}`}
          color={color}
          isLarge={index < 2}
        >
          {color}
        </ColorSwatch>
      ))}
    </Box>
  );
};

export { ColorPalette };
