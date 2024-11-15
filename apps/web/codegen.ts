import { CodegenConfig } from "@graphql-codegen/cli";

// const config: CodegenConfig = {
//   schema: process.env.NEXT_PUBLIC_THEGRAPH_URL,
//   documents: ["src/**/*.tsx", "src/**/*.ts"],
//   overwrite: true,

//   ignoreNoDocuments: true, // for better experience with the watcher
//   generates: {
//     "./src/gql/": {
//       preset: "client",
//       plugins: [],
//       overwrite: true,
//     },
//   },
// };

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_THEGRAPH_URL,
  documents: [
    "src/**/*.tsx",
    "src/**/*.ts",
    "src/gql/base-documents.graphql",
    "!src/gql/**/*"
  ],
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        fragmentMasking: false,
        documentMode: 'string'
      },
      config: {
        skipTypename: false,
        withHooks: true,
        withRefetchFn: true,
        preResolveTypes: true,
      }
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
};

export default config;
