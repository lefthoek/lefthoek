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
          `crimson Text\:400`,
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
    "gatsby-plugin-theme-ui",
  ],
};
