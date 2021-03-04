import React from "react";
import { graphql } from "gatsby";
import { injectIntl } from "@kuus/gatsby-plugin-i18n";
import Layout from "src/components/Layout";

const Default: React.FC<{}> = ({ intl, data }) => {
  const _ = intl.formatMessage;
  const { title } = data.node.frontmatter;

  return (
    <Layout>
      {title}
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
