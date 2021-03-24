// FIXME: temp, for local dev? not sure if needed
declare module "@kuus/gatsby-plugin-i18n";

declare type Page<T> = import("react").FC<{
  data: T;
  // intl: import("react-intl").IntlShape;
  // intl: {
  //   formatMessage: (msg?: object, dynamicData?: object) => string;
  // }
}>;
