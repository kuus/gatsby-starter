import React from "react";
import { Link, _ } from "@kuus/gatsby-plugin-i18n";
import Layout from "src/components/Layout";

const TemplateUntranslatedLocalised = ({ i18n }) => {
  return (
    <>
      {_("UntranslatedText")}
      {` `}
      {i18n.availableIn.map((route) => (
        <Link key={`availableIn${route.to}`} to={route.to}>
          {_(`UntranslatedTextLang_${route.locale}`)}
        </Link>
      ))}
    </>
  );
}

const TemplateUntranslated = (props) => (
  <Layout {...props}>
    <TemplateUntranslatedLocalised i18n={props.pageContext.i18n} />
  </Layout>
);

export default TemplateUntranslated;
