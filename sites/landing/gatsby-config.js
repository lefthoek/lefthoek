const path = require(`path`);

module.exports = {
  siteMetadata: {
    siteName: `Lefthoek`,
    siteUrl: `https://lefthoek.com`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `static`),
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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-theme-ui",
    "@lefthoek/blog-theme",
  ],
};
