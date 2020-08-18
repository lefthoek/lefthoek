/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, useThemeUI, AspectRatio } from "theme-ui";

const ColorPalette: FunctionComponent = () => {
  const { theme } = useThemeUI();
  const { primaryColors } = theme;
  console.log(primaryColors);
  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        gridTemplateColumns: ["repeat(2, 1fr)", "repeat(6, 1fr)"],
        gridGap: ["1.5rem", "2rem"],
        my: ["2rem", "4rem"],
        gridTemplateRows: ["repeat(6, 1fr)", "repeat(2, 1fr)"],
        "> .color-0": {
          gridRow: ["1/3", "1/3"],
          gridColumn: ["1/3", "1/3"],
          color: "secondary",
          fontSize: 4,
        },
        "> .color-1": {
          gridColumn: ["1/3", "3/5"],
          gridRow: ["3/5", "1/3"],
          color: "muted",
          fontSize: 4,
        },
        ">  .color-2": {
          gridColumn: ["1/2", "5/6"],
          gridRow: ["5/6", "1/2"],
          color: "primary",
          fontSize: 2,
        },
        "> .color-3": {
          gridColumn: ["2/3", "5/6"],
          gridRow: ["5/6", "2/3"],
          color: "accent",
          fontSize: 2,
        },
        "> .color-4": {
          gridColumn: ["1/2", "6/7"],
          gridRow: ["6/7", "1/2"],
          color: "text",
          fontSize: 2,
        },
      }}
    >
      {primaryColors.map((color, index) => (
        <Box className={`color-${index}`}>
          <AspectRatio
            ratio={1 / 1}
            sx={{
              bg: color,
              display: "flex",
              alignItems: "flex-end",
              p: "1rem",
            }}
          >
            {color}
          </AspectRatio>
        </Box>
      ))}
    </Box>
  );
};

export { ColorPalette };
