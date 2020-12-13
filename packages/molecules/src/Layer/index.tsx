/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { outerWrapperStyles } from "./styles";
import { Brick } from "@lefthoek/atoms";

const Layer: FunctionComponent<{ className?: string; layerData: string[] }> = ({
  className,
  layerData,
}) => {
  const numberOfElements = layerData.length;
  return (
    <Box className={className} sx={outerWrapperStyles({ numberOfElements })}>
      {layerData.map((title) => (
        <Brick>{title}</Brick>
      ))}
    </Box>
  );
};

export { Layer };
