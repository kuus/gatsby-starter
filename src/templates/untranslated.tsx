import React from "react";
import { Link, injectIntl } from "@kuus/gatsby-plugin-i18n";
import Layout from "src/components/Layout";

const Template = ({ i18n, intl }) => {
  const _ = intl.formatMessage;

  return (
    <>
      {_({ id: "UntranslatedText" })}
      {` `}
      {i18n.availableIn.map((route) => (
        <Link key={`availableIn${route.to}`} to={route.to}>
          {_({ id: `UntranslatedTextLang_${route.lang}` })}
        </Link>
      ))}
    </>
  );
}

const LocalisedTemplate = injectIntl(Template);

const Untranslated = (props) => (
  <Layout {...props}>
    <LocalisedTemplate i18n={props.pageContext.i18n} />
  </Layout>
);

export default Untranslated;
