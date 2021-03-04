// the following line is just for next.js, gatsby uses the  `manualInit: true`
// option in `gatsby-config.js`
// window.CMS_MANUAL_INIT = true;

import CMS from "netlify-cms-app";
import configurator from "./cms-netlify-config";
// import styled from "./cms-netlify/withStyledComponents";
// import PageAboutPreview from "src/templates/pages-about";
// import uploadcare from "netlify-cms-media-library-uploadcare";
// import cloudinary from "netlify-cms-media-library-cloudinary";

import it from "netlify-cms-locales/dist/esm/it";

const config = {
  backend: {
    ...configurator.backend,
    name: configurator.isLocal ? "test-repo" : "git-gateway",
  },
  i18n: {
    structure: "multiple_files",
    locales: ["en", "it"],
    default_locale: "en",
  },
  publish_mode: configurator.isLocal ? undefined : "editorial_workflow",
  local_backend: true,
  media_folder: "static/img",
  public_folder: "/img",
  collections: [
    configurator.collections.pagesDynamic(),
    configurator.collections.blog(),
    configurator.collections.settings(),
  ],
};

CMS.init({ config });
CMS.registerLocale("it", it);
// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)
// CMS.registerPreviewTemplate("about", styled(PageAboutPreview));

configurator.register(CMS);
