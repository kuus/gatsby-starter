import React from "react";
import { graphql } from "gatsby";
import { Link, injectIntl } from "@kuus/gatsby-plugin-i18n";
import Layout from "src/components/Layout";
import { MDXRenderer } from "src/components/MDX";
import Members from "src/components/Members";

const TemplatePagesHome: Page<GatsbyTypes.TemplatePagesHomeQuery> = ({ intl, data }) => {
  // const _ = intl.formatMessage;

  return (
    <Layout>
      {data.node?.frontmatter?.title}
      <Link to="pages/home">Back home</Link>
      <MDXRenderer>{data.node?.body}</MDXRenderer>
      <Members data={data.members} />
    </Layout>
  );
}

export default injectIntl(TemplatePagesHome);

export const query = graphql`
  query TemplatePagesHome($id: String!) {
    node: mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
    members: allMdx(filter: {fileAbsolutePath: {glob: "**/members/**/*"}}) {
      edges {
        node {
          slug
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
