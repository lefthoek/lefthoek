/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box } from "theme-ui";
import { outerWrapper, innerWrapper } from "./styles";

const Cover: FunctionComponent<{
  children: ReactNodeArray;
  index: number;
  className?: string;
}> = ({ children, ...props }) => {
  console.log(props);
  return (
    <Box sx={outerWrapper}>
      <div sx={innerWrapper}>{children}</div>
    </Box>
  );
};

export { Cover };
