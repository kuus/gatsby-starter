/**
 * @file
 * 
 * Almost opy pasted from https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-netlify-cms/src/cms-identity.js
 */

import netlifyIdentityWidget from "netlify-identity-widget"

// @ts-expect-error
window["netlifyIdentity"] = netlifyIdentityWidget

const addLoginListener = () =>
  netlifyIdentityWidget.on("login", () => {
    // TODO: make the admin url configurable?
    // document.location.href = `${__PATH_PREFIX__}/${CMS_PUBLIC_PATH}/`
    document.location.href = "/admin/"
  })

netlifyIdentityWidget.on("init", user => {
  if (!user) {
    addLoginListener()
  } else {
    netlifyIdentityWidget.on("logout", () => {
      addLoginListener()
    })
  }
})

// Boot on next tick to prevent clashes with css injected into NetlifyCMS
// preview pane.
setImmediate(() => {
  netlifyIdentityWidget.init()
})
