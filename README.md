# Gatsby starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/9d55e649-1f94-4b21-8b39-320e4c3216c8/deploy-status)](https://app.netlify.com/sites/kuus-gatsby-starter/deploys)

```bash
npm install

npm start
npm run cms
```

## Set up NetlifyCMS

The following steps-by-steps use [Netlify](https://www.netlify.com) to host the starter from GitHub. Other methods can be used to implement [NetlifyCMS](https://www.netlifycms.org).

1. Sign in or make a [Netlify](https://www.netlify.com) account
2. Make a **New site From Git** and select GitHub
3. Select the appropriate repo
4. Go to the Identity tab and **Enable Identity**
5. Click on **Settings and usage**
6. Under **Registration** check **Invite only**
7. Under **External providers**, add GitHub, Google, etc.
8. Under **Services** enable git gateway
9. Go back to the Identiy tab and invite users/yourself
10. Go to your netlify hosted website `/admin/` and login using your credentials to access the CMS

## Deploy

- [Deploy Gatsby sites throug Github pages](https://github.com/marketplace/actions/gatsby-publish)

## Using remote images from Cloudinary inside mdx with GatsbyImage

- [gatsby-transformer-cloudinary](https://www.npmjs.com/package/gatsby-transformer-cloudinary#user-content-use-images-already-on-cloudinary)
- [gatsby-plugin-remote-images](https://www.npmjs.com/package/gatsby-plugin-remote-images)
- [gatsby-remark-images-anywhere](https://www.gatsbyjs.com/plugins/gatsby-remark-images-anywhere/)
- [gatsby-plugin-remote-images-d0m3](https://www.gatsbyjs.com/plugins/gatsby-plugin-remote-images-d0m3/)
- 
## Caveats

- TODO: remove `plugins/gatsby-remark-mdx-v2-images` once mdx v2 is well supported by gatsby ecosystem, we can also remove the following deps then: `unist-util-visit`, `hast-util-from-dom` and `jsdom`, see [issue](https://github.com/mdx-js/mdx/issues/1041)
- Create a collection `shortlinks`, they can be created and assigned to content pages, we can check and prevent duplicates. The resulting file is then used to create the netlify redirects with Gatsby's `createRedirect`.
