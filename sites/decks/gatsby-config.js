module.exports = {
  siteMetadata: {
    siteName: `Generic Site`,
  },
  plugins: [
    {
      resolve: "@lefthoek/password-protect",
      options: {
        password: "nofagroup123",
        partialMatching: true,
        pagePaths: ["/nofagroup"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Lefthoek Decks",
        short_name: "Decks",
        start_url: "/",
        display: "standalone",
      },
    },
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

    {
      resolve: "gatsby-theme-mdx-deck",
      options: {
        contentPath: "./data",
      },
    },
    `gatsby-plugin-theme-ui`,
  ],
};
