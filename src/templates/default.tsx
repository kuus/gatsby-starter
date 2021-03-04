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
    </Layout>
  );
}

export default injectIntl(Default);

export const query = graphql`
  query Default($id: String!) {
    node: mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
