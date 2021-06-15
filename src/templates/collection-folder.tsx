import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "src/components/MDX";
import Layout from "src/components/Layout";

const TemplateCollectionFolder: Page<GatsbyTypes.TemplateCollectionFolderQuery> = ({ data }) => {
  return (
    <Layout>
      <h1>{data.node?.frontmatter?.title}</h1>
      <MDXRenderer>{data.node?.body}</MDXRenderer>
    </Layout>
  );
};

export default TemplateCollectionFolder;

export const query = graphql`
  query TemplateCollectionFolder($id: String) {
    node: mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;
