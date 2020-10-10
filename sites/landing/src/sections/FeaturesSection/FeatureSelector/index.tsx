/** @jsx jsx */
import { FunctionComponent } from "react";
import { titleCase } from "voca";
import { jsx, Heading, Box } from "theme-ui";
import { selectorStyles, selectedStyles, featureWrapperStyles } from "./styles";

export const FeatureSelector: FunctionComponent<{
  title: string;
  isSelected: boolean;
  onSelect: (args: { title: string }) => void;
}> = ({ title, children, onSelect, isSelected = false }) => {
  const formattedTitle = titleCase(title);
  return (
    <Box onClick={() => onSelect({ title })} sx={featureWrapperStyles}>
      <Box sx={isSelected ? selectedStyles : selectorStyles}>
        <Heading variant="title">{formattedTitle}</Heading>
      </Box>
      {children}
    </Box>
  );
};
