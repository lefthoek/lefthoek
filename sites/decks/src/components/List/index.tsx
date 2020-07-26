/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box } from "theme-ui";
import { outerWrapper, innerWrapper } from "./styles";

const List: FunctionComponent<{
  children: ReactNodeArray[];
  slideData: any;
}> = ({ children }) => {
  return (
    <Box sx={outerWrapper}>
      <dl sx={innerWrapper}>{children}</dl>
    </Box>
  );
};

export default List;
