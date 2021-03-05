const {
  onCreatePage,
} = require("@kuus/gatsby-plugin-i18n/utils-plugin");

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.onCreatePage = ({ page, actions }) => {
  onCreatePage({ page, actions });
};
