// import "typeface-custom";
import React from "react";
import Root from "./src/components/Root";

export const wrapRootElement = ({ element }) => {
  return <Root>{element}</Root>;
};
