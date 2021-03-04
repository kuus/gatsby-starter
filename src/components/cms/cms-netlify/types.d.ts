import { ReactNodeLike } from "prop-types";
import { CmsFieldBase } from "netlify-cms-core";
import { Map } from "immutable";

declare module 'netlify-cms-locales/dist/esm/it';

declare type NetlifyCmsControlProps = {
  onChange: Function;
  forID: string;
  value: ReactNodeLike;
  field: Map<string, CmsFieldBase>;
  query: Function;
  queryHits: any[] | object;
  classNameWrapper: string;
  setActiveStyle: Function;
  setInactiveStyle: Function;
};
