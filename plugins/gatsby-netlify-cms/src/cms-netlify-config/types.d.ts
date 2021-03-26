declare module "netlify-cms-core" {
  interface CmsFieldId extends CmsFieldBase {
    widget: "id";
    i18n?: "duplicate";
  };

  type CmsField = CmsField | CmsFieldId;
}
