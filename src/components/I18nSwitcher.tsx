import React from "react";
import { globalHistory } from "@reach/router";
import {
  useI18n,
  changeLocale,
  getCurrentRoute,
  FormattedMessage,
} from "@kuus/gatsby-plugin-i18n";

const I18nSwitcher = React.forwardRef((props, ref) => {
  const { location } = globalHistory;
  const { locales, currentLocale } = useI18n();

  return (
    <nav>
      {props.children}
      {locales.map((locale) => (
        <a
          key={locale}
          onClick={() =>
            changeLocale(locale, getCurrentRoute(location, locale))
          }
          style={{
            fontWeight: currentLocale === locale ? 600 : 300,
          }}
        >
          <FormattedMessage id={`I18nSwitcher_${locale}`} />
          {" • "}
        </a>
      ))}
    </nav>
  );
});

export default I18nSwitcher;
