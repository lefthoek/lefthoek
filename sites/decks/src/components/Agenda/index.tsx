/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box } from "theme-ui";
import { outerWrapper, innerWrapper } from "./styles";
import SlideMeta from "../SlideMeta";

const Agenda: FunctionComponent<{
  children: ReactNodeArray;
  slideData: any;
}> = ({ children, slideData }) => {
  return (
    <Box sx={outerWrapper}>
      <div sx={innerWrapper}>{children}</div>
      <SlideMeta slideData={slideData} />
    </Box>
  );
};

export default Agenda;
