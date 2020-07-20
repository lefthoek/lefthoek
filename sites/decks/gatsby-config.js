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

    {
      resolve: "gatsby-theme-mdx-deck",
      options: {
        contentPath: "./data",
      },
    },
    `gatsby-plugin-theme-ui`,
  ],
};
