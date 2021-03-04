/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ actions, graphql }) => {
};

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === "MarkdownRemark") {
//     let value = createFilePath({ node, getNode });
//     console.log(node)
//     value = value.replace("pages/", "").replace("home/", "/");
//     console.log(`slug is ${value}`);
//     const locale = getLocaleFromFilepath(node.fileAbsolutePath);
    
//     createNodeField({
//       name: "slug",
//       node,
//       value,
//     });
//   }
// };

// function getLocaleFromFilepath(filepath) {
  
// }