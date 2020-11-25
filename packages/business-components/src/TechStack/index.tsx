/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { outerWrapperStyles, layerStyles, bottomLayerStyles } from "./styles";

const TechStack: FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  return (
    <Box sx={outerWrapperStyles} className={className}>
      <Box sx={layerStyles}>Cellular Automata</Box>
      <Box sx={layerStyles}>Deep Learning</Box>
      <Box sx={bottomLayerStyles}>
        <Box>Rule-based AI</Box>
        <Box>NLP</Box>
        <Box>Machine Learning</Box>
      </Box>
    </Box>
  );
};

export { TechStack };
