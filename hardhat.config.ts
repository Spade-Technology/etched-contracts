import { HardhatUserConfig } from "hardhat/types";

import * as dotenv from "dotenv";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "hardhat-abi-exporter";
import * as tdly from "@tenderly/hardhat-tenderly";
tdly.setup();

// import "hardhat-contract-sizer";

dotenv.config();

interface ExtendedHardhatUserConfig extends HardhatUserConfig {
  etherscan?: {
    apiKey?: string | Record<string, string>;
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
  dodoc: any;
  [k: string]: any;
}

// List all of the files under ./contracts
const fs = require("fs");
const contracts = fs.readdirSync("./contracts").filter((file: string) => file.endsWith(".sol"));

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

    tenderly: {
      url: `https://rpc.vnet.tenderly.co/devnet/etched/${process.env.TENDERLY_KEY}`,
      accounts: [...((process.env.ETHEREUM_PRIVATE_KEYS?.split(",") as string[]) || "")],
    },

    ethereum: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [...((process.env.ETHEREUM_PRIVATE_KEYS?.split(",") as string[]) || "")],
      chainId: 1,
    },

    ropsten: {
      url: `https://rpc.ankr.com/eth_ropsten`,
      accounts: [...((process.env.ETHEREUM_PRIVATE_KEYS?.split(",") as string[]) || "")],
      chainId: 3,
    },

    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [...((process.env.ETHEREUM_PRIVATE_KEYS?.split(",") as string[]) || "")],
      chainId: 11155111,
    },
  },

  // Define the etherscan configuration
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || "",
  },

  // Define the gasReporter configuration
  gasReporter: {
    currency: "USD",
    token: "MATIC",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    // gasPrice: 80,
    outputFile: process.env.CI ? "gas-report.txt" : undefined,
    enabled: true,
    gasPriceApi: "https://api.polygonscan.com/api?module=proxy&action=eth_gasPrice",
  },

  // export ABIs to ../web/src/abi/
  abiExporter: {
    path: "../src/contracts/abi/",
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
