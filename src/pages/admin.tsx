import { graphql } from "gatsby";
import React, { useEffect } from "react";

const PagesAdmin: Page<GatsbyTypes.PagesAdminQuery> = ({ data }) => {
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
  query PagesAdmin {
    i18N {
      locales
      defaultLocale
      hideDefaultLocaleInUrl
    }
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

export default PagesAdmin;
