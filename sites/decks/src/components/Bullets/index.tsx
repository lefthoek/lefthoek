/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box } from "theme-ui";
import { outerWrapper } from "./styles";

const List: FunctionComponent<{
  children: ReactNodeArray[];
  slideData: any;
}> = ({ children }) => {
  return <Box sx={outerWrapper}>{children}</Box>;
};

export default List;
