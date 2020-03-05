/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Peyman Eskandari| Front-End Developer",
        short_name: "Peyman Eskandari",
        start_url: "/",
        background_color: "#1755f6",
        theme_color: "#1755f6",
        display: "standalone",
        icon: "src/assets/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
  ],

  siteMetadata: {
    title: "Peyman Eskandari",
    titleTemplate: "%s | Front-End Developer",
    description: "",
    url: "https://peyman.me",
    image: "",
    twitterUsername: "@peyman3d",
  },
}
