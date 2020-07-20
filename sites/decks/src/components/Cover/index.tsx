/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx, Box } from "theme-ui";
import Logo from "../Logo";
import {
  headlineStyles,
  imageStyles,
  logoStyles,
  outerWrapper,
  footerStyles,
  innerWrapper,
} from "./styles";

const Cover: FunctionComponent<{ children: ReactNodeArray }> = ({
  children,
}) => {
  return (
    <Box sx={outerWrapper}>
      <div sx={innerWrapper}>{children}</div>
      <Box sx={footerStyles}>
        <a href="https://offcourse-studio.com">
          <Logo sx={logoStyles}>Offcourse Studio_</Logo>
        </a>
      </Box>
    </Box>
  );
};

export default Cover;
