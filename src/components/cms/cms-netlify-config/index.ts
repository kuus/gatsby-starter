import { default as backend } from "./backend";
import { default as collections } from "./collections";
import { default as fields } from "./fields";
import { default as meta } from "./meta";
import { default as register } from "./register";

export default {
  isLocal: typeof process !== "undefined" && process.env.GATSBY_IS_LOCAL === "true",
  backend,
  collections,
  fields,
  meta,
  register,
};
