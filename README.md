
## Gatsby

### Resources

- [How to official guides](https://www.gatsbyjs.com/docs/how-to/)

### Set up NetlifyCMS

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

### Configuring NetlifyCMS

In `/static/admin/confiq.yml`, the CMS can be configured.

### Deploy

- [Deploy Gatsby sites throug Github pages](https://github.com/marketplace/actions/gatsby-publish)

### Caveats

- TODO: remove `plugins/gatsby-remark-mdx-v2-images` once mdx v2 is well supported by gatsby ecosystem, we can also remove the following deps then: `unist-util-visit`, `hast-util-from-dom` and `jsdom` @see https://github.com/mdx-js/mdx/issues/1041
