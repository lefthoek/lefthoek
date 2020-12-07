/** @jsx jsx */
import { FunctionComponent } from "react";
import { FormspreeProvider } from "@formspree/react";
import { jsx, Box } from "theme-ui";
import { outerWrapperStyles } from "./styles";
import { Helmet } from "react-helmet";

type SiteMeta = {
  title: string;
  description: string;
  url: string;
};

type ContainerProps = {
  className?: string;
  siteMeta: SiteMeta;
};

const Container: FunctionComponent<ContainerProps> = ({
  children,
  className,
  siteMeta,
}) => {
  const { title, description, url } = siteMeta;
  return (
    <FormspreeProvider project="1529469839263924078">
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
      </Helmet>
      <Box className={className} as="main" sx={outerWrapperStyles}>
        {children}
      </Box>
    </FormspreeProvider>
  );
};

export { Container };
