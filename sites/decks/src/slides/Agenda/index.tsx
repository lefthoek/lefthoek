/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box, Heading } from "theme-ui";
import { Basic } from "../Basic";
import { innerWrapperStyles, outerWrapperStyles } from "./styles";

const Agenda: FunctionComponent<{
  children: ReactNodeArray;
  index: number;
  className?: string;
}> = ({ children, className, index }) => {
  const [...rest] = children;
  return (
    <Basic className={className} index={index} sx={outerWrapperStyles}>
      <Heading as="h1" variant="display">
        Agenda
      </Heading>
      <Box sx={innerWrapperStyles}>{rest}</Box>
    </Basic>
  );
};

export { Agenda };
