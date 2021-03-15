const { onCreatePage } = require("@kuus/gatsby-plugin-i18n/onCreatePage");

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.onCreatePage = ({ page, actions }) => {
  onCreatePage({ page, actions });
};
