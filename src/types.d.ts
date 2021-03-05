declare type Page<T> = import("react").FC<{
  data: T;
  intl: {
    formatMessage: (msg?: object, dynamicData?: object) => string;
  };
}>;
