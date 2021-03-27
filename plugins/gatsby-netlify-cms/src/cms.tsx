import CMS from "netlify-cms-app";
import configurator from "./cms-netlify-config";
import "./identity";
import merge from "ts-deepmerge";
import cloudinary from "netlify-cms-media-library-cloudinary";
import { CmsConfig } from "netlify-cms-core";
import it from "netlify-cms-locales/dist/esm/it";
// import PageAboutPreview from "src/templates/pages-about";
// import styled from "./cms-netlify/withStyledComponents";

const getTemplatesFromGatsby = ({ templates }: GatsbyTypes.PageAdminQuery) => {
  return templates.nodes.map((node) => node.name);
};

export const GatsbyNetlifyCMS = (graphqlData: any, configOverride: Partial<CmsConfig>) => {
  const { locales, defaultLocale } = graphqlData.i18N;
  // const templates = getTemplatesFromGatsby(graphqlData);

  const config = merge({
    backend: {
      ...configurator.backend,
      // repo: "kuus/gatsby-starter",
      // name: "test-repo",
      name: configurator.isLocal ? "test-repo" : "git-gateway",
    },
    i18n: {
      structure: "multiple_files",
      locales,
      default_locale: defaultLocale,
    },
    // publish_mode: "editorial_workflow",
    media_library: {
      name: "cloudinary",
      config: {
        cloud_name: process.env.GATSBY_CLOUDINARY_CLOUD_NAME,
        api_key: process.env.GATSBY_CLOUDINARY_API_KEY,
      },
    },
    local_backend: !!configurator.isLocal,
    media_folder: "static/uploads",
    public_folder: "/uploads",
    collections: [
      configurator.collections.page("about"),
      configurator.collections.page("home"),
      configurator.collections.page("privacy-policy"),
      // configurator.collections.pages(),
      // configurator.collections.pagesStatic([
      //   // configurator.collections.pageStatic("home"),
      //   // configurator.collections.pageStatic("about"),
      //   configurator.collections.pageStatic("privacy-policy", [
      //     {
      //       widget: "string",
      //       label: "Test additional field",
      //       name: "test_additional",
      //     },
      //   ]),
      // ]),
      configurator.collections.blog(),
      configurator.collections.faq(),
      configurator.collections.settings(),
    ],
  }, configOverride);

  CMS.init({ config });

  CMS.registerLocale("it", it);
  // dynamically load locales
  locales.forEach(locale => {
    // const localeData = require(`netlify-cms-locales/dist/esm/${locale}`);
    // CMS.registerLocale(locale, localeData);
  });

  // load cloudinary only if required, by default it is
  if (config.media_library.name === "cloudinary") {
    // const cloudinary = require("netlify-cms-media-library-cloudinary");
    CMS.registerMediaLibrary(cloudinary);
  }

  // CMS.registerPreviewTemplate("about", styled(PageAboutPreview));
  configurator.register(CMS);
}
