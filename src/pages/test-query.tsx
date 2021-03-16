import React from "react";
import { graphql } from "gatsby";
import Layout from "src/components/Layout";

// const PageTestQuery: React.FC<{ data: GatsbyTypes.PagesTestQuery }> = ({ data }) => {
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

export default PageTestQuery;

export const query = graphql`
  query PageTestQuery {
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
