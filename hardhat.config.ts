require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@typechain/hardhat");
require("@primitivefi/hardhat-dodoc");
require("hardhat-gas-reporter");
// import Hardhat dependencies and plugins
import { HardhatUserConfig } from "hardhat/types";

import * as dotenv from "dotenv";

dotenv.config();

interface ExtendedHardhatUserConfig extends HardhatUserConfig {
  etherscan?: {
    apiKey?: string;
  };
  gasReporter?: {
    currency?: string;
    gasPrice?: number;
    outputFile?: string;
    coinmarketcap?: string;
    token?: string;
    enabled?: boolean;
    gasPriceApi?: string;
  };
  abiExporter?: {
    path?: string;
    clear?: boolean;
    flat?: boolean;
    only?: string[];
    spacing?: number;
    runOnCompile?: boolean;
  };
  tenderly?: {
    project?: string;
    username?: string;
    privateVerification?: boolean;
  };
  dodoc: any;
}

// List all of the files under ./contracts
const fs = require("fs");
const contracts = fs
  .readdirSync("./contracts")
  .filter((file: string) => file.endsWith(".sol"));

// Define the Hardhat configuration
const config: ExtendedHardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    ethereum: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [
        ...((process.env.ETHEREUM_PRIVATE_KEY?.split(",") as string[]) || ""),
      ],
      chainId: 1,
    },

    ropsten: {
      url: `https://rpc.ankr.com/eth_ropsten`,
      accounts: [
        ...((process.env.ETHEREUM_PRIVATE_KEY?.split(",") as string[]) || ""),
      ],
      chainId: 3,
    },

    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [
        ...((process.env.ETHEREUM_PRIVATE_KEY?.split(",") as string[]) || ""),
      ],
      chainId: 11155111,
    },
  },

  // Define the etherscan configuration
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },

  // Define the gasReporter configuration
  gasReporter: {
    currency: "USD",
    token: "MATIC",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    // gasPrice: 80,
    outputFile: process.env.CI ? "gas-report.txt" : undefined,
    enabled: true,
    gasPriceApi:
      "https://api.polygonscan.com/api?module=proxy&action=eth_gasPrice",
  },

  // export ABIs to ../web/src/abi/
  abiExporter: {
    path: "../web/src/abi/",
    runOnCompile: true,
    clear: true,
    flat: true,
  },

  tenderly: {
    // Replace with project slug in Tenderly
    project: "vdao",
    // Replace with your Tenderly username
    username: "Brieyla",
    // Perform contract verification in private mode
    privateVerification: true,
  },

  dodoc: {
    runOnCompile: false,
    debugMode: false,
    // Only include contracts that start with "I" for interfaces
    include: contracts.filter((contract: string) => contract.startsWith("C")),
  },
};

export default config;
