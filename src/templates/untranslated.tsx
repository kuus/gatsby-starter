import React from "react";
import { Link, injectIntl } from "@kuus/gatsby-plugin-i18n";
import Layout from "src/components/Layout";

const TemplateUntranslatedBare = ({ i18n, intl }) => {
  const _ = intl.formatMessage;

  return (
    <>
      {_({ id: "UntranslatedText" })}
      {` `}
      {i18n.availableIn.map((route) => (
        <Link key={`availableIn${route.to}`} to={route.to}>
          {_({ id: `UntranslatedTextLang_${route.locale}` })}
        </Link>
      ))}
    </>
  );
}

const TemplateUntranslatedLocalised = injectIntl(TemplateUntranslatedBare);

const TemplateUntranslated = (props) => (
  <Layout {...props}>
    <TemplateUntranslatedLocalised i18n={props.pageContext.i18n} />
  </Layout>
);

export default TemplateUntranslated;
