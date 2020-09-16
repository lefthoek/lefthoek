/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box } from "theme-ui";
import { outerWrapper, innerWrapper } from "./styles";

const Basic: FunctionComponent<{
  children: ReactNodeArray;
  index: number;
  className?: string;
}> = ({ children }) => {
  return (
    <Box sx={outerWrapper}>
      <Box sx={innerWrapper}>{children}</Box>
    </Box>
  );
};

export { Basic };
