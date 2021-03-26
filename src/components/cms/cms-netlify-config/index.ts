import { default as backend } from "./backend";
import { default as collections } from "./collections";
import { default as fields } from "./fields";
import { default as meta } from "./meta";
import { default as register } from "./register";

// class NetlifyConfigurator {
//   constructor(graphqlData) {
//     this.graphqlData = graphqlData;
//   }
// }

export default {
  isLocal: process.env.NODE_ENV === "development",
  backend,
  collections,
  fields,
  meta,
  register,
};
