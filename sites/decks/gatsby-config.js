module.exports = {
  siteMetadata: {
    siteName: `Generic Site`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `spartan\:400,500,600,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
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
