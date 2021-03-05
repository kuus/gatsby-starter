import React from "react";
import { graphql } from "gatsby";
import { injectIntl } from "@kuus/gatsby-plugin-i18n";
import Layout from "src/components/Layout";

// const PageTestQuery: React.FC<{ data: GatsbyTypes.PagesTestQueryQuery }> = ({ data }) => {
const PageTestQuery: Page<GatsbyTypes.PagesTestQueryQuery> = ({ data }) => {
  const plugins = [
    ...new Set(
      data.allSitePlugin.edges.map(
        ({ node }) => `${node.name} (${node.version})`
      )
    ),
  ];
  return (
    <Layout>
      <h1>Test static page without markdown, with query</h1>
      {plugins.map((plugin) => (
        <div>{plugin}</div>
      ))}
    </Layout>
  );
};

export default injectIntl(PageTestQuery);

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
