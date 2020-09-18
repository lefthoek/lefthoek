/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box } from "theme-ui";
import { Basic } from "../Basic";
import { outerWrapper, innerWrapper } from "./styles";

const Cover: FunctionComponent<{
  children: ReactNodeArray;
  index: number;
  className?: string;
}> = ({ children, index }) => {
  return (
    <Basic index={index} sx={outerWrapper}>
      <Box sx={innerWrapper}>{children}</Box>
    </Basic>
  );
};

export { Cover };
