import React from "react";
import Layout from "src/components/Layout";
import { t } from "@kuus/gatsby-plugin-i18n";

/**
 * I18n
 *
 * @slug {en} /hello/again
 * @slug {it} /ciao/ancora
 */

const PagesTest: Page<{}> = () => {
  return (
    <Layout>
      <h1>PagesTest</h1>
      <p>{t("PagesTestMsg")}</p>
      <code>Generated from "src/pages/test.tsx"</code>
      <small>the url is set through special comment in source .tsx file</small>
    </Layout>
  );
};

export default PagesTest;
