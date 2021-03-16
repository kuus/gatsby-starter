import React from "react";
import Layout from "src/components/Layout";
import { Link, _ } from "@kuus/gatsby-plugin-i18n";

const Page404 = () => {
  return (
    <Layout>
      <h1>404</h1>
      <p>{_("404message")}</p>
      <Link to="pages/home">Back home</Link>
    </Layout>
  );
};

export default Page404;
