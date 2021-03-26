import WidgetId from "../cms-netlify-widget-id";
// import WidgetMenu from "../cms-netlify-widget-menu";

export default function register(CMS) {
  CMS.registerWidget(WidgetId);
  // CMS.registerWidget(WidgetMenu);
  
  // TODO: on postSave I can add a call to the Gatsby Cloud webhook needed for
  // live previews, for instance I would need to call 
  // https://webhook.gatsbyjs.com/hooks/data_source/d389d126-df04-4b2d-9656-3f357d674f73
  // for `kuus/gatsby-starter`
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