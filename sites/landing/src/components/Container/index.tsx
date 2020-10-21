/** @jsx jsx */
import { FunctionComponent } from "react";
import { FormspreeProvider } from "@formspree/react";
import { jsx, Box, useThemeUI } from "theme-ui";
import { Global } from "@emotion/core";
import { outerWrapperStyles } from "./styles";
import { Helmet } from "react-helmet";

const Container: FunctionComponent = ({ children }) => {
  const { theme } = useThemeUI();
  const { colors, text } = theme;
  return (
    <FormspreeProvider project="1529469839263924078">
      <Box as="article" sx={outerWrapperStyles}>
        <Global
          styles={{ root: text.body as any, body: { background: colors.text } }}
        />
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Lefthoek</title>
          <link rel="preload" as="image" href="images/onboard.png" />
          <link rel="preload" as="image" href="images/synchronize.png" />
          <link rel="preload" as="image" href="images/research.png" />
        </Helmet>
        {children}
      </Box>
    </FormspreeProvider>
  );
};

export { Container };
