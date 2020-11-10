/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box } from "theme-ui";
import { LefthoekPanels } from "@lefthoek/molecules";
import { overlayStyles } from "./styles";

const Cover: FunctionComponent<{
  children: ReactNodeArray;
  className?: string;
}> = ({ children }) => {
  return (
    <LefthoekPanels shouldStart>
      <Box sx={overlayStyles}>{children}</Box>
    </LefthoekPanels>
  );
};

export { Cover };
