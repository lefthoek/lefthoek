/** @jsx jsx */
import { jsx, Box, useThemeUI, ThemeProvider } from "theme-ui";
import { FunctionComponent } from "react";
import { Global } from "@emotion/react";
import { Logo } from "@lefthoek/atoms";
import { IPost } from "@lefthoek/types";
import { theme } from "../../gatsby-plugin-theme-ui";

const ParentLayout: FunctionComponent<any> = ({ children }) => {
  const { theme } = useThemeUI();
  return (
    <Box>
      <Global
        styles={{
          body: { background: theme.colors.text },
        }}
      />
      <Logo
        to="/"
        sx={{ position: "fixed", width: "4rem", top: 0, left: 0, m: 6 }}
      />
      {children}
    </Box>
  );
};

const PageLayout: FunctionComponent<{ post: IPost }> = ({ children, post }) => {
  const siteMetaData = {
    siteName: "TEST",
    links: [],
    siteUrl: "TEST",
    description: "TEST",
    callToAction: { href: "", title: "test" },
    callToActionVisible: false,
    image: "TEST",
    contactInfo: {
      street: "TEST",
      zipCode: "TEST",
      city: "TEST",
      country: "TEST",
      email: "TEST",
    },
  };
  // @ts-ignore
  return (
    <ThemeProvider theme={theme as any}>
      <ParentLayout
        sx={{ bg: "text" }}
        path="/"
        siteMetaData={siteMetaData}
        post={post}
      >
        {children}
      </ParentLayout>
    </ThemeProvider>
  );
};

export default PageLayout;
