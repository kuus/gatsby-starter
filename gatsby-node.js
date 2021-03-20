const { sourceNodes, onCreatePage } = require("@kuus/gatsby-plugin-i18n/api");

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.sourceNodes = (args) => {
  sourceNodes(args);
};

exports.onCreatePage = (args) => {
  onCreatePage(args);
};
