import { Chain } from "@wagmi/core";

export const appName = 'REJUVENATE_AI';
export const communityAddr = "0x3A3bc7C19bE0381294d8E7Bd311C123b76b33982"

export const xrpEvm = {
    id: 1440002,
    name: "XRPL EVM Sidechain",
    network: "xrpEVM",
    nativeCurrency: {
      decimals: 18,
      name: "Xrp",
      symbol: "XRP",
    },
    rpcUrls: {
      public: { http: ["https://rpc-evm-sidechain.xrpl.org"] },
      default: { http: ["https://rpc-evm-sidechain.xrpl.org"] },
    },
    blockExplorers: {
      etherscan: { name: "expolorer", url: "https://evm-sidechain.xrpl.org" },
      default: { name: "expolorer", url: "https://evm-sidechain.xrpl.org" },
    },
  
  } as const satisfies Chain;