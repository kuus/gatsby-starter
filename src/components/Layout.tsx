import React, { FC } from "react";
import { MdxProvider } from "src/components/MDX";


const Layout: FC<{}> = ({ children, mdx }) => {
  return (
    <div>
      {children}
      {mdx && <MdxProvider>{mdx}</MdxProvider>}
    </div>
  );
};

export default Layout;
