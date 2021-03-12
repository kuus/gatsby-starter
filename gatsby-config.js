module.exports = {
  flags: { FAST_DEV: true, PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: {
    title: "Gatsby + Netlify CMS Starter",
    description: "...",
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/content`,
        name: "content",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/templates`,
        name: "templates",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets`,
        name: "images",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        remarkPlugins: [require("remark-image-attributes")],
        gatsbyRemarkPlugins: [
          "gatsby-remark-autolink-headers",
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "documents", // https://bit.ly/2NCmJ5t
              ignoreFileExtensions: ["png", "jpg", "jpeg"],
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // maxWidth: 900,
              withWebp: true,
              disableBgImageOnAlpha: true,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: require.resolve("./plugins/gatsby-remark-mdx-v2-images"),
          },
          {
            resolve: "gatsby-remark-image-attributes",
            options: {
              styleAttributes: true,
              dataAttributes: true,
            },
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-root-import",
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: "src/gatsby.d.ts",
      },
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "@kuus/gatsby-plugin-i18n",
      options: {
        debug: false,
        locales: ["en", "it", "nl"],
        defaultLocale: "en",
        // enforceLocalisedUrls: false,
        hideDefaultLocaleInUrl: true,
        baseUrl: "http://localhost:8000",
        untranslatedComponent: require.resolve(
          `${__dirname}/src/templates/untranslated.tsx`
        ),
      },
    },
    // {
    //   resolve: "gatsby-plugin-netlify-cms",
    //   options: {
    //     manualInit: true,
    //     modulePath: `${__dirname}/src/components/cms/index.tsx`,
    //   },
    // },
    "gatsby-plugin-netlify",
  ],
};
