/** @jsx jsx */
import { FunctionComponent } from "react";
import { FormspreeProvider } from "@formspree/react";
import { jsx, Box, useThemeUI } from "theme-ui";
import { Global } from "@emotion/core";
import { outerWrapperStyles } from "./styles";
import { Helmet } from "react-helmet";

type SiteMeta = {
  title: string;
  description: string;
  url: string;
};

const Container: FunctionComponent<{ siteMeta: SiteMeta }> = ({
  children,
  siteMeta,
}) => {
  const { title, description, url } = siteMeta;
  const { theme } = useThemeUI();
  const { colors, text } = theme;
  return (
    <FormspreeProvider project="1529469839263924078">
      <Box as="article" sx={outerWrapperStyles}>
        <Global
          styles={{ root: text.body as any, body: { background: colors.text } }}
        />
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="robots" content="index, follow" />
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href={url} />

          <meta property="og:type" content={"website"} />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:creator" content={"yeehaa"} />
          <meta name="twitter:description" content={description} />

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
