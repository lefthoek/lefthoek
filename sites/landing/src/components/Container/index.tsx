/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { outerWrapperStyles } from "./styles";

const Container: FunctionComponent = ({ children }) => {
  return (
    <Box as="article" sx={outerWrapperStyles}>
      {children}
    </Box>
  );
};

export { Container };
