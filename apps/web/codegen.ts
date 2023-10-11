import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_THEGRAPH_URL,
  documents: ["src/**/*.tsx"],
  overwrite: true,

  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
      overwrite: true,
    },
  },
};

export default config;
