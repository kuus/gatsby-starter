import React, { FC } from "react";
import { MDXProvider as Provider } from "@mdx-js/react";
import { MDXRenderer as Renderer } from "gatsby-plugin-mdx";

const globalComponents = {
  // a: AnchorSmart,
};

type MDXRendererProps = {
  mdxProps?: any;
};

export const MDXProvider = (props) => {
  return <Provider mcomponents={globalComponents} {...props} />;
};

export const MDXRenderer: FC<MDXRendererProps> = ({
  children,
  mdxProps = {},
  ...props
}) => {
  return (
    <Renderer {...mdxProps} {...props}>
      {children}
    </Renderer>
  );
};

export const MDX: FC<MDXRendererProps> = ({ children, mdxProps = {} }) => {
  return (
    <MDXProvider>
      <MDXRenderer mdxProps={mdxProps}>{children}</MDXRenderer>
    </MDXProvider>
  );
};

export default MDX;
