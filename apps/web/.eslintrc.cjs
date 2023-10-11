/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,

    sourceType: "module",
  },
  // plugins: ["@typescript-eslint"],
  // extends: [
  //   "next/core-web-vitals",
  //   "plugin:@typescript-eslint/recommended-type-checked",
  //   "plugin:@typescript-eslint/stylistic-type-checked",
  // ],
  ignorePatterns: ["node_modules/", "**/node_modules/", "/**/node_modules/*", "out/", "dist/", "build/"],
};

module.exports = config;
