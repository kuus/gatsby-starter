declare type Page<T> = import("react").FC<{
  data: T;
  // intl: import("react-intl").IntlShape;
  // intl: {
  //   formatMessage: (msg?: object, dynamicData?: object) => string;
  // }
}>;
