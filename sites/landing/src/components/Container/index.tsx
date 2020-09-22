/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, useThemeUI } from "theme-ui";
import { Global } from "@emotion/core";
import { outerWrapperStyles } from "./styles";
import { Helmet } from "react-helmet";

const Container: FunctionComponent = ({ children }) => {
  const { theme } = useThemeUI();
  return (
    <Box as="article" sx={outerWrapperStyles}>
      <Global styles={{ body: { background: theme.colors.primary } }} />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Lefthoek</title>
      </Helmet>
      {children}
    </Box>
  );
};

export { Container };
