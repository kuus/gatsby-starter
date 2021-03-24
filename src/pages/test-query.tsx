import React from "react";
import { graphql } from "gatsby";
import Layout from "src/components/Layout";
import { t } from "@kuus/gatsby-plugin-i18n";

/**
 * I18n
 *
 * @slug {en} /overriden-from-tsx
 * @slug {it} /sovrascritto-dal-tsx
 */

// const PagesTestQuery: React.FC<{ data: GatsbyTypes.PagesTestQuery }> = ({ data }) => {
const PagesTestQuery: Page<GatsbyTypes.PagesTestQueryQuery> = ({ data }) => {
  const plugins = [
    ...new Set(
      data.allSitePlugin.edges.map(
        ({ node }) => `${node.name} (${node.version})`
      )
    ),
  ];
  return (
    <Layout>
      <h1>Test stateful page without markdown, with query</h1>
      <code>Generated from "src/pages/test-query.tsx"</code>
      <small>the url is set through special comment in source .tsx file</small>
      <p>{t("Test")}</p>
      {plugins.map((plugin) => (
        <div key={plugin}>{plugin}</div>
      ))}
    </Layout>
  );
};

export default PagesTestQuery;

export const query = graphql`
  query PagesTestQuery {
    allSitePlugin {
      edges {
        node {
          name
          version
        }
      }
    }
  }
`;
