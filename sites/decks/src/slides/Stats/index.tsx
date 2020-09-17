/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box } from "theme-ui";
import { Basic } from "../Basic";
import { innerWrapperStyles, outerWrapperStyles } from "./styles";

const Stats: FunctionComponent<{
  children: ReactNodeArray;
  index: number;
  className?: string;
}> = ({ children, className, index }) => {
  const [header, ...rest] = children;
  return (
    <Basic className={className} index={index} sx={outerWrapperStyles}>
      {header}
      <Box sx={innerWrapperStyles}>
        <ul>{rest}</ul>
      </Box>
    </Basic>
  );
};

export { Stats };
