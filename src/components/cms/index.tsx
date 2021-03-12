// the following line is just for next.js, gatsby uses the  `manualInit: true`
// option in `gatsby-config.js`
// window.CMS_MANUAL_INIT = true;

// import "netlify-cms-core"
import CMS from "netlify-cms-app";
import configurator from "./cms-netlify-config";
// import styled from "./cms-netlify/withStyledComponents";
// import PageAboutPreview from "src/templates/pages-about";
// import uploadcare from "netlify-cms-media-library-uploadcare";
// import cloudinary from "netlify-cms-media-library-cloudinary";

import it from "netlify-cms-locales/dist/esm/it";
// import nl from "netlify-cms-locales/dist/esm/nl";

const getTemplatesFromGatsby = ({ templates }: GatsbyTypes.PageAdminQuery) => {
  return templates.edges.map(({ node }) => node.name);
}

const getLocalesFromGatsby = ({ i18n }: GatsbyTypes.PageAdminQuery) => {
  return i18n.pluginOptions;
}

export default function GatsbyNetlifyCMS(graphqlData: GatsbyTypes.PageAdminQuery) {
  const { locales, defaultLocale } = getLocalesFromGatsby(graphqlData);
  const templates = getTemplatesFromGatsby(graphqlData);

  const config = {
    backend: {
      ...configurator.backend,
      name: "test-repo",
      // name: configurator.isLocal ? "test-repo" : "git-gateway",
    },
    i18n: {
      structure: "multiple_files",
      locales,
      default_locale: defaultLocale,
    },
    // publish_mode: "editorial_workflow",
    local_backend: true,
    media_folder: "static/img",
    public_folder: "/img",
    collections: [
      // configurator.collections.page("about"),
      // configurator.collections.page("home"),
      // configurator.collections.pages(),
      configurator.collections.pagesStatic([
        configurator.collections.pageStatic("privacy-policy", [{
          widget: "string",
          label: "Test additional field",
          name: "test_additional"
        }]),
      ]),
      configurator.collections.blog(),
      configurator.collections.faq(),
      configurator.collections.settings(),
    ],
  };
  
  CMS.init({ config });
  CMS.registerLocale("it", it);
  // CMS.registerLocale("nl", nl);
  // CMS.registerMediaLibrary(uploadcare)
  // CMS.registerMediaLibrary(cloudinary)
  // CMS.registerPreviewTemplate("about", styled(PageAboutPreview));
  
  configurator.register(CMS);
}
