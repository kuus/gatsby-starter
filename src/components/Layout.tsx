import React, { FC } from "react";
import {
  I18nSwitch,
  I18nSwitchLinks,
  I18nSwitchSelect,
} from "@kuus/gatsby-plugin-i18n";

const Layout: FC<{}> = ({ children }) => {
  return (
    <>
      <nav>
        {"I18nSwitch: "}
        <span>
          <code>Span:</code> <I18nSwitch /> ...
        </span>
        <span>
          <code>Links:</code> <I18nSwitchLinks /> ...
        </span>
        <span>
          <code>Select:</code> <I18nSwitchSelect />
        </span>
      </nav>
      {children}
    </>
  );
};

export default Layout;
