/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { Layer } from "../Layer";
import { outerWrapperStyles } from "./styles";

const Stack: FunctionComponent<{
  className?: string;
  stackData: string[][];
}> = ({ className, stackData }) => {
  return (
    <Box sx={outerWrapperStyles} className={className}>
      {stackData.map((layerData) => (
        <Layer layerData={layerData} />
      ))}
    </Box>
  );
};

export { Stack };
