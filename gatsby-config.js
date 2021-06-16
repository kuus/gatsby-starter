require("dotenv").config();

module.exports = {
  flags: { FAST_DEV: true, PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: {
    siteUrl: "https://kuus-gatsby-starter.netlify.app",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/uploads`,
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
        path: `${__dirname}/src/pages`,
        name: "pages",
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
        name: "assets",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        // remarkPlugins: [require("remark-image-attributes")],
        // // FIXME: xxx related to dummy files creation in onCreateNode of plugin-18n for file collections
        // // to move to a gatsby netlify mdx plugin
        // shouldBlockNodeFromTransformation: (node) =>
        //   node.absolutePath && node.absolutePath.endsWith("index.md"),
        // gatsbyRemarkPlugins: [
        //   // "gatsby-remark-autolink-headers",// FIXME: these might break now...11/06/2021
        //   {
        //     resolve: "gatsby-remark-copy-linked-files",
        //     options: {
        //       destinationDir: "documents", // https://bit.ly/2NCmJ5t
        //       ignoreFileExtensions: ["png", "jpg", "jpeg"],
        //     },
        //   },
        //   {
        //     resolve: "gatsby-remark-images-anywhere",
        //     options: {
        //       // maxWidth: 900,
        //       linkImagesToOriginal: false,
        //     },
        //   },
        //   // {
        //   //   resolve: require.resolve("./plugins/gatsby-remark-mdx-v2-images"),// FIXME: these might break now...11/06/2021
        //   // },
        //   {
        //     resolve: "gatsby-remark-image-attributes",
        //     options: {
        //       styleAttributes: true,
        //       dataAttributes: true,
        //     },
        //   },
        // ],
      },
    },
    // {
    //   options: {
    //     modules: ["gatsby-plugin-mdx"],
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-root-import",
    // FIXME: this does not work nicely:
    // {
    //   resolve: "gatsby-plugin-typegen",
    //   options: {
    //     outputPath: "src/gatsby.d.ts",
    //   },
    // },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
        ignore: {
          patterns: ["**/*.(js|ts)?(x)"],
        },
      },
    },
    {
      resolve: "@kuus/gatsby-plugin-i18n",
      options: {
        debug: false,
        untranslatedComponent: require.resolve(
          `${__dirname}/src/templates/untranslated.tsx`
        ),
      },
    },
    // TODO: implement
    // "gatsby-plugin-robots-txt",
    // "gatsby-plugin-manifest",
    // "gatsby-plugin-sitemap",
    // "gatsby-plugin-offline",
    "gatsby-netlify-cms", // custom plugin to improve and then publish
    "gatsby-plugin-netlify",
  ],
};
