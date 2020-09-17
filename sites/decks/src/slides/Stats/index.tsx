/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box } from "theme-ui";
import { Basic } from "../Basic";
import { innerWrapper } from "./styles";

const Stats: FunctionComponent<{
  children: ReactNodeArray;
  index: number;
  className?: string;
}> = ({ children, index }) => {
  const [header, ...rest] = children;
  return (
    <Basic index={index}>
      {header}
      <Box sx={innerWrapper}>
        <ul>{rest}</ul>
      </Box>
    </Basic>
  );
};

export { Stats };
