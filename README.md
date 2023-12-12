# Local Graph Node
Note: Assumes you already have TheGraph CLI installed (`yarn global add @graphprotocol/graph-cli`), and that your base graph is configured.

1. Launch local node (hardhat,ganache,etc.)
2. Compile and deploy contract(s) (Currently part of `solidity-etched` repo)
3. Boot "graph-docker" instance: `docker-compose up`
4. Deploy graph from existing folder: `yarn create-local && yarn deploy-local`
5. Use any test scripts (from `solidity-etched` or otherwise) to generate data on the local node.