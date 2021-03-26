import { graphql } from "gatsby";
import React, { useEffect } from "react";

const PagesAdmin: Page<GatsbyTypes.PagesAdminQuery> = ({ data }) => {
  useEffect(() => {
    // TODO: put the packagae on npm at some point
    import("../../plugins/gatsby-netlify-cms/src/cms").then(({ default: GatsbyNetlifyCMS }) => {
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
      nodes {
        name
        relativePath
      }
    }
    pages: allSitePage {
      nodes {
        localisedUrlPath: path
        # templatePath: component
        # context {
        #   routeId: route
        #   urlPath: slug
        # }
      }
    }
    meta: site {
      buildTime
    }
  }
`

export default PagesAdmin;
