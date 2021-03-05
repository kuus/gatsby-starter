import React from "react";
import { globalHistory } from "@reach/router";
import {
  IntlContextConsumer,
  changeLocale,
  getCurrentRoute,
  FormattedMessage,
} from "@kuus/gatsby-plugin-i18n";

const I18nSwitcher = React.forwardRef((props, ref) => {
  const { location } = globalHistory;

  return (
    <nav>
      {props.children}
      <IntlContextConsumer>
        {({ locales, currentLocale }) =>
          locales.map((locale) => (
            <a
              key={locale}
              onClick={() =>
                changeLocale(locale, getCurrentRoute(location, locale))
              }
              style={{
                fontWeight: currentLocale === locale ? 600 : 300,
              }}
            >
              <FormattedMessage id={`I18nSwitcher_${locale}`} />{' • '}
            </a>
          ))
        }
      </IntlContextConsumer>
    </nav>
  );
});

export default I18nSwitcher;
