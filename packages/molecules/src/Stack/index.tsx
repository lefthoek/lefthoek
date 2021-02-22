/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { Layer } from "../Layer";
import { outerWrapperStyles } from "./styles";

const Stack: FunctionComponent<{
  className?: string;
  stackData: string[][];
  variant?: "brightGreen" | "skyBlue" | "lobster";
}> = ({ className, variant = "lobster", stackData }) => {
  return (
    <Box sx={outerWrapperStyles} className={className}>
      {stackData.map((layerData, index) => (
        <Layer variant={variant} layerData={layerData} index={index} />
      ))}
    </Box>
  );
};

export { Stack };
