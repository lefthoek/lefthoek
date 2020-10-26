/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { useMotionValue } from "framer-motion";
import { jsx, Box } from "theme-ui";
import { LefthoekPanels } from "@lefthoek/molecules";
import { overlayStyles } from "./styles";

const Cover: FunctionComponent<{
  children: ReactNodeArray;
  className?: string;
}> = ({ children }) => {
  const percentageVisible = useMotionValue(100);
  return (
    <LefthoekPanels shouldStart percentageVisible={percentageVisible}>
      <Box sx={overlayStyles}>{children}</Box>
    </LefthoekPanels>
  );
};

export { Cover };
