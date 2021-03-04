import React from "react";
import { graphql } from "gatsby";
import { Link, injectIntl } from "@kuus/gatsby-plugin-i18n";
import Layout from "src/components/Layout";
import { MDXRenderer } from "src/components/MDX";

const Default: React.FC<{}> = ({ intl, data }) => {
  const _ = intl.formatMessage;
  const { title } = data.node.frontmatter;

  return (
    <Layout>
      {title}
      <Link to="/pages/about/">About</Link>
      <MDXRenderer>{data.node.body}</MDXRenderer>
      {data.allMdx.edges.map(({node}) => <Link to={node.fields.route}>{node.frontmatter.title}</Link>)}
    </Layout>
  );
}

export default injectIntl(Default);

export const query = graphql`
  query Default($id: String!, $lang: String!) {
    node: mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
    allMdx(filter: {
      fileAbsolutePath: {glob: "**/content/blog/**/*"}
      fields: { lang: { eq: $lang } }
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
