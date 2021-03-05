import React, { FC } from "react";
import I18nSwitcher from "src/components/I18nSwitcher";

const Layout: FC<{}> = ({ children }) => {
  return (
    <>
      <I18nSwitcher />
      {children}
    </>
  );
};

export default Layout;
