import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
// import MarkdownFromRaw from "./fromRaw";

const globalComponents = {

}

export function MdxProvider(props) {
  return <MDXProvider components={globalComponents} {...props} />;
}

export function MdxRenderer({ children, mdxProps, ...props }) {
  return (
    <MDXRenderer {...mdxProps} {...props}>
      {children}
    </MDXRenderer>
  );
}

export default function Mdx({ children, mdxProps = {} }) {
  return (
    <MdxProvider>
      <MdxRenderer mdxProps={mdxProps}>{children}</MdxRenderer>
    </MdxProvider>
  );
}
