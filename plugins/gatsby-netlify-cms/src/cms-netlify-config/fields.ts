import { CmsField, CmsFieldId } from "netlify-cms-core";
// basic-entry

export const template: CmsField = {
  label: "Template",
  name: "template",
  widget: "hidden",
  default: "default",
  i18n: "duplicate",
  required: false
};

export const id: CmsField = {
  label: "ID",
  name: "id",
  widget: "id",
  i18n: "duplicate",
  // hidden: true // @see https://github.com/netlify/netlify-cms/issues/1975
};

export const slug: CmsField = {
  label: "Slug",
  name: "slug",
  widget: "string",
  // TODO: do a mechanism to ensure slug uniqueness
  hint: "this will be the full relative URL in your production website, it must be unique",
  i18n: true,
};

export const title: CmsField = {
  label: "Title",
  name: "title",
  widget: "string",
  i18n: true,
};

export const content: CmsField = {
  label: "Content",
  name: "body",
  widget: "markdown",
  i18n: true,
  required: false,
};

export const lastEdit: CmsField = {
  label: "Last update",
  name: "last_edit",
  widget: "hidden",
  required: false,
};

export const seo: CmsField = {
  label: "SEO",
  name: "seo",
  widget: "object",
  i18n: true,
  fields: [
    {
      label: "Exclude from sitemap.xml",
      name: "isExcludedFromSitemap",
      widget: "boolean",
      i18n: "duplicate",
      default: false,
      required: false
    },
    {
      label: "meta title",
      name: "title",
      widget: "string",
      i18n: true,
      hint: "max length is 60 characters",
      filter: { field: "isExcludedFromSitemap", value: false },
      pattern: [/^.{0,60}$/, "max length is 60 characters"],
      // TODO: make default value autogenerated from title
      required: false
    }, {
      label: "meta description",
      name: "description",
      widget: "string",
      i18n: true,
      hint: "max length is 155 characters",
      filter: { field: "isExcludedFromSitemap", value: true },
      pattern: [/^.{0,155}$/, "max length is 155 characters"],
      // TODO: make default value autogenerated from content or subtitle
      required: false
    }, 
  ],
};

export const cover: CmsField = {
  label: "Cover Image",
  name: "cover",
  widget: "object",
  required: false,
  i18n: true,
  fields: [
    {
      label: "Image",
      name: "image",
      widget: "image",
      required: false,
      i18n: "duplicate",
      media_library: {
        config: {
          multiple: true,
        },
      },
    },
    {
      label: "Caption",
      name: "caption",
      widget: "string",
      required: false,
      i18n: true
    },
  ],
};

const groupsBase = [
  id,
  lastEdit,
]

const groupsPage = [
  ...groupsBase,
  slug,
  template,
  title,
  content,
  seo,
]

export default {
  groups: {
    base: groupsBase,
    page: groupsPage
  },
  template,
  id,
  slug,
  title,
  content,
  lastEdit,
  seo,
  cover,
}