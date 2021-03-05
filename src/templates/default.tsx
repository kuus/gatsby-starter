import React from "react";
import { graphql } from "gatsby";
import { Link, injectIntl } from "@kuus/gatsby-plugin-i18n";
import Layout from "src/components/Layout";
import { MDXRenderer } from "src/components/MDX";

const TemplateDefault: Page<GatsbyTypes.TemplateDefaultQuery> = ({ intl, data }) => {
  // const _ = intl.formatMessage;

  return (
    <Layout>
      {data.node?.frontmatter?.title}
      <Link to="pages/about">About</Link>
      <MDXRenderer>{data.node?.body}</MDXRenderer>
    </Layout>
  );
}

export default injectIntl(TemplateDefault);

export const query = graphql`
  query TemplateDefault($id: String!, $locale: String!) {
    node: mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
    allMdx(filter: {
      fileAbsolutePath: { glob: "**/content/blog/**/*"}
      fields: { locale: { eq: $locale } }
    }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            route
          }
        }
      }
    }
  }
`;
