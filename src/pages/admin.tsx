import { graphql } from "gatsby";
import React, { useEffect } from "react";

const PageAdmin: Page<GatsbyTypes.PageAdminQuery> = ({ data }) => {
  useEffect(() => {
    import("src/components/cms").then(({ default: GatsbyNetlifyCMS }) => {
      GatsbyNetlifyCMS(data);
    });
  }, []);

  return <>
    {/* <h1>Welcome to the admin</h1> */}
  </>;
};

export const query = graphql`
  query PageAdmin {
    # i18n: sitePlugin(name: {eq: "@kuus/gatsby-plugin-i18n"}) {
    #   name
    #   pluginOptions {
    #     locales
    #     defaultLocale
    #   }
    # }
    templates: allFile(filter: {sourceInstanceName: {eq: "templates"}}) {
      edges {
        node {
          name
          relativePath
        }
      }
    }
    pages: allSitePage {
      edges {
        node {
          localisedUrlPath: path
          # templatePath: component
          # context {
          #   routeId: route
          #   urlPath: slug
          # }
        }
      }
    }
    meta: site {
      buildTime
    }
  }
`

export default PageAdmin;
