/** @jsx jsx */
import { FunctionComponent } from "react";
import { titleCase } from "voca";
import { jsx, Heading, Box, Text } from "theme-ui";
import { selectionStyles, selectorStyles, outerWrapperStyles } from "./styles";

export const Feature: FunctionComponent<{
  title: string;
  text: string;
  isSelected: boolean;
  onSelect: (args: { title: string }) => void;
}> = ({ title, text, onSelect, isSelected = false }) => {
  console.log(text.trim().split(/\n\n/));
  return (
    <Box onClick={() => onSelect({ title })} sx={outerWrapperStyles}>
      <Box
        sx={{
          ...selectorStyles,
          borderColor: isSelected ? "primary" : "text",
        }}
      >
        <Heading variant="title">{titleCase(title)}</Heading>
      </Box>
      <Box sx={selectionStyles}>
        {text.trim().split(/\n\n/).map(line => (
        <Text as="p">{line}</Text>))}
      </Box>
    </Box>
  );
};
