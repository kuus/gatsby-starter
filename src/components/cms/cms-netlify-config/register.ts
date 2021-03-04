import WidgetId from "../cms-netlify-widget-id";
// import WidgetMenu from "../cms-netlify-widget-menu";

export default function register(CMS) {
  CMS.registerWidget(WidgetId);
  // CMS.registerWidget(WidgetMenu);
  
  CMS.registerEventListener(
    {
      name: "preSave",
      handler: ({ entry }) => {
        // FIXME: this does not update the non-default localised version of the same
        // entry, @see https://github.com/netlify/netlify-cms/issues/4729
        // consider also that with Gatsby we can retrieve the last_edit info from
        // the File node
        return entry.get("data").set("last_edit", new Date());
      },
    },
    {}
  ); 
}