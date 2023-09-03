import { configureChains, createConfig, sepolia } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

export const currentChainClient = sepolia;
export const { chains, publicClient, webSocketPublicClient } = configureChains([currentChainClient], [publicProvider()]);

export const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});
