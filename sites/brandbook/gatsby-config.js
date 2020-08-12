module.exports = {
  siteMetadata: {
    title: `I like Google fonts`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Lefthoek",
        short_name: "Lefthoek",
        description: "",
        lang: `en`,
        display: `standalone`,
        icon: `../src/icon.png`,
        start_url: `/`,
      },
    },
  ],
};
