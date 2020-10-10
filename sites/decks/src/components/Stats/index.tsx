/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box } from "theme-ui";
import { outerWrapperStyles, headerStyles, statsWrapperStyles } from "./styles";

const Stats: FunctionComponent<{
  children: ReactNodeArray[];
  slideData: any;
}> = ({ children }) => {
  const [title, ...rest] = children;
  console.log(rest);
  return (
    <Box sx={outerWrapperStyles}>
      <Box sx={headerStyles}>{title}</Box>
      <Box sx={statsWrapperStyles}>
        <ul>{rest}</ul>
      </Box>
    </Box>
  );
};

export default Stats;
