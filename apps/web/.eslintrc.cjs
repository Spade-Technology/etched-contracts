/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,

    sourceType: "module",
  },
  extends: ["plugin:@next/next/recommended"],
  ignorePatterns: ["node_modules/", "**/node_modules/", "/**/node_modules/*", "out/", "dist/", "build/"],
};

module.exports = config;
