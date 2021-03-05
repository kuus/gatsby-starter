// the following line is just for next.js, gatsby uses the  `manualInit: true`
// option in `gatsby-config.js`
// window.CMS_MANUAL_INIT = true;

import CMS from "netlify-cms-app";
import configurator from "./cms-netlify-config";
// import styled from "./cms-netlify/withStyledComponents";
// import PageAboutPreview from "src/templates/default";
// import uploadcare from "netlify-cms-media-library-uploadcare";
// import cloudinary from "netlify-cms-media-library-cloudinary";

import it from "netlify-cms-locales/dist/esm/it";
import nl from "netlify-cms-locales/dist/esm/nl";

const config = {
  backend: {
    ...configurator.backend,
    name: "test-repo",
    // name: configurator.isLocal ? "test-repo" : "git-gateway",
  },
  i18n: {
    structure: "multiple_files",
    locales: ["en", "it", "nl"],
    default_locale: "en",
  },
  // publish_mode: "editorial_workflow",
  local_backend: true,
  media_folder: "static/img",
  public_folder: "/img",
  collections: [
    // configurator.collections.page("about"),
    // configurator.collections.page("home"),
    configurator.collections.pages(),
    configurator.collections.blog(),
    configurator.collections.settings(),
    {
      folder: "src/content/members",
      ...configurator.collections.relativeMedia,
      name: "members",
      label: "Members",
      label_singular: "Member",
      create: true,
      i18n: true,
      // identifier_field: "id",
      nested: {
        depth: 2,
        summary: "{{meta.path}}",
      },
      meta: configurator.meta,
      summary: "{{title}}",
      fields: [
        configurator.fields.template,
        configurator.fields.id,
        {
          label: "Title",
          name: "title",
          widget: "string",
          i18n: "duplicate"
        },
        {
          label: "Logos",
          name: "logos",
          widget: "object",
          i18n: true,
          fields: [
            {
              label: "Logo white",
              name: "logo-white",
              widget: "image",
              i18n: "duplicate",
            },
            {
              label: "Logo",
              name: "logo",
              widget: "image",
              i18n: "duplicate",
            },
            // {
            //   label: "Caption",
            //   name: "caption",
            //   widget: "string",
            //   required: false,
            //   i18n: true
            // },
          ],
        }
      ],
    }
  ],
};

CMS.init({ config });
CMS.registerLocale("it", it);
CMS.registerLocale("nl", nl);
// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)
// CMS.registerPreviewTemplate("about", styled(PageAboutPreview));

configurator.register(CMS);
