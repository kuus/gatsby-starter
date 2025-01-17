import { CmsCollectionFile, CmsField } from "netlify-cms-core";
import meta from "./meta";
import fields from "./fields";
import { titleCase } from "./helpers";

const relativeMedia = {
  media_folder: "",
  public_folder: "",
};

export const page = (slug: string, customFields: CmsField[] = []) => ({
  folder: `src/content/pages/${slug}`,
  ...relativeMedia,
  name: slug,
  label: titleCase(slug),
  summary: "{{title}}",
  i18n: true,
  meta,
  fields: [...fields.groups.page, ...customFields],
});

export const pageStatic = (
  slug: string,
  customFields: CmsField[] = []
): CmsCollectionFile => ({
  name: slug,
  label: titleCase(slug),
  file: `src/content/pages/${slug}/index.md`,
  fields: [...fields.groups.page, ...customFields],
  // label_singular: "",
  // description: "",
  // preview_path?: string;
  // preview_path_date_field?: string;
  i18n: true,
  ...relativeMedia,
});

export const pages = (customFields: CmsField[] = []) => ({
  folder: "src/content/pages",
  ...relativeMedia,
  name: "pages",
  label: "Pages",
  i18n: true,
  nested: {
    depth: 2,
    summary: "{{title}}",
  },
  meta,
  fields: [...fields.groups.page, ...customFields],
});

export const pagesDynamic = (customFields: CmsField[] = []) => ({
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
  fields: [...fields.groups.page, ...customFields],
});

export const pagesStatic = (files: CmsCollectionFile[] = []) => ({
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

export const blog = (customFields: CmsField[] = []) => ({
  folder: "src/content/blog",
  ...relativeMedia,
  name: "blog",
  label: "Blog",
  label_singular: "Post",
  create: true,
  i18n: true,
  // path: "{{year}}--{{slug}}/index",
  // slug: "{{fields.slug}}",
  identifier_field: "id",
  summary: "{{title}}",
  nested: {
    depth: 100,
    summary: "{{meta.path}}",
  },
  meta,
  fields: [...fields.groups.page, ...customFields],
});

export const faq = (customFields: CmsField[] = []) => ({
  folder: "src/content/faq",
  ...relativeMedia,
  name: "faq",
  label: "FAQ",
  label_singular: "Question",
  create: true,
  i18n: true,
  // path: "{{year}}--{{slug}}/index",
  // slug: "{{fields.slug}}",
  // identifier_field: "question",
  summary: "{{title}}",
  nested: {
    depth: 2,
    summary: "{{meta.path}}",
  },
  meta,
  fields: [
    ...fields.groups.base,
    fields.title,
    { ...fields.content, required: true },
    ...customFields,
  ],
});

export const settings = (customFields: CmsField[] = []) => ({
  name: "settings",
  label: "Settings",
  label_singular: "Setting",
  // i18n: true,
  i18n: {
    structure: "single_file",
  },
  extension: ".yml",
  format: "yaml",
  // path: "{{year}}--{{slug}}/index",
  // media_folder: "",
  // public_folder: "",
  // slug: "{{fields.slug}}",
  // identifier_field: "id",
  meta,
  // folder: "src/content/settings",
  files: [
    {
      file: "src/content/settings/menu.yml",
      label: "Menu",
      name: "menu",
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
  pages,
  pagesDynamic,
  page,
  pagesStatic,
  pageStatic,
  blog,
  faq,
  settings,
};
