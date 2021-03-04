import React from "react";
import { graphql } from "gatsby";
import { injectIntl } from "@kuus/gatsby-plugin-i18n";
import Layout from "src/components/Layout";

const PagesAbout: React.FC<{}> = ({ intl, data }) => {
  const _ = intl.formatMessage;
  const { title } = data.node.frontmatter;

  return (
    <Layout>
      {title}
      {data.node.body}
    </Layout>
  );
}

export default injectIntl(PagesAbout);

export const query = graphql`
  query PagesAbout($id: String!) {
    node: mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
