/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, useThemeUI, AspectRatio } from "theme-ui";

const ColorPalette: FunctionComponent = ({ colors }) => {
  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        gridTemplateColumns: ["repeat(2, 1fr)", "repeat(6, 1fr)"],
        gridGap: ["2rem"],
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
          fontSize: "10px",
        },
        "> .color-3": {
          gridColumn: ["2/3", "5/6"],
          gridRow: ["5/6", "2/3"],
          color: "accent",
          fontSize: "10px",
        },
        "> .color-4": {
          gridColumn: ["1/2", "6/7"],
          gridRow: ["6/7", "1/2"],
          color: "text",
          fontSize: "10px",
        },
      }}
    >
      {Object.values(colors).map((color, index) => (
        <Box className={`color-${index}`}>
          <AspectRatio
            ratio={1 / 1}
            sx={{
              bg: color,
              display: "flex",
              alignItems: "flex-end",
              px: index < 2 ? "1rem" : "0.5rem",
              py: index < 2 ? "0.5rem" : "0.375rem",
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
