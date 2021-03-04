import meta from "./meta";
import fields from "./fields";

const relativeMedia = {
  media_folder: "",
  public_folder: "",
};

export const pagesDynamic = (customFields = []) => ({
  folder: "src/content/pages",
  ...relativeMedia,
  name: "pages",
  label: "Pages",
  create: true,
  i18n: true,
  nested: {
    depth: 100,
    summary: "{{title}}",
  },
  meta,
  fields: [...fields.groups.base, ...customFields],
});

export const pagesStatic = (files = []) => ({
  files,
  ...relativeMedia,
  name: "pages",
  label: "Pages",
  i18n: {
    structure: "single_file",
  },
  nested: {
    depth: 100,
    summary: "{{title}}",
  },
  meta,
});

export const blog = (customFields = []) => ({
  folder: "src/content/blog",
  ...relativeMedia,
  name: "blog",
  label: "Blog",
  label_singular: "Post",
  create: true,
  i18n: true,
  // path: "{{year}}--{{slug}}/index",
  // slug: "{{fields.url}}",
  identifier_field: "id",
  summary: "{{title}}",
  nested: {
    depth: 100,
    summary: "{{meta.path}}",
  },
  meta,
  fields: [...fields.groups.base, ...customFields],
});

export const settings = (customFields = []) => ({
  name: "settings",
  label: "Settings",
  label_singular: "Setting",
  // folder: "src/content/settings",
  // i18n: true,
  i18n: {
    structure: "single_file",
  },
  extension: ".yml",
  format: "yaml",
  // path: "{{year}}--{{slug}}/index",
  // media_folder: "",
  // public_folder: "",
  // slug: "{{fields.url}}",
  // identifier_field: "id",
  meta,
  files: [
    {
      file: "src/content/settings/menu.yml",
      label: "Settings",
      name: "settings",
      i18n: true,
      fields: [
        {
          label: "Test",
          name: "test",
          widget: "string",
          i18n: true,
        },

        // {
        //   label: "Header Menu",
        //   name: "settings_header_menu",
        //   widget: "relation",
        //   collection: "blog",
        //   search_fields: ["title"],
        //   value_field: "slug",
        //   display_fields: ["title"],
        //   multiple: true,
        //   i18n: true,
        // }

        // {
        //   label: "Header Menu",
        //   name: "settings_header_menu",
        //   widget: "menu",
        //   collections: ["blog"],
        //   i18n: true,
        // },
        ...customFields,
      ],
    },
  ],
});

export default {
  pagesDynamic,
  pagesStatic,
  blog,
  settings,
};
