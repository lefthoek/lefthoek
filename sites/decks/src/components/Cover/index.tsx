/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box } from "theme-ui";
import { Logo } from "@lefthoek/atoms";
import { logoStyles, outerWrapper, footerStyles, innerWrapper } from "./styles";

const Cover: FunctionComponent<{ children: ReactNodeArray }> = ({
  children,
}) => {
  return (
    <Box sx={outerWrapper}>
      <div sx={innerWrapper}>{children}</div>
      <Box sx={footerStyles}>
        <Logo size="XXL" href="https://offcourse-studio.com" sx={logoStyles}>
          Lefthoek
        </Logo>
      </Box>
    </Box>
  );
};

export default Cover;
