import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { MDXProvider } from "src/components/MDX";
import theme from "src/components/theme";

const Root: FC<{}> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider>{children}</MDXProvider>
    </ThemeProvider>
  );
};

export default Root;
