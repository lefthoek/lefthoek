module.exports = {
  siteMetadata: {
    siteName: `Generic Site`,
  },
  plugins: [
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
