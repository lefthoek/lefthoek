/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box } from "theme-ui";
import {
  headlineStyles,
  infoStyles,
  outerWrapper,
  innerWrapper,
} from "./styles";

const BackCover: FunctionComponent<{ children: ReactNodeArray }> = ({
  children,
}) => {
  const [title, ...info] = children;
  return (
    <Box sx={outerWrapper}>
      <Box sx={innerWrapper}>
        <Box sx={headlineStyles}>{title}</Box>
        <Box sx={infoStyles}>{info}</Box>
      </Box>
    </Box>
  );
};

export default BackCover;
