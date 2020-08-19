/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, useThemeUI, Text } from "theme-ui";
import { ColorGradients } from "./ColorGradient";
import { ColorPalette } from "./ColorPalette";

const ColorSection: FunctionComponent<{
  message: string;
  className: string;
}> = ({ message, className }) => {
  const { theme } = useThemeUI();
  return (
    <Box
      className={className}
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gridRowGap: ["2rem", "4rem"],
        maxWidth: "1000px",
        my: ["2rem", "4rem"],
      }}
    >
      <Text>{message}</Text>
      <ColorPalette colors={theme.primaryColors} />
      <ColorGradients colors={theme.primaryColors} />
    </Box>
  );
};

export { ColorSection };
