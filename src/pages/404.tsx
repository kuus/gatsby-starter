import React from "react";
import Layout from "src/components/Layout";
import { Link, t } from "@kuus/gatsby-plugin-i18n";

const Pages404: Page<{}> = () => {
  return (
    <Layout>
      <h1>404</h1>
      <p>{t("404.message")}</p>
      <Link route="pages/home">Back home</Link>
    </Layout>
  );
};

export default Pages404;
