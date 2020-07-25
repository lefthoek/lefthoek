/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box } from "theme-ui";
import { outerWrapper, innerWrapper } from "./styles";

const Table: FunctionComponent<{
  children: ReactNodeArray;
  slideData: any;
}> = ({ children }) => {
  const [title, ...table] = children;
  return (
    <Box sx={outerWrapper}>
      <Box sx={innerWrapper}>{table}</Box>
    </Box>
  );
};

export default Table;
