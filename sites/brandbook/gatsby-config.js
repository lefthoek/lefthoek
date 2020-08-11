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
  ],
};
