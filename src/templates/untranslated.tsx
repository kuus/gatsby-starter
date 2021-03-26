import React, { FC } from "react";
import { useI18n, Link, t } from "@kuus/gatsby-plugin-i18n";
import Layout from "src/components/Layout";

const TemplateUntranslated: FC<{}> = () => {
  const i18n = useI18n();

  return (
    <Layout>
      {t("Untranslated.text")}
      {` `}
      {i18n.translatedIn.map(({ locale, url }) => (
        <Link key={url} to={url}>
          {t(`Untranslated.textLang_${locale}`)}
        </Link>
      ))}
    </Layout>
  );
};

export default TemplateUntranslated;
