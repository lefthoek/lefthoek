module.exports = {
  siteMetadata: {
    title: `brandbook lefthoek`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Lefthoek",
        short_name: "Lefthoek",
        description: "brandbook for lefthoek",
        lang: `en`,
        display: `standalone`,
        icon: `../src/icon.png`,
        start_url: `/`,
      },
    },
  ],
};
