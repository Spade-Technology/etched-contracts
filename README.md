# Local Graph Node
Note: Assumes you already have TheGraph CLI installed (`yarn global add @graphprotocol/graph-cli`), and that your base graph is configured.

1. Launch local node (hardhat,ganache,etc.)
2. Compile and deploy contract(s) (Currently part of `solidity-etched` repo)
3. Boot "graph-docker" (`https://github.com/graphprotocol/graph-node`) instance: `docker-compose up`
4. Initialize new graph instance for a **SINGLE** contract:  `graph init --protocol=ethereum --from-contract <0xADDRESS> --abi <PATH_TO_ABI> --contract-name <CONTRACT_NAME> --index-events=true --start-block=0 <OUTPUT_DIRECTORY>`
   a. Be sure to answer `no` when asked if you'd like to add another contract

5. `cd <OUTPUT_DIRECTORY>`
6. Add additional contracts as needed: `graph add <0xADDRESS> --abi <PATH_TO_ABI> --contract-name <CONTRACT_NAME> --start-block=0`
7. Deploy graph from existing folder: `yarn create-local && yarn deploy-local`
8. Use any test scripts (from `solidity-etched` or otherwise) to generate data on the local node.