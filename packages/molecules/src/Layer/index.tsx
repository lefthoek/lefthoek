/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { outerWrapperStyles } from "./styles";
import { Theme } from "@lefthoek/types";
import { Brick } from "@lefthoek/atoms";

const Layer: FunctionComponent<{
  className?: string;
  index: number;
  variant?: "skyBlue" | "brightGreen" | "lobster";
  layerData: string[];
}> = ({ className, index = 0, layerData, variant = "skyBlue" }) => {
  const numberOfElements = layerData.length;
  return (
    <Box className={className} sx={outerWrapperStyles({ numberOfElements })}>
      {layerData.map((title) => (
        <Brick
          sx={{
            bg: ({ gradients }: Theme) => gradients[variant][1 + index],
            color: variant === "skyBlue" ? "muted" : "text",
          }}
        >
          {title}
        </Brick>
      ))}
    </Box>
  );
};

export { Layer };
