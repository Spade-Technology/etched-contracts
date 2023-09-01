# enviroment variable NEXT_PUBLIC_THEGRAPH_URL
GRAPHQL_URL=$NEXT_PUBLIC_THEGRAPH_URL



echo "Downloading schema from $GRAPHQL_URL"

get-graphql-schema $GRAPHQL_URL > schema.graphql

echo "Generating types"

npx @gqty/cli --target="src/gqty/index.ts" --install --react schema.graphql