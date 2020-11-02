module.exports = {
  siteMetadata: {
    siteName: `Lefthoek`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `lefthoek.com`,
        customDomain: "stats.lefthoek.com",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Lefthoek - Cutting Corners as a Service",
        short_name: "Lefthoek",
        start_url: "/",
        display: "standalone",
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: ["gatsby-theme-mdx-deck"],
      },
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-theme-ui",
  ],
};
