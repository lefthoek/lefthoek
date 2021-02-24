/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box } from "theme-ui";
import { Basic } from "../Basic";
import { innerWrapperStyles, outerWrapperStyles } from "./styles";

const Agenda: FunctionComponent<{
  children: ReactNodeArray;
  index: number;
  className?: string;
}> = ({ children, className, index }) => {
  const [header, ...rest] = children;
  return (
    <Basic className={className} index={index} sx={outerWrapperStyles}>
      <Box sx={innerWrapperStyles}>
        {header}
        <ul>{rest}</ul>
      </Box>
    </Basic>
  );
};

export { Agenda };
