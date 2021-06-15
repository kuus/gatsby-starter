import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "src/components/MDX";
import Layout from "src/components/Layout";

const TemplateCollectionFile: Page<GatsbyTypes.TemplateCollectionFileQuery> = ({ data }) => {
  console.log(data.node)
  return (
    <Layout>
      <h1>{data.node?.frontmatter.title}</h1>
      {/* <MDXRenderer>{data.node?.body}</MDXRenderer> */}
    </Layout>
  );
};

export default TemplateCollectionFile;

export const query = graphql`
  # query TemplateCollectionFile($id: String, $locale: String) {
  query TemplateCollectionFile($id: String) {
    node: mdx(id: { eq: $id }) {
      # frontmatter(locale: $locale) {
      #   title
      # }
      # bodyl(locale: $locale)
      fileAbsolutePath
    }
  }
`;
