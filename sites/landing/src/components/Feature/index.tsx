/** @jsx jsx */
import { FunctionComponent } from "react";
import { titleCase } from "voca";
import { jsx, Heading, Box } from "theme-ui";
import {
  selectionStyles,
  selectedStyles,
  selectorStyles,
  outerWrapperStyles,
} from "./styles";

export const Feature: FunctionComponent<{
  title: string;
  text: string;
  isSelected: boolean;
  onSelect: (args: { title: string }) => void;
}> = ({ title, children, onSelect, isSelected = false }) => {
  return (
    <Box onClick={() => onSelect({ title })} sx={outerWrapperStyles}>
      <Box sx={isSelected ? selectedStyles : selectorStyles}>
        <Heading variant="title">{titleCase(title)}</Heading>
      </Box>
      <Box sx={selectionStyles}>{children}</Box>
    </Box>
  );
};
