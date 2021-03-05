import React from "react";
import { graphql } from "gatsby";
import { Link, injectIntl } from "@kuus/gatsby-plugin-i18n";
import Layout from "src/components/Layout";
import { MDXRenderer } from "src/components/MDX";

const TemplatePagesAbout: Page<GatsbyTypes.TemplatePagesAboutQuery> = ({ intl, data }) => {
  // const _ = intl.formatMessage;

  return (
    <Layout>
      {data.node?.frontmatter?.title}
      <Link to="pages/home">Back home</Link>
      <MDXRenderer>{data.node?.body}</MDXRenderer>
    </Layout>
  );
}

export default injectIntl(TemplatePagesAbout);

export const query = graphql`
  query TemplatePagesAbout($id: String!) {
    node: mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
