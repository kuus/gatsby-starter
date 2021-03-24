import React from "react";
import { graphql } from "gatsby";
import { Link } from "@kuus/gatsby-plugin-i18n";
import { MDXRenderer } from "src/components/MDX";
import Layout from "src/components/Layout";
import AllRoutes from "src/components/AllRoutes";

const TemplateDefault: Page<GatsbyTypes.TemplateDefaultQuery> = ({ data }) => {
  return (
    <Layout>
      <h1>{data.node?.frontmatter?.title}</h1>
      <AllRoutes data={data} />
      <p>
        <Link route="test">Test "static" Link (localised)</Link>
      </p>
      <p>
      </p>
      <MDXRenderer>{data.node?.body}</MDXRenderer>
    </Layout>
  );
};

export default TemplateDefault;

export const query = graphql`
  query TemplateDefault($id: String, $locale: String) {
    node: mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
    allFile(
      filter: { route: { ne: null }, locales: { eq: $locale } }
    ) {
      nodes {
        id
        url(locale: $locale)
      }
    }
    allMdx(
      filter: { route: { ne: null }, locales: { eq: $locale } }
    ) {
      nodes {
        id
        url(locale: $locale)
        frontmatter {
          title
        }
      }
    }
  }
`;
