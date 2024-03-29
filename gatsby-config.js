/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  trailingSlash: `always`,
  plugins: [
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-react-helmet",
    "@vercel/gatsby-plugin-vercel-analytics",
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://peyman.me`,
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Peyman Eskandari| Front-End Developer",
        short_name: "Peyman Eskandari",
        start_url: "/",
        background_color: "#1755f6",
        theme_color: "#1755f6",
        display: "standalone",
        icon: "src/assets/images/icon.png",
        crossOrigin: "use-credentials",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYICS_TRACKING_ID || "none",
        head: true,
        defer: false,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 720,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "newsletter",
        path: `${__dirname}/src/newsletter/`,
      },
    },
  ],

  siteMetadata: {
    title: "Peyman Eskandari",
    titleTemplate: "%s | Peyman Eskandari",
    description:
      "Hi, I’m Peyman, a front-end <developer /> focused on building products that are beautiful from the inside out.",
    url: "https://peyman.me",
    siteUrl: "https://peyman.me",
    image: "/seo-image.png",
    twitterUsername: "@peyman3d",
  },
};
