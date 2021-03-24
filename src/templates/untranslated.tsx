import React, { FC } from "react";
import { useI18n, Link, t } from "@kuus/gatsby-plugin-i18n";
import Layout from "src/components/Layout";

const TemplateUntranslated: FC<{}> = () => {
  const i18n = useI18n();

  return (
    <Layout>
      {t("UntranslatedText")}
      {` `}
      {i18n.availableIn.map((route) => (
        <Link key={route.to} to={route.to}>
          {t(`UntranslatedTextLang_${route.locale}`)}
        </Link>
      ))}
    </Layout>
  );
};

export default TemplateUntranslated;
