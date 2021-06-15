// FIXME: temp, for local dev? not sure if needed
declare module "@kuus/gatsby-plugin-i18n";

declare type Page<Data = {}, Context = {}> = import("gatsby").PageProps<
  Data,
  Context &
    import("@kuus/gatsby-plugin-i18n/src/types").GatsbyI18n.PageContext & {
      intl: import("react-intl").IntlShape;
    }
>;
// intl: import("react-intl").IntlShape;
// intl: {
//   formatMessage: (msg?: object, dynamicData?: object) => string;
// }
