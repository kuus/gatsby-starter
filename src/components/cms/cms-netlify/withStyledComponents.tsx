/**
 * @file
 *
 * @see https://github.com/Gerschtli/crossfitamgruen/blob/master/src/util/withStyledComponentsRendered.js
 */
import React, { useEffect, useState, FC } from "react";
import { StyleSheetManager } from "styled-components";

const StyleInjector: FC<{}> = ({ children }) => {
  const [iframeRef, setIframeRef] = useState<HTMLHeadElement | null>(null);

  useEffect(() => {
    const iframe = document.getElementsByTagName("iframe")[0];
    const iframeHeadElement = iframe?.contentDocument?.head || null;
    setIframeRef(iframeHeadElement);
  }, []);

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>
    )
  );
};

export default function withStyledComponentsRendered<Props>(
  Component: React.FunctionComponent<Props>
) {
  return (props: Props) => (
    <StyleInjector>
      <Component {...props} />
    </StyleInjector>
  );
}
